import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./NFTSaleTabs.module.css";

const NFTSaleTabs = ({ dataTab, icon }) => {
  return (
    <div className={Style.NFTSaleTabs}>
      {dataTab.map((el, i) => (
        <div className={Style.NFTSaleTabs_box} key={i + 1}>
          <Image
            src={el}
            alt="profile image"
            width={40}
            height={40}
            className={Style.NFTSaleTabs_box_img}
          />
          <div className={Style.NFTSaleTabs_box_info}>
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

export default NFTSaleTabs;
