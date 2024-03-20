import React from "react";
import Style from "./AddNewProduct.module.css";
const ProductEditmain = () => {
  return (
    <div  className={Style.product-edit__main}>
      <section  className={Style.product-edit__section}>
        <div
          className={Style.product-detail-panel.product-basic-info}
        >
          <div  className={Style.panel-header}>
            <div  className={Style.panel-title}>
              <div
                
                
                className={Style.basic-info-title}
              >
                {" "}
                Thông tin cơ bản
              </div>
            </div>
          </div>
          <div  className={Style.panel-content-wrapper}>
            <div  className={Style.panel-content}>
              <div   className={Style.container}>
                <div
                                   
                  className={Style.edit-row.image-offset}
                >
                  <div
                    
                    className={Style.edit-label.edit-title}
                  >
                    <div
            
                      className={Style.mandatory}
                      <span  className={Style.mandatory-icon}>
                        *
                      </span>
                    </div>
                    <span>Hình ảnh sản phẩm</span>
                  </div>
                  <div
                                        className={Style.edit-main}
                    data-education-trigger-key="images"
                  >
                    <div
                      
                      data-auto-correct-key="images"
                      style="line-height: 40px; display: flex;"
                    >
                      <div
                        
                       
                        className={Style.radio-wrapper}
                      >
                        <div
                          
                          className={Style.shopee-popover--dark}
                          
                        >
                          <div className={Style.shopee-popover__ref}>
                            <div
                              
                              className={Style.shopee-radio-group--solid}
                            >
                              <label className={Style.shopee-radio}>
                                <input
                                  type="radio"
                                  className={Style.shopee-radio__input"
                                  value="1"
                                />
                                <span className={Style.shopee-radio__indicator}></span>{" "}
                                <span className={Style.shopee-radio__label}>
                                  {" "}
                                  Hình ảnh tỷ lệ 1:1{" "}
                                </span>
                              </label>
                              <label className={Style.shopee-radio}>
                                <input
                                  type="radio"
                                  className={Style.shopee-radio__input"
                                  value="2"
                                />
                                <span className={Style.shopee-radio__indicator}></span>{" "}
                                <span className={Style.shopee-radio__label}>
                                  {" "}
                                  Hình ảnh tỷ lệ 3:4{" "}
                                </span>
                              </label>
                            </div>
                          </div>
                          <div
                            className={Style.shopee-tooltip__popper}
                            style="display: none; max-width: 280px;"
                          >
                            <div className={Style.shopee-popover__content}>
                              Không thể thay đổi trong quá trình xử lý hình ảnh
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        
                        type="button"
                        className={Style.shopee-button--normal}
                        style="margin-left: 16px;"
                      >
                        <span> View Example </span>
                      </button>
                    </div>
                    <div
                      
                      className={Style.image-manager-wrapper}
                      use-mms="true"
                      images-info=""
                      max-upload-file-num="9"
                      min-upload-file-num="1"
                      image-min-size="1,1"
                      product-id="0"
                      data-product-edit-field-unique-id="images"
                    >
                      <div
                        
                        className={Style.shopee-image-manager}
                        style=""
                      >
                        <div  className={Style.container}>
                          {" "}
                          <div
                            
                            className={Style.shopee-image-manager__itembox}
                            style="width: 80px; max-width: 80px; height: 80px; max-height: 80px;"
                          >
                            <div
                              
                              className={Style.shopee-image-manager__content}
                            >
                              <div
                                
                                className={Style.shopee-image-manager__upload}
                              >
                                <div
                                 
                                  className={Style.shopee-file-upload}
                                  accept="image/*"
                                >
                                  <div
                                    
                                    className={Style.shopee-upload}
                                    aspect="1"
                                  >
                                    <div className={Style.shopee-upload-wrapper shopee-upload-dragger}>
                                      <input
                                        type="file"
                                        name="file"
                                        accept="image/*"
                                        multiple="multiple"
                                        aspect="1"
                                        className={Style.shopee-upload__input}
                                      />
                                      <div
                                        
                                        className={Style.shopee-image-manager__upload__content}
                                      >
                                        <div
                                          
                                          className={Style.shopee-image-manager__upload__content__icon}
                                        >
                                          <i
                                            
                                            className={Style.shopee-icon}
                                          >
                                            {/* <svg
                                              viewBox="0 0 23 21"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path d="M18.5 0A1.5 1.5 0 0120 1.5V12c-.49-.07-1.01-.07-1.5 0V1.5H2v12.65l3.395-3.408a.75.75 0 01.958-.087l.104.087L7.89 12.18l3.687-5.21a.75.75 0 01.96-.086l.103.087 3.391 3.405c.81.813.433 2.28-.398 3.07A5.235 5.235 0 0014.053 18H2a1.5 1.5 0 01-1.5-1.5v-15A1.5 1.5 0 012 0h16.5z">
                                              </path>
                                              <path d="M6.5 4.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM18.5 14.25a.75.75 0 011.5 0v2.25h2.25a.75.75 0 010 1.5H20v2.25a.75.75 0 01-1.5 0V18h-2.25a.75.75 0 010-1.5h2.25v-2.25z"></path>
                                            </svg> */}
                                          </i>
                                        </div>{" "}
                                        <div
                                          
                                          className={Style.shopee-image-manager__upload__content__text}
                                        >
                                          Thêm hình ảnh (0/9)
                                        </div>
                                      </div>
                                    </div>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                        </div>
                        <div
                          
                          
                          className={Style.shopee-modal image-cropper-modal}
                          close-inside=""
                        >
                          <div
                            className={Style.shopee-modal__mask}
                            style="display: none; z-index: 1000005;"
                          >
                            <div className={Style.shopee-modal__container}>
                              <div
                                className={Style.shopee-modal__box"
                                style="display: none;"
                              >
                                <div className={Style.shopee-modal__content shopee-modal__content--normal}>
                                  <div className={Style.shopee-modal__header}>
                                    <div
                                      
                                      className={Style.image-cropper-header}
                                    >
                                      Chỉnh sửa hình ảnh sản phẩm
                                    </div>
                                  </div>{" "}
                                  <div
                                    className={Style.shopee-modal__body}
                                    style="position: relative;"
                                  >
                                    <div
                                      
                                      className={Style.image-cropper-content}
                                    >
                                      <div
                                        
                                        className={Style.panel-left}
                                      >
                                        <div
                                          
                                          className={Style.image-container}
                                          style="width: 400px; height: 400px;"
                                        >
                                          <img
                                            
                                            alt=""
                                            className={Style.image}
                                          />
                                        </div>
                                        <div
                                          
                                          className={Style.actions-bar}
                                        >
                                          <div
                                            
                                            className={Style.actions-left}
                                          >
                                            <div
                                              
                                              className={Style.zoom}
                                            >
                                              <div
                                                
                                                className={Style.shopee-popover--dark}
                                              >
                                                <div className={Style.shopee-popover__ref}>
                                                  <div
                                                    
                                                    className={Style.icon disabled}
                                                  >
                                                    <i
                                                      
                                                      className={Style.icon-zoom shopee-icon}
                                                    >
                                                      {/* <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 16 16"
                                                      >
                                                        <path d="M2.307 13.448a7.878 7.878 0 1111.525-.412l2.003 2.003a.563.563 0 11-.796.796l-2.003-2.003a7.878 7.878 0 01-10.729-.384zm10.675-1.15a6.753 6.753 0 10-.684.684l.366-.318.318-.366zM5.064 7.315h5.627a.563.563 0 010 1.125H5.064a.563.563 0 110-1.125z}></path>
                                                      </svg> */}
                                                    </i>
                                                  </div>
                                                </div>
                                                <div
                                                  className={Style.shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper}
                                                  style="display: none; max-width: 280px;"
                                                >
                                                  <div className={Style.shopee-popover__content}>
                                                    Thu nhỏ
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                
                                                className={Style.shopee-tooltip tooltip shopee-popover shopee-popover--dark}
                                              >
                                                <div className={Style.shopee-popover__ref}>
                                                  <div
                                                    
                                                    className={Style.icon}
                                                  >
                                                    <i
                                                      
                                                      className={Style.icon-zoom shopee-icon}
                                                    >
                                                      {/* <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 16 16"
                                                      >
                                                        <path d="M2.307 13.448a7.878 7.878 0 1111.525-.412l2.003 2.003a.563.563 0 11-.796.796l-2.003-2.003a7.878 7.878 0 01-10.729-.384zm10.675-1.15a6.753 6.753 0 10-.684.684l.366-.318.318-.366zM7.315 7.315v-2.25a.563.563 0 011.125 0v2.25h2.251a.563.563 0 010 1.125h-2.25v2.251a.563.563 0 01-1.126 0v-2.25h-2.25a.563.563 0 110-1.126h2.25z}></path>
                                                      </svg> */}
                                                    </i>
                                                  </div>
                                                </div>
                                                <div
                                                  className={Style.shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper}
                                                  style="display: none; max-width: 280px;"
                                                >
                                                  <div className={Style.shopee-popover__content}>
                                                    Phóng to
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              
                                              className={Style.shopee-tooltip tooltip shopee-popover shopee-popover--dark}
                                            >
                                              <div className={Style.shopee-popover__ref}>
                                                <div
                                                  
                                                  className={Style.icon}
                                                >
                                                  <i
                                                    
                                                    className={Style.icon-others shopee-icon}
                                                  >
                                                    {/* <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 15 17"
                                                    >
                                                      <path
                                                        fill-rule="nonzero"
                                                        d="M5 7h8a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2zm0 1a1 1 0 00-1 1v6a1 1 0 001 1h8a1 1 0 001-1V9a1 1 0 00-1-1H5zm3.127-5.52l-.715-.652a.5.5 0 01.674-.739l1.666 1.52a.5.5 0 01-.015.752l-1.666 1.4a.5.5 0 11-.644-.765l.616-.517c-3.988-.047-6.21 1.48-6.828 4.618a.5.5 0 01-.981-.194C.957 4.231 3.643 2.411 8.127 2.48z"
                                                      ></path>
                                                    </svg> */}
                                                  </i>
                                                </div>
                                              </div>{" "}
                                              <div
                                                className={Style.shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper}
                                                style="display: none; max-width: 280px;"
                                              >
                                                <div className={Style.shopee-popover__content}>
                                                  Xoay phải 90°
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              
                                              className={Style.shopee-tooltip tooltip shopee-popover shopee-popover--dark}
                                            >
                                              <div className={Style.shopee-popover__ref}>
                                                <div
                                                  
                                                  className={Style.icon}
                                                >
                                                  <i
                                                    
                                                    className={Style.icon-others.shopee-icon}
                                                  >
                                                    {/* <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 14"
                                                    >
                                                      <path
                                                        d="M9.379.758l6.476 12.953a.2.2 0 01-.179.289H9V.847a.2.2 0 01.379-.09zm-2.758 0A.2.2 0 017 .848V14H.324a.2.2 0 01-.18-.29L6.622.759zM6 4.236L1.618 13H6V4.236z"
                                                        fill-rule="evenodd"
                                                      ></path>
                                                    </svg> */}
                                                  </i>
                                                </div>
                                              </div>{" "}
                                              <div
                                                className={Style.shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper}
                                                style="display: none; max-width: 280px;"
                                              >
                                                <div className={Style.shopee-popover__content}>
                                                  Lật ngược ảnh theo chiều ngang
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              
                                              className={Style.shopee-tooltip tooltip shopee-popover shopee-popover--dark}
                                            >
                                              <div className={Style.shopee-popover__ref}>
                                                <div
                                                  
                                                  className={Style.icon}
                                                >
                                                  <i
                                                    
                                                    className={Style.icon-others shopee-icon}
                                                  >
                                                    {/* <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 14 16"
                                                    >
                                                      <path
                                                        d="M13.242 9.379L.29 15.855A.2.2 0 010 15.676V9h13.153a.2.2 0 01.09.379zm0-2.758a.2.2 0 01-.09.379H0V.324a.2.2 0 01.29-.18l12.952 6.477zM9.764 6L1 1.618V6h8.764z"
                                                        fill-rule="evenodd"
                                                      ></path>
                                                    </svg> */}
                                                  </i>
                                                </div>
                                              </div>{" "}
                                              <div
                                                className={Style.shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper}
                                                style="display: none; max-width: 280px;"
                                              >
                                                <div className={Style.shopee-popover__content}>
                                                  Lật ngược ảnh theo chiều dọc
                                                </div>
                                              </div>
                                            </div>
                                          </div>{" "}
                                          <div
                                            
                                            className={Style.actions-right}
                                          >
                                            <button
                                              
                                              type="button"
                                              className={Style.shopee-button shopee-button--small"
                                            >
                                              <span>Nhập Lại</span>
                                            </button>
                                          </div>
                                        </div>
                                        <div  className={Style.mask}>
                                          <div
                                            
                                            className={Style.mask-loading"
                                          >
                                            <img
                                              
                                              src="https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/mmf_portal_seller_root_dir/static/modules/product/image/spinner-balls-g.cb8f25d.gif"
                                              alt="loading"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        
                                        className={Style.panel-right}
                                      >
                                        <div
                                          
                                          className={Style.label label-preview}
                                        >
                                          Xem trước
                                        </div>{" "}
                                        <div
                                          
                                          className={Style.preview-image-container}
                                          style="width: 120px; height: 120px;"
                                        >
                                          <div
                                            
                                            className={Style.preview-image}
                                          ></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className={Style.resize-triggers}>
                                      <div className={Style.expand-trigger}>
                                        <div style="width: 1px; height: 1px;}></div>
                                      </div>
                                      <div className={Style.contract-trigger}></div>
                                    </div>
                                  </div>
                                  <div className={Style.shopee-modal__footer}>
                                    {" "}
                                    <div className={Style.shopee-modal__footer-buttons}>
                                      <button
                                        type="button"
                                        className={Style.shopee-button shopee-button--normal}
                                      >
                                        <span>Đóng</span>
                                      </button>
                                      <button
                                        type="button"
                                        disabled="disabled"
                                        className={Style.shopee-button.shopee-button--primary shopee-button--normal disabled}
                                      >
                                        <span>Lưu</span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <i className={Style.shopee-icon shopee-modal__close}>
                                  {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M2.85355339,1.98959236 L8.157,7.29314575 L13.4601551,1.98959236 C13.6337215,1.81602601 13.9031459,1.79674086 14.098014,1.93173691 L14.1672619,1.98959236 C14.362524,2.18485451 14.362524,2.501437 14.1672619,2.69669914 L14.1672619,2.69669914 L8.864,8.00014575 L14.1672619,13.3033009 C14.362524,13.498563 14.362524,13.8151455 14.1672619,14.0104076 C13.9719997,14.2056698 13.6554173,14.2056698 13.4601551,14.0104076 L8.157,8.70714575 L2.85355339,14.0104076 C2.67998704,14.183974 2.41056264,14.2032591 2.2156945,14.0682631 L2.14644661,14.0104076 C1.95118446,13.8151455 1.95118446,13.498563 2.14644661,13.3033009 L2.14644661,13.3033009 L7.45,8.00014575 L2.14644661,2.69669914 C1.95118446,2.501437 1.95118446,2.18485451 2.14644661,1.98959236 C2.34170876,1.79433021 2.65829124,1.79433021 2.85355339,1.98959236 Z"
                                    ></path>
                                  </svg> */}
                                </i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    
                    className={Style.edit-label.edit-title}
                    data-education-trigger-key="images"
                  >
                    <div
                      
                      
                      className={Style.mandatory}
                    >
                      <span  className={Style.mandatory-icon}>
                        *
                      </span>
                    </div>
                    <span>Ảnh bìa</span>
                  </div>
                  <div
                    
                    className={Style.image-manager-wrapper}
                    use-mms="true"
                    images-info=""
                    max-upload-file-num="1"
                    min-upload-file-num="1"
                    image-min-size="1,1"
                    image-lock="true"
                    product-id="0"
                    data-product-edit-field-unique-id="images"
                  >
                    <div
                      
                      className={Style.shopee-image-manager image-lock"
                      style=""
                    >
                      <div
                        
                        draggable="true"
                        options="[object Object]"
                        move="function () { [native code] }"
                        className={Style.container}
                      >
                        <div
                          
                          className={Style.shopee-image-manager__itembox}
                          style="width: 80px; max-width: 80px; height: 80px; max-height: 80px; display: none;"
                        >
                          <div
                            
                            className={Style.shopee-image-manager__content"
                          >
                            <div
                              
                              className={Style.shopee-image-manager__upload}
                            >
                              <div
                                
                                
                                className={Style.shopee-file-upload}
                                accept="image/*"
                              >
                                <div
                                  
                                  className={Style.shopee-upload}
                                  aspect="1"
                                >
                                  <div className={Style.shopee-upload-wrapper shopee-upload-dragger}>
                                    <input
                                      type="file"
                                      name="file"
                                      accept="image/*"
                                      aspect="1"
                                      className={Style.shopee-upload__input}
                                    />
                                    <div
                                      
                                      className={Style.shopee-image-manager__upload__content}
                                    >
                                      <div
                                        
                                        className={Style.shopee-image-manager__upload__content__icon}
                                      >
                                        <i
                                          
                                          className={Style.shopee-icon}
                                        >
                                          {/* <svg
                                            viewBox="0 0 23 21"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path d="M18.5 0A1.5 1.5 0 0120 1.5V12c-.49-.07-1.01-.07-1.5 0V1.5H2v12.65l3.395-3.408a.75.75 0 01.958-.087l.104.087L7.89 12.18l3.687-5.21a.75.75 0 01.96-.086l.103.087 3.391 3.405c.81.813.433 2.28-.398 3.07A5.235 5.235 0 0014.053 18H2a1.5 1.5 0 01-1.5-1.5v-15A1.5 1.5 0 012 0h16.5z}></path>
                                            <path d="M6.5 4.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM18.5 14.25a.75.75 0 011.5 0v2.25h2.25a.75.75 0 010 1.5H20v2.25a.75.75 0 01-1.5 0V18h-2.25a.75.75 0 010-1.5h2.25v-2.25z}></path>
                                          </svg> */}
                                        </i>
                                      </div>{" "}
                                      <div
                                        
                                        className={Style.shopee-image-manager__upload__content__text}
                                      >
                                        Thêm hình ảnh (0/1)
                                      </div>
                                    </div>
                                  </div>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          
                          
                          style="width: 80px; height: 80px; border: 1px dashed rgb(216, 216, 216); margin: 0px 16px 16px 0px; border-radius: 4px;"
                        ></div>
                      </div>
                      <div
                        
                        
                        className={Style.image-cropper-modal}
                        close-inside=""
                      >
                        <div
                          className={Style.shopee-modal__mask}
                          style="display: none; z-index: 1000006;"
                        >
                          <div className={Style.shopee-modal__container}>
                            <div
                              className={Style.shopee-modal__box}
                              style="display: none;"
                            >
                              <div className={Style.shopee-modal__content--normal}>
                                <div className={Style.shopee-modal__header}>
                                  <div
                                    
                                    className={Style.image-cropper-header}
                                  >
                                    Chỉnh sửa hình ảnh sản phẩm
                                  </div>
                                </div>{" "}
                                <div
                                  className={Style.shopee-modal__body}
                                  style="position: relative;"
                                >
                                  <div
                                    
                                    className={Style.image-cropper-content}
                                  >
                                    <div  className={Style.panel-left}>
                                      <div
                                        
                                        className={Style.image-container}
                                        style="width: 400px; height: 400px;"
                                      >
                                        <img
                                          
                                          alt=""
                                          className={Style.image}
                                        />
                                      </div>
                                      <div
                                        
                                        className={Style.actions-bar"
                                      >
                                        <div
                                          
                                          className={Style.actions-left}
                                        >
                                          <div  className={Style.zoom}>
                                            <div
                                              
                                              className={Style.shopee-popover--dark}
                                            >
                                              <div className={Style.shopee-popover__ref}>
                                                <div
                                                  
                                                  className={Style.icon disabled}
                                                >
                                                  <i
                                                    
                                                    className={Style.icon-zoom shopee-icon}
                                                  >
                                                    {/* <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M2.307 13.448a7.878 7.878 0 1111.525-.412l2.003 2.003a.563.563 0 11-.796.796l-2.003-2.003a7.878 7.878 0 01-10.729-.384zm10.675-1.15a6.753 6.753 0 10-.684.684l.366-.318.318-.366zM5.064 7.315h5.627a.563.563 0 010 1.125H5.064a.563.563 0 110-1.125z}></path>
                                                    </svg> */}
                                                  </i>
                                                </div>
                                              </div>{" "}
                                              <div
                                                className={Style.shopee-tooltip__popper}
                                                style="display: none; max-width: 280px;"
                                              >
                                                <div className={Style.shopee-popover__content}>
                                                  Thu nhỏ
                                                </div>
                                              </div>
                                            </div>{" "}
                                            <div
                                              
                                              className={Style.shopee-tooltip tooltip shopee-popover shopee-popover--dark}
                                            >
                                              <div className={Style.shopee-popover__ref}>
                                                <div
                                                  
                                                  className={Style.icon}
                                                >
                                                  <i
                                                    
                                                    className={Style.icon-zoom shopee-icon}
                                                  >
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M2.307 13.448a7.878 7.878 0 1111.525-.412l2.003 2.003a.563.563 0 11-.796.796l-2.003-2.003a7.878 7.878 0 01-10.729-.384zm10.675-1.15a6.753 6.753 0 10-.684.684l.366-.318.318-.366zM7.315 7.315v-2.25a.563.563 0 011.125 0v2.25h2.251a.563.563 0 010 1.125h-2.25v2.251a.563.563 0 01-1.126 0v-2.25h-2.25a.563.563 0 110-1.126h2.25z}></path>
                                                    </svg>
                                                  </i>
                                                </div>
                                              </div>{" "}
                                              <div
                                                className={Style.shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper}
                                                style="display: none; max-width: 280px;"
                                              >
                                                <div className={Style.shopee-popover__content}>
                                                  Phóng to
                                                </div>
                                              </div>
                                            </div>
                                          </div>{" "}
                                          <div
                                            
                                            className={Style.shopee-tooltip tooltip shopee-popover shopee-popover--dark}
                                          >
                                            <div className={Style.shopee-popover__ref}>
                                              <div
                                                
                                                className={Style.icon}
                                              >
                                                <i
                                                  
                                                  className={Style.icon-others shopee-icon}
                                                >
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 15 17"
                                                  >
                                                    <path
                                                      fill-rule="nonzero"
                                                      d="M5 7h8a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2zm0 1a1 1 0 00-1 1v6a1 1 0 001 1h8a1 1 0 001-1V9a1 1 0 00-1-1H5zm3.127-5.52l-.715-.652a.5.5 0 01.674-.739l1.666 1.52a.5.5 0 01-.015.752l-1.666 1.4a.5.5 0 11-.644-.765l.616-.517c-3.988-.047-6.21 1.48-6.828 4.618a.5.5 0 01-.981-.194C.957 4.231 3.643 2.411 8.127 2.48z"
                                                    ></path>
                                                  </svg>
                                                </i>
                                              </div>
                                            </div>{" "}
                                            <div
                                              className={Style.shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper}
                                              style="display: none; max-width: 280px;"
                                            >
                                              <div className={Style.shopee-popover__content}>
                                                Xoay phải 90°
                                              </div>
                                            </div>
                                          </div>{" "}
                                          <div
                                            
                                            className={Style.shopee-tooltip tooltip shopee-popover shopee-popover--dark}
                                          >
                                            <div className={Style.shopee-popover__ref}>
                                              <div
                                                
                                                className={Style.icon}
                                              >
                                                <i
                                                  
                                                  className={Style.icon-others shopee-icon}
                                                >
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 16 14"
                                                  >
                                                    <path
                                                      d="M9.379.758l6.476 12.953a.2.2 0 01-.179.289H9V.847a.2.2 0 01.379-.09zm-2.758 0A.2.2 0 017 .848V14H.324a.2.2 0 01-.18-.29L6.622.759zM6 4.236L1.618 13H6V4.236z"
                                                      fill-rule="evenodd"
                                                    ></path>
                                                  </svg>
                                                </i>
                                              </div>
                                            </div>{" "}
                                            <div
                                              className={Style.shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper}
                                              style="display: none; max-width: 280px;"
                                            >
                                              <div className={Style.shopee-popover__content}>
                                                Lật ngược ảnh theo chiều ngang
                                              </div>
                                            </div>
                                          </div>{" "}
                                          <div
                                            
                                            className={Style.shopee-tooltip tooltip shopee-popover shopee-popover--dark}
                                          >
                                            <div className={Style.shopee-popover__ref}>
                                              <div
                                                
                                                className={Style.icon}
                                              >
                                                <i
                                                  
                                                  className={Style.icon-others shopee-icon}
                                                >
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 14 16"
                                                  >
                                                    <path
                                                      d="M13.242 9.379L.29 15.855A.2.2 0 010 15.676V9h13.153a.2.2 0 01.09.379zm0-2.758a.2.2 0 01-.09.379H0V.324a.2.2 0 01.29-.18l12.952 6.477zM9.764 6L1 1.618V6h8.764z"
                                                      fill-rule="evenodd"
                                                    ></path>
                                                  </svg>
                                                </i>
                                              </div>
                                            </div>{" "}
                                            <div
                                              className={Style.shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper}
                                              style="display: none; max-width: 280px;"
                                            >
                                              <div className={Style.shopee-popover__content}>
                                                Lật ngược ảnh theo chiều dọc
                                              </div>
                                            </div>
                                          </div>
                                        </div>{" "}
                                        <div
                                          
                                          className={Style.actions-right}
                                        >
                                          <button
                                            
                                            type="button"
                                            className={Style.shopee-button shopee-button--small}
                                          >
                                            <span>Nhập Lại</span>
                                          </button>
                                        </div>
                                      </div>
                                      <div  className={Style.mask}>
                                        <div
                                          
                                          className={Style.mask-loading"
                                        >
                                          <img
                                            
                                            src="https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/mmf_portal_seller_root_dir/static/modules/product/image/spinner-balls-g.cb8f25d.gif"
                                            alt="loading"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div  className={Style.panel-right}>
                                      <div
                                        
                                        className={Style.label label-preview}
                                      >
                                        Xem trước
                                      </div>
                                      <div
                                        
                                        className={Style.preview-image-container}
                                        style="width: 120px; height: 120px;"
                                      >
                                        <div
                                          
                                          className={Style.preview-image}
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className={Style.resize-triggers}>
                                    <div className={Style.expand-trigger}>
                                      <div style="width: 1px; height: 1px;}></div>
                                    </div>
                                    <div className={Style.contract-trigger}></div>
                                  </div>
                                </div>
                                <div className={Style.shopee-modal__footer}>
                                  {" "}
                                  <div className={Style.shopee-modal__footer-buttons}>
                                    <button
                                      type="button"
                                      className={Style.shopee-button shopee-button--normal}
                                    >
                                      <span>Đóng</span>
                                    </button>
                                    <button
                                      type="button"
                                      disabled="disabled"
                                      className={Style.shopee-button shopee-button--primary shopee-button--normal disabled"
                                    >
                                      <span>Lưu</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <i className={Style.shopee-icon shopee-modal__close}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M2.85355339,1.98959236 L8.157,7.29314575 L13.4601551,1.98959236 C13.6337215,1.81602601 13.9031459,1.79674086 14.098014,1.93173691 L14.1672619,1.98959236 C14.362524,2.18485451 14.362524,2.501437 14.1672619,2.69669914 L14.1672619,2.69669914 L8.864,8.00014575 L14.1672619,13.3033009 C14.362524,13.498563 14.362524,13.8151455 14.1672619,14.0104076 C13.9719997,14.2056698 13.6554173,14.2056698 13.4601551,14.0104076 L8.157,8.70714575 L2.85355339,14.0104076 C2.67998704,14.183974 2.41056264,14.2032591 2.2156945,14.0682631 L2.14644661,14.0104076 C1.95118446,13.8151455 1.95118446,13.498563 2.14644661,13.3033009 L2.14644661,13.3033009 L7.45,8.00014575 L2.14644661,2.69669914 C1.95118446,2.501437 1.95118446,2.18485451 2.14644661,1.98959236 C2.34170876,1.79433021 2.65829124,1.79433021 2.85355339,1.98959236 Z"
                                  ></path>
                                </svg>
                              </i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div  className={Style.promotion-image-remark}>
                    <div
                      
                      className={Style.promotion-image-remark-content"
                    >
                      <ul "}>
                        <li "}>Tải lên hình ảnh 1:1.</li>
                        <li "}>
                          Ảnh bìa sẽ được hiển thị tại các trang Kết quả tìm
                          kiếm, Gợi ý hôm nay,... Việc sử dụng ảnh bìa đẹp sẽ
                          thu hút thêm lượt truy cập vào sản phẩm của bạn
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  
                  className={Style.product-video-manager edit-row"
                  
                  data-product-edit-field-unique-id="video"
                >
                  <div  className={Style.edit-label edit-title}>
                    <div data-education-trigger-key="video}>
                      {" "}
                      Video sản phẩm{" "}
                    </div>
                  </div>
                  <div  className={Style.video-manager}>
                    <div
                      
                      className={Style.main"
                      data-education-trigger-key="video"
                    >
                      <div
                        
                        className={Style.shopee-file-upload}
                        accept="video/mp4"
                      >
                        <div
                          
                          className={Style.shopee-upload}
                          simple="true"
                        >
                          <div className={Style.shopee-upload-wrapper shopee-upload-dragger}>
                            <input
                              type="file"
                              name="file"
                              accept="video/mp4"
                              simple="true"
                              className={Style.shopee-upload__input"
                            />
                            <div className={Style.upload-icon}>
                              <i className={Style.shopee-icon}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M13 2a1 1 0 0 1 1 1v7.035a3.538 3.538 0 0 0-1 0V3H2v10h8.035a3.538 3.538 0 0 0 0 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h11Z}></path>
                                  <path d="M6 5.667c0-.481.549-.755.933-.467l3.111 2.333c.312.234.312.7 0 .934L6.934 10.8A.583.583 0 0 1 6 10.333V5.667Zm7 5.833a.5.5 0 0 1 1 0V13h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V14h-1.5a.5.5 0 0 1 0-1H13v-1.5Z}></path>
                                </svg>
                              </i>
                            </div>
                            <span  className={Style.upload-text}>
                              Thêm video
                            </span>
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={Style.video-manager-remark}>
                    <div
                      
                      className={Style.video-manager-remark-content"
                    >
                      <ul>
                        <li >
                          Kích thước: Tối đa 30Mb, độ phân giải không vượt quá
                          1280x1280px
                        </li>
                        <li >Độ dài: 10s-60s</li>
                        <li >
                          Định dạng: MP4 (không hỗ trợ vp9)
                        </li>
                        <li }>
                          Lưu ý: sản phẩm có thể hiển thị trong khi video đang
                          được xử lý. Video sẽ tự động hiển thị sau khi đã xử lý
                          thành công.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div   className={Style.edit-row}>
                  <div
                    
                    className={Style.edit-label edit-title"
                    data-education-trigger-key="name"
                  >
                    <div
                      
                      className={Style.mandatory"
                      
                    >
                      <span  className={Style.mandatory-icon}>
                        *
                      </span>
                    </div>
                    <span  data-v-2250a4e1="}>
                      Tên sản phẩm
                    </span>
                  </div>
                  <div   className={Style.edit-main}>
                    <div
                      
                      className={Style.popover-wrap"
                      
                    >
                      <div
                        
                        className={Style.custom-len-calc-input product-edit-form-item"
                        size="large"
                        data-education-trigger-key="name"
                        
                        data-product-edit-field-unique-id="name"
                      >
                        <div
                          
                          className={Style.product-edit-form-item-content"
                        >
                          <div
                           
                            className={Style.shopee-input"
                            data-v-752d3760=""
                          >
                            <div className={Style.shopee-input__inner shopee-input__inner--large}>
                              <input
                                type="text"
                                placeholder="Nhập vào"
                                size="large"
                                resize="none"
                                rows="2"
                                minrows="2"
                                maxlength="Infinity"
                                restrictiontype="input"
                                max="Infinity"
                                min="-Infinity"
                                className={Style.shopee-input__input"
                              />
                              <div className={Style.shopee-input__suffix}>
                                <span className={Style.shopee-input__suffix-split}></span>
                                0/120
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  
                  className={Style.edit-row is-last-edit-row"
                >
                  <div
                    
                    className={Style.edit-label edit-row-left"
                    data-education-trigger-key="category"
                  >
                    <div
                      
                      className={Style.mandatory"
                      
                    >
                      <span className={Style.mandatory-icon}>
                        *
                      </span>
                    </div>
                    <span  data-v-2250a4e1="}>
                      Ngành hàng
                    </span>
                  </div>
                  <div
                    
                    className={Style.degrade-wrap edit-row-right-full}
                    
                  >
                    <div
                     
                      className={Style.product-category}
                      data-v-3cc1ce9b=""
                    >
                      <div
                        
                        className={Style.product-category-box}
                        data-education-trigger-key="category"
                        data-product-edit-field-unique-id="category"
                      >
                        <div
                          
                          className={Style.product-edit-form-item"
                        >
                          <div
                            
                            className={Style.product-edit-form-item-content"
                          >
                            <div
                              
                              className={Style.popover-wrap"
                              data-v-752d3760=""
                            >
                              <div
                               
                                className={Style.product-category-box-inner"
                              >
                                <div
                       
                                  className={Style.product-category-text}
                                >
                                  <span
                                    data-v-742585f7=""
                                    
                                    className={Style.product-category-placeholder}
                                  >
                                    {" "}
                                    Chọn ngành hàng{" "}
                                  </span>
                                </div>
                                <i
                                  data-v-742585f7=""
                                  className={Style.product-category-icon shopee-icon}
                                  
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M13.7698326,4.53553391 L11.6485122,2.41421356 L9.52719188,4.53553391 L11.6485122,6.65685425 L13.7698326,4.53553391 Z M10.9414054,7.36396103 L8.8200851,5.24264069 L2.71213203,11.3505938 L2.5,13.6840461 L4.83345238,13.4719141 L10.9414054,7.36396103 Z M12.355619,1.70710678 L14.4769394,3.82842712 C14.8674636,4.21895142 14.8674636,4.8521164 14.4769394,5.24264069 L5.54055916,14.1790209 C5.37514107,14.344439 5.1569639,14.4466277 4.92398812,14.4678073 L2.59053575,14.6799393 C2.04051912,14.7299408 1.55410831,14.3245985 1.50410679,13.7745819 C1.49863107,13.7143489 1.49863107,13.6537434 1.50410679,13.5935104 L1.71623883,11.260058 C1.73741844,11.0270822 1.83960716,10.8089051 2.00502525,10.643487 L10.9414054,1.70710678 C11.3319297,1.31658249 11.9650947,1.31658249 12.355619,1.70710678 Z"
                                    ></path>
                                  </svg>
                                </i>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      
                      className={Style.apply-suggestion-alert}
                      data-v-3cc1ce9b=""
                    ></div>
                  </div>
                </div>
                <div
                  
                  className={Style.edit-row description-wrap}
                >
                  <div
                   
                    className={Style.edit-label edit-title}
                    data-education-trigger-key="description"
                  >
                    <div
                     
                      className={Style.mandatory}
                      
                    >
                      <span className={Style.mandatory-icon}>
                        *
                      </span>
                    </div>
                    <span >
                      Mô tả sản phẩm
                    </span>
                  </div>
                  <div className={Style.edit-main}>
                    <div
                      data-v-319d48e9=""
                      
                      className={Style.product-description"
                      
                    >
                      <span
                        data-v-6dcd683f=""
                        data-v-97060438=""
                        data-v-319d48e9=""
                        className={Style.async-component}
                        data-education-trigger-key="description"
                        data-product-edit-field-unique-id="description"
                      >
                        <div
                          data-v-1d8f66cb=""
                          data-v-73175622=""
                          data-ls-upload-cmpt=""
                          className={Style.product-description-editor ls-upload-cmpt-container}
                        >
                          <div
                            data-v-1874eccc=""
                            data-v-3a041640=""
                            data-v-73175622=""
                            data-ls-upload-cmpt=""
                            className={Style.popover-wrap"
                            data-v-1d8f66cb=""
                          >
                            <div
                              data-v-3ff2dedc=""
                              data-v-105cd290=""
                              data-v-3a041640=""
                              data-ls-upload-cmpt=""
                              className={Style.custom-len-calc-input product-edit-form-item}
                              autosize=""
                              maxrows="26"
                              minrows="9"
                              data-v-1874eccc=""
                            >
                              <div
                                data-v-3ff2dedc=""
                                data-ls-upload-cmpt=""
                                className={Style.product-edit-form-item-content}
                              >
                                <div
                                  data-v-105cd290=""
                                  className={Style.shopee-input shopee-input__area}
                                  data-ls-upload-cmpt=""
                                  data-v-3ff2dedc=""
                                >
                                  <textarea
                                    type="textarea"
                                    resize="none"
                                    rows="2"
                                    minrows="9"
                                    maxrows="26"
                                    autosize="true"
                                    maxlength="Infinity"
                                    restrictiontype="input"
                                    max="Infinity"
                                    min="-Infinity"
                                    className={Style.shopee-input__inner shopee-input__inner--normal}
                                    style="resize: none; min-height: 210px; height: 210px;"
                                  ></textarea>
                                </div>{" "}
                                <div
                                  data-v-105cd290=""
                                  data-v-3ff2dedc=""
                                  data-ls-upload-cmpt=""
                                  className={Style.text-area-label}
                                >
                                  <span
                                    data-v-105cd290=""
                                    data-v-3ff2dedc=""
                                    data-ls-upload-cmpt=""
                                    className={Style.text-area-label-pre}
                                  >
                                    0
                                  </span>
                                  <span
                                    data-v-105cd290=""
                                    data-v-3ff2dedc=""
                                    data-ls-upload-cmpt=""
                                  >
                                    /3000
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </span>
                      <div
                        data-v-646a2e52=""
                        data-v-319d48e9=""
                        className={Style.banner-generator-container banner-generator}
                        entrance-type="4"
                      >
                        {" "}
                        <div data-v-646a2e52="" className={Style.image-selector-wrapper}>
                          <div className={Style.shopee-upload}>
                            <div className={Style.shopee-upload-wrapper}>
                              <input
                                type="file"
                                name="file"
                                accept=".jpg, .jpeg, .png"
                                className={Style.shopee-upload__input}
                              />{" "}
                              <span></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductEditmain;
