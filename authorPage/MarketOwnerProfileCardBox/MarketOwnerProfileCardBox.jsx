import React, { useState } from "react";

//INTERNAL IMPORT
import Style from "./MarketOwnerProfileCardBox.module.css";
import images from "../../img";
import { NFTCardTwo } from "../../collectionPage/collectionIndex";

const MarketOwnerProfileCardBox = ({
  NFTContracts
}) => {

  return (
    <div className={Style.MarketOwnerProfileCardBox}>
      <NFTCardTwo NFTData={NFTContracts}/> 
    </div>
  );
};

export default MarketOwnerProfileCardBox;
