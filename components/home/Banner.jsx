import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import images from "../../img";
import { Carousel } from "react-responsive-carousel";
// const Banner = () => {
//   return (
//     <div className="relative">
//       <Carousel
//         autoPlay
//         infiniteLoop
//         showStatus={false}
//         showIndicators={false}
//         showThumbs={false}
//         interval={3000}
//       >
//         <div>
//           <Image priority src={images.bannerImgOne} alt="sliderImg" />
//         </div>
//         <div>
//           <Image src={images.bannerImgTwo} alt="sliderImg" />
//         </div>
//         <div>
//           <Image src={images.bannerImgThree} alt="sliderImg" />
//         </div>
//         <div>
//           <Image src={images.bannerImgFour} alt="sliderImg" />
//         </div>
//         <div>
//           <Image src={images.bannerImgFive} alt="sliderImg" />
//         </div>
//       </Carousel>
//       <div className="w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20"></div>
//     </div>
//   );
// };

// export default Banner;
const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "70%",
          left: "45%",
          transform: "translate(-50% -50%)",
          width: "210px",
        }}
      >
        <ul
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                background: "#131921",
                padding: "8px 0",
                cursor: "pointer",
                border: "1px solid #f3a847",
              }
            : {
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#232F3E",
                color: "white",
                padding: "8px 0",
                cursor: "pointer",
                border: "1px solid white",
              }
        }
      >
        {i + 1}
      </div>
    ),
  };
  return (
    <div className="w-full">
      <div className="w-full h-full relative">
        <Slider {...settings}>
          <div>
            <Image src={images.bannerImgOne} alt="bannerImgOne" />
          </div>
          <div>
            <Image src={images.bannerImgTwo} alt="bannerImgTwo" />
          </div>
          <div>
            <Image src={images.bannerImgThree} alt="bannerImgThree" />
          </div>
          <div>
            <Image src={images.bannerImgFour} alt="bannerImgFour" />
          </div>
          <div>
            <Image src={images.bannerImgFive} alt="bannerImgFive" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
