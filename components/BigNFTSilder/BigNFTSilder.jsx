import React, { useState, useRef, useEffect, useCallback, useContext } from "react";
import Image from "next/image";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";
import { FaWallet, FaPercentage, FaGavel } from "react-icons/fa";

//INTERNAL IMPORT
import Style from "./BigNFTSilder.module.css";
import images from "../../img";
import Button from "../Button/Button";

import LikeProfile from "../LikeProfile/LikeProfile";

import {Loader} from "../componentsindex";
import { useRouter } from "next/router";

//AUCTION SMART CONTRACT IMPORT
// import {NFTAuctionContext} from "../../Context/NFTAuctionContext"
import moment from "moment";

import {getLocalImg} from "../../database/getDetailNft"



const BigNFTSilder = ({NFTData, loading, joinAuction, currentAccount, setOpenError, setError, getBidStep, bidStep}) => {

  const router = useRouter();

  const [timerDays , setTimerDays] = useState("00");
  const [timerHours , setTimerHours] = useState("00");
  const [timerMinutes , setTimerMinutes] = useState("00");
  const [timerSeconds , setTimerSeconds] = useState("00");

  const [idNumber, setIdNumber] = useState(0);

  const [auctionNfts, setAuctionNfts] = useState(() => {
    // const auctionItem =  NFTData;
    // [
    //   {
    //   owner: "", 
    //   tokenId: "",
    //   initialPrice: 0,
    //   previousBidder: "",
    //   lastBid: 0,
    //   lastBidder: "",
    //   startTime: 123,
    //   endTime: 0,
    //   // completed: false,
    //   // active: true,
    //   timestamp: 0,
    //   // image: "",
    //   tokenType: "Common",
    //   // description: ""
    // }
    // ]
    // console.log(" ====== >>>> NFTData", NFTData);
    return NFTData;
  } 
    
  );

  // const [initialPrice , setInitialPrice] = useState("0");

  const [currentBid , setCurrentBid] = useState("");

  const [like, setLike] = useState("0");

  // const [startTime, setStartTime] = useState("");
  // const [endTime, setEndTime] = useState("");

  const [auctionStatus , setAuctionStatus] = useState("Auction ending in");

  let timerInstance = useRef();

const startTimer = () => {

  timerInstance = setInterval(() => {

    const now = new Date().getTime();

    // console.log("======startTimer  idNumber = " + timerDays + " | " + timerHours + " | " +  timerMinutes);

    const startTime = auctionNfts[idNumber].startTime * 1000;
    const endTime = auctionNfts[idNumber].endTime * 1000;

    // console.log("auctionNfts = " + JSON.stringify(auctionNfts) + " | startTime = " + startTime + " | endTime = " + endTime + " | now = " + now);
    // console.log("======now  idNumber = " + now + " | " + startTime + " | " +  endTime);

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

useEffect(()=> {
  // console.log("====== idNumber = " + idNumber + " | auctionNfts = " + JSON.stringify(auctionNfts));
  if (auctionNfts[idNumber])
  {
    // const startTime =  auctionNfts[idNumber].startTime;
    // console.log("====== auctionNfts[idNumber].startTime = -- " + startTime  + " | " + idNumber + " | " + JSON.stringify(auctionNfts));
    startTimer();
    // console.log("====== idNumber = " + idNumber + " | sliderData = " + JSON.stringify(sliderData));

    // console.log("===2=== idNumber = " + bidStep + " | "  + auctionNfts[idNumber].initialPrice / 100 * (100 + parseInt(bidStep)));

    setCurrentBid(auctionNfts[idNumber].initialPrice / 100 * (100 + parseInt(bidStep)));
  
    return () => {
        clearInterval(timerInstance);
    }
  }
  

}, [auctionNfts, idNumber]);

useEffect(()=> {
  const now = new Date();

  var dataList = [];
  NFTData.map((el, i) => {
    dataList.push(el);
    // if (!el.completed && el.active && (now < el.endTime*1000))
    // {
    //   dataList.push(el);
    // }
  })

  dataList = dataList.sort((a, b) => (a.endTime < b.endTime) ? 1 : -1);
  setAuctionNfts(dataList);
  // console.log("nftList = ", dataList);

  // console.log("auctionNfts[idNumber] = ", dataList[idNumber]);

  // if ((dataList.length > 0) && (dataList[idNumber].lastBidder == dataList[idNumber].owner))
  //     {
  //       setCurrentBid(dataList[idNumber].initialPrice); 
  //     } else {
  //       // setCurrentBid(auctionNfts[idNumber].initialPrice * ((100 + parseInt(el.bidStep)) / 100 ));
  //       setCurrentBid(dataList[idNumber].initialPrice / 100 * (100 + parseInt(bidStep)));
  //     }

}, [NFTData]);



  //-------INC
  const inc = useCallback(() => {
    if (idNumber + 1 < auctionNfts.length) {
      
      if (auctionNfts[idNumber + 1].lastBidder == auctionNfts[idNumber + 1].owner)
          {
            setCurrentBid(auctionNfts[idNumber + 1].lastBid); 
          } else {
            setCurrentBid(auctionNfts[idNumber + 1].initialPrice * ((100 + parseInt(bidStep)) / 100 ));
          }

      setIdNumber(idNumber + 1);

    }
  }, [idNumber, auctionNfts.length]);

  //-------DEC
  const dec = useCallback(() => {
    if (idNumber > 0) {
      if (auctionNfts[idNumber - 1].lastBidder == auctionNfts[idNumber - 1].owner)
          {
            setCurrentBid(auctionNfts[idNumber - 1].lastBid); 
          } else {
            setCurrentBid(auctionNfts[idNumber - 1].initialPrice * ((100 + parseInt(bidStep)) / 100 ));
          }
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  return (
    <div className={Style.bigNFTSlider}>
      
   {(auctionNfts.length > 0) && 
        <div className={Style.bigNFTSlider_box}>
        <div className={Style.bigNFTSlider_box_left}>
         <h2>#{auctionNfts[idNumber].tokenId}</h2> 
          <div className={Style.bigNFTSlider_box_left_creator}>
            <div className={Style.bigNFTSlider_box_left_creator_profile}>
              {/* <Image
                className={Style.bigNFTSlider_box_left_creator_profile_img}
                src={images.user0}
                alt="profile image"
                width={50}
                height={50}
              /> */}
              <FaWallet/>
              {(auctionNfts[idNumber].owner == currentAccount) ? 
                <div className={Style.bigNFTSlider_box_left_creator_profile_info}>
                  <p>Last Bidder</p>
                  <h4>
                    You{" "}
                    <span>
                      <MdVerified />
                    </span>
                  </h4>
                </div> 
                : 
                <div className={Style.bigNFTSlider_box_left_creator_profile_info}>
                  <p>Last Bidder</p>
                  <h4>
                    {auctionNfts[idNumber].lastBidder.slice(0,6)}...{auctionNfts[idNumber].lastBidder.slice(34,42)}{" "}
                    <span>
                      <MdVerified />
                    </span>
                  </h4>
                </div>
            } 
              
            </div>

            <div className={Style.bigNFTSlider_box_left_creator_collection}>
              {/* <FaGavel
                className={Style.bigNFTSlider_box_left_creator_collection_icon}
              /> */}
              <FaGavel/>
              <div className={Style.bigNFTSlider_box_left_creator_collection_info}>
                
                <p>Last Bid</p>
                <h4>{auctionNfts[idNumber].lastBid} ETH</h4>
              </div>
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_bidding}>
            <div className={Style.bigNFTSlider_box_left_bidding_box}>
              <small>Current Bid</small>
              <p>
                {currentBid} <span>ETH</span>
                {/* {console.log("lastBid * (100 + bidStep) / 100 = " + lastBid + " | " + (parseInt(bidStep) + 100) + " | " + (0.03 * (100 + 2)) / 100)} */}
              </p>
            </div>

            <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
              <MdTimer
                className={Style.bigNFTSlider_box_left_bidding_box_icon}
              />
              <span>{auctionStatus}</span>
            </p>

            <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                {/* <p>{sliderData[idNumber].time.days}</p> */}
                <p>{timerDays}</p>
                <span>Days</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                {/* <p>{sliderData[idNumber].time.hours}</p> */}
                <p>{timerHours}</p>
                <span>Hours</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                {/* <p>{sliderData[idNumber].time.minutes}</p> */}
                <p>{timerMinutes}</p>
                <span>mins</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                {/* <p>{sliderData[idNumber].time.seconds}</p> */}
                <p>{timerSeconds}</p>
                <span>secs</span>


                {/* <span>---{timerDays} -- {hours} -- {minutes} -- {seconds}</span> */}

              </div>
            </div>

            <div className={Style.bigNFTSlider_box_left_button}>
              <Button btnName=" Place " handleClick={() => {
                if (currentAccount.toLowerCase() != auctionNfts[idNumber].owner.toLowerCase()) {
                  joinAuction(auctionNfts[idNumber].tokenId, currentBid.toString());
                } else {
                  setOpenError(true);
                  setError("Can not bid by owner!");
                }
                
              }} />
              <Button btnName="View" 
                handleClick={() => {
                  // router.push(`/reSellToken?id=${nft.tokenId}&tokenURI=${nft.tokenURI}`)
                  const href= {pathname: "/NFTAuctionDetails", query: auctionNfts[idNumber]};
                  // router.query = auctionNfts;

                  // console.log("auctionNfts = ", JSON.stringify(auctionNfts));
                  // router.push();
                  router.push(href)
                }} 
                />
              
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_sliderBtn}>
            <TbArrowBigLeftLines
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => dec()}
            />
            <TbArrowBigRightLine
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => inc()}
            />
          </div>
        </div>

        <div className={Style.bigNFTSlider_box_right}>
          <div className={Style.bigNFTSlider_box_right_box}>
            <Image
              src={getLocalImg(auctionNfts[idNumber].tokenType).img}
              alt="NFT IMAGE"
              objectFit="cover"
              width={933}
              height={933}
              className={Style.bigNFTSlider_box_right_box_img}
            />

            <div className={Style.bigNFTSlider_box_right_box_like}>
              <AiFillHeart />
              <span>{like}</span>
            </div>
          </div>
        </div>
        </div>
      }
    </div>
  );
};

export default BigNFTSilder;
