import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
// import Style from "../styles/index.module.css";
import {
  HeroSection,
  // Service,
  BigNFTSilder,
  // Subscribe,
  Title,
  // Category,
  Filter,
  NFTSaleCard,
  NFTAuctionCard,
  // Collection,
  // AudioLive,
  // FollowerTab,
  Slider,
  Banner,
  Products
  // Brand,
  // Video,
  // Loader,
} from "../components/componentsindex";

import {getTopCreators} from "../TopCreators/TopCreator"
import {Loader} from "../components/componentsindex";

//IMPORT CONTRACT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const Home = () => {
 
  const {getBidStep, checkIfWalletConnected, nftSales, nftAuctions, joinAuction, bidStep,  currentAccount, loading, setOpenError, setError} = useContext(NFTMarketplaceContext);
  // const [nfts, setNfts] = useState([]);
  // const [nftsCopy, setNftsCopy] = useState([]);
  
  // useEffect(()=> {
  //   checkIfWalletConnected();
  // }, []);

  return (
    <div>
        <Banner />
        <Products />
       
    </div>
  );
};

export default Home;
