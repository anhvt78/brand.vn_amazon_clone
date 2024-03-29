import React from "react";
import styles from "./26.83a23604f1e7ac65e6c5.module.css";

const newItemWithIcon = () => {
  return (
    <div
      className={styles.shopee_image_manager__itembox}
      // style="width: 80px; max-width: 80px; height: 80px; max-height: 80px;"
    >
      <div className={styles.shopee_image_manager__content}>
        <div className={styles.shopee_image_manager__upload}>
          <div className={styles.shopee_file_upload} accept="image/*">
            <div className={styles.shopee_upload} aspect="1">
              <div className={styles.shopee_upload_wrapper}>
                <div className={styles.shopee_upload_dragger}>
                  <input
                    type="file"
                    name="file"
                    accept="image/*"
                    multiple="multiple"
                    aspect="1"
                    className={styles.shopee_upload__input}
                  />
                  <div className={styles.shopee_image_manager__upload__content}>
                    <div
                      className={
                        styles.shopee_image_manager__upload__content__icon
                      }
                    >
                      <i className={styles.shopee_icon}>
                        {/* <svg
                        viewBox="0 0 23 21"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18.5 0A1.5 1.5 0 0120 1.5V12c-.49-.07-1.01-.07-1.5 0V1.5H2v12.65l3.395-3.408a.75.75 0 01.958-.087l.104.087L7.89 12.18l3.687-5.21a.75.75 0 01.96-.086l.103.087 3.391 3.405c.81.813.433 2.28-.398 3.07A5.235 5.235 0 0014.053 18H2a1.5 1.5 0 01-1.5-1.5v-15A1.5 1.5 0 012 0h16.5z"></path>
                        <path d="M6.5 4.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM18.5 14.25a.75.75 0 011.5 0v2.25h2.25a.75.75 0 010 1.5H20v2.25a.75.75 0 01-1.5 0V18h-2.25a.75.75 0 010-1.5h2.25v-2.25z"></path>
                      </svg> */}
                      </i>
                    </div>
                    <div
                      className={
                        styles.shopee_image_manager__upload__content__text
                      }
                    >
                      Thêm hình ảnh (2/9)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default newItemWithIcon;
