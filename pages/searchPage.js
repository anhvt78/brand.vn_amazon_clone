import React, {useEffect, useState, useContext} from "react";

//INTRNAL IMPORT
import Style from "../styles/searchPage.module.css";
import { Slider, Brand, Loader } from "../components/componentsindex";
import { SearchBar } from "../SearchPage/searchBarIndex";
import { Filter } from "../components/componentsindex";

import { NFTCardTwo, Banner } from "../collectionPage/collectionIndex";
import images from "../img";

//SMART CONTRACT IMPORT
import {NFTMarketplaceContext} from "../Context/NFTMarketplaceContext"

const searchPage = () => {
  const {getNFTList, fetchMarketItems} = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

 

  useEffect(()=>{

    const nfts = [];

    getNFTList().then((contracts) => {

      contracts.map(async ({nftAddr,image,name,description}) => {
        await fetchMarketItems(nftAddr).then((items)=> {

          items.map(({tokenId, seller, buyer, owner, price: unformattedPrice, sold, timestamp, marketId}) => {
            const item = {tokenId, seller, buyer, owner, price: unformattedPrice, sold, timestamp, marketId, nftAddr,image,name,description};
            nfts.push(item);
            
          });
    
        })
        // console.log("===nfts: ", nfts);
        // setNfts(nfts);

        if(nfts)
          {
            setNfts(nfts.reverse());
            setNftsCopy(nfts);
            // console.log(">>>>items: ", nfts);
          }

      });

    }); 

    

   
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

  const onHandleSearch = (value) => {
    const filteredNFTS = nfts.filter(({name}) => 
    name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredNFTS.length === 0) {
      setNfts(nftsCopy);
    } else {
      setNfts(filteredNFTS);
    }
  };

  const onClearSearch = () => {
    if (nfts.length && nftsCopy.length) {
      setNfts(nftsCopy);
    }
  }

  return (
    <div className={Style.searchPage}>
      {/* <Banner bannerImage={images.creatorbackground2} /> */}
      <SearchBar 
        onHandleSearch={onHandleSearch}
        onClearSearch={onClearSearch}
      />
      <Filter />
      {nfts.length == 0 ? <Loader/> : <NFTCardTwo NFTData={nfts} />}
      <Slider />
      {/* <Brand /> */}
    </div>
  );
};

export default searchPage;
