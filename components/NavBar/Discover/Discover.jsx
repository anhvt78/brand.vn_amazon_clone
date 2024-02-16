// import React, { useState, useContext } from "react";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./Discover.module.css";

// import {NFTMarketplaceContext} from "@/Context/NFTMarketplaceContext";



const Discover = ({currentAccount, marketOwner, nftContracts}) => {
  //--------DISCOVER NAVIGATION MENU

  // console.log("marketOwner == ", marketOwner);
  // const [discover, setDiscover] = useState([]);
  // const { currentAccount, marketOwner} = useContext(NFTMarketplaceContext);

  var discover = [
    {
      name: "Search",
      link: "searchPage",
    },
    {
      name: "Collection",
      link: "collection",
    },

    {
      name: "Auction",
      link: "auctionPage",
    },
    {
      name: "Manager",
      link: "uploadNFT",
    },
    {
      name: "Account",
      link: "author",
    },
    {
      name: "Connect Wallet",
      link: "connectWallet",
    },
    // },
  ];

  if (currentAccount && marketOwner && (marketOwner.toUpperCase() == currentAccount.toUpperCase()))
  {
    if (nftContracts.length > 0) 
    {    discover = [
      {
        name: "Search",
        link: "searchPage",
      },
      {
        name: "Collection",
        link: "collection",
      },
  
      {
        name: "Auction",
        link: "auctionPage",
      },
      // {
      //   name: "Manager NFT",
      //   link: "addNFTToMarket",
      // },
      // {
      //   name: "Update NFT",
      //   link: "updateNFTInfo",
      // },
      {
        name: "Account",
        link: "author",
      },
      {
        name: "Connect Wallet",
        link: "connectWallet",
      },
      // {
      //   name: "Blog",
      //   link: "blog",
      // },
    ];
  } else 
    {
      discover = [
        {
          name: "Search",
          link: "searchPage",
        },
        {
          name: "Collection",
          link: "collection",
        },
    
        {
          name: "Auction",
          link: "auctionPage",
        },
        {
          name: "Manager NFT",
          link: "addNFTToMarket",
        },
        {
          name: "Account",
          link: "author",
        },
        {
          name: "Connect Wallet",
          link: "connectWallet",
        },
        // {
        //   name: "Blog",
        //   link: "blog",
        // },
      ];
    }


    // setDiscover(items);
  } else
  {
    discover = [
      {
        name: "Search",
        link: "searchPage",
      },
      {
        name: "Collection",
        link: "collection",
      },
  
      {
        name: "Auction",
        link: "auctionPage",
      },
      {
        name: "Account",
        link: "author",
      },
      {
        name: "Connect Wallet",
        link: "connectWallet",
      },,
    ];

  }

  // console.log(currentAccount + " | " + marketOwner)


  return (
    <div>
      {discover && discover.map((el, i) => (
        <div key={i + 1} className={Style.discover} onClick={() => {}}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;
