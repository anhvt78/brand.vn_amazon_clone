import React, {useContext} from "react";

//INTERNAL IMPORT
import Style from "../styles/buy-nft.module.css";
import { BuyNFT } from "../BuyNFT/buyNFTIndex";
import { Loader} from "../components/componentsindex";
// import { Waitter } from "../components/componentsindex";

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const buyNFT = () => {
  const { loading} = useContext(NFTMarketplaceContext);
  return (
    <div className={Style.buy}>
      <div className={Style.buy_box}>
        <div className={Style.buy_box_heading}>
          <h1>Own The NFT</h1>
          <p>
            You can own the new NFT from collection......
          </p>
        </div>

        <div className={Style.buy_box_form}>
        {loading ? <Loader/> :
          <BuyNFT/>
        }
        </div>
      </div>
            
    </div>
   
  );
};

export default buyNFT;
