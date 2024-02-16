import React, {useEffect, useState, useContext} from "react";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import { Button, Category, Brand } from "../components/componentsindex";
import EggDetailsPage from "../EggDetailsPage/EggDetailsPage";

//IMPORT SMART CONTRACT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const EggDetails = () => {
  const {currentAccount} = useContext(NFTMarketplaceContext);

  const [eggNft, setEggNft] = useState({});    

  // const [nft, setNft] = useState({    
  //   tokenId: "",
  //   nftAddr: "",
  //   transFee: "",
  //   bidFee: "",
  //   bidStep: "",
  //   image: "",
  //   name: "",
  //   description: ""
  // });

  

  const router = useRouter();
  useEffect(()=> {
        if (!router.isReady) return;

        console.log("router.query === ", router.query);
        // const item = {
        //   tokenId: router.query.tokenId,
        //   nftAddr: "",
        //   transFee: "",
        //   bidFee: "",
        //   bidStep: "",
        //   image: router.query.image,
        //   name: router.query.name,
        //   description: ""
        // };

        // setNft(item)
        // console.log("NFT====: ", nft);

        // const data = router.query;

        setEggNft(router.query);

        // console.log("NFT====: ", nft);

  },[router.isReady]);


  return (
    <div>
      <EggDetailsPage nft={eggNft}/>
      {/* <Category /> */}
      {/* <Brand /> */}
    </div>
  );
};

export default EggDetails;
