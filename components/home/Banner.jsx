import React, { useState } from 'react'
import Image from "next/image";
import Slider from "react-slick";
import images from "../../img"
const Banner = () => {
    const [dotActive, setDotActive] = useState(0);
    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (prev, next) => {
            setDotActive(next);
        },
        appendDots: (dots) => (
          <div
            style={{
              position: "absolute",
              top: "70%",
              left: "45%",
              transform: "translate(-50% -50%",
              width: "210px",
            }}
          >
            <ul style={{ 
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
             }}
             > 
                {" "}
                {dots}
                {" "} 
             </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={
                i === dotActive ? {
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
            } : 
            {
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              background: "#232F3E",
              padding: "8px 0",
              cursor: "pointer",
              border: "1px solid white",
            }}
          >
            {i + 1}
          </div>
        )
      };
  return (
    <div className="w-full">
        <div className="w-full h-full relative">
            <Slider {...settings}>
                <div>
                <Image src={images.bannerImgOne} alt='bannerImgOne'/>
                </div>
                <div>
                <Image src={images.bannerImgTwo} alt='bannerImgTwo'/>
                </div>
                <div>
                <Image src={images.bannerImgThree} alt='bannerImgThree'/>
                </div>
                <div>
                <Image src={images.bannerImgFour} alt='bannerImgFour'/>
                </div>      
            </Slider>
        </div>
    </div>
    
  )
}

export default Banner