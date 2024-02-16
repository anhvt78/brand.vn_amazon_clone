import React, { useEffect, useState, useContext } from "react";
// import { MdOutlineHttp, MdOutlineAttachFile } from "react-icons/md";
import { FaEthereum } from "react-icons/fa";
// import { AiTwotonePropertySafety } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import Image from "next/image";
// import { useRouter } from "next/router";
import { FaSpinner } from 'react-icons/fa';

//INTERNAL IMPORT
import Style from "./NFTCricketSale.module.css";
import formStyle from "../../AccountPage/Form/Form.module.css";
import images from "../../img";
import { Button, Error, Loader } from "../../components/componentsindex.js";

// import { DropZone } from "../AddNFT/addNFTIndex.js";

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const NFTCricketSale = ({saleNft}) => {
  // const [price, setPrice] = useState("");
  // const [active, setActive] = useState(0);
  // const [nftAddr, setNftAddr] = useState("Address");
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  // const [auctionFee, setAuctionFee] = useState("5");
  // const [bidStep, setBidStep] = useState("10");
  // const [category, setCategory] = useState("");
  // const [image, setImage] = useState("");

  // const [error, setError] = useState("");
  // const [openError, setOpenError] = useState(false);

  console.log("NFTCricketSale saleNft === ", saleNft);

  const {createSaleItem, 
    waitter, setWaitter, setOpenError, setError, openError, loading} = useContext(NFTMarketplaceContext);

  // const checkNFTAddr = (nftAddr) => {
  //   if (nftContracts.length > 0) {
  //     nftContracts.map((el, i) => {
      
  //       if (nftAddr == el.nftAddr)
  //       {
  //         // console.log("NFT existed!");
  //         setOpenError(true);
  //         setError("NFT existed!");
  //       }
  //     })
  //   } 
  // }


  return (
  <div className={Style.upload}>

    <div className={Style.upload_box}>

      
        
        <div className={formStyle.Form_box_input}>
            <label htmlFor="Price">Price</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
              <FaEthereum />
              </div>
              <input
                type="number"
                placeholder={"NFT Price"}
                // value={bidStep}
                onChange={(e) => {
                  setPrice(e.target.value);
                  
                }
                }
              />
            </div>
          </div>
        
        <div className={Style.upload_box_btn}>

        {!waitter ? 
        (
          <Button
            btnName="List on Marketplace"
            handleClick={() => {

              if (!price)
              {setOpenError(true);
                setError("Price is required!");
              } else
              {
                saleNft.price = price;

                createSaleItem(saleNft);

              }
                
              }             
            }
            classStyle={Style.upload_box_btn_style} disabled
          /> 
          
          )
          : <Button
            // btnName="Please, waitting!"
            handleClick={() => console.log("waiting")}
            
            icon={<FaSpinner className={Style.icon_pulse} />}
            classStyle={Style.upload_box_btn_style} />
        }
        </div>
    </div>
    </div>
  );
};

export default NFTCricketSale;
