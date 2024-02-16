import React from "react";

//INTERNAL IMPORT
import { NFTAuctionDescription, NFTAuctionDetailsImg, NFTAuctionTabs } from "./NFTAuctionDetailsIndex";
import Style from "./NFTAuctionDetailsPage.module.css";

const NFTAuctionDetailsPage = ({nftContracts, auctionNft}) => {
  return (
    <div className={Style.NFTAuctionDetailsPage}>
      <div className={Style.NFTAuctionDetailsPage_box}>
        <NFTAuctionDetailsImg auctionNft={auctionNft}/>
        <NFTAuctionDescription auctionNft={auctionNft}/>
      </div>
    </div>
  );
};

export default NFTAuctionDetailsPage;
