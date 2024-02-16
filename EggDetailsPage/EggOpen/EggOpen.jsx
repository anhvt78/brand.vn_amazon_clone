import React, { useEffect, useState, useContext } from "react";
// import { MdOutlineHttp, MdOutlineAttachFile } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
// import { AiTwotonePropertySafety } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import Image from "next/image";
// import { useRouter } from "next/router";
import { FaSpinner, FaWallet } from 'react-icons/fa';
//INTERNAL IMPORT
import Style from "./EggOpen.module.css";
import formStyle from "../../AccountPage/Form/Form.module.css";
import images from "../../img";
import { Button, Error, Loader } from "../../components/componentsindex.js";

// import { DropZone } from "../AddNFT/addNFTIndex.js";

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const EggOpen = ({nft}) => {
  const [recvAddr, setRecvAddr] = useState("");

  const [isOpenEgg, setIsOpenEgg] = useState(false);

  const {openEgg, waitter, setOpenError, setError} = useContext(NFTMarketplaceContext);

  // console.log("---nft--: ", nft);
//   useEffect(() => {
//     getNFTInfo("0x0f45f77e87FD418faDBd36734B3ec14DBb27EE4e").then((res) => {
//       console.log("-----: ", res);
//     });
// },[]);

  return (
  <div className={Style.upload}>

    <div className={Style.upload_box}>

      <div className={formStyle.Form_box_input}>
            <label htmlFor="Receiver Address">Open Cricket Egg</label>
            {/* <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
              <FaWallet />
              </div>
              <input
                type="text"
                placeholder={"Address"}
                // value={bidStep}
                onChange={(e) => setRecvAddr(e.target.value)}
              />
            </div> */}
          </div>

        <div className={Style.upload_box_btn}>

        {!waitter || !isOpenEgg ? 
          <Button
            btnName="Open"
            handleClick={() => {

              setIsOpenEgg(true);

              if (!nft.tokenId)
              {setOpenError(true);
                setError("Data Is Missing");
              } else
              {
                openEgg(nft.tokenId);
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

export default EggOpen;
