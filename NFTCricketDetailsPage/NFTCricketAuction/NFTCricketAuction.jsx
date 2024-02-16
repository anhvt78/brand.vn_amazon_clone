import React, { useEffect, useState, useContext } from "react";
// import { MdOutlineHttp, MdOutlineAttachFile } from "react-icons/md";
import {FaPercent, FaEthereum } from "react-icons/fa";
// import { AiTwotonePropertySafety } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import Image from "next/image";
// import { useRouter } from "next/router";
import { FaSpinner } from 'react-icons/fa';
import {
  MdVerified,
  MdCloudUpload,
  MdPaid,
  MdTimer,
  MdReportProblem,
  MdOutlineDeleteSweep,
} from "react-icons/md";

//INTERNAL IMPORT
import Style from "./NFTCricketAuction.module.css";
import formStyle from "../../AccountPage/Form/Form.module.css";
import images from "../../img";
import { Button, Error, Loader } from "../../components/componentsindex.js";

// import { DropZone } from "../AddNFT/addNFTIndex.js";

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const NFTCricketAuction = ({nft}) => {
  // const [price, setPrice] = useState("");
  const [active, setActive] = useState(0);
  const [nftAddr, setNftAddr] = useState("Address");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  
  const [bidInitValue, setBidInitValue] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  // const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  // const [error, setError] = useState("");
  // const [openError, setOpenError] = useState(false);

  const {createAuction, waitter, setWaitter, setOpenError, setError, openError, loading} = useContext(NFTMarketplaceContext);

  // const router = useRouter();

  // const categoryArry = [
  //   {
  //     image: images.nft_image_1,
  //     category: "Sports",
  //   },
  //   {
  //     image: images.nft_image_2,
  //     category: "Arts",
  //   },
  //   {
  //     image: images.nft_image_3,
  //     category: "Music",
  //   },
  //   {
  //     image: images.nft_image_1,
  //     category: "Digital",
  //   },
  //   {
  //     image: images.nft_image_2,
  //     category: "Time",
  //   },
  //   {
  //     image: images.nft_image_3,
  //     category: "Photography",
  //   },
  // ];

//   useEffect(() => {
//     getNFTInfo();
//     // console.log("currentAccount: " + currentAccount);
// },[]);

//   useEffect(() => {
//     getNFTInfo("0x0f45f77e87FD418faDBd36734B3ec14DBb27EE4e").then((res) => {
//       console.log("-----: ", res);
//     });
// },[]);

  return (
  <div className={Style.upload}>

    <div className={Style.upload_box}>
        {/* <div className={formStyle.Form_box_input}>
          <label htmlFor="nft">Initial Bid Price</label>
          <input
            type="text"
            value={nftAddr}
            placeholder={"Initial price"}
            className={formStyle.Form_box_input_userName}
            onChange={(e) => {setNftAddr(e.target.value)
              if (e.target.value.length == 42)
              {
                // console.log("e.target.value: ", e.target.value)
                checkNFTAddr(e.target.value)
              }
            }}
          />
        </div> */}


        <div className={formStyle.Form_box_input}>
            <label htmlFor="Bid Init">Initial Value</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
              <FaEthereum />
              </div>
              <input
                type="number"
                placeholder={"Initial value"}
                // value={bidStep}
                onChange={(e) => setBidInitValue(e.target.value)}
              />
            </div>
          </div>

        

        <div className={formStyle.Form_box_input_social}>
          {/* <div className={formStyle.Form_box_input}>
            <label htmlFor="Trans fee">Initial Value</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <FaPercent />
              </div>
              <input
                type="text"
                value={saleFee}
                placeholder={saleFee}
                // value={"5"}
                onChange={(e) => setSaleFee(e.target.value)}
              />
            </div>
          </div> */}

          <div className={formStyle.Form_box_input}>
            <label htmlFor="Auction fee">Start time</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
              <MdTimer />
              </div>
              <input
                type="datetime-local"
                // value={auctionFee}
                // placeholder={auctionFee}
                // value={"5"}
                onChange={(e) => {
                  const _nowTime = new Date().getTime()/1000;
                  const _startTime = new Date(e.target.value).getTime()/1000;
                  
                  (_startTime > _nowTime) ?  setStartTime(_startTime) 
                  : 
                  (setOpenError(true),
                  setError("Start time require after now!"))

                  }
                }
              />
            </div>
          </div>

          <div className={formStyle.Form_box_input}>
            <label htmlFor="Bid step">End time</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
              <MdTimer />
              </div>
              <input
                type="datetime-local"
                // placeholder={}
                // value={bidStep}
                onChange={(e) => {
                  
                  const _endTime = new Date(e.target.value).getTime()/1000;

                  (_endTime > startTime) ?  setEndTime(_endTime) 
                  : 
                  (setOpenError(true),
                  setError("End time require greater start time!"))

                  }
                  }
              />
            </div>
          </div>
        </div>


        <div className={Style.upload_box_btn}>

        {!waitter ? 
          <Button
            btnName="Create Auction"
            handleClick={() => {

              
              if ((bidInitValue > 0) && endTime && startTime)
              {
                nft.initialPrice = bidInitValue;
                nft.startTime = startTime;
                nft.endTime = endTime;
                createAuction(nft);
                
                // const createAuction = async (
                //   _tokenId,
                //   _initialPrice,
                //   _startTime,
                //   _endTime
                // )
                // setOpenError(true);
                // setError("Data Is Missing");
                // console.log("data1 = " + nft.nftAddr + " | "  + nft.tokenId + " | " + startTime + " | " + endTime + " | " + bidInitValue)
              } else
              {
                // console.log("data2 = " + nft.nftAddr + " | "  + nft.tokenId + " | " + startTime + " | " + endTime + " | " + bidInitValue)
                
                !bidInitValue ?
                 (setOpenError(true),
                setError("Initial Bid value must be greater zero"))
                :
                (
                  !startTime ? 
                  (setOpenError(true),
                  setError("Start time Is Missing")):
  
                  (!endTime && (setOpenError(true),
                  setError("End time Is Missing")))
                )               
                
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

        {/* {active != 0 && <Button
            btnName="Remove"
            handleClick={() => {
              if (!nftAddr || !name || !description)
              {
                removeNFTContract(nftAddr)
              } else
              {
                console.log("Data Is Missing");
              }
              
            }}
            classStyle={Style.upload_box_btn_style}
          />} */}
        </div>
    </div>
    </div>
  );
};

export default NFTCricketAuction;
