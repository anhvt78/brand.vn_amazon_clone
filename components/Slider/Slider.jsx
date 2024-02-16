import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./Slider.module.css";
import SliderCard from "./SliderCard/SliderCard";
import images from "../../img";

const Slider = () => {
  const FollowingArray = [
    // {
    //   background: images.nft_image_5_1,
    //   user: images.user3,
    // },
    {
      background: images.nft_cw_common,
      user: images.user4,
    },
    {
      background: images.nft_cw_uncommon,
      user: images.user5,
    },
    {
      background: images.nft_cw_rare,
      user: images.user6,
    },
    {
      background: images.nft_cw_eric,
      user: images.user6,
    },
    {
      background: images.nft_cw_legen,
      user: images.user1,
    },
    // {
    //   background: images.creatorbackground2,
    //   user: images.user2,
    // },
  ];
  const [width, setWidth] = useState(0);
  const dragSlider = useRef();

  useEffect(() => {
    setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
  });

  const handleScroll = (direction) => {
    const { current } = dragSlider;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction == "left") {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className={Style.slider}>
      <div className={Style.slider_box}>
        <h2>NFTs Category</h2>
        <div className={Style.slider_box_button}>
          <p>Click on play icon to buy & enjoy Nfts</p>
          <div className={Style.slider_box_button_btn}>
            <div
              className={Style.slider_box_button_btn_icon}
              onClick={() => handleScroll("left")}
            >
              <TiArrowLeftThick />
            </div>
            <div
              className={Style.slider_box_button_btn_icon}
              onClick={() => handleScroll("right")}
            >
              <TiArrowRightThick />
            </div>
          </div>
        </div>

        <motion.div className={Style.slider_box_itmes} ref={dragSlider}>
          <motion.div
            ref={dragSlider}
            className={Style.slider_box_item}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {FollowingArray.map((el, i) => (
              <SliderCard key={i + 1} el={el} i={i} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
