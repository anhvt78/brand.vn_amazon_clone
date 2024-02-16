import React from "react";

//INTERNAL IMPORT
import { EggDescription, EggDetailsImg } from "./EggDetailsIndex";
import Style from "./EggDetailsPage.module.css";

 const EggDetailsPage = ({nft}) => {

  return (
    <div className={Style.NFTDetailsPage}>
      <div className={Style.NFTDetailsPage_box}>
        <EggDetailsImg nft={nft}/>
        <EggDescription nft={nft}/>
      </div>
    </div>
  );
};

export default EggDetailsPage;
