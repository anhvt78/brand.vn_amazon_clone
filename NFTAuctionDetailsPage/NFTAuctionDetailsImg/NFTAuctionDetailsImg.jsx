import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsImages } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./NFTAuctionDetailsImg.module.css";
import {getLocalImg} from "../../database/getDetailNft"

const NFTAuctionDetailsImg = ({auctionNft}) => {
  const [description, setDescription] = useState(true);
  const [details, setDetails] = useState(true);
  const [like, setLike] = useState(false);

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

  const likeNFT = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  return (
    <div className={Style.NFTAuctionDetailsImg}>
      <div className={Style.NFTAuctionDetailsImg_box}>
        <div className={Style.NFTAuctionDetailsImg_box_NFT}>
          <div className={Style.NFTAuctionDetailsImg_box_NFT_like}>
            <BsImages className={Style.NFTAuctionDetailsImg_box_NFT_like_icon} />
            <p onClick={() => likeNFT()}>
              {like ? (
                <AiOutlineHeart
                  className={Style.NFTAuctionDetailsImg_box_NFT_like_icon}
                />
              ) : (
                <AiFillHeart
                  className={Style.NFTAuctionDetailsImg_box_NFT_like_icon}
                />
              )}
              <span>23</span>
            </p>
          </div>


          <div className={Style.NFTAuctionDetailsImg_box_NFT_img}>
            <Image
              src={getLocalImg(auctionNft.tokenType).img}
              className={Style.NFTAuctionDetailsImg_box_NFT_img_img}
              alt="NFT image"
              width={700}
              height={800}
              objectFit="cover"

             

            />
          </div>
        </div>

        <div
          className={Style.NFTAuctionDetailsImg_box_description}
          onClick={() => openDescription()}
        >
          <p>Description</p>
          {description ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {description && (
          <div className={Style.NFTAuctionDetailsImg_box_description_box}>
            <p>
              {getLocalImg(auctionNft.tokenType).desc}
            </p>
          </div>
        )}

        <div
          className={Style.NFTAuctionDetailsImg_box_details}
          onClick={() => openDetails()}
        >
          <p>Details</p>
          {details ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {details && (
          <div className={Style.NFTAuctionDetailsImg_box_details_box}>
            {/* <small>2000 x 2000 px.IMAGE(685KB)</small> */}
            <p>
              <small>Owner Address:</small>
              <br></br>
              {auctionNft.owner}
            </p>
            <p>
              <small>Token ID: </small>
              &nbsp;&nbsp;#{auctionNft.tokenId}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NFTAuctionDetailsImg;
