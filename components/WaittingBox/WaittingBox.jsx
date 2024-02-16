import React, {useState, useEffect, useContext} from 'react'
import Image from "next/image";
import Style from "./WaittingBox.module.css";

//SMART CONTRACT IMPORT CONTEXT
import {NFTMarketplaceContext} from "../../Context/NFTMarketplaceContext";
import images from "../../img";

const WaittingBox = () => {
  // const {error, setOpenError} = useContext(NFTMarketplaceContext);
  return (
    <div className={Style.WaittingBox}>
      <div className={Style.WaittingBox_box_info}>
          <Image 
            src={images.errorgif}
            alt='error' 
            width={200}     
            height={200} 
            objectFit='cover'
            className={Style.WaittingBox_box_info_img}/>
        </div>
    </div>
  )
}

export default WaittingBox