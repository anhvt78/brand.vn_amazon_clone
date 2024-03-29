import React from "react";

const ImageCropperModal = () => {
  return (
    <div class="shopeeModal image-cropper-modal" close-inside="">
      <div class="shopeeModal__mask" style="display: none; z-index: 1000005;">
        <div class="shopeeModal__container">
          <div class="shopeeModal__box" style="display: none;">
            <div class="shopeeModal__content shopeeModal__content--normal">
              <div class="shopeeModal__header">
                <div class="image-cropper-header">
                  Chỉnh sửa hình ảnh sản phẩm
                </div>
              </div>
              <div class="shopeeModalBody" style="position: relative;">
                <div class="image-cropper-content">
                  <div class="panel-left">
                    <div
                      class="image-container"
                      style="width: 400px; height: 400px;"
                    >
                      <img alt="" class="image" />
                    </div>
                    <div class="actions-bar">
                      <div class="actions-left">
                        <div class="zoom">
                          <div class="shopee-tooltip tooltip shopee-popover shopee-popover--dark">
                            <div class="shopee-popover__ref">
                              <div class="icon disabled">
                                <i class="icon-zoom shopeeIcon">
                                  {/* <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M2.307 13.448a7.878 7.878 0 1111.525-.412l2.003 2.003a.563.563 0 11-.796.796l-2.003-2.003a7.878 7.878 0 01-10.729-.384zm10.675-1.15a6.753 6.753 0 10-.684.684l.366-.318.318-.366zM5.064 7.315h5.627a.563.563 0 010 1.125H5.064a.563.563 0 110-1.125z"></path>
                                    </svg> */}
                                </i>
                              </div>
                            </div>
                            <div
                              class="shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper"
                              style="display: none; max-width: 280px;"
                            >
                              <div class="shopee-popover__content">Thu nhỏ</div>
                            </div>
                          </div>
                          <div class="shopee-tooltip tooltip shopee-popover shopee-popover--dark">
                            <div class="shopee-popover__ref">
                              <div class="icon">
                                <i class="icon-zoom shopeeIcon">
                                  {/* <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M2.307 13.448a7.878 7.878 0 1111.525-.412l2.003 2.003a.563.563 0 11-.796.796l-2.003-2.003a7.878 7.878 0 01-10.729-.384zm10.675-1.15a6.753 6.753 0 10-.684.684l.366-.318.318-.366zM7.315 7.315v-2.25a.563.563 0 011.125 0v2.25h2.251a.563.563 0 010 1.125h-2.25v2.251a.563.563 0 01-1.126 0v-2.25h-2.25a.563.563 0 110-1.126h2.25z"></path>
                                    </svg> */}
                                </i>
                              </div>
                            </div>
                            <div
                              class="shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper"
                              style="display: none; max-width: 280px;"
                            >
                              <div class="shopee-popover__content">
                                Phóng to
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="shopee-tooltip tooltip shopee-popover shopee-popover--dark">
                          <div class="shopee-popover__ref">
                            <div class="icon">
                              <i class="icon-others shopeeIcon">
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
                          </div>
                          <div
                            class="shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper"
                            style="display: none; max-width: 280px;"
                          >
                            <div class="shopee-popover__content">
                              Xoay phải 90°
                            </div>
                          </div>
                        </div>
                        <div class="shopee-tooltip tooltip shopee-popover shopee-popover--dark">
                          <div class="shopee-popover__ref">
                            <div class="icon">
                              <i class="icon-others shopeeIcon">
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
                          </div>
                          <div
                            class="shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper"
                            style="display: none; max-width: 280px;"
                          >
                            <div class="shopee-popover__content">
                              Lật ngược ảnh theo chiều ngang
                            </div>
                          </div>
                        </div>
                        <div class="shopee-tooltip tooltip shopee-popover shopee-popover--dark">
                          <div class="shopee-popover__ref">
                            <div class="icon">
                              <i class="icon-others shopeeIcon">
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
                          </div>
                          <div
                            class="shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper"
                            style="display: none; max-width: 280px;"
                          >
                            <div class="shopee-popover__content">
                              Lật ngược ảnh theo chiều dọc
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="actions-right">
                        <button
                          type="button"
                          class="shopee-button shopee-button--small"
                        >
                          <span>Nhập Lại</span>
                        </button>
                      </div>
                    </div>
                    <div class="mask">
                      <div class="mask-loading">
                        <img
                          src="https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/mmf_portal_seller_root_dir/static/modules/product/image/spinner-balls-g.cb8f25d.gif"
                          alt="loading"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="panel-right">
                    <div class="label label-preview">Xem trước</div>
                    <div
                      class="preview-image-container"
                      style="width: 120px; height: 120px;"
                    >
                      <div class="preview-image"></div>
                    </div>
                  </div>
                </div>
                <div class="resize-triggers">
                  <div class="expand-trigger">
                    <div style="width: 1px; height: 1px;"></div>
                  </div>
                  <div class="contract-trigger"></div>
                </div>
              </div>
              <div class="shopeeModal__footer">
                <div class="shopeeModal__footer-buttons">
                  <button
                    type="button"
                    class="shopee-button shopee-button--normal"
                  >
                    <span>Đóng</span>
                  </button>{" "}
                  <button
                    type="button"
                    disabled="disabled"
                    class="shopee-button shopee-button--primary shopee-button--normal disabled"
                  >
                    <span>Lưu</span>
                  </button>
                </div>
              </div>
            </div>{" "}
            <i class="shopeeIcon shopeeModal__close">
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
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
  );
};

export default ImageCropperModal;
