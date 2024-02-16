import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsImages } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./NFTCricketDetailsImg.module.css";
import images from "../../img";

import {getLocalImg} from "../../database/getDetailNft";

const NFTCricketDetailsImg = ({nft}) => {
  console.log("[[[[[[", nft);
  // return false;
	// const commonURI =  
	// 	"https://ipfs.io/ipfs/QmRpGCpkpg5BWJqQvNNvbnh9TtRJjHHWKtCetN2qynPXpE";
	// const uncommonURI =
	// 	"https://ipfs.io/ipfs/QmdME1pzHHtaqLHZo8GnkwphabRGgUp2K28UoGSTwGBcCP";
	// const rareURI =
	// 	"https://ipfs.io/ipfs/QmP6DhaWiXHWjop4MfpBtvBovv1GvGH9dDdBH9pR7FkJH9";
	// const epicURI =
	// 	"https://ipfs.io/ipfs/QmdFxVwPjmM81veVRDKvrWX91YzM3pfzgBPBreMLDsD3Hk";
	// const legendURI =
	// 	"https://ipfs.io/ipfs/QmSV8yUNDKgsiKLLHoykQg44yvr4jLuVKS5US4gmN1VCbN";

  const commonDesc = "Most of the Cricket World inhabitants wear silver-grey armor, known as Aidens. They are great in defense but restricted in speed and strength.";
  const uncommonDesc = "Unlike Aiden, Dylan wears deep blue armor made of sea crystals. Dylan has faster speed and strong resilience.";
  const rareDesc = "Dion is a mighty red-cloaked warrior. Dion carries the blood of the god of war with extraordinary strength and defense.";
  const epicDesc = "Knox is the most warlike tribe in the Crickets World. This tribe is scarce, and they have incredible strength, defense, and extreme agility. They are born talented warriors on the battlefield.";
  const legendDesc = "Jez is the smallest tribe but the most powerful. Jez has immeasurable power of strength, speed, defense, and agility. They dominate the entire Crickets World.";

  const [description, setDescription] = useState(true);
  const [details, setDetails] = useState(true);
  // const [like, setLike] = useState(false);

  const openDescription = () => {
    if (!description) {
      setDescription(true);
    } else {
      setDescription(false);
    }
  };

  const openDetails = () => {
    if (!details) {
      setDetails(true);
    } else {
      setDetails(false);
    }
  };

	// const getLocalImg = (tokenType) => {
  //   console.log("=====tokenType: " , tokenType);
	// 	switch (tokenType) {
	// 		case "1":
	// 			return {image: images.nft_cw_common, desc: commonDesc}
	// 			break;
	// 		case "2":
	// 			return {image: images.nft_cw_uncommon, desc: uncommonDesc}
	// 			break;
	// 		case "3":
  //       return {image: images.nft_cw_rare, desc: rareDesc}
	// 			break;
	// 		case "4":
  //       return {image: images.nft_cw_eric, desc: epicDesc}
	// 			break;
	// 		case "5":
  //       return {image: images.nft_cw_legen, desc: legendDesc}
	// 			break;
	// 		default:
	// 			return {image: images.upload, desc: ""}
	// 	}
	// };

  return (
    <div className={Style.NFTDetailsImg}>
      <div className={Style.NFTDetailsImg_box}>
        <div className={Style.NFTDetailsImg_box_NFT}>
          {/* <div className={Style.NFTDetailsImg_box_NFT_like}>
            <BsImages className={Style.NFTDetailsImg_box_NFT_like_icon} />
            <p onClick={() => likeNFT()}>
              {like ? (
                <AiOutlineHeart
                  className={Style.NFTDetailsImg_box_NFT_like_icon}
                />
              ) : (
                <AiFillHeart
                  className={Style.NFTDetailsImg_box_NFT_like_icon}
                />
              )}
              <span>23</span>
            </p>
          </div> */}


          <div className={Style.NFTDetailsImg_box_NFT_img}>
            <Image
              src={getLocalImg(nft.tokenType).img}
              className={Style.NFTDetailsImg_box_NFT_img_img}
              alt="NFT image"
              width={700}
              height={800}
              objectFit="cover"

             

            />
          </div>
        </div>

        <div
          className={Style.NFTDetailsImg_box_description}
          onClick={() => openDescription()}
        >
          <p>Description:</p>
          {description ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {description && (
          <div className={Style.NFTDetailsImg_box_description_box}>
            <p>
              {getLocalImg(nft.tokenType).desc}
            </p>
          </div>
        )}

        <div
          className={Style.NFTDetailsImg_box_details}
          onClick={() => openDetails()}
        >
          <p>Details:</p>
          {details ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {details && (
          <div className={Style.NFTDetailsImg_box_details_box}>
            {/* <small>2000 x 2000 px.IMAGE(685KB)</small> */}
            <p>
              <small>Token ID:</small>
              &nbsp;&nbsp;#{nft && nft.tokenId}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NFTCricketDetailsImg;
