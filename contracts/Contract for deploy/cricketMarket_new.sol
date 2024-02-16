//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

interface CricketInterface {
    function tokenURI(uint256 tokenId) external view returns (string memory);

    function ownerOf(uint256 tokenId) external view returns (address);

    function transferFrom(address from, address to, uint256 tokenId) external;

    function balanceOf(address owner) external view returns (uint256);

    function tokenOfOwnerByIndex(
        address sender,
        uint256 index
    ) external view returns (uint256);
}

contract CricketMarketplace is ReentrancyGuard {
    address payable private _marketOwner;
    address payable private _paymentWallet;
    uint256 private _marketFee = 5;
    uint256 private _bidStep = 10;
    bool private _marketActive = true;

    uint256 private _saleItemsAmount = 0;
    uint256 private _auctionItemsAmount = 0;

    //Mapping index to tokenId
    mapping(uint256 => uint256) private _saleTokenIds;
    mapping(uint256 => uint256) private _auctionTokenIds;

    //mapping tokenId -> index
    mapping(uint256 => uint256) private _saleTokenIndex;
    mapping(uint256 => uint256) private _auctionTokenIndex;



    CricketInterface cricketContract;

    constructor(address cricketContractAddr) {
        _marketOwner = payable(msg.sender);
        _paymentWallet = _marketOwner;
        cricketContract = CricketInterface(cricketContractAddr);
    }

    struct SaleInfo {
        address payable seller;
        address payable owner;
        uint256 price;
    }

    mapping(uint256 => SaleInfo) private saleItems;

    event saleEvent(
        uint256 indexed tokenId,
        uint256 status //0: create, 1: cancel, 2: sold
    );

    //CREATING MARKET ITEMS
    function createSaleItem(
        uint256 tokenId,
        uint256 price
    ) public nonReentrant {
        require(_marketActive, "Market is not actived");

        require(price > 0, "Price must be greater than 0");

        require(
            msg.sender == cricketContract.ownerOf(tokenId),
            "Not owner of NFT"
        );

        cricketContract.transferFrom(msg.sender, address(this), tokenId);

        SaleInfo memory _item = SaleInfo(
            payable(address(this)),
            payable(msg.sender), //
            price
        );

        saleItems[tokenId] = _item;

        _addTokenToSale(tokenId);

        emit saleEvent(tokenId, 0); //0: create, 1: cancel, 2: sold
    }

    function cancelSaleItem(uint256 tokenId) public nonReentrant {
        require(
            msg.sender == saleItems[tokenId].owner,
            "Only owner can perform this operation"
        );

        require(
            address(this) == cricketContract.ownerOf(tokenId),
            "Transfer from incorrect owner"
        );

        cricketContract.transferFrom(address(this), msg.sender, tokenId);

        _removeSaleItem(tokenId);

        emit saleEvent(tokenId, 1); //0: create, 1: cancel, 2: sold
        
    }

    function buySaleItem(uint256 tokenId) public payable nonReentrant {
        require(_marketActive, "Market is not actived");

        require(saleItems[tokenId].owner != msg.sender, "Can not buy by owner");

        uint256 _price = saleItems[tokenId].price;

        require(msg.value >= _price, "Please submit the price");

        require(
            cricketContract.ownerOf(tokenId) == address(this),
            "Not existed on Marketplace"
        );

        uint256 _saleFee = (_price * _marketFee) / 100;

        uint256 _profit = _price - _saleFee;

        payable(_paymentWallet).transfer(_saleFee);

        payable(saleItems[tokenId].owner).transfer(_profit);

        cricketContract.transferFrom(address(this), msg.sender, tokenId);

        if (msg.value > _price) {
            uint256 _refund = msg.value - _price;
            payable(msg.sender).transfer(_refund);
        }

        _removeSaleItem(tokenId);

        emit saleEvent(tokenId, 2); //0: create, 1: cancel, 2: sold
    }

    function getSaleItemInfo(
        uint256 tokenId
    ) public view returns (SaleInfo memory) {
        return saleItems[tokenId];
    }

    struct AuctionInfo {
        address auctioneer;
        uint256 initialPrice;
        address previousBidder;
        uint256 lastBid;
        address lastBidder;
        uint256 startTime;
        uint256 endTime;
    }

    event auctionEvent(uint indexed tokenId, uint256 status);

    mapping(uint256 tokenId => AuctionInfo) private auctionItems;

    function createAuction(
        uint256 tokenId,
        uint256 initialPrice,
        uint256 startTime,
        uint256 endTime
    ) public {
        require(_marketActive, "Market is not actived");
        require(
            block.timestamp <= startTime,
            "Auction can not start by startTime"
        );
        require(startTime < endTime, "Auction can not end before it starts");
        require(0 < initialPrice, "Initial price must be greater than 0");

        require(cricketContract.ownerOf(tokenId) == msg.sender, "Only owner");

        cricketContract.transferFrom(msg.sender, address(this), tokenId);

        AuctionInfo memory _auction = AuctionInfo(
            // _getNftContract(_nftAddr).tokenURI(_tokenId),
            msg.sender, // auctioneer
            // tokenId, // tokenId
            initialPrice, // InitialPrice
            address(0), // previous bidder
            initialPrice, //  last bid
            address(0), //  last bidder
            startTime, //startTime
            endTime //
        );
        auctionItems[tokenId] = _auction;

        _addTokenToAuction(tokenId);

        emit auctionEvent(tokenId, 0); //0: create, 1: cancel, 2: join, 3: finish
    }

    function joinAuction(uint256 tokenId) public payable nonReentrant {
        require(_marketActive, "Market is not actived");

        //require token on list
        // require(_isExistAuction(tokenId), "Token not bidding");
        require(
            auctionItems[tokenId].auctioneer != msg.sender,
            "You are owner"
        );

        require(
            block.timestamp >= auctionItems[tokenId].startTime,
            "Auction still not start"
        );

        require(
            block.timestamp < auctionItems[tokenId].endTime,
            "Auction finished"
        );

        uint256 _bid = auctionItems[tokenId].lastBid;
        if (auctionItems[tokenId].lastBidder != address(0)) {
            _bid = _bid + (auctionItems[tokenId].initialPrice * _bidStep) / 100;
        }

        require(msg.value >= _bid, "Please submit the asking price");

        //refund token to previos bidder
        if (auctionItems[tokenId].lastBidder != address(0)) {
            payable(auctionItems[tokenId].lastBidder).transfer(
                auctionItems[tokenId].lastBid
            );
        }

        //Update auction info
        auctionItems[tokenId].previousBidder = auctionItems[tokenId].lastBidder;
        auctionItems[tokenId].lastBidder = msg.sender;

        emit auctionEvent(tokenId, 2); //0: create, 1: cancel, 2: join, 3: finish
    }

    function finishAuction(uint256 tokenId) public nonReentrant {
        require(
            auctionItems[tokenId].endTime > 0 &&
                block.timestamp > auctionItems[tokenId].endTime,
            "Auction in bidding"
        );

        if (auctionItems[tokenId].lastBidder != address(0)) {
            uint256 lastBid = auctionItems[tokenId].lastBid;

            uint256 auctionServiceFee = (lastBid * _marketFee) / 100;

            uint256 auctioneerReceive = lastBid - auctionServiceFee;

            //Transfer value to auctioneer
            payable(auctionItems[tokenId].auctioneer).transfer(
                auctioneerReceive
            );

            payable(_paymentWallet).transfer(auctionServiceFee);

            cricketContract.transferFrom(
                address(this),
                auctionItems[tokenId].lastBidder,
                tokenId
            );
        } else {
            cricketContract.transferFrom(
                address(this),
                auctionItems[tokenId].auctioneer,
                tokenId
            );
        }

        _removeAuctionItem(tokenId);

        emit auctionEvent(tokenId, 3); //0: create, 1: cancel, 2: join, 3: finish
    }

    function cancelAuction(uint256 tokenId) public nonReentrant {
        require(
            msg.sender == auctionItems[tokenId].auctioneer,
            "Only auctioneer or owner can perform this action"
        );
        require(
            auctionItems[tokenId].startTime > block.timestamp,
            "In bidding"
        );

        cricketContract.transferFrom(
            address(this),
            auctionItems[tokenId].auctioneer,
            tokenId
        );

        //refund value to privious bidder
        if (auctionItems[tokenId].lastBidder != address(0)) {
            payable(auctionItems[tokenId].lastBidder).transfer(
                auctionItems[tokenId].lastBid
            );
        }

        _removeAuctionItem(tokenId);

        emit auctionEvent(tokenId, 1); //tokenId = 0: create, 1: cancel, 2: join, 3: finish
    }

    function getAuctionItemInfo(
        uint256 tokenId
    ) public view returns (AuctionInfo memory) {
        // require(_isExistAuction(tokenId), "Token not bidding");
        return auctionItems[tokenId];
    }

    modifier onlyMarketOwner() {
        require(
            msg.sender == _marketOwner,
            "Only owner can perform this action"
        );
        _;
    }

    function getMarketOwner() public view returns (address) {
        return _marketOwner;
    }

    event setMarketFeeEvent(uint256 indexed marketFee);

    function setMarketFee(uint256 marketFee) public onlyMarketOwner {
        _marketFee = marketFee;
        emit setMarketFeeEvent(_marketFee);
    }

    function getMarketFee() public view returns (uint256) {
        return _marketFee;
    }

    event setBidStepFeeEvent(uint256 indexed bitStep);

    function setBidStep(uint256 bidStep) public onlyMarketOwner {
        _bidStep = bidStep;
        emit setBidStepFeeEvent(_bidStep);
    }

    function getBidStep() public view returns (uint256) {
        return _bidStep;
    }

    function closeMarket() public onlyMarketOwner {
        _marketActive = false;
    }

    function openMarket() public onlyMarketOwner {
        _marketActive = true;
    }

    function _addTokenToSale(uint256 tokenId) private {
        uint256 newIndex = _saleItemsAmount;
        _saleTokenIndex[tokenId] = newIndex;
        _saleTokenIds[newIndex] = tokenId;
        _saleItemsAmount += 1;
    }



    function _removeSaleItem(uint256 tokenId) private {
        _saleItemsAmount -= 1;
        uint256 lastsaleIndex = _saleItemsAmount;
        uint256 saleIndex = _saleTokenIndex[tokenId];
        if (saleIndex != lastsaleIndex)
        {
            uint256 lastSaleId = _saleTokenIds[saleIndex];
            _saleTokenIds[saleIndex] = lastSaleId;//Move the last egg to the slot of the to-delete egg
            _saleTokenIndex[lastSaleId] = saleIndex; //Update the moved egg's index
        }
        delete _saleTokenIndex[tokenId];
        delete  _saleTokenIds[lastsaleIndex];
    }

    function fetchSales() public view returns (uint256[] memory) {
        uint256 saleCount = _saleItemsAmount;
        uint256[] memory tokenSaleIds = new uint256[](saleCount);
        for (uint256 i; i < saleCount; i++) {
            tokenSaleIds[i] = _saleTokenIds[i];
        }
        return tokenSaleIds;
    }


    function _addTokenToAuction(uint256 tokenId) private {
        uint256 newIndex = _auctionItemsAmount;
        _auctionTokenIndex[tokenId] = newIndex;
        _auctionTokenIds[newIndex] = tokenId;
        _auctionItemsAmount += 1;
    }

    function _removeAuctionItem(uint256 tokenId) private {
        _auctionItemsAmount -= 1;
        uint256 lastAuctionIndex = _auctionItemsAmount;
        uint256 auctionIndex = _auctionTokenIndex[tokenId];
        if (auctionIndex != lastAuctionIndex)
        {
            uint256 lastAuctionId = _auctionTokenIds[lastAuctionIndex];
            _auctionTokenIds[auctionIndex] = lastAuctionId;//Move the last egg to the slot of the to-delete egg
            _auctionTokenIndex[lastAuctionId] = auctionIndex; //Update the moved egg's index
        }
        delete _auctionTokenIndex[tokenId];
        delete  _auctionTokenIds[lastAuctionIndex];
    }


    function fetchAuctions() public view returns (uint256[] memory) {
        uint256 auctionCount = _auctionItemsAmount;
        uint256[] memory tokenAuctionIds = new uint256[](auctionCount);
        for (uint256 i; i < auctionCount; i++) {
            tokenAuctionIds[i] = _auctionTokenIds[i];
        }
        return tokenAuctionIds;
    }
}
