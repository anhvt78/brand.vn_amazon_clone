import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
// import {DiJqueryLogo} from "react-icons/di";
//----IMPORT ICON
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import Link from "next/link";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./NavBar.module.css";
import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index";
import { Button, Error } from "../componentsindex";
import images from "../../img";
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const NavBar = () => {
  //----useState COMPONNTS
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const router = useRouter();

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "DISCOVER") {
      if (!discover)
      {
        setDiscover(true);
        setHelp(false);
        setNotification(false);
        setProfile(false);
      } else
      {
        setDiscover(false);
      }
      
    } else if (btnText == "HELP CENTER") {
      if (!help){
        setDiscover(false);
        setHelp(true);
        setNotification(false);
        setProfile(false);
      } else
      {
        setHelp(false);
      }
      
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setHelp(false);
      setDiscover(false);
      setNotification(false);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };

  //SMART CONTRACT SECTION
  const {currentAccount, marketOwner, connectWallet, err, setOpenError, openError, nftContracts} = useContext(NFTMarketplaceContext);

             /* <Image
              src={images.logo}
              alt="NFT MARKET PLACE"
              width={100}
              height={100}
            /> */

    const [errContent, setErrContent] = useState("");

    const init = () => {
      if (err) {setErrContent(err);}
      // console.log("err ===> : " , err);
    }


    

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo} onClick={()=> router.push("/")}>
            {/* <DiJqueryLogo fill="none" onClick={()=> router.push("/")}/> */}
          <Image src={images.logo} alt="logo"/>
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFT" />
              <BsSearch onClick={() => {}} className={Style.search_icon} />
            </div>
          </div>
        </div>

        {/* //END OF LEFT SECTION */}
        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>
            {/* DISCOVER MENU */}
            <p onClick={(e) => openMenu(e)}>DISCOVER</p>
            {discover && ( 
              <div className={Style.navbar_container_right_discover_box}>
                <Discover 
                currentAccount={currentAccount}
                marketOwner={marketOwner}
                nftContracts = {nftContracts}
                />
              </div>
            )}
          </div>

          {/* HELP CENTER MENU */}
          <div className={Style.navbar_container_right_help}>
            <p onClick={(e) => openMenu(e)}>HELP CENTER</p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          {/* NOTIFICATION */}
          <div className={Style.navbar_container_right_notify}>
            <MdNotifications
              className={Style.notify}
              onClick={() => openNotification()}
            />
            {notification && <Notification />}
          </div>

          {/* CREATE BUTTON SECTION */}
          <div className={Style.navbar_container_right_button}>
            {!currentAccount ? (<Button btnName="Connect" handleClick={() => connectWallet()}/> 
            ) : (
              // <a href="/uploadNFT">
              <Button btnName="BUY CRICKET EGGs" handleClick={() => router.push("/buyNFT")}/>
              // </a>
              
            )}
            
          </div>

          {/* USER PROFILE */}

          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image
                src={images.user0}
                alt="Profile"
                width={40}
                height={40}
                onClick={() => openProfile()}
                className={Style.navbar_container_right_profile}
              />

              {profile && <Profile currentAccount={currentAccount}/>}
            </div>
          </div>

          {/* MENU BUTTON */}

          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={Style.menuIcon}
              onClick={() => openSideBar()}
            />
          </div>
        </div>
      </div>

      {/* SIDBAR CPMPONE/NT */}
      {openSideMenu && (
        <div className={Style.sideBar}>
          <SideBar 
            setOpenSideMenu={setOpenSideMenu} 
            currentAccount = {currentAccount}
            connectWallet = {connectWallet}
          
          />
        </div>
      )}
      {openError && <Error />}
    </div>
  );
};

export default NavBar;
