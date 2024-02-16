import React, { useState } from "react";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";

import images from "../../img";

import Link from "next/link";

//INTERNAL IMPORT
import Style from "./NFTCricketsCard.module.css";
// import { LikeProfile } from "../../components/componentsindex";

import {getLocalImg} from "../../database/getDetailNft";

const NFTCricketsCard = ({ NFTData }) => {
	// const commonURI = 1;
	// const uncommonURI = 2;
	// const rareURI = 3;
	// const epicURI = 4;
	// const legendURI = 5;

	// const [nfts, setNfts] = useState([]);

	// useEffect(()=> {
	// 	const nftList = [];
	//   NFTData.map((el, i) => {
		
	// 	const item = {
	// 		tokenId: el.tokenId,

	// 	}

	//   })

	//   setNfts(nftList);

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

	// const getLocalImg = (type) => {
	// 	switch (type) {
	// 		case "1":
	// 			return images.nft_cw_common;
	// 			break;
	// 		case "2":
	// 			return images.nft_cw_uncommon;
	// 			break;
	// 		case "3":
	// 			return images.nft_cw_rare;
	// 			break;
	// 		case "4":
	// 			return images.nft_cw_eric;
	// 			break;
	// 		case "5":
	// 			return images.nft_cw_legen;
	// 			break;
	// 		default:
	// 			return images.upload;
	// 			return;
	// 	}
	// };

	// console.log("=====>NFTData ==> ", NFTData);

	return (
		<div className={Style.NFTAuthCard}>
			{NFTData &&
				NFTData.map((el, i) => (
					// if ()

					<Link
						href={{ pathname: "/NFTCricketDetails", query: el }}
						key={i + 1}
					>
						<div className={Style.NFTAuthCard_box} key={i + 1}>
							<div className={Style.NFTAuthCard_box_like}>
								<div className={Style.NFTAuthCard_box_like_box}>
									<div
										className={
											Style.NFTAuthCard_box_like_box_box
										}
									>
										<BsImage
											className={
												Style.NFTAuthCard_box_like_box_box_icon
											}
										/>
									</div>
								</div>
							</div>

							<div className={Style.NFTAuthCard_box_img}>
								{/* {console.log("el.uri: ", el.uri)}
								{console.log(
									"getLocale: ",
									getLocalImg(el.uri)
								)} */}
								<Image
									// {el.name == "Cricket Egg"? images.nft_egg : ""}
									src={getLocalImg(el.tokenType).img}
									alt="NFT"
									width={300}
									height={300}
									objectFit="cover"
									className={Style.NFTAuthCard_box_img_img}
								/>
							</div>

							<div className={Style.NFTAuthCard_box_info}>
								<div
									className={Style.NFTAuthCard_box_info_left}
								>
									{/* <LikeProfile /> */}
									<p>{el.name}</p>
								</div>
								<small>#{el.tokenId}</small>
							</div>

							{/* <div className={Style.NFTAuthCard_box_price}>
            <div className={Style.NFTAuthCard_box_price_box}>
              <small>Description</small>
              <p>{el.description}</p>
            </div>
            <p className={Style.NFTAuthCard_box_price_stock}>
              <MdTimer /> <span>{i + 1} hours left</span>
            </p>
          </div> */}
						</div>
					</Link>
				))}
		</div>
	);
};

export default NFTCricketsCard;
