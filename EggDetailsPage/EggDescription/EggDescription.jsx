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
import Style from "./EggDescription.module.css";
import images from "../../img";
import { Button } from "../../components/componentsindex.js";
import { EggOpen, EggTransfer } from "../EggDetailsIndex";
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";
import Link from "next/link";


const EggDescription = ({ nft }) => {
  const [social, setSocial] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);
  // const [saleTab, setSaleTab] = useState(true);
  // const [auctionTab, setAuctionTab] = useState(false);
  // const [transferTab, setTransferTab] = useState(false);
  // const [price, setPrice] = useState("0");

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
  //const {buyNFT, currentAccount} = useContext(NFTMarketplaceContext);

  return (
    <div className={Style.EggDescription}>
      <div className={Style.EggDescription_box}>
        <div className={Style.EggDescription_box_profile}>
        <h1>{nft.name || ""} #{nft.tokenId}</h1>
        <div className={Style.EggDescription_box_profile_biding_box_card}>
          <EggOpen nft = {nft}/>
        </div>
        <br/>
        <div className={Style.EggDescription_box_profile_biding_box_card}>
          <EggTransfer nft = {nft}/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default EggDescription;
