import React, { useState, useEffect, useContext } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
// import Router from "next/router";
import { useRouter } from "next/router";
import axios from "axios";
import { create as ipfsHttpClient } from "ipfs-http-client";

import images from "../img";

// import {databaseRef, firebaseConfig} from "../database/firebaseConfig";
import {
	getDatabase,
	ref,
	set,
	update,
	get,
	child,
	query,
	limitToLast,
	orderByChild,
	equalTo,
	remove,
	onValue
} from "firebase/database";

import firebase from "../database/firebaseConfig";

// firebase.initializeApp(firebaseConfig);
// const db = getDatabase(databaseRef);

// const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

const projectId = `${process.env.INFURA_API_KEY}`;
const projectSecretKey = `${process.env.INFURA_API_KEY_SECRET}`;
// const projectId = "2VYDLKPuRo9L9lGkcgqk5rMfIhN";
// const projectSecretKey = "da77495670d4859099f5761c64fbf12a";
const auth = `Basic ${Buffer.from(`${projectId}:${projectSecretKey}`).toString(
	"base64"
)}`;

// console.log(testDB + " | " + testDB);

const subdomain = "https://cwgame.infura-ipfs.io";

const client = ipfsHttpClient({
	// host: "infura-ipfs.io",
	host: "infura-ipfs.io",
	port: 5001,
	protocol: "https",
	headers: {
		authorization: auth,
	},
});

import {
	NFTMarketplaceAddress,
	NFTMarketplaceABI,
	TransferFundsAddress,
	TransferFundsABI,
	// NFTEggAddress,
	// NFTEggABI,
	NFTCricketAddress,
	NFTCricketABI,
} from "./constants";
// const NFTmarketplaceContext = () => {
//     return <div>NFTMarketplaceContext</div>;
// };

//FETCHINH SMART CONTRACT
const fetchContract = (nftAddr, nftABI, signerOrProvider) =>
	new ethers.Contract(nftAddr, nftABI, signerOrProvider);

//TRANSFER FUNDS

// const fetchTransferFundsContract = (signerOrProvider) => new ethers.Contract(
//     TransferFundsAddress,
//     TransferFundsABI,
//     signerOrProvider
// );

// const connectToTransferFunds = async()=> {
//     try {
//         const web3Modal = new Web3Modal();
//         const connection = await web3Modal.connect();
//         const provider = new ethers.providers.Web3Provider(connection);
//         const signer = provider.getSigner();
//         const contract = fetchContract(TransferFundsAddress, TransferFundsABI,signer);
//         return contract;
//     } catch (error) {
//         console.log("Something went wrong while connecting with contract: " + error);
//         // setOpenError(true),
//         // setError("Something went wrong while connecting with contract: " + error)
//     }
// }

//---CONNECTING WITH SMART CONTRACT

const connectingWithSmartContract = async (nftAddr, nftABI) => {
	try {
		// console.log("connection: " + JSON.stringify(connection));

		const web3Modal = new Web3Modal();
		const connection = await web3Modal.connect();

		const provider = new ethers.providers.Web3Provider(connection);

		const signer = provider.getSigner();
		const contract = fetchContract(nftAddr, nftABI, signer);

		return contract;
	} catch (error) {
		console.log(
			"Something went wrong while connecting with contract: " + error
		);
		// setOpenError(true),
		// setError("Something went wrong while connecting with contract: " + error)
	}
};

// const connectingToInfuraSM = async(smcAddr, smcABI)=> {
//     try {
//         const provider = new ethers.providers.WebSocketProvider("wss://sepolia.infura.io/ws/v3/ccb0c81ad8cb4970ae7104eed83cc05f");

//         const signer = provider.getSigner();
//         const contractInfura = new ethers.Contract(
//             smcAddr,
//             smcABI,
//             signer)

//             // console.log("signer ---", signer);

//             // console.log("provider ---", provider);
//             // contractInfura.filters.CreateAuction({filter:{}, fromBlock: "lastest"}, function(err, event){
//             //     if (err) {
//             //         console.log(err);
//             //     } else
//             //     {
//             //         console.log(event);
//             //     }
//             // });

//             // contractInfura.on("event", (tx) => {
//             //     // Emitted when any error occurs
//             //     console.log(tx)
//             // });CreateAuction(address nftAddr, uint indexed itemId)

//             // filter = {
//             //     address: NFTMarketplaceAddress,
//             //     topics: [
//             //         utils.id("CreateAuction(address, uint)")
//             //     ]
//             // }
//             // contractInfura.on("CreateAuction", (nftAddr, itemId, event) => {
//             //     // Emitted whenever a DAI token transfer occurs
//             //     const info = {
//             //         nftAddr: nftAddr,
//             //         itemId: itemId.toNumber(),
//             //         event: event
//             //     }
//             //     console.log("info " + JSON.stringify(info));
//             // })

//         return contractInfura;

//     } catch (error) {
//         console.log("Something went wrong while connecting with Infura contract: " + error);
//         // setOpenError(true),
//         // setError("Something went wrong while connecting with contract: " + error)
//     }
// }

// const connectingToInfuraSMTest = async()=> {
//     try {

//         // console.log("connection: " + JSON.stringify(connection));

//         // const web3Modal = new Web3Modal();
//         // const connection = await web3Modal.connect();

//         const provider = new ethers.providers.WebSocketProvider("wss://sepolia.infura.io/ws/v3/ccb0c81ad8cb4970ae7104eed83cc05f");

//         const signer = provider.getSigner();
//         const contractInfura = new ethers.Contract(
//             NFTMarketplaceAddress,
//             NFTMarketplaceABI,
//             signer)

//             console.log("contractInfura ---", contractInfura);

//             // console.log("provider ---", provider);
//             // // contractInfura.filters.CreateAuction({filter:{}, fromBlock: "lastest"}, function(err, event){
//             // //     if (err) {
//             // //         console.log(err);
//             // //     } else
//             // //     {
//             // //         console.log(event);
//             // //     }
//             // // });

//             contractInfura.on("CreateAuction", (nftAddr, itemId, event) => {
//                 // Emitted whenever a DAI token transfer occurs
//                 const info = {
//                     nftAddr: nftAddr,
//                     itemId: itemId.toNumber(),
//                     event: event
//                 }
//                 console.log("info " + JSON.stringify(info));
//             })

//         return contractInfura;

//     } catch (error) {
//         console.log("Something went wrong while connecting with Infura contract: " + error);
//         // setOpenError(true),
//         // setError("Something went wrong while connecting with contract: " + error)
//     }
// }

export const NFTMarketplaceContext = React.createContext();

export const NFTMarketplaceProvider = ({ children }) => {
	const titleData = "Discover, collect, and sell NFTs";

	//---useState
	const [error, setError] = useState("");
	const [openError, setOpenError] = useState(false);
	const [waitter, setWaitter] = useState(false); //Đợi một hành động hoàn thành rồi set giá trị về false
	const [currentAccount, setCurrentAccount] = useState("");
	const [accountBalance, setAccountBalance] = useState("");

	const [marketOwner, setMarketOwner] = useState("");
	const [eggPrice, setEggPrice] = useState("0.01");
	// const [eggDiscountList, setEggDiscountList] = useState([]);
	const [nftEggsOwn, setNftEggsOwn] = useState([]);
	const [nftCricketsOwn, setNftCricketsOwn] = useState([]);

	const [nftSales, setNftSales] = useState([]);
	const [nftOwnSales, setNftOwnSales] = useState([]);

	const [nftAuctions, setNftAuctions] = useState([]);
	const [nftOwnAuctions, setNftOwnAuction] = useState([]);

	const [nftCricketSale, setNftCricketSale] = useState([]);

	const [nftCricketAuction, setNftCricketAuction] = useState([]);

	const [bidStep, setBidStep] = useState(null)

	const router = useRouter();

	//---CHECK IF WALLET IS CONNECTED
	const checkIfWalletConnected = async () => {
		try {
			if (!window.ethereum) {
				return setOpenError(true), setError("Install MetaMask");
			} else {
				window.ethereum.on("accountsChanged", function(accounts) {
					// Time to reload your interface with accounts[0]!
					// console.log("===> accountsChanged: ", accounts[0]);
					setCurrentAccount(accounts[0]);
					// window.location.reload();

					if (accounts[0]) {
						setOpenError(false);
						getEggsOwn(accounts[0]);
						getBidStep();
					} else {
						setOpenError(true);
						setError("Error while connecting to wallet");
					}
				});
			}

			const accounts = await window.ethereum.request({
				method: "eth_accounts",
			});

			// console.log(accounts[0]);

			if (accounts && accounts.length) {
				setCurrentAccount(accounts[0]);

				// console.log(accounts.length + " : " + currentAccount);
			} else {
				// console.log("No Account Found");
				setOpenError(true), setError("No Account Found");
			}

			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const getbalance = await provider.getBalance(accounts[0]);
			const bal = ethers.utils.formatEther(getbalance);
			setAccountBalance(bal);

			// console.log("accounts: " + accounts[0]);
		} catch (error) {
			console.log("Something went wrong while connecting to wallet");
			setOpenError(true),
				setError("Something went wrong while connecting to wallet");
		}
	};

	//Cái này dùng chung để kiểm tra kết nối ví, sau này nên viết một chỗ để gọi sửa cho tiện
	// useEffect(() => {
	// 	checkIfWalletConnected();
	// }, []);

	//---CONNECT WALLET FUNCTION
	const connectWallet = async () => {
		try {
			if (!window.ethereum)
				return setOpenError(true), setError("Install MetaMask"); //console.log("Install MetaMask");
			const accounts = await window.ethereum.request({
				method: "eth_requestAccounts",
			});
			setCurrentAccount(accounts[0]);
			// window.location.reload();
		} catch (error) {
			// console.log("Error while connecting to wallet");
			setOpenError(true), setError("Error while connecting to wallet");
		}

		// console.log(accounts[0]);
	};

	const getEggsOwn = async (addr) => {
		// const nftEggsArray = [];
		try {
			setLoading(true);

			console.log("======addr = ", addr);

			const queryRef = query(
				ref(firebase, "eggs"),
				orderByChild("owner"),
				equalTo(addr)
			);
			// const queryRef = query(ref(firebase, 'eggs'), orderByChild("owner"));

			get(queryRef)
				.then((snapshot) => {
					// console.log("======snapshot = ", snapshot);

					if (snapshot.exists()) {
						//   console.log("++++++++++++++", snapshot.val());

						const eggNFTs = [];

						snapshot.forEach((childSnapshot) => {
							const childKey = childSnapshot.key;
							const item = {
								tokenId: childKey,
								name: "Cricket Egg",
								// image: images.nft_egg
							};

							eggNFTs.push(item);
							// const childData = childSnapshot.val();
							// ...
						});

						console.log("tokenIds: ======", eggNFTs);

						setNftEggsOwn(eggNFTs);

						setLoading(false);
					} else {
						console.log("No data available");
						setLoading(false);
					}
				})
				.catch((error) => {
					console.error(error);
					setLoading(false);
				});

			// const eggContract = await connectingWithSmartContract(NFTEggAddress, NFTEggABI);
			// const data = await eggContract.getNFTsOwn();
			// // console.log("tokenIds: ", tokenIds);
			// const tokenIds = await Promise.all(
			//     data.map((el) => {
			//         const item = {tokenId: el.toNumber()};
			//         return item;
			//     })
			// );

			// setNftEggsOwn(tokenIds);
		} catch (error) {
			setLoading(false);
			setOpenError(true), setError("Error get contract info!" + error);
		}
	};

	const getOwnCricketNFT = (addr) => {
		try {
			console.log("===getOwnCricketNFT===addr: ", addr);
			setLoading(true);

			// const queryRef = query(ref(firebase, 'cricketNFTs'));

			const nftQueryRef = query(
				ref(firebase, "nfts"),
				orderByChild("owner"),
				equalTo(addr)
			);
			// const queryRef = query(ref(firebase, 'cricketNFTs'));

			// console.log("queryRef --addr-- ", JSON.stringify(orderByChild("owner")) + " | " + addr);

			// console.log("queryRef --2-- ", queryRef);

			get(nftQueryRef)
				.then((snapshot) => {
					// console.log("===getOwnCricketNFT===snapshot = ", snapshot.val());
					if (snapshot.exists()) {
						//   console.log("snapshot ---- ", snapshot.val());

						const cricketNFTs = [];

						snapshot.forEach((childSnapshot) => {
							// console.log(childSnapshot);
							const childKey = childSnapshot.key;
							const item = {
								tokenId: childKey,
								tokenType: childSnapshot.val().tokenType,
								// owner: childSnapshot.val().owner,
								name: "Cricket NFT",
							};
							cricketNFTs.push(item);
							// const childData = childSnapshot.val();
							// ...
						});

						// console.log("cricketNFTs: ", cricketNFTs);
						setNftCricketsOwn(cricketNFTs);

						setLoading(false);
					} else {
						console.log("No data available");
						setLoading(false);
					}
				})
				.catch((error) => {
					console.error(error);
					setLoading(false);
				});

			// const eggContract = await connectingWithSmartContract(NFTCricketAddress, NFTCricketABI);
			// const data = await eggContract.fetchNFTsOwn();
			// // console.log("tokenIds: ", tokenIds);
			// const tokenIds = await Promise.all(
			//     data.map((el) => {
			//         const item = {tokenId: el.toNumber()};
			//         return item;
			//     })
			// );

			// setNftCricketsOwn(tokenIds);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setOpenError(true), setError("Error get data err! " + error);
		}
	};

	const getOwnSaleNFT = (addr) => {
		const saleNFTs = [];
		try {
			// console.log("===getOwnCricketNFT===addr: ", addr);
			setLoading(true);

			// const queryRef = query(ref(firebase, 'cricketNFTs'));

			const nftQueryRef = query(
				ref(firebase, "sales"),
				orderByChild("owner"),
				equalTo(addr)
			);
			// const queryRef = query(ref(firebase, 'cricketNFTs'));

			// console.log("queryRef --addr-- ", JSON.stringify(orderByChild("owner")) + " | " + addr);

			// console.log("queryRef --2-- ", queryRef);

			get(nftQueryRef)
				.then((snapshot) => {
					// console.log("===getOwnCricketNFT===snapshot = ", snapshot.val());
					if (snapshot.exists()) {
						// console.log("snapshot ---- ", snapshot.val());
					
						snapshot.forEach((childSnapshot) => {
							// console.log(childSnapshot);
							const childKey = childSnapshot.key;
							const item = {
								tokenId: childKey,
								tokenType: childSnapshot.val().tokenType,
								// owner: childSnapshot.val().owner,
								price: childSnapshot.val().price,
								owner: childSnapshot.val().owner,
								timeStamp: childSnapshot.val().timeStamp,
							};
							saleNFTs.push(item);
							// const childData = childSnapshot.val();
							// ...
						});

						// console.log("cricketNFTs: ", cricketNFTs);
						setNftOwnSales(saleNFTs);
						setLoading(false);

					} else {
						console.log("No data available");
						setLoading(false);
						
					}
				})
				.catch((error) => {
					console.error(error);
					setLoading(false);
					
				});

			setLoading(false);

		} catch (error) {
			setLoading(false);
			setOpenError(true), setError("Error get data err! " + error);
			
		}
	};

	const getOwnAuctionNFT = (addr) => {
		const auctionOwnNFTs = [];
		try {
			// console.log("===getOwnCricketNFT===addr: ", addr);
			setLoading(true);

			// const queryRef = query(ref(firebase, 'cricketNFTs'));

			const nftQueryRef = query(
				ref(firebase, "auctions"),
				orderByChild("owner"),
				equalTo(addr)
			);
			// const queryRef = query(ref(firebase, 'cricketNFTs'));

			// console.log("queryRef --addr-- ", JSON.stringify(orderByChild("owner")) + " | " + addr);

			// console.log("queryRef --2-- ", queryRef);

			get(nftQueryRef)
				.then((snapshot) => {
					// console.log("===getOwnCricketNFT===snapshot = ", snapshot.val());
					if (snapshot.exists()) {
						console.log("snapshot ---- ", snapshot.val());
					
						snapshot.forEach((childSnapshot) => {
							// console.log(childSnapshot);
							const childKey = childSnapshot.key;
							const item = {
								tokenId: childKey,
								endTime: childSnapshot.val().tokenType,
								// owner: childSnapshot.val().owner,
								// price: childSnapshot.val().price,
								owner: childSnapshot.val().owner,
								timeStamp: childSnapshot.val().timeStamp,
								tokenType: childSnapshot.val().tokenType,
								startTime: childSnapshot.val().startTime,
								initialPrice: childSnapshot.val().initialPrice,
								lastBid: childSnapshot.val().lastBid,
								lastBidder: childSnapshot.val().lastBidder
							};
							auctionOwnNFTs.push(item);
							// const childData = childSnapshot.val();
							// ...
						});

						// console.log("cricketNFTs: ", cricketNFTs);
						setNftOwnAuction(auctionOwnNFTs);
						setLoading(false);

					} else {
						console.log("No data available");
						setLoading(false);
						
					}
				})
				.catch((error) => {
					console.error(error);
					setLoading(false);
					
				});

			setLoading(false);

		} catch (error) {
			setLoading(false);
			setOpenError(true), setError("Error get data err! " + error);
			
		}
	};

	const getMarketOwner = async () => {
		try {
			const contract = await connectingWithSmartContract(
				NFTMarketplaceAddress,
				NFTMarketplaceABI
			);
			// console.log("======NFTMarketplaceAddress: ", NFTMarketplaceAddress);

			const markerOwner = await contract.getMarketOwner();

			setMarketOwner(markerOwner);
		} catch (error) {
			setOpenError(true), setError("Get marker owner: ", error);
		}
	};

	//---UPLOAD TO IPFS FUNCTION
	const uploadToIPFS = async (file) => {
		try {
			setWaitter(true);
			const added = await client.add({ content: file });
			// console.log("=====>: " + added);
			const url = `https://ipfs.io/ipfs/${added.path}`;

			// console.log("url =====>: " + url);

			setWaitter(false);

			return url;
		} catch (error) {
			setWaitter(false);
			console.log("Error uploading to IPFS: ", error);
			setOpenError(true), setError("Error uploading to IPFS: ", error);
		}
	};

	const getEggNFTprice = async () => {
		try {
			setWaitter(true);
			const contract = await connectingWithSmartContract(
				NFTCricketAddress,
				NFTCricketABI
			);
			// console.log("contract = ", contract);
			const price = await contract.getPrice();
			// price.wait();

			// console.log("price = ", price);

			const _price = ethers.utils.formatUnits(price.toString(), "ether");

			// console.log("_price = ", _price);

			// console.log("contract: " + JSON.stringify(contract));

			setWaitter(false);
			// router.push("/author");
			setEggPrice(_price);
			// return _price;
		} catch (error) {
			setOpenError(true), setError("Error while buying NFT: ", error);
		}
	};

	const buyEggNFT = async (price) => {
		try {
			setWaitter(true);
			const contract = await connectingWithSmartContract(
				NFTCricketAddress,
				NFTCricketABI
			);
			// console.log("contract = ", contract);
			// const price = await contract.getPrice();
			// price.wait();

			console.log("price = ", price);

			const _price = ethers.utils.parseUnits(price.toString(), "ether");

			console.log("_price = ", _price);

			const transaction = await contract.buyEgg({
				value: _price,
			});
			transaction.wait();

			// console.log("contract: " + JSON.stringify(contract));

			//Lắng nghe sự kiện mint NFT từ blc
			contract.on("buyEggEvent", (Creator, eggId) => {
				// const info = {
				//     Creator: Creator,
				//     eggId: eggId.toNumber(),
				//     }
				//    console.log("event info " + JSON.stringify(info));

				//Đảm bảo rằng thằng đang mua là chính nó, vì có thể có rất nhiều người đang mua
				if (Creator.toLowerCase() == currentAccount.toLowerCase()) {
					// getNFTList();

					set(ref(firebase, "eggs/" + eggId), {
						owner: currentAccount.toLowerCase(),
					})
						.then(() => {
							// Data saved successfully!
							setWaitter(false);
						})
						.catch((error) => {
							// The write failed...
							setWaitter(false);
						});

					router.push("/author");
				}
			});
			// setWaitter(false);
			// router.push("/author");
		} catch (error) {
			setOpenError(true), setError("Error while buying NFT: ", error);
		}
	};

	const openEgg = async (eggTokenId) => {
		//Nếu xuất hiện lỗi => cần lưu ý đặt địa chỉ cricket contract trong egg contract
		console.log(" === eggTokenId", eggTokenId);
		try {
			setWaitter(true);

			const cricketContract = await connectingWithSmartContract(
				NFTCricketAddress,
				NFTCricketABI
			);


// try {
// 	const estimatedGas = await cricketContract.estimateGas.mintCricket(NFTEggAddress);

// 	console.log(" estimatedGas ===", estimatedGas);
// } catch (error) {

// 	console.log("  error   ==== ", error);
	
// }

			// // const tx = await contract.method(args, { gasLimit: increaseGasLimit(estimatedGas) })
			// const increaseGasLimit = (estimatedGasLimit) => {
			// 	return estimatedGasLimit.mul(130).div(100) // increase by 30%
			//   }

			const transaction = await cricketContract.openEgg(eggTokenId);

			// const transaction = await contract.openEgg(eggTokenId);
			transaction.wait();

			cricketContract.on(
				"mintCricketEvent",
				async (cricketOwner, tokenId, tokenType) => {
					console.log(
						"mintCricketEvent = ",
						cricketOwner + " | " + tokenId
					);

					if (
						cricketOwner.toLowerCase() ==
						currentAccount.toLowerCase()
					) {
						const nftTokenId = parseInt(tokenId);
						// console.log("nftTokenId ===", nftTokenId);
						// console.log("tokenId ===", parseInt(tokenId));

						const _tokenType = parseInt(tokenType).toString();

						// remove(ref(firebase, 'nfts/' + eggTokenId));

						set(ref(firebase, "nfts/" + nftTokenId), {
							owner: currentAccount.toLowerCase(),
							tokenType: _tokenType,
						})
							.then(() => {
								// Data saved successfully!
								// const eggRef = ref(firebase, 'eggs/' + eggTokenId);

								remove(ref(firebase, "eggs/" + eggTokenId));

								setWaitter(false);
								router.push("/author");
							})
							.catch((error) => {
								// The write failed...
								setWaitter(false);
							});

						setWaitter(false);
					}
				}
			);
		} catch (error) {
			setOpenError(true), setError("Error while opening NFT: ", error);
		}
	};


	useEffect(() => {
		fetchSaleItems();
	}, []);

	const fetchSaleItems = async () => {
		const saleNFTs = [];
		try {
			// console.log("===getOwnCricketNFT===addr: ", addr);
			setLoading(true);

			// const queryRef = query(ref(firebase, 'cricketNFTs'));

			const nftQueryRef = query(
				ref(firebase, "sales"),
				// orderByChild("price"),
				// equalTo(addr)
			);
			// const queryRef = query(ref(firebase, 'cricketNFTs'));

			// console.log("queryRef --addr-- ", JSON.stringify(orderByChild("owner")) + " | " + addr);

			// console.log("queryRef --2-- ", queryRef);

			onValue(nftQueryRef, (snapshot) => {
				console.log("snapshot ---- ", snapshot.val());
					
						snapshot.forEach((childSnapshot) => {
							// console.log(childSnapshot);
							const childKey = childSnapshot.key;
							const item = {
								tokenId: childKey,
								tokenType: childSnapshot.val().tokenType,
								// owner: childSnapshot.val().owner,
								price: childSnapshot.val().price,
								owner: childSnapshot.val().owner,
								timeStamp: childSnapshot.val().timeStamp,
							};
							saleNFTs.push(item);
							// const childData = childSnapshot.val();
							// ...
						});

						// console.log("cricketNFTs: ", cricketNFTs);
						setNftSales(saleNFTs);
						setLoading(false);
			});

		} catch (error) {
			setLoading(false);
			setOpenError(true), setError("Error get data err! " + error);
			
		}
	};

	useEffect(() => {
		fetchAuctionItems();
	}, []);

	const fetchAuctionItems = async () => {
		const auctions = [];
		try {
			// console.log("===getOwnCricketNFT===addr: ", addr);
			setLoading(true);

			// const queryRef = query(ref(firebase, 'cricketNFTs'));

			const nftQueryRef = query(
				ref(firebase, "auctions"),
				orderByChild("lastBid"),
				// equalTo(addr)
			);

			onValue(nftQueryRef, (snapshot) => {
				snapshot.forEach((childSnapshot) => {
					// console.log(childSnapshot.val());
					const childKey = childSnapshot.key;
					const item = {
						tokenId: childKey,
						endTime: childSnapshot.val().endTime,
						// owner: childSnapshot.val().owner,
						// price: childSnapshot.val().price,
						owner: childSnapshot.val().owner,
						timeStamp: childSnapshot.val().timeStamp,
						tokenType: childSnapshot.val().tokenType,
						startTime: childSnapshot.val().startTime,
						initialPrice: childSnapshot.val().initialPrice,
						lastBid: childSnapshot.val().lastBid,
						lastBidder: childSnapshot.val().lastBidder
					};
					auctions.push(item);
					// const childData = childSnapshot.val();
					// ...
				});

				// console.log("cricketNFTs: ", cricketNFTs);
				setNftAuctions(auctions);
				setLoading(false);
				
			  });

		} catch (error) {
			setLoading(false);
			setOpenError(true), setError("Error get data err! " + error);
			
		}
	};

	const createSaleItem = async (saleNft) => {
		try {
			console.log(
				"=====>>>>>",
				saleNft + " | " + currentAccount
			);

			setWaitter(true);
			const price = ethers.utils.parseUnits(saleNft.price.toString(), "ether");

			const cricketContract = await connectingWithSmartContract(
				NFTCricketAddress,
				NFTCricketABI
			);

			const approvedAddr = await cricketContract.getApproved(saleNft.tokenId);

			// console.log("approvedAddr  = ", approvedAddr);

			if (approvedAddr != NFTMarketplaceAddress) {
				await cricketContract.approve(NFTMarketplaceAddress, saleNft.tokenId);

				// Approval(ERC721.ownerOf(tokenId), to, tokenId);

				cricketContract.on(
					"Approval",
					async (owner, operator, tokenIdAproved) => {
						if (saleNft.tokenId == tokenIdAproved) {
							// console.log("approved tokenId = ", tokenId);
							const marketContract = await connectingWithSmartContract(
								NFTMarketplaceAddress,
								NFTMarketplaceABI
							);
							await marketContract.createSaleItem(
								saleNft.tokenId,
								price
							);
							marketContract.on(
								"saleEvent",
								async (tokenSaleId, sts) => {
									if (saleNft.tokenId == tokenSaleId && sts == 0) {
										// setWaitter(false);
										// getNFTList();
										
										_createSaleItem(
											saleNft
										);
									}
								}
							);
						}
					}
				);

			} else {
				// const isApproved = await nftContract.getApproved(_tokenId);

				// console.log("hasApproval = ", isApproval);

				const marketContract = await connectingWithSmartContract(
					NFTMarketplaceAddress,
					NFTMarketplaceABI
				);

				await marketContract.createSaleItem(saleNft.tokenId, price);
				marketContract.on("saleEvent", async (tokenSaleId, sts) => {
					if (saleNft.tokenId == tokenSaleId && sts == 0) {
						// setWaitter(false);
						// /router.push("/author");
						// const timeStamp = Math.floor(Date.now() / 1000);
						_createSaleItem(
							saleNft
						);
					}
				});
				// getNFTList();
			}
		} catch (error) {
			setWaitter(false);
			setOpenError(true), setError("Create market item error: " + error);
		}
	};

	function _createSaleItem(saleNft) {

		const timeStamp = Math.floor(
			Date.now() / 1000
		);

		set(ref(firebase, "sales/" + saleNft.tokenId), {
			owner: currentAccount,
			price: saleNft.price,
			timeStamp: timeStamp,
			tokenType: saleNft.tokenType
		})
			.then(() => {
				// Data saved successfully!

				// remove(ref(firebase, "nfts/" + tokenId));
				remove(ref(firebase, "nfts/" + saleNft.tokenId + "/owner"));

				setWaitter(false);
				router.push("/author");
			})
			.catch((error) => {
				// The write failed...
				setError(error);
				// setWaitter(false);
			});
	}

	const buySaleItem = async (saleNft) => {
		try {
			setWaitter(true);

			// console.log("_nftAddr = " + _nftAddr + " | _marketId = " + _marketId + " | _price = " + _price);

			const value = ethers.utils.parseUnits(saleNft.price.toString(), "ether");
			const contract = await connectingWithSmartContract(
				NFTMarketplaceAddress,
				NFTMarketplaceABI
			);
			await contract.buySaleItem(saleNft.tokenId, { value: value.toString() });

			contract.on("saleEvent", async (saleTokenId, sts) => {
				if (saleTokenId == saleNft.tokenId && sts == 2) {

					const updates = {};
					updates[`nfts/${saleNft.tokenId}/owner`] = currentAccount.toLowerCase();
					// updates[`nfts/${tokenId}/uri`] = ;
					// updates[`auctions/${tokenId}/lastBid`] = _bid;
					update(ref(firebase), updates)
						.then(() => {
							// Data saved successfully!

							//update bidding....----------------------
							remove(ref(firebase, "sales/" + saleNft.tokenId));

							//===============can luu log =======================================================

							setWaitter(false);
							router.push("/author");
						})
						.catch((error) => {
							// The write failed...
							setError(error);
							// setWaitter(false);
						});

					// setWaitter(false);
					// router.push("author");
				}
			});
		} catch (error) {
			// console.log("Error while buying NFT: ", error);
			setWaitter(false);
			setOpenError(true);
			// setError("Error while buying NFT: ", error)
			setError("Sale NFT: ", error);
		}
	};

	const cancelSaleItem = async (saleNft) => {
		try {
			setWaitter(true);
			const contract = await connectingWithSmartContract(
				NFTMarketplaceAddress,
				NFTMarketplaceABI
			);
			contract.cancelSaleItem(saleNft.tokenId);

			contract.on("saleEvent", async (saleTokenId, sts) => {
				if (saleTokenId == saleNft.tokenId && sts == 1) {

					const updates = {};
					updates[`nfts/${saleNft.tokenId}/owner`] = saleNft.owner;
					// updates[`nfts/${tokenId}/uri`] = ;
					// updates[`auctions/${tokenId}/lastBid`] = _bid;
					update(ref(firebase), updates)
						.then(() => {
							// Data saved successfully!

							//update bidding....----------------------
							remove(ref(firebase, "sales/" + saleNft.tokenId));

							//===============can luu log =======================================================

							setWaitter(false);
							router.push("/author");
						})
						.catch((error) => {
							// The write failed...
							setError(error);
							// setWaitter(false);
						});

					// setWaitter(false);
					// router.push("author");
				}
			});
		} catch (error) {
			setWaitter(false);
			setOpenError(true);
			// setError("Error while buying NFT: ", error)
			setError("Unlist market item: ", error);
			console.log("Unlist market item: ", error);
		}
	};

	const createAuction = async (
		auctionNft
	) => {

		console.log("tokenType ==****= ", auctionNft);

		try {
			setWaitter(true);

			const cricketContract = await connectingWithSmartContract(
				NFTCricketAddress,
				NFTCricketABI
			);

			const approvedAddr = await cricketContract.getApproved(auctionNft.tokenId);

			console.log("approvedAddr  = ", approvedAddr);

			if (approvedAddr != NFTMarketplaceAddress) {
				await cricketContract.approve(NFTMarketplaceAddress, auctionNft.tokenId);

				// Approval(ERC721.ownerOf(tokenId), to, tokenId);

				cricketContract.on(
					"Approval",
					async (owner, operator, tokenIdAproved) => {
						if (auctionNft.tokenId == tokenIdAproved) {
                            _createAuctionItem (
                                auctionNft
                            );
						}
					}
				);
			} else {
                _createAuctionItem (
                    auctionNft
                );
			}

			// const contract = await connectingWithSmartContract(
			// 	NFTMarketplaceAddress,
			// 	NFTMarketplaceABI
			// );

			// const isApproval = await contract.isApprovedForAll(
			// 	currentAccount,
			// 	NFTMarketplaceAddress
			// );

			// if (!isApproval) {
			// 	await contract.setApprovalForAll(NFTMarketplaceAddress, true);
			// 	contract.on(
			// 		"ApprovalForAll",
			// 		async (owner, operator, approved) => {
			// 			if (
			// 				owner.toLowerCase() == currentAccount.toLowerCase()
			// 			) {
			// 				console.log("approved = ", approved);
			// 				const _initialPrice = ethers.utils.parseUnits(
			// 					initialPrice,
			// 					"ether"
			// 				);
			// 				await contract.createAuction(
			// 					tokenId,
			// 					_initialPrice,
			// 					startTime,
			// 					endTime
			// 				);
			// 				contract.on(
			// 					"auctionEvent",
			// 					async (tokenAuctionId, sts) => {
			// 						if (tokenId == tokenAuctionId && sts == 0) {
			// 							setWaitter(false);
			// 							router.push("/author");
			// 							// getNFTList();
			// 						}
			// 					}
			// 				);
			// 			}
			// 		}
			// 	);
			// } else {
			// 	// const _initialPrice = ethers.utils.parseUnits(
			// 	// 	_initialPrice,
			// 	// 	"ether"
			// 	// );
			// 	// const marketTrans = await marketContract.createAuction(
			// 	// 	_tokenId,
			// 	// 	initialPrice,
			// 	// 	_startTime,
			// 	// 	_endTime
			// 	// );
			// 	// contract.on("auctionEvent", async (tokenId, sts) => {
			// 	// 	if (_tokenId == tokenId && sts == 0) {
			// 	// 		setWaitter(false);
			// 	// 		router.push("author");
			// 	// 	}
			// 	// });
			// }
		} catch (error) {
			setWaitter(false);
			setOpenError(true), setError("Create auction item error: " + error);
		}
	};

	async function _createAuctionItem (
		auctionNft
	) {

		console.log(" _createAuctionItem  ==== ", auctionNft);

        const marketContract = await connectingWithSmartContract(
            NFTMarketplaceAddress,
            NFTMarketplaceABI
        );

        const initialPrice = ethers.utils.parseUnits(
            auctionNft.initialPrice.toString(),
            "ether"
        );
        await marketContract.createAuction(
            auctionNft.tokenId,
            initialPrice,
            auctionNft.startTime,
            auctionNft.endTime
        );
        marketContract.on("auctionEvent", async(tokenAuctionId, sts) => {

			// console.log("auctionEvent === ", tokenAuctionId + " | " + sts);
                if (auctionNft.tokenId == tokenAuctionId && sts == 0) {
                    // setWaitter(false);
                    // router.push("/author");
                    // getNFTList();

                    const timeStamp = Math.floor(Date.now() / 1000);
                    set(ref(firebase, "auctions/" + auctionNft.tokenId), {
                        initialPrice: auctionNft.initialPrice,
						lastBid: auctionNft.initialPrice,
                        startTime: auctionNft.startTime,
                        endTime: auctionNft.endTime,
                        timeStamp: timeStamp,
                        owner: currentAccount.toLowerCase(),
						lastBidder: currentAccount.toLowerCase(),
                        tokenType: auctionNft.tokenType,
                    })
                        .then(() => {
                            // Data saved successfully!
            
                            remove(ref(firebase, "nfts/" + auctionNft.tokenId + "/owner"));
            
                            setWaitter(false);
                            router.push("/author");
                        })
                        .catch((error) => {
                            // The write failed...
                            setError(error);
                            // setWaitter(false);
                        });
                }
            }
        );



	}

	const joinAuction = async (tokenId, bid) => {

		console.log("=================>> tokenId = ", tokenId + ", bid = " + bid);
		setWaitter(true);
		try {
			const _bid = ethers.utils.parseUnits(bid.toString(), "ether");

			console.log(" _bid =   ", _bid);

			const contract = await connectingWithSmartContract(
				NFTMarketplaceAddress,
				NFTMarketplaceABI
			);
			const transtx = await contract.joinAuction(tokenId, {
				value: _bid.toString(),
			});
			transtx.wait();

			contract.on("auctionEvent", async (aucTokenId, sts) => {
				if (aucTokenId == tokenId && sts == 2) {
					const updates = {};
					updates[`auctions/${tokenId}/lastBidder`] = currentAccount.toLowerCase();
					updates[`auctions/${tokenId}/lastBid`] = bid;
					update(ref(firebase), updates)
						.then(() => {
							// Data saved successfully!

							//update bidding....----------------------
							const updatesBidding = {};
							updatesBidding[`bidding/${tokenId}/${currentAccount.toLowerCase()}`] = bid;
							// updatesBid[`bidding/${tokenId}/lastBid`] = _bid;
							update(ref(firebase), updatesBidding);

							setWaitter(false);
							router.push("/author");
						})
						.catch((error) => {
							// The write failed...
							setError(error);
							// setWaitter(false);
						});
					//
					setWaitter(false);
					router.push("author");
				}
			});
		} catch (error) {
			// console.log("error: ----",error);

			setWaitter(false);
			setOpenError(true), setError("Join auction error: " + error);
		}
	};

	const finishAuction = async (auctionNft) => {
		try {
			setWaitter(true);
			const contract = await connectingWithSmartContract(
				NFTMarketplaceAddress,
				NFTMarketplaceABI
			);
			await contract.finishAuction(auctionNft.tokenId);
			contract.on("auctionEvent", async (auctionTokenId, sts) => {
				if (auctionNft.tokenId == auctionTokenId && sts == 3) {

					const updates = {};
					updates[`nfts/${auctionNft.tokenId}/owner`] = auctionNft.lastBidder;
					// updates[`nfts/${tokenId}/uri`] = ;
					// updates[`auctions/${tokenId}/lastBid`] = _bid;
					update(ref(firebase), updates)
						.then(() => {
							// Data saved successfully!

							//update bidding....----------------------
							remove(ref(firebase, "auctions/" + auctionNft.tokenId));
							remove(ref(firebase, "bidding/" + auctionNft.tokenId));

							//===============can luu log =======================================================

							setWaitter(false);
							router.push("/author");
						})
						.catch((error) => {
							// The write failed...
							setError(error);
							// setWaitter(false);
						});
					

					setWaitter(false);
					router.push("author");
				}
			});
		} catch (error) {
			setWaitter(false);
			setOpenError(true), setError("finish auction error: " + error);
		}
	};

	const cancelAuction = async (tokenId) => {
		try {
			const contract = await connectingWithSmartContract(
				NFTMarketplaceAddress,
				NFTMarketplaceABI
			);
			await contract.cancelAuction(tokenId);
			contract.on("auctionEvent", async (auctionTokenId, sts) => {
				if (auctionTokenId == tokenId && sts == 1) {

					const updates = {};
					updates[`nfts/${tokenId}/owner`] = currentAccount.toLowerCase();
					// updates[`nfts/${tokenId}/uri`] = ;
					// updates[`auctions/${tokenId}/lastBid`] = _bid;
					update(ref(firebase), updates)
						.then(() => {
							// Data saved successfully!

							//update bidding....----------------------
							remove(ref(firebase, "auctions/" + tokenId));
							remove(ref(firebase, "bidding/" + tokenId));
							//===============can luu log =======================================================

							setWaitter(false);
							router.push("/author");
						})
						.catch((error) => {
							// The write failed...
							setError(error);
							// setWaitter(false);
						});

					// setWaitter(false);
					// router.push("author");
				}
			});
		} catch (error) {
			setWaitter(false);
			setOpenError(true), setError("Cancel auction error: " + error);
		}
	};




	//-------------------------------------------------------
	//---TRANSFER FUNDS
	const [transactionCount, setTransactionCount] = useState("");
	const [transactions, setTransactions] = useState([]);
	const [loading, setLoading] = useState(false);

	const transferEther = async (address, ether, message) => {
		try {
			if (currentAccount) {
				// const contract = await connectToTransferFunds();

				// console.log(address, ether, message);

				const unFormatedPrice = ethers.utils.parseEther(ether);
				//FIRST METHOD TO TRANSFER FUND
				await ethereum.request({
					method: "eth_sendTransaction",
					param: [
						{
							from: currentAccount,
							to: address,
							gas: "0x5208",
							value: unFormatedPrice._hex,
						},
					],
				});
			}
		} catch (error) {
			// console.log(error);
			setOpenError(true), setError("Tranfer: ", error);
		}
	};

	const updateMarkerFee = async (_marketFee) => {
		try {
			setWaitter(true);
			const contract = await connectingWithSmartContract(
				NFTMarketplaceAddress,
				NFTMarketplaceABI
			);
			await contract.setMarketFee(_marketFee);
			contract.on("setMarketFeeEvent", async (marketFee) => {
				setWaitter(false);
				router.push("author");
			});
		} catch (error) {
			// console.log("Error while fetching NFTs" + error);
			setWaitter(false);
			setOpenError(true);
			setError("Update market fee error!" + error);
		}
	};

	const updateBidStep = async (mBitStep) => {
		try {
			setWaitter(true);
			const contract = await connectingWithSmartContract(
				NFTMarketplaceAddress,
				NFTMarketplaceABI
			);
			await contract.setBidStep(mBitStep);
			contract.on("setBidStepFeeEvent", async (bitStepUpdated) => {
				setBidStep(mBitStep);
				setWaitter(false);
				router.push("author");
			});
		} catch (error) {
			// console.log("Error while fetching NFTs" + error);
			setWaitter(false);
			setOpenError(true);
			setError("Update bid step error!" + error);
		}
	};

	// useEffect(() => {
	// 	getBidStep();
	// }, []);

	const getBidStep = async () => {
		try {
			setLoading(true);
			// setWaitter(true);
			const contract = await connectingWithSmartContract(
				NFTMarketplaceAddress,
				NFTMarketplaceABI
			);
			const _bitStep = await contract.getBidStep();
			setBidStep(_bitStep.toNumber());
			// setWaitter(false);
			setLoading(false);
			
		} catch (error) {
			// console.log("Error while fetching NFTs" + error);
			// setWaitter(false);
			setLoading(false);
			setOpenError(true);
			setError("Update bid step error!" + error);
		}
	};


	const setAmountEggForSale = async (amount) => {
		try {
			setWaitter(true);
			const contract = await connectingWithSmartContract(
				NFTCricketAddress,
				NFTCricketABI
			);
			await contract.setAmountForSale(amount);
			contract.on("setAmountEggForSaleEvent", async (eggAmount) => {
				setWaitter(false);
				router.push("author");
			});
		} catch (error) {
			// console.log("Error while fetching NFTs" + error);
			setWaitter(false);
			setOpenError(true);
			setError("Set amount for sale error!" + error);
		}
	};

	const setEggDiscount = async (addr, discountPercent) => {
		try {
			setWaitter(true);
			const contract = await connectingWithSmartContract(
				NFTCricketAddress,
				NFTCricketABI
			);
			await contract.setDiscountEgg(addr, discountPercent);
			contract.on("setEggDiscountEvent", async (walletAddr, discount) => {
				setWaitter(false);
				router.push("author");
			});
		} catch (error) {
			// console.log("Error while fetching NFTs" + error);
			setWaitter(false);
			setOpenError(true);
			setError("Set discount error!" + error);
		}
	};

	// const getEggDiscountList = async () => {
	// 	try {
	// 		setWaitter(true);
	// 		const contract = await connectingWithSmartContract(
	// 			NFTCricketAddress,
	// 			NFTCricketABI
	// 		);
	// 		const result = await contract.getDiscountList();
	// 		setEggDiscountList(result);
	// 		setWaitter(false);
	// 		// router.push("author");
	// 	} catch (error) {
	// 		// console.log("Error while fetching NFTs" + error);
	// 		setWaitter(false);
	// 		setOpenError(true);
	// 		setError("Set discount error!" + error);
	// 	}
	// };

	const removeEggDiscount = async (addr) => {
		try {
			setWaitter(true);
			const contract = await connectingWithSmartContract(
				NFTCricketAddress,
				NFTCricketABI
			);
			await contract.removeDiscount(addr);

			contract.on("removeDiscountEvent", async (walletAddr) => {
				setWaitter(false);
				// router.push("author");
			});
		} catch (error) {
			// console.log("Error while fetching NFTs" + error);
			setWaitter(false);
			setOpenError(true);
			setError("Set discount error!" + error);
		}
	};

	const tranferEggNFT = async (recvAddr, tokenId) => {
		setWaitter(true);

		// console.log("tranferEggNFT: " , recvAddr + " | " + tokenId);
		try {
			const contract = await connectingWithSmartContract(
				NFTCricketAddress,
				NFTCricketABI
			);
			await contract.transferEgg(recvAddr, tokenId);

			contract.on("transferEggEvent", async (tranferTokenId) => {
				// console.log("tranferTokenId === ", tranferTokenId);

				if (tranferTokenId == tokenId)
				{
					const updates = {};
					updates[`eggs/${tokenId}/owner`] = to.toLowerCase();
					update(ref(firebase), updates)
						.then(() => {
							// Data saved successfully!
							setWaitter(false);
							router.push("/author");
						})
						.catch((error) => {
							// The write failed...
							setError(error);
							// setWaitter(false);
						});
				}

				// 	setWaitter(false);
				// router.push("author");
			});
		} catch (error) {
			// console.log("Error while buying NFT: ", error);
			setWaitter(false);
			setOpenError(true);
			// setError("Error while buying NFT: ", error)
			setError("Error get contract owner: ", error);
		}
	};

	const tranferCricketNFT = async (recvAddr, tokenId) => {
		setWaitter(true);

		try {
			const contract = await connectingWithSmartContract(
				NFTCricketAddress,
				NFTCricketABI
			);
			await contract.transferFrom(currentAccount, recvAddr, tokenId);

			contract.on("Transfer", async (from, to, tranferTokenId) => {

				if (tranferTokenId == tokenId)
				{
					const updates = {};
					updates[`nfts/${tokenId}/owner`] = to.toLowerCase();
					update(ref(firebase), updates)
						.then(() => {
							// Data saved successfully!
							setWaitter(false);
							router.push("/author");
						})
						.catch((error) => {
							// The write failed...
							setError(error);
							// setWaitter(false);
						});
				}
				// 	setWaitter(false);
				// router.push("author");
			});
		} catch (error) {
			// console.log("Error while buying NFT: ", error);
			setWaitter(false);
			setOpenError(true);
			// setError("Error while buying NFT: ", error)
			setError("Cricket tranfer err: ", error);
		}
	};

	return (
		<NFTMarketplaceContext.Provider
			value={{
				checkIfWalletConnected,
				connectWallet,
				uploadToIPFS,
				nftEggsOwn,

				eggPrice,

				updateMarkerFee,
				updateBidStep,
				getEggNFTprice,
				buyEggNFT,
				getEggsOwn,
				openEgg,
				tranferEggNFT,
				// eggDiscountList,
				// getEggDiscountList,
				setAmountEggForSale,
				removeEggDiscount,
				setEggDiscount,
				
				buySaleItem,
				getOwnSaleNFT,
				nftOwnSales,
				// getContractOwner,
				createSaleItem,
				cancelSaleItem,
				nftOwnAuctions,
				createAuction,
				joinAuction,
				finishAuction,
				cancelAuction,
				getOwnAuctionNFT,

				tranferCricketNFT,
				// fetchDataMarket,

				// fetchOwnItems,
				nftSales,
				fetchSaleItems,
				nftAuctions,
				fetchAuctionItems,
				getBidStep,
				bidStep,
				// getNFTList,

				

				nftCricketsOwn,
				nftCricketSale,
				nftCricketAuction,
				getOwnCricketNFT,

				marketOwner,

				currentAccount,
				titleData,
				setOpenError,
				openError,
				error,
				setError,
				waitter,
				setWaitter,
				transferEther,
				loading,
				accountBalance,
			}}
		>
			{children}
			{/* {console.log(fetchMyNFTsOrListedNFTs)} */}
		</NFTMarketplaceContext.Provider>
	);
};
