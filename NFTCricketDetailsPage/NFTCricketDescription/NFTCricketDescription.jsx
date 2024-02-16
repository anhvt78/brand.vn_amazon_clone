import React, { useContext, useState } from "react";
import Image from "next/image";
import {useRouter} from "next/router";
import {
  MdVerified,
  MdCloudUpload,
  MdPaid,
  MdTimer,
  MdReportProblem,
  MdOutlineDeleteSweep,
} from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaWallet, FaPercentage, FaGavel } from "react-icons/fa";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { BiTransferAlt, BiDollar } from "react-icons/bi";

//INTERNAL IMPORT
import Style from "./NFTCricketDescription.module.css";
import images from "../../img";
import { Button } from "../../components/componentsindex.js";
import { NFTCricketTabs, NFTCricketSale, NFTCricketAuction, NFTCricketTransfer } from "../NFTCricketDetailsIndex";
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";
import Link from "next/link";

import {getLocalImg} from "../../database/getDetailNft";


const NFTCricketDescription = ({ nft }) => {
  const [social, setSocial] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);
  const [saleTab, setSaleTab] = useState(true);
  const [auctionTab, setAuctionTab] = useState(false);
  const [transferTab, setTransferTab] = useState(false);
  const [price, setPrice] = useState("0");

  const router = useRouter();

  const historyArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
  ];
  const provananceArray = [
    images.user6,
    images.user7,
    images.user8,
    images.user9,
    images.user10,
  ];
  const ownerArray = [
    images.user1,
    images.user8,
    images.user2,
    images.user6,
    images.user5,
  ];

  const openSocial = () => {
    if (!social) {
      setSocial(true);
      setNFTMenu(false);
    } else {
      setSocial(false);
    }
  };

  const openNFTMenu = () => {
    if (!NFTMenu) {
      setNFTMenu(true);
      setSocial(false);
    } else {
      setNFTMenu(false);
    }
  };

  const openTabs = (e) => {
    const btnText = e.target.innerText;

  };


  //SMART CONTRACT DATA
  // const {buyNFT, currentAccount} = useContext(NFTMarketplaceContext);

  return (
    <div className={Style.NFTCricketDescription}>
      {/* <p>#{nft.tokenId}</p> */}
      {/* <NFTCricketTabs
              setSaleTab={setSaleTab}
              setAuctionTab={setAuctionTab}
              setTransferTab={setTransferTab} /> */}

              
      <div className={Style.NFTCricketDescription_box}>


        {/* //Part TWO */}
        <div className={Style.NFTCricketDescription_box_profile}>
        <h1>Cricket {nft && getLocalImg(nft.tokenType).name || ""} #{nft && nft.tokenId}</h1>
        {/* {saleTab && ( */}
        <div className={Style.NFTCricketDescription_box_profile_biding_box_card}>
                {/* <NFTTabs dataTab={historyArray} /> */}
          <NFTCricketSale saleNft = {nft}/>
        </div>
        <br/>
            {/* )} */}
            {/* {auctionTab && ( */}
        <div className={Style.NFTCricketDescription_box_profile_biding_box_card}>
          <NFTCricketAuction nft = {nft}/>
        </div>
        <br/>
            {/* )} */}

            {/* {transferTab && ( */}
        <div className={Style.NFTCricketDescription_box_profile_biding_box_card}>
          <NFTCricketTransfer nft = {nft}/>
        </div>
        
            {/* )} */}
          {/* <p>Virtual Worlds</p> */}

        </div>
      </div>
    </div>
  );
};

export default NFTCricketDescription;
