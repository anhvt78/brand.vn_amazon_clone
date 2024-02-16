import React, { useState } from "react";

//INTERNAL IMPORT
import Style from "./AuthorNFTCardBox.module.css";
import images from "../../img";
import { NFTEggsCard,NFTCricketsCard, NFTSaleCard, NFTAuctionCard } from "../../collectionPage/collectionIndex";
// import FollowerTabCard from "../../components/FollowerTab/FollowerTabCard/FollowerTabCard";

import {Loader} from "../../components/componentsindex";

const AuthorNFTCardBox = ({
  loading,
  eggsTab,
  nftsTab,
  forSaleTab,
  forAuctionTab,
  // follower,
  // following,
  nftEggsOwn,
  nftCricketsOwn,
  nftSales,
  nftAuctions,
  
}) => {
  // const collectiablesArray = [
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  // ];

  // const createdArray = [
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  // ];

  // const likeArray = [
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  // ];

  // const followerArray = [
  //   {
  //     background: images.creatorbackground1,
  //     user: images.user1,
  //     seller: "d84fkkllsd00987yyhg998888ghrx"
  //   },
  //   {
  //     background: images.creatorbackground2,
  //     user: images.user2,
  //     seller: "d84fkkllsd00987yyhg998888ghrx"
  //   },
  //   {
  //     background: images.creatorbackground3,
  //     user: images.user3,
  //     seller: "d84fkkllsd00987yyhg998888ghrx"
  //   },
  //   {
  //     background: images.creatorbackground4,
  //     user: images.user4,
  //     seller: "d84fkkllsd00987yyhg998888ghrx"
  //   },
  //   {
  //     background: images.creatorbackground5,
  //     user: images.user5,
  //     seller: "d84fkkllsd00987yyhg998888ghrx"
  //   },
  //   {
  //     background: images.creatorbackground6,
  //     user: images.user6,
  //     seller: "d84fkkllsd00987yyhg998888ghrx"
  //   },
  // ];

  // const followingArray = [
  //   {
  //     background: images.creatorbackground3,
  //     user: images.user3,
  //     seller: "d84fkkllsd00987yyhg998888ghrx"
  //   },
  //   {
  //     background: images.creatorbackground4,
  //     user: images.user4,
  //     seller: "d84fkkllsd00987yyhg998888ghrx"
  //   },
  //   {
  //     background: images.creatorbackground5,
  //     user: images.user5,
  //     seller: "d84fkkllsd00987yyhg998888ghrx"
  //   },
  //   {
  //     background: images.creatorbackground6,
  //     user: images.user6,
  //     seller: "d84fkkllsd00987yyhg998888ghrx"
  //   },
  //   {
  //     background: images.creatorbackground1,
  //     user: images.user1,
  //     seller: "d84fkkllsd00987yyhg998888ghrx"
  //   },
  // ];
  return (
    <div className={Style.AuthorNFTCardBox}>
      {eggsTab && (loading ? <Loader/> : <NFTEggsCard NFTData={nftEggsOwn}/>)}
      {nftsTab && (loading ? <Loader/> : <NFTCricketsCard NFTData={nftCricketsOwn}/>)}
      {/* {console.log("myNFTs============================> ",myNFTs)} */}
      {forSaleTab && (loading ? <Loader/> :<NFTSaleCard NFTData={nftSales} />) }

      {/* {console.log("nftSales============================> ",nftSales)} */}
      {forAuctionTab && (loading ? <Loader/> :<NFTAuctionCard NFTData={nftAuctions} /> )}
      {/* {follower && (
        <div className={Style.AuthorNFTCardBox_box}>
          {followerArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} key={i + 1}/>
          ))}
        </div>
      )}
      {following && (
        <div className={Style.AuthorNFTCardBox_box}>
          {followingArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} key={i + 1}/>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default AuthorNFTCardBox;
