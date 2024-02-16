import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/author.module.css";
import { Banner, NFTCardTwo } from "../collectionPage/collectionIndex";
import { Brand, Title } from "../components/componentsindex";
import FollowerTabCard from "../components/FollowerTab/FollowerTabCard/FollowerTabCard";
import images from "../img";
import {
  AuthorProfileCard,
  AuthorTaps,
  AuthorNFTCardBox,
  MarketOwnerProfileCardBox,
} from "../authorPage/componentIndex";

import Button from "../components/Button/Button";

import {Loader} from "../components/componentsindex";

import { useRouter } from "next/router";

//IMPORT SMART CONTRACT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";
const author = () => {
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

  const router = useRouter();

  const [eggsTab, setEggsTab] = useState(true);
  const [nftsTab, setNftsTab] = useState(false);
  const [forSaleTab, setForSaleTab] = useState(false);
  const [forAuctionTab, setForAuctionTab] = useState(false);
  // const [follower, setFollower] = useState(false);
  // const [following, setFollowing] = useState(false);

  //IMPORT SMART CONTRACT DATA
  const {getEggsOwn,  nftEggsOwn, getOwnCricketNFT, nftCricketsOwn, getOwnSaleNFT, nftOwnSales, getOwnAuctionNFT,
    nftOwnAuctions, currentAccount, marketOwner, checkIfWalletConnected, loading} = useContext(NFTMarketplaceContext);
  
  // const [eggNfts, setEggNfts] = useState([]);
  // const [cricketNfts, setCricketNfts] = useState([]);
  // const [nftSales, setNftSales] = useState([]);
  // const [nftAuctions, setNftAuctions] = useState([]);

  // const [isMarketOwner, setIsMarketOwner] = useState(false);

  useEffect(()=> {
    checkIfWalletConnected();
   

  }, [router.isReady]);

  useEffect( ()=> {
    getEggsOwn(currentAccount.toLowerCase());
    getOwnCricketNFT(currentAccount.toLowerCase());

    getOwnSaleNFT(currentAccount.toLowerCase());
    getOwnAuctionNFT(currentAccount.toLowerCase());

  }, []);

  
  

  // const checkmarkerOwner = () => {
  //   if (marketOwner.toUpperCase() == currentAccount.toUpperCase()) {
  //     setIsMarketOwner(true);
  //   } else {
  //     setIsMarketOwner(false);
  //   }
  // }



  return (
    <div className={Style.author}>

      {/* <Banner bannerImage={images.creatorbackground2} /> */}
{/* 
{console.log("nftEggsOwn====================", nftOwnSales)} */}

      { loading ? <Loader/> : 
      <div>
        <AuthorProfileCard currentAccount={currentAccount} />
        <AuthorTaps
              setEggsTab={setEggsTab}
              setNftsTab={setNftsTab}
              setForSaleTab={setForSaleTab}
              setForAuctionTab={setForAuctionTab} />
        <AuthorNFTCardBox
          loading = {loading}
          eggsTab={eggsTab}
          nftsTab = {nftsTab}
          forSaleTab={forSaleTab}
          forAuctionTab={forAuctionTab}
                // follower={follower}
                // following={following}
          nftEggsOwn={nftEggsOwn}
          nftCricketsOwn={nftCricketsOwn}
          nftSales={nftOwnSales}
          nftAuctions={nftOwnAuctions} />
      
        </div>
      }

      {/* <AuthorProfileCard currentAccount={currentAccount}/>
      <AuthorTaps
        setMyTab={setMyTab}
        setForSaleTab={setForSaleTab}
        setForAuctionTab={setForAuctionTab}
        // setFollower={setFollower}
        // setFollowing={setFollowing}
      /> */}

    {/* {loading ? 
      (<Loader/>) : 
      (<AuthorNFTCardBox
              myTab={myTab}
              forSaleTab={forSaleTab}
              forAuctionTab={forAuctionTab}
              // follower={follower}
              // following={following}
              myNFTs={nftsOwn}
              nftSales={nftsSale}
              nftAuctions={nftsAuction}
        />)
    } */}
      {/* <Title
        heading="Popular Creators"
        paragraph="Click on music icon and enjoy NTF music or audio
"
      />
      <div className={Style.author_box}>
        {followerArray.map((el, i) => (
          <FollowerTabCard i={i} el={el} key={i + 1}/>
        ))}
      </div> */}

      {/* <Brand /> */}
    </div>
  );
};

export default author;
