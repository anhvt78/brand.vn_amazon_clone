import React, { useState } from "react";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";

import Link from "next/link";

import images from "../../img";

import {getLocalImg} from "../../database/getDetailNft"

//INTERNAL IMPORT
import Style from "./NFTSaleCard.module.css";
import { LikeProfile } from "../../components/componentsindex";

const NFTSaleCard = ({ NFTData }) => {
  const [like, setLike] = useState(false);
  const [likeInc, setLikeInc] = useState(21);

  const likeNFT = () => {
    if (!like) {
      setLike(true);
      setLikeInc(23);
    } else {
      setLike(false);
      setLikeInc(23 + 1);
    }
  };

  // const getLocalImg = (tokenType) => {
	// 	switch (tokenType) {
	// 		case "1":
	// 			return {img: images.nft_cw_common, name: "Common"};
	// 			break;
	// 		case "2":
	// 			return {img: images.nft_cw_uncommon, name: "Uncommon"};
	// 			break;
	// 		case "3":
	// 			return {img: images.nft_cw_rare, name: "Rare"};
	// 			break;
	// 		case "4":
	// 			return {img: images.nft_cw_eric, name: "Epic"};
	// 			break;
	// 		case "5":
	// 			return {img: images.nft_cw_legen, name: "Legend"};
	// 			break;
	// 		default:
	// 			return {img: images.upload, name: "Noname"};
	// 	}
	// };

  // console.log("NFTData ==> ", NFTData);

  return (
    <div className={Style.NFTSaleCard}>
      {NFTData && NFTData.map((el, i) => (
        
        
        <Link href={{pathname: "/NFTSaleDetails", query: el}} key={i+1}>
        <div className={Style.NFTSaleCard_box} key={i + 1}>
          <div className={Style.NFTSaleCard_box_like}>
            <div className={Style.NFTSaleCard_box_like_box}>
              <div className={Style.NFTSaleCard_box_like_box_box}>
                <BsImage className={Style.NFTSaleCard_box_like_box_box_icon} />
                <p onClick={() => likeNFT()}>
                  {like ? <AiOutlineHeart /> : <AiFillHeart />}
                  {""}
                  <span>{likeInc + 1}</span>
                </p>
              </div>
            </div>
          </div>

           <div className={Style.NFTSaleCard_box_img}>
            <Image
              src={getLocalImg(el.tokenType).img}
              alt="NFT"
              width={300}
              height={300}
              objectFit="cover"
              className={Style.NFTSaleCard_box_img_img}
            />
          </div>

          <div className={Style.NFTSaleCard_box_info}>
            <div className={Style.NFTSaleCard_box_info_left}>
              <LikeProfile />
              <p>{getLocalImg(el.tokenType).name} NFT</p>
            </div>
            <small>#{el.tokenId}</small>
          </div>

          <div className={Style.NFTSaleCard_box_price}>
            <div className={Style.NFTSaleCard_box_price_box}>
              <small>Price</small>
              <p>{el.price} ETH</p>
            </div>
            <p className={Style.NFTSaleCard_box_price_stock}>
              <MdTimer /> <span>{Date(el.timeStamp)}</span>
            </p>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default NFTSaleCard;
