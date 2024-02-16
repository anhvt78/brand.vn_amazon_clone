import React, { useEffect, useState, useContext } from "react";
// import { MdOutlineHttp, MdOutlineAttachFile } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
// import { AiTwotonePropertySafety } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import Image from "next/image";
// import { useRouter } from "next/router";
import { FaSpinner, FaWallet } from 'react-icons/fa';
//INTERNAL IMPORT
import Style from "./NFTCricketTransfer.module.css";
import formStyle from "../../AccountPage/Form/Form.module.css";
import images from "../../img";
import { Button, Error, Loader } from "../../components/componentsindex.js";

// import { DropZone } from "../AddNFT/addNFTIndex.js";

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const NFTCricketTransfer = ({nft}) => {

  const [recvAddr, setRecvAddr] = useState("");

  const {tranferCricketNFT , waitter, setWaitter, setOpenError, setError, openError, loading} = useContext(NFTMarketplaceContext);
  const [isTranfer, setIsTranfer] = useState(false);

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
                tranferCricketNFT(recvAddr, nft.tokenId);
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

export default NFTCricketTransfer;
