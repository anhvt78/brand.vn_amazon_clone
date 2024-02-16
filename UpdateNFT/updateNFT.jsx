import React, { useState, useContext} from "react";
// import { MdOutlineHttp, MdOutlineAttachFile } from "react-icons/md";
// import { FaPercent } from "react-icons/fa";
// import { AiTwotonePropertySafety } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import Image from "next/image";
// import { useRouter } from "next/router";
import { FaSpinner } from 'react-icons/fa';

//INTERNAL IMPORT
import Style from "./updateNFT.module.css";
import formStyle from "../AccountPage/Form/Form.module.css";
// import images from "../img";
import { Button } from "../components/componentsindex.js";
import { DropZone } from "../UpdateNFT/updateNFTIndex.js";

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const UpdateNFT = () => {
  const {uploadToIPFS, waitter,setWaitter, nftContracts, updateNFTInfo} = useContext(NFTMarketplaceContext);

//   useEffect(() => {
//     getNFTList();
//     // console.log("currentAccount: " + currentAccount);
// },[]);

  const [nftAddr, setNftAddr] = useState("");
  const [active, setActive] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  // const router = useRouter();

  // if (nftContracts) {
  //   nftContracts.map((el, i) => {
  //     if (i == 0) {
  //       setActive(1);
  //       setNftAddr(el.nftAddr)
  //     }
  //   })
    
  // }


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

  return (
    <div className={Style.upload}>
              <div className={formStyle.Form_box_input}>
          <label htmlFor="name">Choose collection</label>
          <p className={Style.upload_box_input_para}>
            Choose an exiting collection for update URI
          </p>

          <div className={Style.upload_box_slider_div}>
            {nftContracts.map((el, i) => (
              <div
                className={`${Style.upload_box_slider} ${
                  active == i + 1 ? Style.active : ""
                }`}
                key={i + 1}
                onClick={() => (
                  setActive(i + 1), 
                  setNftAddr(el.nftAddr),
                  setName(el.name),
                  setImage(el.image),
                  setDescription(el.description)
                  )}
              >
                <div className={Style.upload_box_slider_box}>
                  <div className={Style.upload_box_slider_box_img}>
                    <Image
                      src={el.image || ""}
                      alt="background image"
                      width={70}
                      height={70}
                      className={Style.upload_box_slider_box_img_img}
                    />
                  </div>
                  <div className={Style.upload_box_slider_box_img_icon}>
                    <TiTick />
                  </div>
                </div>
                <p>{el.nftAddr.slice(0,5)}...{el.nftAddr.slice(34,42) || "NFT address"} </p>
              </div>
            ))}
          </div>
        </div>

      <DropZone
        title="JPG, PNG, WEBM , MAX 100MB"
        heading="Drag & drop file"
        subHeading="or Browse media on your device"
        name={name}
        nftAddr={nftAddr}
        description={description}
        setImage={setImage}
        uploadToIPFS = {uploadToIPFS}
        waitter = {waitter}
        setWaitter = {setWaitter}
        image = {image}
      />

      <div className={Style.upload_box}>
        <div className={formStyle.Form_box_input}>
          <label htmlFor="nft">NFT Name</label>
          <input
            type="text"
            value={name}
            placeholder={"No Name"}
            className={formStyle.Form_box_input_userName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor="description">Description</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="6"
            value={description}
            placeholder={"No Description"}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          {/* <p>
            The description will be included on the item's detail page
            underneath its image. Markdown syntax is supported.
          </p> */}
        </div>

        {(active != 0) && 
          <div className={Style.upload_box_btn}>
              {!waitter ? 
                <Button
                    btnName="Update"
                    handleClick={() => {
                       updateNFTInfo(nftAddr, name, image, description)
                                             //  console.log("nftAddr, name, image, description: " + nftAddr+", " + name+ ", " + image+ ", "+description);
                      //  setOpenError(true);
                      }       
                    }
                    classStyle={Style.upload_box_btn_style} disabled/> 
                  : 
                <Button
                    // btnName="Please, waitting!"
                    handleClick={() => console.log("waiting")}
                    icon={<FaSpinner className={Style.icon_pulse} />}
                    classStyle={Style.upload_box_btn_style} 
                />
              }
          </div>
        }

      </div>
    </div>
  );
};

export default UpdateNFT;
