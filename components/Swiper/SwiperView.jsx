import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import "swiper/css/navigation";

import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper/modules";

//INTERNAL IMPORT
import Style from "./SwiperView.module.css";
// import SliderCard from "./SliderCard/SliderCard";
import images from "../../img";

const SwiperView = () => {
  const FollowingArray = [
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
  ];
  // const [width, setWidth] = useState(0);
  // const dragSlider = useRef();

  // useEffect(() => {
  //   // setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
  // });

  // const handleScroll = (direction) => {
  //   const { current } = dragSlider;
  //   const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

  //   if (direction == "left") {
  //     // current.scrollLeft -= scrollAmount;
  //   } else {
  //     // current.scrollLeft += scrollAmount;
  //   }
  // };

  return (
    <div className={Style.swiper_container}>
      <Swiper

    // slidesPerView={3}
    // breakpoints={{
    //   576: {
    //     // width: 576,
    //     slidesPerView: 3,
    //   },
    //   768: {
    //     // width: 768,
    //     slidesPerView: 'auto',
    //   },
    // }}


  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  loop={true}
  slidesPerView={'auto'}
  coverflowEffect={{
    rotate: 10,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
    slideShadows: true,
  }}

  // effect={'coverflow'}
  // grabCursor={true}
  // centeredSlides={true}
  // slidesPerView={'auto'}
  // coverflowEffect={{
  //   rotate: 50,
  //   stretch: 0,
  //   depth: 100,
  //   modifier: 1,
  //   slideShadows: true,
  // }}

  // nft_cw_common,
  // nft_cw_uncommon,
  // nft_cw_rare,
  // nft_cw_eric,
  // nft_cw_legen,
  
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  pagination={true}
  modules={[Autoplay, EffectCoverflow, Pagination]}
  className={Style.swiper}
>
  <SwiperSlide className={Style.swiper_slide}>
  <div className={Style.swiperCard_box}>
    <div className={Style.swiperCard_box_img}>
      <Image
        src={images.nft_cw_common}
        className={Style.swiperCard_box_img_img}
        alt="swiper profile"
        // width={300}
        // height={300}
        objectFit="cover"
      />
    </div>
    <div className={Style.swiperCard_box_title}>
      <p>NFT #1245</p>
      <div className={Style.swiperCard_box_title_like}>
        {/* <LikeProfile /> */}
        <small>1 0f 100</small>
      </div>
    </div>

    <div className={Style.swiperCard_box_price}>
      <div className={Style.swiperCard_box_price_box}>
        <small>Current price</small>
        <p>1.000 ETH</p>
      </div>

      {/* <div className={Style.swiperCard_box_price_time}>
        <small>Reaming time</small>
        <p>3h : 15m : 20s</p>
      </div> */}
    </div>
  </div>
  </SwiperSlide>
  <SwiperSlide className={Style.swiper_slide}>
  <div className={Style.swiperCard_box}>
    <div className={Style.swiperCard_box_img}>
      <Image
        src={images.nft_cw_uncommon}
        className={Style.swiperCard_box_img_img}
        alt="swiper profile"
        // width={300}
        // height={300}
        objectFit="cover"
      />
    </div>
    <div className={Style.swiperCard_box_title}>
      <p>NFT #1245</p>
      <div className={Style.swiperCard_box_title_like}>
        {/* <LikeProfile /> */}
        <small>1 0f 100</small>
      </div>
    </div>

    <div className={Style.swiperCard_box_price}>
      <div className={Style.swiperCard_box_price_box}>
        <small>Current price</small>
        <p>1.000 ETH</p>
      </div>

      {/* <div className={Style.swiperCard_box_price_time}>
        <small>Reaming time</small>
        <p>3h : 15m : 20s</p>
      </div> */}
    </div>
  </div>
  </SwiperSlide>
  <SwiperSlide className={Style.swiper_slide}>
  <div className={Style.swiperCard_box}>
    <div className={Style.swiperCard_box_img}>
      <Image
        src={images.nft_cw_rare}
        className={Style.swiperCard_box_img_img}
        alt="swiper profile"
        // width={300}
        // height={300}
        objectFit="cover"
      />
    </div>
    <div className={Style.swiperCard_box_title}>
      <p>NFT #1245</p>
      <div className={Style.swiperCard_box_title_like}>
        {/* <LikeProfile /> */}
        <small>1 0f 100</small>
      </div>
    </div>

    <div className={Style.swiperCard_box_price}>
      <div className={Style.swiperCard_box_price_box}>
        <small>Current price</small>
        <p>1.000 ETH</p>
      </div>

      {/* <div className={Style.swiperCard_box_price_time}>
        <small>Reaming time</small>
        <p>3h : 15m : 20s</p>
      </div> */}
    </div>
  </div>
  </SwiperSlide>
  <SwiperSlide className={Style.swiper_slide}>
  <div className={Style.swiperCard_box}>
    <div className={Style.swiperCard_box_img}>
      <Image
        src={images.nft_cw_eric}
        className={Style.swiperCard_box_img_img}
        alt="swiper profile"
        // width={300}
        // height={300}
        objectFit="cover"
      />
    </div>
    <div className={Style.swiperCard_box_title}>
      <p>NFT #1245</p>
      <div className={Style.swiperCard_box_title_like}>
        {/* <LikeProfile /> */}
        <small>1 0f 100</small>
      </div>
    </div>

    <div className={Style.swiperCard_box_price}>
      <div className={Style.swiperCard_box_price_box}>
        <small>Current price</small>
        <p>1.000 ETH</p>
      </div>

      {/* <div className={Style.swiperCard_box_price_time}>
        <small>Reaming time</small>
        <p>3h : 15m : 20s</p>
      </div> */}
    </div>
  </div>
  </SwiperSlide>
  <SwiperSlide className={Style.swiper_slide}>
  <div className={Style.swiperCard_box}>
    <div className={Style.swiperCard_box_img}>
      <Image
        src={images.nft_cw_legen}
        className={Style.swiperCard_box_img_img}
        alt="swiper profile"
        // width={300}
        // height={300}
        objectFit="cover"
      />
    </div>
    <div className={Style.swiperCard_box_title}>
      <p>NFT #1245</p>
      <div className={Style.swiperCard_box_title_like}>
        {/* <LikeProfile /> */}
        <small>1 0f 100</small>
      </div>
    </div>

    <div className={Style.swiperCard_box_price}>
      <div className={Style.swiperCard_box_price_box}>
        <small>Current price</small>
        <p>1.000 ETH</p>
      </div>

      {/* <div className={Style.swiperCard_box_price_time}>
        <small>Reaming time</small>
        <p>3h : 15m : 20s</p>
      </div> */}
    </div>
  </div>
  </SwiperSlide>
  

</Swiper>
    </div>
    
  );
};

export default SwiperView;
