import React, { useState } from "react";
import Image from "next/image";
import { TiArrowSortedDown, TiArrowSortedUp, TiTick } from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./NFTCricketTabs.module.css";

import { FaWallet, FaPercentage, FaGavel, FaSwift } from "react-icons/fa";

const NFTCricketTabs = ({
  setSaleTab,
  setAuctionTab,
  setTransferTab,
  // setFollower,
  // setFollowing,
}) => {
  const [openList, setOpenList] = useState(false);
  const [activeBtn, setActiveBtn] = useState(1);
  const [selectedMenu, setSelectedMenu] = useState("Most Recent");

  const listArray = [
    "Created By Admin",
    "Most Appreciated",
    "Most Discussed",
    "Most Viewed",
  ];

  const openDropDownList = () => {
    if (!openList) {
      setOpenList(true);
    } else {
      setOpenList(false);
    }
  };

  const openTab = (e) => {
    const btnText = e.target.innerText;
    // console.log(btnText);
    if (btnText == "Sale") {
      setSaleTab(true);
      setAuctionTab(false);
      setTransferTab(false);
      // setFollowing(false);
      // setLike(false);
      setActiveBtn(1);
    } else if (btnText == "Auction") {
      setSaleTab(false);
      setAuctionTab(true);
      setTransferTab(false);
      // setFollowing(false);
      // setLike(false);
      setActiveBtn(2);
    } else if (btnText == "Transfer") {
      setSaleTab(false);
      setAuctionTab(false);
      setTransferTab(true);
      // setFollowing(false);
      // setLike(true);
      setActiveBtn(3);
    } 
    // else if (btnText == "Following") {
    //   setCollectiables(false);
    //   setCreated(false);
    //   setFollower(false);
    //   setFollowing(true);
    //   setLike(false);
    //   setActiveBtn(4);
    // } else if (btnText == "Followers") {
    //   setCollectiables(false);
    //   setCreated(false);
    //   setFollower(true);
    //   setFollowing(false);
    //   setLike(false);
    //   setActiveBtn(5);
    // }
  };

  return (
    <div className={Style.NFTCricketTabs}>
      <div className={Style.NFTCricketTabs_box}>
        <div className={Style.NFTCricketTabs_box_left}>
          <div className={Style.NFTCricketTabs_box_left_btn}>
            <button
            
              className={`${activeBtn == 1 ? Style.active : ""}`}
              onClick={(e) => openTab(e)}
            >
            Sale
            </button>
            <button
              icon=<FaGavel />
              className={`${activeBtn == 2 ? Style.active : ""}`}
              onClick={(e) => openTab(e)}
            >
            Auction
            </button>
            <button
              className={`${activeBtn == 3 ? Style.active : ""}`}
              onClick={(e) => openTab(e)}
            >
            Transfer
            </button>
            {/* <button
              className={`${activeBtn == 4 ? Style.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Following
            </button> */}
            {/* <button
              className={`${activeBtn == 5 ? Style.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Followers
            </button> */}
          </div>
        </div>

        {/* <div className={Style.NFTCricketTabs_box_right}>
          <div
            className={Style.NFTCricketTabs_box_right_para}
            onClick={() => openDropDownList()}
          >
            <p>{selectedMenu}</p>
            {openList ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </div>

          {openList && (
            <div className={Style.NFTCricketTabs_box_right_list}>
              {listArray.map((el, i) => (
                <div
                  key={i + 1}
                  onClick={() => setSelectedMenu(el)}
                  className={Style.NFTCricketTabs_box_right_list_item}
                >
                  <p>{el}</p>
                  <span>{selectedMenu == el && <TiTick />}</span>
                </div>
              ))}
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default NFTCricketTabs;
