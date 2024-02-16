// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Cricket is ERC721Enumerable, ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    uint256 private _commonCount;
    uint256 private _uncommonCount;
    uint256 private _rareCount;
    uint256 private _epicCount;
    uint256 private _legendCount;

    Counters.Counter private _eggIds;
    uint256 private _eggPrice = 0.01 ether;
    uint256 private remainEggForSale = 500;
    uint256 private maxEggSupply = 9999;

    address payable stakeContractAddr;

    address owner;

    //Mapping
    mapping(uint256 => string) private _tokenURI;

    mapping(uint256 => uint256) private _tokenType;

    mapping(address => uint256) private _discountValue;

    mapping(uint256 => address) private _eggOwner;

    mapping(address => uint256) private _balanceOfEgg;

    // Mapping from token ID to index of the owner tokens list
    mapping(uint256 => uint256) private _ownedEggsIndex;

    // Mapping from owner to list of owned egg IDs
    mapping(address => mapping(uint256 => uint256)) private _ownedEggs;

    constructor() ERC721("NFT Cricket Token", "CWT") {
        owner = msg.sender;
        // _eggAddr = eggContractAddr;
        stakeContractAddr = payable(msg.sender); //Init stake contract addr

        _commonCount = 6199;
        _uncommonCount = 2500;
        _rareCount = 1000;
        _epicCount = 290;
        _legendCount = 10;
        _tokenIds.increment();
    }

    event buyEggEvent(address indexed buyer, uint256 indexed tokenId);

    function buyEgg() public payable nonReentrant {
        uint256 eggTotal = _eggIds.current();
        require(eggTotal <= maxEggSupply, "Max supply has reached limit");

        require(
            remainEggForSale > 0,
            "This sale round has reached the quantity purchase limit"
        );

        uint256 _price = (_eggPrice * (100 - _discountValue[msg.sender])) / 100;

        require(msg.value >= _price, "Not enough charge");

        _eggIds.increment();
        uint256 newEggId = _eggIds.current();
        _mintEgg(msg.sender, newEggId);
        remainEggForSale -= 1;

        payable(stakeContractAddr).transfer(_price);

        if (msg.value > _price) {
            uint256 refund = msg.value - _price;
            payable(msg.sender).transfer(refund);
        }

        emit buyEggEvent(msg.sender, newEggId);
    }

    function getPrice() public view returns (uint256) {
        return (_eggPrice * (100 - _discountValue[msg.sender])) / 100;
    }

    function _mintEgg(address addr, uint256 eggId) private {
        _addEggToOwner(addr, eggId);
        // _balanceOfEgg[addr] += 1;
    }

    function _addEggToOwner(address addr, uint256 eggId) private {
        uint256 newEggIndex = _balanceOfEgg[addr];
        _ownedEggsIndex[eggId] = newEggIndex;
        _ownedEggs[addr][newEggIndex] = eggId;
        _balanceOfEgg[addr] += 1;
        _eggOwner[eggId] = addr;
    }

    event transferEggEvent(uint256 indexed eggId);

    function transferEgg(address to, uint256 eggId) public nonReentrant {
        uint256 eggIndex = _ownedEggsIndex[eggId];
        require(eggId == _ownedEggs[msg.sender][eggIndex], "Only Owner");

        _removeEggFromOwner(msg.sender, eggId);

        _addEggToOwner(to, eggId);

        // _eggOwner[eggId] = to;
        //  _balanceOfEgg[msg.sender] -= 1;
        // _removeEggFromOwner(msg.sender, eggId);

        emit transferEggEvent(eggId);
    }

    event setEggDiscountEvent(address walletAddr, uint256 discount);

    function setDiscountEgg(address addr, uint256 discount) public onlyOwner {
        require(discount <= 80, "Discount is not greater 80%");

        _discountValue[addr] = discount;

        emit setEggDiscountEvent(addr, discount);
    }

    event removeDiscountEvent(address walletAddr);

    function removeDiscount(address walletAddr) public onlyOwner {
        _discountValue[walletAddr] = 0;
        emit removeDiscountEvent(walletAddr);
    }

    function getDiscountValue(address addr) public view returns (uint256) {
        return _discountValue[addr];
    }

    event setAmountEggForSaleEvent(uint256 amount);

    function setAmountForSale(uint256 amount) public onlyOwner {
        uint256 eggTotal = _eggIds.current();
        uint256 eggRemain = maxEggSupply - eggTotal;

        require(amount <= eggRemain, "Egg not enough");

        remainEggForSale = amount;
        emit setAmountEggForSaleEvent(amount);
    }

    event mintCricketEvent(
        address indexed owner,
        uint256 indexed tokenId,
        uint256 tokenType
    );

    //

    function openEgg(uint256 eggId) public nonReentrant {
        // require(msg.sender == ownerOfEgg(eggId), "Only owner");
        uint256 eggIndex = _ownedEggsIndex[eggId];
        require(eggId == _ownedEggs[msg.sender][eggIndex], "Only Owner");

        uint256 newId = _tokenIds.current();

        uint256 currentLength = _commonCount +
            _uncommonCount +
            _rareCount +
            _epicCount +
            _legendCount;

        require(currentLength > 0, "finished");

        uint256 randomIndex = (uint256(
            keccak256(
                abi.encodePacked(block.timestamp, msg.sender, currentLength)
            )
        ) % currentLength) + 1;

        if (randomIndex <= _commonCount) {
            _tokenType[newId] = 1;
            _commonCount -= 1;
        } else if (randomIndex <= _uncommonCount + _commonCount) {
            _tokenType[newId] = 2;
            _uncommonCount -= 1;
        } else if (randomIndex <= _rareCount + _uncommonCount + _commonCount) {
            _tokenType[newId] = 3;
            _rareCount -= 1;
        } else if (
            randomIndex <=
            _epicCount + _rareCount + _uncommonCount + _commonCount
        ) {
            _tokenType[newId] = 4;
            _epicCount -= 1;
        } else {
            _tokenType[newId] = 5;
            _legendCount -= 1;
        }

        _safeMint(msg.sender, newId);
        _tokenIds.increment();

        // _balanceOfEgg[msg.sender] -= 1;
        _removeEggFromOwner(msg.sender, eggId);

        emit mintCricketEvent(msg.sender, newId, _tokenType[newId]);
    }

    function _removeEggFromOwner(address addr, uint256 eggId) private {
        _balanceOfEgg[msg.sender] -= 1;
        uint256 lastEggIndex = _balanceOfEgg[addr];
        uint256 eggIndex = _ownedEggsIndex[eggId];
        if (eggIndex != lastEggIndex) {
            uint256 lastEggId = _ownedEggs[addr][lastEggIndex];
            _ownedEggs[addr][eggIndex] = lastEggId; //Move the last egg to the slot of the to-delete egg
            _ownedEggsIndex[lastEggId] = eggIndex; //Update the moved egg's index
        }
        delete _ownedEggsIndex[eggId];
        delete _ownedEggs[addr][lastEggIndex];
        delete _eggOwner[eggId];
    }

    function ownerOfEgg(uint256 eggId) public view returns (address) {
        return _eggOwner[eggId];
    }

    //return values: 1: common, 2: uncommon, 3: rare; 4: epic; 5: legendary
    function getCricketType(uint256 tokenId) public view returns (uint256) {
        require(ownerOf(tokenId) != address(0), "invalid token ID");
        return _tokenType[tokenId];
    }

    function setTokenURI(
        uint256 tokenType,
        string memory uri
    ) public onlyOwner {
        require(tokenType >= 1 && tokenType <= 5, "Not token type");
        _tokenURI[tokenType] = uri;
    }

    function tokenURI(
        uint256 tokenId
    ) public view virtual override returns (string memory) {
        require(ownerOf(tokenId) != address(0), "invalid token ID");

        string memory _uri = _tokenURI[_tokenType[tokenId]];
        return bytes(_uri).length > 0 ? _uri : "";
    }

    function fetchCricketsOwn() public view returns (uint256[] memory) {
        uint256 ownerTokenCount = balanceOf(msg.sender);
        uint256[] memory tokenIds = new uint256[](ownerTokenCount);
        for (uint256 i; i < ownerTokenCount; i++) {
            tokenIds[i] = tokenOfOwnerByIndex(msg.sender, i);
        }
        return tokenIds;
    }

    function fetchEggsOwn() public view returns (uint256[] memory) {
        uint256 ownerEggCount = _balanceOfEgg[msg.sender];
        uint256[] memory eggIds = new uint256[](ownerEggCount);
        for (uint256 i; i < ownerEggCount; i++) {
            eggIds[i] = _eggOfOwnerByIndex(msg.sender, i);
        }
        return eggIds;
    }

    function _eggOfOwnerByIndex(
        address eggOwner,
        uint256 index
    ) private view returns (uint256) {
        // require(index < ERC721.balanceOf(owner), "ERC721Enumerable: owner index out of bounds");
        return _ownedEggs[eggOwner][index];
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }
}
