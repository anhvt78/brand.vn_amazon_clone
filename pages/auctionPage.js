import React, {useEffect, useState, useContext} from "react";

//INTERNAL IMPORT
import Style from "../styles/collection.module.css";
import images from "../img";
import {
  Banner,
  CollectionProfile,
  NFTCardTwo,
} from "../collectionPage/collectionIndex";
import { Slider, Brand, Loader } from "../components/componentsindex";
import Filter from "../components/Filter/Filter";
//SMART CONTRACT IMPORT
import {NFTMarketplaceContext} from "../Context/NFTMarketplaceContext"


const auctionPage = () => {

  const {fetchAuctionItems} = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);

  useEffect(()=>{
    fetchAuctionItems("0x31eF95FcA88D512Eaafa584D91E7BdC913fde32f").then((items)=> {
      if(items)
      {
        setNfts(items.reverse());
        // setNftsCopy(items);
        // console.log("items: ", items);
      }

    })
  },[]);

  // const collectionArray = [
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  // ];
  return (
    <div className={Style.collection}>
      {/* <Banner bannerImage={images.creatorbackground1} /> */}
      <CollectionProfile />
      <Filter />
      {/* <NFTCardTwo NFTData={collectionArray} /> */}

      {nfts.length == 0 ? <Loader/> : <NFTCardTwo NFTData={nfts} />}

      {/* <Slider />
      // <Brand /> */}
    </div>
  );
};

export default auctionPage;
