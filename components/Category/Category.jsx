import React from "react";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./Category.module.css";
import images from "../../img";

const Category = () => {
  const CategoryArray = [
    {
      background: images.nft_cw_common,
      qty: 6199,
      name: "Common"
    },
    {
      background: images.nft_cw_uncommon,
      qty: 2500,
      name: "Uncommon"
    },
    {
      background: images.nft_cw_rare,
      qty: 1000,
      name: "Rare"
    },
    {
      background: images.nft_cw_eric,
      qty: 290,
      name: "Eric"
    },
    {
      background: images.nft_cw_legen,
      qty: 10,
      name: "Legendary"
    },
    // {
    //   background: images.nft_image_1,
    //   qty: 2000,
    // },
    // images.creatorbackground5,
  ];
  return (
    <div className={Style.box_category}>
      <div className={Style.category}>
        {CategoryArray.map((el, i) => (
          <div className={Style.category_box} key={i + 1}>
            <Image
              src={el.background}
              className={Style.category_box_img}
              alt="Background image"
              width={250}
              height={250}
              objectFit="cover"
            />

            <div className={Style.category_box_title}>
              <span>
                <BsCircleFill />
              </span>
              <div className={Style.category_box_title_info}>
                <h4>{el.name}</h4>
                <small>{el.qty} NFTS</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
