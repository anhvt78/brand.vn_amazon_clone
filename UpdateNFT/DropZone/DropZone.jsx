import Image from "next/image";
import { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

//INTRNAL IMPORT
import images from "../../img";
import Style from "./DropZone.module.css";

import { Loader } from "../../components/componentsindex.js";

const DropZone = ({
  title,
  heading,
  subHeading,
  name,
  description,
  setImage,
  uploadToIPFS, 
  waitter,
  setWaitter,
  image
}) => {
  // const [fileUrl, setFileUrl] = useState("");

  const onDrop = useCallback(async (acceptedFile) => {
    setWaitter(true);
    const url = await uploadToIPFS(acceptedFile[0]);
    setImage(url);
    // setFileUrl(url);
  });

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    // accept: "image/*",
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
     },
    maxSize: 5000000,
  });
  return (
    <div className={Style.DropZone}>

      <h2>NFT Image</h2>
      <p>
        File types supported: JPG, PNG, GIF, SVG. Max size: 100 MB
      </p>

      <div className={Style.DropZone_box} {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={Style.DropZone_box_input}>
          <p>{title}</p>
          <div className={Style.DropZone_box_input_img}>
            <Image
              src={images.upload}
              alt="upload"
              width={100}
              height={100}
              objectFit="contain"
              className={Style.DropZone_box_input_img_img}
            />
          </div>
          <p>{heading}</p>
          <p>{subHeading}</p>
        </div>
      </div>

      {waitter && <Loader/>} 
      {image && 
        <aside className={Style.DropZone_box_aside}>
        <div className={Style.DropZone_box_aside_box}>
          <Image
            src={image}
            alt="nft image"
            width={100}
            height={100}
          />

          <div className={Style.DropZone_box_aside_box_preview}>
            <div className={Style.DropZone_box_aside_box_preview_two}>
              <p>
                <span>NFT Name:  </span>
                {name || ""}
              </p>
            </div>

            <div className={Style.DropZone_box_aside_box_preview_two}>
              <p>
                <span>Description:</span>
                {description || ""}
              </p>
            </div>
          </div>
        </div>
      </aside>
      }
    </div>
  );
};

export default DropZone;
