import React from "react";

//INTERNAL IMPORT
import { NFTSaleDescription, NFTSaleDetailsImg, NFTSaleTabs } from "./NFTSaleDetailsIndex";
import Style from "./NFTSaleDetailsPage.module.css";

const NFTSaleDetailsPage = ({nft}) => {
  return (
    <div className={Style.NFTSaleDetailsPage}>
      <div className={Style.NFTSaleDetailsPage_box}>
        <NFTSaleDetailsImg nft={nft}/>
        <NFTSaleDescription nft={nft}/>
      </div>
    </div>
  );
};

export default NFTSaleDetailsPage;
