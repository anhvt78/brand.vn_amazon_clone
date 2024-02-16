import React, {useEffect, useState, useContext} from "react";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import { Button, Category, Brand } from "../components/componentsindex";
import NFTAuctionDetailsPage from "../NFTAuctionDetailsPage/NFTAuctionDetailsPage";

//IMPORT SMART CONTRACT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const NFTAuctionDetails = () => {
  const {nftContracts, currentAccount} = useContext(NFTMarketplaceContext);

  const [auctionNft, setAuctionNft] = useState({
    auctioneer: "", 
    tokenId: "",
    initialPrice: 0,
    previousBidder: "",
    lastBid: 0,
    lastBidder: "",
    startTime: 0,
    endTime: 0,
    completed: false,
    active: true,
    timestamp: 0,
    auctionId: "", 
    nftAddr: "", 
    image: "",
    name: "",
    description: ""});

  

  const router = useRouter();
  useEffect(()=> {
        if (!router.isReady) return;
        setAuctionNft(router.query)
  },[router.isReady]);

  return (
    <div>
      <NFTAuctionDetailsPage nftContracts = {nftContracts} auctionNft={auctionNft}/>
      {/* <Category /> */}
      {/* <Brand /> */}
    </div>
  );
};

export default NFTAuctionDetails;
