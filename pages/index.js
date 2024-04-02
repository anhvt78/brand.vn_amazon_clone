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
  Products,
  // Brand,
  // Video,
  // Loader,
} from "../components/componentsindex";

import { getTopCreators } from "../TopCreators/TopCreator";
import { Loader } from "../components/componentsindex";

//IMPORT CONTRACT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";
// import { getProducts } from "../Context/api/api";

import { ColorModeContext, useMode } from "@/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

const Home = () => {
  const {
    getBidStep,
    checkIfWalletConnected,
    nftSales,
    nftAuctions,
    joinAuction,
    bidStep,
    currentAccount,
    loading,
    setOpenError,
    setError,
  } = useContext(NFTMarketplaceContext);
  // const [data, setData] = useState([]);
  // // const [nftsCopy, setNftsCopy] = useState([]);

  // useEffect(async ()=> {
  //   const products = await getProducts();
  //   setData(products.data)

  //   // console.log("products = ", data);
  // },[]);

  const [theme, colorMode] = useMode();

  return (
    // <div>
    //   {/* <Banner /> */}
    //   <Products />
    // </div>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        <div>
          {/* <Banner /> */}
          <Products />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Home;
