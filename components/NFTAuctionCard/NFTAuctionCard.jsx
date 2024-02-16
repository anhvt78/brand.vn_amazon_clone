import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

import {getLocalImg} from "../../database/getDetailNft"

//INTERNAL IMPORT
import Style from "./NFTAuctionCard.module.css";
import images from "../../img";

const NFTAuctionCard = ({NFTAuctionData}) => {

  // const getLocalImg = (tokenType) => {
  //   switch (tokenType) {
  //     case "Common":
  //       return {img: images.nft_cw_common, name: "Common"};
  //       break;
  //     case "Uncommon":
  //       return {img: images.nft_cw_uncommon, name: "Uncommon"};
  //       break;
  //     case "Rare":
  //       return {img: images.nft_cw_rare, name: "Rare"};
  //       break;
  //     case "Epic":
  //       return {img: images.nft_cw_eric, name: "Epic"};
  //       break;
  //     case "Legend":
  //       return {img: images.nft_cw_legen, name: "Legend"};
  //       break;
  //     default:
  //       return {img: images.upload, name: "Noname"};
  //   }
  // };

  const [like, setLike] = useState(true);

  const likeNft = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  // console.log(NFTData);

  return (
    <div className={Style.NFTAuctionCard}>
      {NFTAuctionData.map((el, i) => (
        <Link href={{pathname: "/NFTAuctionDetails", query: el}} key={i + 1}> 
          <div className={Style.NFTAuctionCard_box}>
          <div className={Style.NFTAuctionCard_box_img}>
            <Image
              src={getLocalImg(el.tokenType).img}
              alt="NFT images"
              width={600}
              height={600}
              className={Style.NFTAuctionCard_box_img_img}
            />
          </div>

          <div className={Style.NFTAuctionCard_box_update}>
            <div className={Style.NFTAuctionCard_box_update_left}>
              <div
                className={Style.NFTAuctionCard_box_update_left_like}
                onClick={() => likeNft()}
              >
                {like ? (
                  <AiOutlineHeart />
                ) : (
                  <AiFillHeart
                    className={Style.NFTAuctionCard_box_update_left_like_icon}
                  />
                )}
                {""} 22
              </div>
            </div>

            <div className={Style.NFTAuctionCard_box_update_right}>
              <div className={Style.NFTAuctionCard_box_update_right_info}>
                <small>Remaining time</small>
                <p>3h : 15m : 20s</p>
              </div>
            </div>
          </div>

          <div className={Style.NFTAuctionCard_box_update_details}>
            <div className={Style.NFTAuctionCard_box_update_details_price}>
              <div className={Style.NFTAuctionCard_box_update_details_price_box}>
                <h4>{getLocalImg(el.tokenType).name} #{el.tokenId}</h4>

                <div className={Style.NFTAuctionCard_box_update_details_price_box_box}>
                  <div
                    className={Style.NFTAuctionCard_box_update_details_price_box_bid}
                  >
                    <small>Current Bid</small>
                    <p>{el.price} ETH</p>
                  </div>
                  <div
                    className={Style.NFTAuctionCard_box_update_details_price_box_stock}
                  >
                    <small>1 in stock</small>
                  </div>
                </div>
              </div>
            </div>
            <div className={Style.NFTAuctionCard_box_update_details_category}>
              <BsImages />
            </div>
          </div>
          </div>
        </Link>

      ))}
    </div>
  );
};

export default NFTAuctionCard;
