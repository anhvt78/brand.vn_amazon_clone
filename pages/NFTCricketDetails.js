import React, {useEffect, useState, useContext} from "react";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import {Loader} from "../components/componentsindex";
import { Button, Category, Brand } from "../components/componentsindex";
import NFTCricketDetailsPage from "../NFTCricketDetailsPage/NFTCricketDetailsPage";

//IMPORT SMART CONTRACT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

import {getCricketInfo} from "../database/getDetailNft";

const NFTCricketDetails = () => {
  const {currentAccount} = useContext(NFTMarketplaceContext);

//   const commonURI =
//   "https://ipfs.io/ipfs/QmRpGCpkpg5BWJqQvNNvbnh9TtRJjHHWKtCetN2qynPXpE";
// const uncommonURI =
//   "https://ipfs.io/ipfs/QmdME1pzHHtaqLHZo8GnkwphabRGgUp2K28UoGSTwGBcCP";
// const rareURI =
//   "https://ipfs.io/ipfs/QmP6DhaWiXHWjop4MfpBtvBovv1GvGH9dDdBH9pR7FkJH9";
// const epicURI =
//   "https://ipfs.io/ipfs/QmdFxVwPjmM81veVRDKvrWX91YzM3pfzgBPBreMLDsD3Hk";
// const legendURI =
//   "https://ipfs.io/ipfs/QmSV8yUNDKgsiKLLHoykQg44yvr4jLuVKS5US4gmN1VCbN";

  const [nftData, setNftData] = useState({});    

//   const getCricket = (cricketNft) => {
// 		switch (cricketNft.uri) {
// 			case commonURI:
// 				return {tokenId: cricketNft.tokenId, tokenType: "Common"};
// 				break;
// 			case uncommonURI:
// 				return {tokenId: cricketNft.tokenId, tokenType: "Uncommon"}
// 				break;
// 			case rareURI:
// 				return {tokenId: cricketNft.tokenId, tokenType: "Rare"};
// 				break;
// 			case epicURI:
// 				return {tokenId: cricketNft.tokenId, tokenType: "Epic"};
// 				break;
// 			case legendURI:
// 				return {tokenId: cricketNft.tokenId, tokenType: "Legend"};
// 				break;
// 		}
// 	};
  

  const router = useRouter();
  useEffect(()=> {
        if (!router.isReady) return;

        // console.log("router.query === ", router.query);
        // const item = {
        //   tokenId: router.query.tokenId,
        //   nftAddr: "",
        //   transFee: "",
        //   bidFee: "",
        //   bidStep: "",
        //   image: router.query.image,
        //   name: router.query.name,
        //   description: ""
        // };

        // setNft(item)
        // console.log("router.query====: ", nft);

        const data = router.query;

        console.log("data====: ", data);



        setNftData(data);

        

  },[router.isReady]);


  return (
    <div>

{console.log("=======>nftData && <NFTCricketDetailsPage nft ={nftData}====: ", nftData)}
      
      { nftData && <NFTCricketDetailsPage nft ={nftData}/>
      }
      {/* <Category /> */}
      {/* <Brand /> */}
    </div>
  );
};

export default NFTCricketDetails;
