import React, {useState, useEffect, useContext} from 'react'
import Image from "next/image";
import Style from "./Waitter.module.css";

//SMART CONTRACT IMPORT CONTEXT
import {NFTMarketplaceContext} from "../../Context/NFTMarketplaceContext";
import images from "../../img";

const Waitter = () => {
  const {setOpenError} = useContext(NFTMarketplaceContext);
  return (
    <div className={Style.Waitter} onClick={() => setOpenError(false)}>
      <div className={Style.Waitter_box}>
        <Image 
            src={images.loader}
            alt='error' 
            width={150}     
            height={150} 
            objectFit='cover'
            className={Style.Waitter_box_info_img}
        />
      </div>
    </div>
  )
}

export default Waitter