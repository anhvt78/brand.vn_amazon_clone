import React, { useState, useContext, useEffect} from "react";
import { MdOutlineHttp, MdOutlineAttachFile } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { AiTwotonePropertySafety } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaSpinner } from 'react-icons/fa';

//INTERNAL IMPORT
import Style from "./buyNFT.module.css";
import formStyle from "../AccountPage/Form/Form.module.css";
import images from "../img";
import { Button } from "../components/componentsindex.js";

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const BuyNFT = () => {
  // const [price, setPrice] = useState("0.01");
  // const [active, setActive] = useState(0);
  // const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  // const [nftAddr, setNftAddr] = useState("");
  const [image, setImage] = useState(images.nft_egg);

  const {waitter, buyEggNFT, getEggNFTprice, eggPrice} = useContext(NFTMarketplaceContext);

  const router = useRouter();

  useEffect(()=>{   
    getEggNFTprice();
    // setPrice(eggPrice);

    // console.log("=====eggprice", eggPrice);
   
  },[]);

  return (
    <div className={Style.buyNFT}>
      {/* <div className={formStyle.Form_box_input}>
          <label htmlFor="name">Choose collection</label>
          <p className={Style.buyNFT_box_input_para}>
            Choose an NFT from exiting collection
          </p>

          <div className={Style.buyNFT_box_slider_div}>
            {nftContracts && nftContracts.map((el, i) => (
              <div
                className={`${Style.buyNFT_box_slider} ${
                  active == i + 1 ? Style.active : ""
                }`}
                key={i + 1}
                onClick={() => {
                  setActive(i + 1); 
                  setNftAddr(el.nftAddr);
                  setDescription(el.description);
                  // console.log("------",el.description + el.nftAddr )
              }}
              >
                <div className={Style.buyNFT_box_slider_box}>
                  <div className={Style.buyNFT_box_slider_box_img}>
                    <Image
                      src={el.image || ""}
                      alt="background image"
                      width={70}
                      height={70}
                      className={Style.buyNFT_box_slider_box_img_img}
                    />
                  </div>
                  <div className={Style.buyNFT_box_slider_box_img_icon}>
                    <TiTick />
                  </div>
                </div>
                <p>NFT - {el.name || "Noname"} </p>
                <small>Price: {price} ETH </small>
              </div>
            ))}
          </div>
        </div> */}

      <div className={formStyle.Form_box_input}>
          <div className={Style.buyNFT_box_slider_div}>
            <div className={Style.buyNFT_box_slider_box}>
                  <div className={Style.buyNFT_box_slider_box_img}>
                    <Image
                      src={image || ""}
                      alt="background image"
                      width={120}
                      height={120}
                      className={Style.buyNFT_box_slider_box_img_img}
                    />
                  </div>
                  <div className={Style.buyNFT_box_slider_box_img_icon}>
                    <TiTick />
                  </div>
          </div>
          </div>
          </div>
       

      <div className={Style.buyNFT_box}>
        <div className={formStyle.Form_box_input}>
          <label htmlFor="nft">Price</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="1"
            value={eggPrice || "No Price"}
            // defaultValue="No Price"
            readOnly="readOnly"
            // onChange={(e) => setDescription(e.target.value)}
          />
          {/* <label
            type="text"
            placeholder="0x61c564A4B4eeBAE73842e5651DA733cDe977BEf2"
            className={formStyle.Form_box_input_userName}
            // onChange={(e) => setName(e.target.value)}
            value="0x61c564A4B4eeBAE73842e5651DA733cDe977BEf2">0x61c564A4B4eeBAE73842e5651DA733cDe977BEf2</label> */}
          
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor="description">Description</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="6"
            value={description || "No Description"}
            placeholder={description || "No Description"}
            // defaultValue="No Description"
            readOnly="readOnly"
            // onChange={(e) => setDescription(e.target.value)}
          />
          {/* <p>
            The description will be included on the item's detail page
            underneath its image. Markdown syntax is supported.
          </p> */}
        </div>

        <div className={Style.buyNFT_box_btn}>

        {/* Nút buy NFT chỉ hiển thị khi waiter = false, tương đương vói việc đã lấy được giá của eggNFT từ Blc */}
        {!waitter ? 
        <Button
            btnName="Buy NFT"
            handleClick={() => 
              buyEggNFT(eggPrice)
            }
            classStyle={Style.buyNFT_box_btn_style} disabled/> 
          : <Button
            
            icon={<FaSpinner className={Style.icon_pulse} />}
            classStyle={Style.buyNFT_box_btn_style} />
            }

        </div>
      </div>
    </div>
  );
};

export default BuyNFT;
