import React, { useEffect, useState, useContext } from "react";
// import { MdOutlineHttp, MdOutlineAttachFile } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
// import { AiTwotonePropertySafety } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import Image from "next/image";
// import { useRouter } from "next/router";
import { FaSpinner, FaWallet } from 'react-icons/fa';
//INTERNAL IMPORT
import Style from "./EggTransfer.module.css";
import formStyle from "../../AccountPage/Form/Form.module.css";
import images from "../../img";
import { Button, Error, Loader } from "../../components/componentsindex.js";

// import { DropZone } from "../AddNFT/addNFTIndex.js";

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const EggTransfer = ({nft}) => {
  // const [price, setPrice] = useState("");
  // const [active, setActive] = useState(0);
  const [recvAddr, setRecvAddr] = useState("");
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  // const [saleFee, setSaleFee] = useState("5");
  // const [auctionFee, setAuctionFee] = useState("5");
  // const [bidStep, setBidStep] = useState("10");
  // // const [category, setCategory] = useState("");
  // const [image, setImage] = useState("");

  // const [error, setError] = useState("");
  // const [openError, setOpenError] = useState(false);

  const {tranferEggNFT, waitter, setWaitter, setOpenError, setError, openError, loading} = useContext(NFTMarketplaceContext);
  const [isTranfer, setIsTranfer] = useState(false);

//   useEffect(() => {
//     getNFTInfo("0x0f45f77e87FD418faDBd36734B3ec14DBb27EE4e").then((res) => {
//       console.log("-----: ", res);
//     });
// },[]);

  return (
  <div className={Style.upload}>

    <div className={Style.upload_box}>

      <div className={formStyle.Form_box_input}>
            <label htmlFor="Receiver Address">Receiver Address</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
              <FaWallet />
              </div>
              <input
                type="text"
                placeholder={"Address"}
                // value={bidStep}
                onChange={(e) => setRecvAddr(e.target.value)}
              />
            </div>
          </div>

        {/* <div className={formStyle.Form_box_input}>
          <label htmlFor="nft">Receiver Address</label>
          <input
            type="text"
            // value={nftAddr}
            placeholder={"Address"}
            className={formStyle.Form_box_input_userName}
            onChange={(e) => {setRecvAddr(e.target.value)
              // if (e.target.value.length == 42)
              // {
              //   // console.log("e.target.value: ", e.target.value)
              //   checkNFTAddr(e.target.value)
              // }
            }}
          />
        </div> */}

        <div className={Style.upload_box_btn}>

        {!waitter || !isTranfer? 
          <Button
            btnName="Transfer"
            handleClick={() => {

              setIsTranfer(true)

              if (!recvAddr.length > 0)
              {setOpenError(true);
                setError("Data Is Missing");
              } else
              {
                tranferEggNFT(recvAddr, nft.tokenId);
                // addNFTContract(
                //   nftAddr,
                //   saleFee,
                //   auctionFee,
                //   bidStep
                // );  
              }     
              }             
            }
            classStyle={Style.upload_box_btn_style} disabled
          /> 
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

export default EggTransfer;
