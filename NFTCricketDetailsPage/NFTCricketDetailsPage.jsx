import React, { useState, useEffect} from "react";

//INTERNAL IMPORT
import { NFTCricketDescription, NFTCricketDetailsImg } from "./NFTCricketDetailsIndex";
import Style from "./NFTCricketDetailsPage.module.css";


 const NFTCricketDetailsPage = ({nft}) => {

  console.log("   ---NFTCricketDetailsPage -- -", nft);
  return (
    <div className={Style.NFTDetailsPage}>
      <div className={Style.NFTDetailsPage_box}>
        <NFTCricketDetailsImg nft={nft}/>
        <NFTCricketDescription nft={nft}/> 
      </div>
    </div>
  );
};

export default NFTCricketDetailsPage;
