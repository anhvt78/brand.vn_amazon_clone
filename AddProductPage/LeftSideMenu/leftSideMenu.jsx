import React from "react";
import style from "../../styles/product.module.css";
import { BiCart, BiStar } from "react-icons/bi";
import { HiHeart } from "react-icons/hi";

import {
  MdAddCircleOutline,
  MdClose,
  MdRemoveCircleOutline,
} from "react-icons/md";
import { PiDressLight } from "react-icons/pi";

const LeftSideMenu = () => {
  return (
    <div className={style.sidebar_category}>
      <div className={style.sidebar_top}>
        <h2 className={style.sidebar_title}>Nhãn hàng</h2>

        {/* <button
          className={style.sidebar_close_btn}
          data_mobile_menu_close_btn=""
        >
          <div>

          </div>
          <MdClose />
          <ion_icon
            name="close_outline"
            role="img"
            className="md hydrated"
            aria_label="close outline"
          ></ion_icon>
        </button> */}
      </div>

      <ul className={style.sidebar_menu_category_list}>
        <li className={style.sidebar_menu_category}>
          <button
            className={style.sidebar_accordion_menu}
            data_accordion_btn=""
          >
            <div className={style.menu_title_flex}>
              <PiDressLight
                className={style.menu_title_img}
                width="20"
                height="20"
              />
              {/* <img
                src="./assets/images/icons/dress.svg"
                alt="clothes"
                width="20"
                height="20"
                className={style.menu_title_img}
              /> */}

              <p className={style.menu_title}>Hàng hoá</p>
            </div>

            <div>
              <div className={style.ion_icon}>
                <MdAddCircleOutline className={style.add_icon} />
              </div>

              {/* <ion_icon
                name="add_outline"
                className={style.add_icon}
                role="img"
                aria_label="add outline"
              ></ion_icon> */}
              {/* <div className={style.ion_icon}>
                <MdRemoveCircleOutline className={style.remove_icon} />
              </div> */}

              {/* <ion_icon
                name="remove_outline"
                className={style.remove_icon}
                role="img"
                aria_label="remove outline"
              ></ion_icon> */}
            </div>
          </button>

          <ul className={style.sidebar_submenu_category_list}>
            <li className={style.sidebar_submenu_category}>
              <a href="#" className={style.sidebar_submenu_title}>
                <p className={style.product_name}>Shirt</p>
                <data
                  value="300"
                  className={style.stock}
                  title="Available Stock"
                >
                  300
                </data>
              </a>
            </li>

            <li className={style.sidebar_submenu_category}>
              <a href="#" className={style.sidebar_submenu_title}>
                <p className={style.product_name}>shorts &amp; jeans</p>
                <data
                  value="60"
                  className={style.stock}
                  title="Available Stock"
                >
                  60
                </data>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default LeftSideMenu;
