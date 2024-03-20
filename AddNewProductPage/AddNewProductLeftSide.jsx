import React from "react";
import Style from "./AddNewProduct.module.css";

const AddNewProductLeftSide = () => {
  return (
    <div className={Style.product - edit__side}>
      <div className={Style.side - nav}>
        <ul className={Style.list}>
          <li className={Style.item.active}>
            <div className={Style.icon - box}>
              {/* <svg
                data-v-7b1ff0be=""
                width="16"
                height="16"
                style="padding: 1px; box-sizing: content-box;"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="7"
                  fill="#fff"
                  stroke="#d8d8d8"
                  stroke-width="2"
                ></circle>
                <path
                  d="M 7.999999999999999 1 A 7 7 0 0 1 7.999999999999999 1"
                  fill="none"
                  stroke="#ee4d2d"
                  stroke-width="2"
                ></path>
              </svg> */}
            </div>
            <a href="#">Thông tin cơ bản</a>
          </li>
          <li className={Style.item}>
            <div className={Style.icon - box}>
              {/* <svg
                data-v-7b1ff0be=""
                width="16"
                height="16"
                style="padding: 1px; box-sizing: content-box;"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="7"
                  fill="#fff"
                  stroke="#d8d8d8"
                  stroke-width="2"
                ></circle>
                <path
                  d="M 7.999999999999999 1 A 7 7 0 0 1 7.999999999999999 1"
                  fill="none"
                  stroke="#ee4d2d"
                  stroke-width="2"
                ></path>
              </svg> */}
            </div>
            <a href="#">Thông tin bán hàng</a>
          </li>
          <li className={Style.item}>
            <div className={Style.icon - box}>
              {/* <svg
                data-v-7b1ff0be=""
                width="16"
                height="16"
                style="padding: 1px; box-sizing: content-box;"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="7"
                  fill="#fff"
                  stroke="#d8d8d8"
                  stroke-width="2"
                ></circle>
                <path
                  d="M 7.999999999999999 1 A 7 7 0 0 1 7.999999999999999 1"
                  fill="none"
                  stroke="#ee4d2d"
                  stroke-width="2"
                ></path>
              </svg> */}
            </div>
            <a href="#">Vận chuyển</a>
          </li>
          <li className={Style.item}>
            <div className={Style.icon - box}>
              {/* <svg
                data-v-7b1ff0be=""
                width="16"
                height="16"
                style="padding: 1px; box-sizing: content-box;"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="7"
                  fill="#fff"
                  stroke="#d8d8d8"
                  stroke-width="2"
                ></circle>
                <path
                  d="M 7.999999999999999 1 A 7 7 0 0 1 7.999999999999999 1"
                  fill="none"
                  stroke="#ee4d2d"
                  stroke-width="2"
                ></path>
              </svg> */}
            </div>
            <a href="#">Thông tin khác</a>
          </li>
        </ul>
      </div>
      {/* <div className={Style.education-card-wrapper product-education-card}></div> */}
    </div>
  );
};

export default AddNewProductLeftSide;
