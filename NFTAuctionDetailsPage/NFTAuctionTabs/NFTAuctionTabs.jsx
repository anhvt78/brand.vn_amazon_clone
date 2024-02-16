import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./NFTAuctionTabs.module.css";

const NFTAuctionTabs = ({ dataTab, icon }) => {
  return (
    <div className={Style.NFTAuctionTabs}>
      {dataTab.map((el, i) => (
        <div className={Style.NFTAuctionTabs_box} key={i + 1}>
          <Image
            src={el}
            alt="profile image"
            width={40}
            height={40}
            className={Style.NFTAuctionTabs_box_img}
          />
          <div className={Style.NFTAuctionTabs_box_info}>
            <span>
              Offer by $770 by <span>Noname</span>
              {icon}
            </span>

            <small>Jun 14 - 4:12 PM</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTAuctionTabs;
