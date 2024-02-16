import React, { useContext, useState, useRef, useEffect } from "react";
import Image from "next/image";
import {useRouter} from "next/router";
import {
  MdVerified,
  MdCloudUpload,
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
import Style from "./NFTAuctionDescription.module.css";
import images from "../../img";
import { Button } from "../../components/componentsindex.js";
import { NFTAuctionTabs } from "../NFTAuctionDetailsIndex";
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";
import Link from "next/link";

import {getLocalImg} from "../../database/getDetailNft"

const NFTAuctionDescription = ({auctionNft}) => {

    //SMART CONTRACT DATA
   const {currentAccount, cancelAuction, finishAuction, joinAuction, bidStep} = useContext(NFTMarketplaceContext);

  const [timerDays , setTimerDays] = useState("00");
  const [timerHours , setTimerHours] = useState("00");
  const [timerMinutes , setTimerMinutes] = useState("00");
  const [timerSeconds , setTimerSeconds] = useState("00");
  const [auctionStatus , setAuctionStatus] = useState("Auction comming soon");
  // const [initialPrice , setInitialPrice] = useState("0");
  const [currentBid , setCurrentBid] = useState(0);
  // const [lastBid , setLastBid] = useState("0");


  const [social, setSocial] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);
  const [history, setHistory] = useState(true);
  const [provanance, setProvanance] = useState(false);
  const [owner, setOwner] = useState(false);

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

    if (btnText == "Bid History") {
      setHistory(true);
      setProvanance(false);
      setOwner(false);
    } else if (btnText == "Provanance") {
      setHistory(false);
      setProvanance(true);
      setOwner(false);
    }
  };

  const openOwmer = () => {
    if (!owner) {
      setOwner(true);
      setHistory(false);
      setProvanance(false);
    } else {
      setOwner(false);
      setHistory(true);
    }
  };

  let timerInstance = useRef();

  const startTimer = () => {
    timerInstance = setInterval(() => {

      const now = new Date().getTime();

      const startTime = auctionNft.startTime * 1000;
      const endTime = auctionNft.endTime * 1000;

      // console.log("auctionNft = " + JSON.stringify(auctionNft) + " | startTime = " + startTime + " | endTime = " + endTime + " | now = " + now);

      if (now <= startTime) 
      {
        const timeDiff = startTime - now;
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60))/(1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60))/1000);
        // setAuctionStatus("Auction comming soon");
        setAuctionStatus("Auction comming soon");
        setTimerDays(`0${days}`.slice(-2));
        setTimerHours(`0${hours}`.slice(-2));
        setTimerMinutes(`0${minutes}`.slice(-2));
        setTimerSeconds(`0${seconds}`.slice(-2));

      } else if ((now > startTime) && (now <= endTime))
      {
        const timeDiff = endTime - now;
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60))/(1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60))/1000);
        setAuctionStatus("Auction will finish");
        setTimerDays(`0${days}`.slice(-2));
        setTimerHours(`0${hours}`.slice(-2));
        setTimerMinutes(`0${minutes}`.slice(-2));
        setTimerSeconds(`0${seconds}`.slice(-2));

      } else if (now > endTime) 
      {
        const timeDiff = now - endTime;
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60))/(1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60))/1000);
        setAuctionStatus("Auction was finished");
        setTimerDays(`0${days}`.slice(-2));
        setTimerHours(`0${hours}`.slice(-2));
        setTimerMinutes(`0${minutes}`.slice(-2));
        setTimerSeconds(`0${seconds}`.slice(-2));
      }

    }, 1000);
  }

useEffect(()=> {
  // setInitialPrice(NFTData[NFTData.length - 1].initialPrice);
  // setBidStep(el.bidStep);
  if (auctionNft.lastBidder == auctionNft.owner)
  {
    setCurrentBid(auctionNft.lastBid); 
  } else {
    // setCurrentBid((auctionNft.lastBid * (100 + parseInt(el.bidStep)) / 100 ));
    const valueBidStep = (auctionNft.initialPrice * parseInt(bidStep))/100;
    const bidValue = valueBidStep + Number(auctionNft.lastBid);

    setCurrentBid((Number(auctionNft.lastBid) + Number(auctionNft.initialPrice * parseInt(bidStep)/100)));
  }

  startTimer();
  
  return () => {
      clearInterval(timerInstance);
  }

}, [auctionNft]);


  return (
    <div className={Style.NFTAuctionDescription}>
      <div className={Style.NFTAuctionDescription_box}>
        {/* //Part ONE */}
        <div className={Style.NFTAuctionDescription_box_share}>
          <p>Virtual Worlds</p>
          <div className={Style.NFTAuctionDescription_box_share_box}>
            <MdCloudUpload
              className={Style.NFTAuctionDescription_box_share_box_icon}
              onClick={() => openSocial()}
            />

            {social && (
              <div className={Style.NFTAuctionDescription_box_share_box_social}>
                <a href="#">
                  <TiSocialFacebook /> Facebooke
                </a>
                <a href="#">
                  <TiSocialInstagram /> Instragram
                </a>
                <a href="#">
                  <TiSocialLinkedin /> LinkedIn
                </a>
                <a href="#">
                  <TiSocialTwitter /> Twitter
                </a>
                <a href="#">
                  <TiSocialYoutube /> YouTube
                </a>
              </div>
            )}

            <BsThreeDots
              className={Style.NFTAuctionDescription_box_share_box_icon}
              onClick={() => openNFTMenu()}
            />

            {NFTMenu && (
              <div className={Style.NFTAuctionDescription_box_share_box_social}>
                <a href="#">
                  <BiDollar /> Change price
                </a>
                <a href="#">
                  <BiTransferAlt /> Transfer
                </a>
                <a href="#">
                  <MdReportProblem /> Report abouse
                </a>
                <a href="#">
                  <MdOutlineDeleteSweep /> Delete item
                </a>
              </div>
            )}
          </div>
        </div>
        {/* //Part TWO */}
        <div className={Style.NFTAuctionDescription_box_profile}>
          <h1>{getLocalImg(auctionNft.tokenType).name || ""} #{auctionNft.tokenId}</h1>
          <div className={Style.NFTAuctionDescription_box_profile_box}>
            <div className={Style.NFTAuctionDescription_box_profile_box_left}>
              {/* <Image
                src={images.user0}
                alt="profile"
                width={40}
                height={40}
                className={Style.NFTAuctionDescription_box_profile_box_left_img}
              /> */}
              <FaWallet/>
              <div className={Style.NFTAuctionDescription_box_profile_box_left_info}>
                <small>Last Bidder</small> 
                <br />
                {/* <Link href={{pathname: "/author", query: `${auctionNft.seller}`}}> */}
                 <span>
                   {auctionNft.lastBidder.slice(0,6)}...{auctionNft.lastBidder.slice(36,42)} <MdVerified />
                 </span>
                {/* </Link> */}
              </div>
            </div>

            <div className={Style.NFTAuctionDescription_box_profile_box_right}>
              {/* <Image
                src={auctionNft.image || ""}
                alt="image"
                width={40}
                height={40}
                className={Style.NFTAuctionDescription_box_profile_box_left_img}
              /> */}

              <FaGavel/>

              <div className={Style.NFTAuctionDescription_box_profile_box_right_info}>
                <small>Last Bid</small> <br />
                <span>
                  {auctionNft.lastBid} ETH<MdVerified />
                </span>
              </div>
            </div>
          </div>

          <div className={Style.NFTAuctionDescription_box_profile_biding}>
            <p>
              <MdTimer /> <span>{auctionStatus}:</span>
            </p>

            <div className={Style.NFTAuctionDescription_box_profile_biding_box_timer}>
              <div
                className={
                  Style.NFTAuctionDescription_box_profile_biding_box_timer_item
                }
              >
                <p>{timerDays}</p>
                <span>Days</span>
              </div>
              <div
                className={
                  Style.NFTAuctionDescription_box_profile_biding_box_timer_item
                }
              >
                <p>{timerHours}</p>
                <span>hours</span>
              </div>
              <div
                className={
                  Style.NFTAuctionDescription_box_profile_biding_box_timer_item
                }
              >
                <p>{timerMinutes}</p>
                <span>mins</span>
              </div>
              <div
                className={
                  Style.NFTAuctionDescription_box_profile_biding_box_timer_item
                }
              >
                <p>{timerSeconds}</p>
                <span>secs</span>
              </div>
            </div>

            <div className={Style.NFTAuctionDescription_box_profile_biding_box_price}>
              <div
                className={
                  Style.NFTAuctionDescription_box_profile_biding_box_price_bid
                }
              >
                <small>Place Bid</small>
                <p>
                  {currentBid} ETH 
                  {/* <span>( ≈ $3,221.22)</span> */}
                </p>
              </div>

              {/* <span>[96 in stock]</span> */}
            </div>

            {auctionNft.owner && <div className={Style.NFTAuctionDescription_box_profile_biding_box_button}>

              {(auctionStatus == "Auction comming soon") ? 
              (
                currentAccount.toLowerCase() == auctionNft.owner.toLowerCase() 
                ? 
                (
                  <Button
                    icon=<FaWallet />
                    btnName="Cancel Auction"
                    handleClick={() => {
                      cancelAuction(auctionNft.tokenId);
                    }
                    }
                    classStyle={Style.button}
                  />
                  
                ) : 
                (
                  <p>
                    Comming soon!
                  </p>
                )
              ) 
              : 
              (
                (auctionStatus == "Auction will finish") ? 
                (
                  currentAccount.toLowerCase() == auctionNft.owner.toLowerCase() 
                  ? 
                  (
                    <p>
                      Your NFT in bidding
                    </p>
                  ) : 
                  (
                    <Button
                      // icon=<FaWallet />
                      btnName="Bid"
                      handleClick={() => {
                        joinAuction(auctionNft.tokenId, currentBid);
                        // console.log("auctionNft.nftAddr, auctionNft.auctionId, currentBid: " + auctionNft.nftAddr + " | " + auctionNft.auctionId + " | " + currentBid)
                        // connectingToInfuraSMTest.on("CreateAuction", (nftAddr, itemId, event) => {
                        //       // Emitted whenever a DAI token transfer occurs
                        //       const info = {
                        //           nftAddr: nftAddr,
                        //           itemId: itemId.toNumber(), 
                        //           event: event
                        //       }
                        //       console.log("info----> " + JSON.stringify(info));
                        //   })
                      }
                      }
                      classStyle={Style.button}
                    />
                  )
                ) 
                : 
                (
                  <Button
                      icon=<FaWallet />
                      btnName="Finish"
                      handleClick={() => {
                        finishAuction(auctionNft);
                      }
                      }
                      classStyle={Style.button}
                    />
                )
              )}

              
            </div> }

            <div className={Style.NFTAuctionDescription_box_profile_biding_box_tabs}>
              <button onClick={(e) => openTabs(e)}>Bid History</button>
              <button onClick={(e) => openTabs(e)}>Provanance</button>
              <button onClick={() => openOwmer()}>Owner</button>
            </div>

            {history && (
              <div className={Style.NFTAuctionDescription_box_profile_biding_box_card}>
                <NFTAuctionTabs dataTab={historyArray} />
              </div>
            )}
            {provanance && (
              <div className={Style.NFTAuctionDescription_box_profile_biding_box_card}>
                <NFTAuctionTabs dataTab={provananceArray} />
              </div>
            )}

            {owner && (
              <div className={Style.NFTAuctionDescription_box_profile_biding_box_card}>
                <NFTAuctionTabs dataTab={ownerArray} icon=<MdVerified /> />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTAuctionDescription;
