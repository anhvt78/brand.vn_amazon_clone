import React, { useState } from "react";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
//import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
//import { MdVerified, MdTimer } from "react-icons/md";

import images from "../../img";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./NFTEggsCard.module.css";
// import { LikeProfile } from "../../components/componentsindex";

const NFTEggsCard = ({ NFTData }) => {

  // const [nfts, setNfts] = useState([]);

  // useEffect(()=> {
  //   NFTData.map((el, i) => {

  //   })

  // }, []);
  // const [like, setLike] = useState(false);
  // const [likeInc, setLikeInc] = useState(21);

  // const likeNFT = () => {
  //   if (!like) {
  //     setLike(true);
  //     setLikeInc(23);
  //   } else {
  //     setLike(false);
  //     setLikeInc(23 + 1);
  //   }
  // };


  

  // console.log("=====>NFTData ==> ", NFTData);

  return (
    <div className={Style.NFTEggsCard}>

      {NFTData && NFTData.map((el, i) => (
        // if ()  
        
        
        <Link href={{pathname: "/EggDetails", query: el}} key={i+1}>
        <div className={Style.NFTEggsCard_box} key={i + 1}>
          <div className={Style.NFTEggsCard_box_like}>
            <div className={Style.NFTEggsCard_box_like_box}>
              <div className={Style.NFTEggsCard_box_like_box_box}>
                <BsImage className={Style.NFTEggsCard_box_like_box_box_icon} />
                
              </div>
            </div>
          </div>

           <div className={Style.NFTEggsCard_box_img}>
            <Image
              // {el.name == "Cricket Egg"? images.nft_egg : ""}  
              src={images.nft_egg}
              alt="NFT"
              width={300}
              height={300}
              objectFit="cover"
              className={Style.NFTEggsCard_box_img_img}
            />
          </div>

          <div className={Style.NFTEggsCard_box_info}>
            <div className={Style.NFTEggsCard_box_info_left}>
              {/* <LikeProfile /> */}
              <p>{el.name}</p>
            </div>
            <small>#{el.tokenId}</small>
          </div>

          {/* <div className={Style.NFTEggsCard_box_price}>
            <div className={Style.NFTEggsCard_box_price_box}>
              <small>Description</small>
              <p>{el.description}</p>
            </div>
            <p className={Style.NFTEggsCard_box_price_stock}>
              <MdTimer /> <span>{i + 1} hours left</span>
            </p>
          </div> */}
        </div>
        </Link>
      ))}
    </div>
  );
};

export default NFTEggsCard;
