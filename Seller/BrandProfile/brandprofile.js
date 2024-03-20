import React from "react";

import "../../styles/addNewBrand.css";

const Brandprofile = () => {
  return (
    <div class="app-container">
      <div class="page-container">
        <div class="page-content-wrapper content-no-sidebar">
          <div data-v-d7acd906="" class="brand">
            <div data-v-4def8b72="" data-v-d7acd906="" class="new-brand">
              <div
                data-v-164cebc8=""
                data-v-4def8b72=""
                class="card brand-container"
              >
                <div data-v-164cebc8="" class="brand-content">
                  <div data-v-164cebc8="" class="title">
                    {" "}
                    Thêm tên thương hiệu mới{" "}
                  </div>
                  <div data-v-164cebc8="" class="subtitle">
                    {" "}
                    Vui lòng điền thông tin bắt buộc để thêm thương hiệu của
                    shop vào cơ sở dữ liệu, để shop có thể sử dụng thương hiệu
                    vào thông tin sản phẩm của mình.{" "}
                  </div>
                  <form
                    data-v-164cebc8=""
                    autocomplete="off"
                    class="shopee-form form-container shopee-form--label-right"
                  >
                    <div
                      data-v-164cebc8=""
                      class="shopee-form-item shopee-form-item--large"
                    >
                      <label class="shopee-form-item__label">
                        {" "}
                        <div data-v-164cebc8="" class="form-label">
                          <span
                            data-v-164cebc8=""
                            class="brand-new-icon-required"
                          >
                            *
                          </span>
                          <span data-v-164cebc8="" class="brand-new-label">
                            {" "}
                            Tên thương hiệu{" "}
                          </span>
                          <div
                            data-v-164cebc8=""
                            class="shopee-popover shopee-popover--light"
                          >
                            <div class="shopee-popover__ref">
                              <i
                                data-v-164cebc8=""
                                class="brand-new-icon-qa shopee-icon"
                              >
                                {/* <svg
                                  data-name="图层 1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 1024 1024"
                                >
                                  <g data-name="Layer 1">
                                    <path d="M512 1024A512.2 512.2 0 0 1 312.75 40.2a512.12 512.12 0 0 1 398.6 943.5A507.07 507.07 0 0 1 512 1024zm0-960a447.88 447.88 0 0 0-316.8 764.8A448 448 0 1 0 686.45 99.2 444.4 444.4 0 0 0 512 64z"></path>
                                    <path d="M512 640a32 32 0 0 1-32-32c0-81.7 44.1-118 79.6-147.1 31.8-26.2 48.4-41.5 48.4-76.9a96 96 0 1 0-192 0 32 32 0 0 1-64 0c0-88.2 71.8-160 160-160s160 71.8 160 160c0 67.3-39.8 100-71.8 126.3-31.35 25.8-56.2 46.2-56.2 97.7a32 32 0 0 1-32 32z"></path>
                                    <g clip-path="url(#a)">
                                      <path d="M459.05 699h106v106h-106z"></path>
                                    </g>
                                  </g>
                                </svg> */}
                              </i>
                            </div>
                            <div
                              class="shopee-popper shopee-popover__popper shopee-popover__popper--light with-arrow"
                              style="display: none; max-width: 320px;"
                            >
                              <div class="shopee-popover__content">
                                <div data-v-164cebc8="">
                                  {" "}
                                  Tên thương hiệu không được chứa ngôn ngữ không
                                  phù hợp hoặc xúc phạm. Tránh bất kỳ lỗi chính
                                  tả nào, nếu không phù hợp yêu cầu của shop sẽ
                                  bị từ chối.{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </label>{" "}
                      <div class="shopee-form-item__control">
                        <div class="shopee-form-item__content">
                          <div
                            data-v-e4ecc97c=""
                            data-v-164cebc8=""
                            placeholder="Nhập tên thương hiệu của shop"
                            class="form-input"
                          >
                            <div data-v-e4ecc97c="" class="shopee-input">
                              <div class="shopee-input__inner shopee-input__inner--large">
                                <input
                                  type="text"
                                  placeholder="Nhập tên thương hiệu của shop"
                                  resize="none"
                                  rows="2"
                                  minrows="2"
                                  maxlength="Infinity"
                                  restrictiontype="input"
                                  max="Infinity"
                                  min="-Infinity"
                                  class="shopee-input__input"
                                />{" "}
                                <div class="shopee-input__suffix">
                                  <span class="shopee-input__suffix-split"></span>
                                  0/63
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                    <div
                      data-v-164cebc8=""
                      class="shopee-form-item shopee-form-item--large"
                    >
                      <label class="shopee-form-item__label">
                        {" "}
                        <div data-v-164cebc8="" class="form-label">
                          <span
                            data-v-164cebc8=""
                            class="brand-new-icon-required"
                          >
                            *
                          </span>
                          <span data-v-164cebc8="" class="brand-new-label">
                            {" "}
                            Ngành hàng{" "}
                          </span>
                          <div
                            data-v-164cebc8=""
                            class="shopee-popover shopee-popover--light"
                          >
                            <div class="shopee-popover__ref">
                              <i
                                data-v-164cebc8=""
                                class="brand-new-icon-qa shopee-icon"
                              >
                                {/* <svg
                                  data-name="图层 1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 1024 1024"
                                >
                                  <g data-name="Layer 1">
                                    <path d="M512 1024A512.2 512.2 0 0 1 312.75 40.2a512.12 512.12 0 0 1 398.6 943.5A507.07 507.07 0 0 1 512 1024zm0-960a447.88 447.88 0 0 0-316.8 764.8A448 448 0 1 0 686.45 99.2 444.4 444.4 0 0 0 512 64z"></path>
                                    <path d="M512 640a32 32 0 0 1-32-32c0-81.7 44.1-118 79.6-147.1 31.8-26.2 48.4-41.5 48.4-76.9a96 96 0 1 0-192 0 32 32 0 0 1-64 0c0-88.2 71.8-160 160-160s160 71.8 160 160c0 67.3-39.8 100-71.8 126.3-31.35 25.8-56.2 46.2-56.2 97.7a32 32 0 0 1-32 32z"></path>
                                    <g clip-path="url(#a)">
                                      <path d="M459.05 699h106v106h-106z"></path>
                                    </g>
                                  </g>
                                </svg> */}
                              </i>
                            </div>{" "}
                            <div
                              class="shopee-popper shopee-popover__popper shopee-popover__popper--light with-arrow"
                              style="display: none; max-width: 320px;"
                            >
                              <div class="shopee-popover__content">
                                <div data-v-164cebc8="">
                                  {" "}
                                  Chỉ chọn các ngành hàng có liên quan đến
                                  thương hiệu của shop. Tránh thêm các ngành
                                  hàng không liên quan, nếu không phù hợp yêu
                                  cầu của shop có thể bị từ chối.{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </label>{" "}
                      <div class="shopee-form-item__control">
                        <div class="shopee-form-item__content">
                          <div
                            data-v-164cebc8=""
                            class="category-input-container"
                          >
                            <div
                              data-v-86902886=""
                              data-v-164cebc8=""
                              class="category-multiple-input"
                            >
                              <div data-v-86902886="" class="shopee-scrollbar">
                                <div class="shopee-scrollbar__wrapper">
                                  <div class="shopee-scrollbar__bar vertical">
                                    <div
                                      class="shopee-scrollbar__thumb"
                                      style="top: 0px; height: 0px;"
                                    ></div>
                                  </div>{" "}
                                  <div
                                    class="shopee-scrollbar__content"
                                    style="position: relative;"
                                  >
                                    <div data-v-86902886="" class="container">
                                      <span
                                        data-v-86902886=""
                                        class="placeholder"
                                      >
                                        Chọn ngành hàng liên quan
                                      </span>{" "}
                                      <i
                                        data-v-86902886=""
                                        class="down-btn shopee-icon"
                                      >
                                        {/* <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M8,9.18933983 L4.03033009,5.21966991 C3.73743687,4.9267767 3.26256313,4.9267767 2.96966991,5.21966991 C2.6767767,5.51256313 2.6767767,5.98743687 2.96966991,6.28033009 L7.46966991,10.7803301 C7.76256313,11.0732233 8.23743687,11.0732233 8.53033009,10.7803301 L13.0303301,6.28033009 C13.3232233,5.98743687 13.3232233,5.51256313 13.0303301,5.21966991 C12.7374369,4.9267767 12.2625631,4.9267767 11.9696699,5.21966991 L8,9.18933983 Z"></path>
                                        </svg> */}
                                      </i>
                                    </div>
                                    <div class="resize-triggers">
                                      <div class="expand-trigger">
                                        <div style="width: 553px; height: 33px;"></div>
                                      </div>
                                      <div class="contract-trigger"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                    <div
                      data-v-164cebc8=""
                      class="form-item-product-images shopee-form-item shopee-form-item--large"
                    >
                      <label class="shopee-form-item__label">
                        {" "}
                        <div data-v-164cebc8="" class="form-label">
                          <span
                            data-v-164cebc8=""
                            class="brand-new-icon-required"
                          >
                            *
                          </span>
                          <span data-v-164cebc8="" class="brand-new-label">
                            {" "}
                            Hình ảnh sản phẩm mẫu{" "}
                          </span>
                          <div
                            data-v-164cebc8=""
                            class="shopee-popover shopee-popover--light"
                          >
                            <div class="shopee-popover__ref">
                              <i
                                data-v-164cebc8=""
                                class="brand-new-icon-qa shopee-icon"
                              >
                                {/* <svg
                                  data-name="图层 1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 1024 1024"
                                >
                                  <g data-name="Layer 1">
                                    <path d="M512 1024A512.2 512.2 0 0 1 312.75 40.2a512.12 512.12 0 0 1 398.6 943.5A507.07 507.07 0 0 1 512 1024zm0-960a447.88 447.88 0 0 0-316.8 764.8A448 448 0 1 0 686.45 99.2 444.4 444.4 0 0 0 512 64z"></path>
                                    <path d="M512 640a32 32 0 0 1-32-32c0-81.7 44.1-118 79.6-147.1 31.8-26.2 48.4-41.5 48.4-76.9a96 96 0 1 0-192 0 32 32 0 0 1-64 0c0-88.2 71.8-160 160-160s160 71.8 160 160c0 67.3-39.8 100-71.8 126.3-31.35 25.8-56.2 46.2-56.2 97.7a32 32 0 0 1-32 32z"></path>
                                    <g clip-path="url(#a)">
                                      <path d="M459.05 699h106v106h-106z"></path>
                                    </g>
                                  </g>
                                </svg> */}
                              </i>
                            </div>{" "}
                            <div
                              class="shopee-popper shopee-popover__popper shopee-popover__popper--light with-arrow"
                              style="display: none; max-width: 320px;"
                            >
                              <div class="shopee-popover__content">
                                <div data-v-164cebc8="">
                                  {" "}
                                  Sản phẩm phải hiển thị một cách rõ ràng, nhằm
                                  giúp xác minh thương hiệu của Shop. Sử dụng
                                  hình ảnh có cả sản phẩm và logo thương hiệu
                                  của shop, nếu có thể.{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </label>{" "}
                      <div class="shopee-form-item__control">
                        <div class="shopee-form-item__content">
                          <div
                            data-v-2cea1363=""
                            data-v-164cebc8=""
                            class="edit-main shopee-image-manager"
                          >
                            <div data-v-2cea1363="" class="container">
                              <div
                                data-v-2cea1363=""
                                class="shopee-image-manager__itembox"
                                style="width: 80px; max-width: 80px; height: 80px; max-height: 80px;"
                              >
                                <div
                                  data-v-2cea1363=""
                                  class="shopee-image-manager__content"
                                >
                                  <div
                                    data-v-2cea1363=""
                                    class="shopee-image-manager__upload"
                                  >
                                    <div
                                      data-v-07b6c624=""
                                      data-v-2cea1363=""
                                      class="shopee-file-upload"
                                      accept=".jpg, .jpeg, .png"
                                    >
                                      <div
                                        data-v-07b6c624=""
                                        class="shopee-upload"
                                        aspect="1"
                                      >
                                        <div class="shopee-upload-wrapper shopee-upload-dragger">
                                          <input
                                            type="file"
                                            name="file"
                                            accept=".jpg, .jpeg, .png"
                                            multiple="multiple"
                                            aspect="1"
                                            class="shopee-upload__input"
                                          />{" "}
                                          <div
                                            data-v-2cea1363=""
                                            class="shopee-image-manager__upload__content"
                                          >
                                            <div
                                              data-v-2cea1363=""
                                              class="shopee-image-manager__upload__content__icon"
                                            >
                                              <i
                                                data-v-2cea1363=""
                                                class="shopee-icon"
                                              >
                                                {/* <svg
                                                  viewBox="0 0 23 21"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path d="M18.5 0A1.5 1.5 0 0 1 20 1.5V12c-.49-.07-1.01-.07-1.5 0V1.5H2v12.65l3.395-3.408a.75.75 0 0 1 .958-.087l.104.087L7.89 12.18l3.687-5.21a.75.75 0 0 1 .96-.086l.103.087 3.391 3.405c.81.813.433 2.28-.398 3.07A5.235 5.235 0 0 0 14.053 18H2a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 2 0h16.5Z"></path>
                                                  <path d="M6.5 4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM18.5 14.25a.75.75 0 0 1 1.5 0v2.25h2.25a.75.75 0 0 1 0 1.5H20v2.25a.75.75 0 0 1-1.5 0V18h-2.25a.75.75 0 0 1 0-1.5h2.25v-2.25Z"></path>
                                                </svg> */}
                                              </i>
                                            </div>
                                            <div
                                              data-v-2cea1363=""
                                              class="shopee-image-manager__upload__content__text"
                                            >
                                              {" "}
                                              Thêm hình ảnh (0/10){" "}
                                            </div>
                                          </div>
                                        </div>{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              data-v-31bcacae=""
                              data-v-2cea1363=""
                              class="shopee-modal image-cropper-modal"
                              close-inside=""
                            >
                              <div
                                class="shopee-modal__mask"
                                style="display: none; z-index: 1000004;"
                              >
                                <div class="shopee-modal__container">
                                  <div
                                    class="shopee-modal__box"
                                    style="display: none;"
                                  >
                                    <div class="shopee-modal__content shopee-modal__content--normal">
                                      <div class="shopee-modal__header">
                                        <div
                                          data-v-31bcacae=""
                                          class="image-cropper-header"
                                        >
                                          Chỉnh sửa hình ảnh sản phẩm
                                        </div>
                                      </div>{" "}
                                      <div
                                        class="shopee-modal__body"
                                        style="position: relative;"
                                      >
                                        <div
                                          data-v-31bcacae=""
                                          class="image-cropper-content"
                                        >
                                          <div
                                            data-v-31bcacae=""
                                            class="panel-left"
                                          >
                                            <div
                                              data-v-31bcacae=""
                                              class="image-container"
                                              style="width: 400px; height: 400px;"
                                            >
                                              {" "}
                                              <img
                                                data-v-31bcacae=""
                                                alt=""
                                                class="image"
                                              />
                                            </div>{" "}
                                            <div
                                              data-v-31bcacae=""
                                              class="actions-bar"
                                            >
                                              <div
                                                data-v-31bcacae=""
                                                class="actions-left"
                                              >
                                                <div
                                                  data-v-31bcacae=""
                                                  class="zoom"
                                                >
                                                  <div
                                                    data-v-31bcacae=""
                                                    class="shopee-tooltip tooltip shopee-popover shopee-popover--dark"
                                                  >
                                                    <div class="shopee-popover__ref">
                                                      <div
                                                        data-v-31bcacae=""
                                                        class="icon disabled"
                                                      >
                                                        <i
                                                          data-v-31bcacae=""
                                                          class="icon-zoom shopee-icon"
                                                        >
                                                          {/* <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 16 16"
                                                          >
                                                            <path d="M2.307 13.448a7.878 7.878 0 1111.525-.412l2.003 2.003a.563.563 0 11-.796.796l-2.003-2.003a7.878 7.878 0 01-10.729-.384zm10.675-1.15a6.753 6.753 0 10-.684.684l.366-.318.318-.366zM5.064 7.315h5.627a.563.563 0 010 1.125H5.064a.563.563 0 110-1.125z"></path>
                                                          </svg> */}
                                                        </i>
                                                      </div>
                                                    </div>{" "}
                                                    <div
                                                      class="shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper"
                                                      style="display: none; max-width: 280px;"
                                                    >
                                                      <div class="shopee-popover__content">
                                                        Thu nhỏ
                                                      </div>
                                                    </div>
                                                  </div>{" "}
                                                  <div
                                                    data-v-31bcacae=""
                                                    class="shopee-tooltip tooltip shopee-popover shopee-popover--dark"
                                                  >
                                                    <div class="shopee-popover__ref">
                                                      <div
                                                        data-v-31bcacae=""
                                                        class="icon"
                                                      >
                                                        <i
                                                          data-v-31bcacae=""
                                                          class="icon-zoom shopee-icon"
                                                        >
                                                          {/* <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 16 16"
                                                          >
                                                            <path d="M2.307 13.448a7.878 7.878 0 1111.525-.412l2.003 2.003a.563.563 0 11-.796.796l-2.003-2.003a7.878 7.878 0 01-10.729-.384zm10.675-1.15a6.753 6.753 0 10-.684.684l.366-.318.318-.366zM7.315 7.315v-2.25a.563.563 0 011.125 0v2.25h2.251a.563.563 0 010 1.125h-2.25v2.251a.563.563 0 01-1.126 0v-2.25h-2.25a.563.563 0 110-1.126h2.25z"></path>
                                                          </svg> */}
                                                        </i>
                                                      </div>
                                                    </div>{" "}
                                                    <div
                                                      class="shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper"
                                                      style="display: none; max-width: 280px;"
                                                    >
                                                      <div class="shopee-popover__content">
                                                        Phóng to
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>{" "}
                                                <div
                                                  data-v-31bcacae=""
                                                  class="shopee-tooltip tooltip shopee-popover shopee-popover--dark"
                                                >
                                                  <div class="shopee-popover__ref">
                                                    <div
                                                      data-v-31bcacae=""
                                                      class="icon"
                                                    >
                                                      <i
                                                        data-v-31bcacae=""
                                                        class="icon-others shopee-icon"
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
                                                    class="shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper"
                                                    style="display: none; max-width: 280px;"
                                                  >
                                                    <div class="shopee-popover__content">
                                                      Xoay phải 90°
                                                    </div>
                                                  </div>
                                                </div>{" "}
                                                <div
                                                  data-v-31bcacae=""
                                                  class="shopee-tooltip tooltip shopee-popover shopee-popover--dark"
                                                >
                                                  <div class="shopee-popover__ref">
                                                    <div
                                                      data-v-31bcacae=""
                                                      class="icon"
                                                    >
                                                      <i
                                                        data-v-31bcacae=""
                                                        class="icon-others shopee-icon"
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
                                                    class="shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper"
                                                    style="display: none; max-width: 280px;"
                                                  >
                                                    <div class="shopee-popover__content">
                                                      Lật ngược ảnh theo chiều
                                                      ngang
                                                    </div>
                                                  </div>
                                                </div>{" "}
                                                <div
                                                  data-v-31bcacae=""
                                                  class="shopee-tooltip tooltip shopee-popover shopee-popover--dark"
                                                >
                                                  <div class="shopee-popover__ref">
                                                    <div
                                                      data-v-31bcacae=""
                                                      class="icon"
                                                    >
                                                      <i
                                                        data-v-31bcacae=""
                                                        class="icon-others shopee-icon"
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
                                                    class="shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper"
                                                    style="display: none; max-width: 280px;"
                                                  >
                                                    <div class="shopee-popover__content">
                                                      Lật ngược ảnh theo chiều
                                                      dọc
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>{" "}
                                              <div
                                                data-v-31bcacae=""
                                                class="actions-right"
                                              >
                                                <button
                                                  data-v-31bcacae=""
                                                  type="button"
                                                  class="shopee-button shopee-button--small disabled"
                                                  disabled="disabled"
                                                >
                                                  <span>Nhập Lại</span>
                                                </button>
                                              </div>
                                            </div>{" "}
                                            <div
                                              data-v-31bcacae=""
                                              class="mask"
                                            >
                                              <div
                                                data-v-31bcacae=""
                                                class="mask-loading"
                                              >
                                                <img
                                                  data-v-31bcacae=""
                                                  src="https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/mmf_portal_seller_root_dir/static/modules/brand-registration/image/spinner-balls-g.cb8f25d.gif"
                                                  alt="loading"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            data-v-31bcacae=""
                                            class="panel-right"
                                          >
                                            {" "}
                                            <div
                                              data-v-31bcacae=""
                                              class="label label-preview"
                                            >
                                              Xem trước
                                            </div>{" "}
                                            <div
                                              data-v-31bcacae=""
                                              class="preview-image-container"
                                              style="width: 120px; height: 120px;"
                                            >
                                              <div
                                                data-v-31bcacae=""
                                                class="preview-image"
                                              ></div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="resize-triggers">
                                          <div class="expand-trigger">
                                            <div style="width: 1px; height: 1px;"></div>
                                          </div>
                                          <div class="contract-trigger"></div>
                                        </div>
                                      </div>{" "}
                                      <div class="shopee-modal__footer">
                                        {" "}
                                        <div class="shopee-modal__footer-buttons">
                                          <button
                                            type="button"
                                            class="shopee-button shopee-button--large"
                                          >
                                            <span>Đóng</span>
                                          </button>{" "}
                                          <button
                                            type="button"
                                            disabled="disabled"
                                            class="shopee-button shopee-button--primary shopee-button--large disabled"
                                          >
                                            <span>Lưu</span>
                                          </button>
                                        </div>
                                      </div>
                                    </div>{" "}
                                    <i class="shopee-icon shopee-modal__close">
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
                        </div>{" "}
                        <div data-v-164cebc8="" class="upload-image-number-msg">
                          {" "}
                          Upload at least 1 images{" "}
                        </div>{" "}
                      </div>
                    </div>
                    <div
                      data-v-164cebc8=""
                      class="form-item-product-logo shopee-form-item shopee-form-item--large"
                    >
                      <label class="shopee-form-item__label">
                        {" "}
                        <div data-v-164cebc8="" class="form-label">
                          <span data-v-164cebc8="" class="brand-new-label">
                            {" "}
                            Logo thương hiệu{" "}
                          </span>
                          <div
                            data-v-164cebc8=""
                            class="shopee-popover shopee-popover--light"
                          >
                            <div class="shopee-popover__ref">
                              <i
                                data-v-164cebc8=""
                                class="brand-new-icon-qa shopee-icon"
                              >
                                {/* <svg
                                  data-name="图层 1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 1024 1024"
                                >
                                  <g data-name="Layer 1">
                                    <path d="M512 1024A512.2 512.2 0 0 1 312.75 40.2a512.12 512.12 0 0 1 398.6 943.5A507.07 507.07 0 0 1 512 1024zm0-960a447.88 447.88 0 0 0-316.8 764.8A448 448 0 1 0 686.45 99.2 444.4 444.4 0 0 0 512 64z"></path>
                                    <path d="M512 640a32 32 0 0 1-32-32c0-81.7 44.1-118 79.6-147.1 31.8-26.2 48.4-41.5 48.4-76.9a96 96 0 1 0-192 0 32 32 0 0 1-64 0c0-88.2 71.8-160 160-160s160 71.8 160 160c0 67.3-39.8 100-71.8 126.3-31.35 25.8-56.2 46.2-56.2 97.7a32 32 0 0 1-32 32z"></path>
                                    <g clip-path="url(#a)">
                                      <path d="M459.05 699h106v106h-106z"></path>
                                    </g>
                                  </g>
                                </svg> */}
                              </i>
                            </div>{" "}
                            <div
                              class="shopee-popper shopee-popover__popper shopee-popover__popper--light with-arrow"
                              style="display: none; max-width: 320px;"
                            >
                              <div class="shopee-popover__content">
                                <div data-v-164cebc8="">
                                  {" "}
                                  Cung cấp logo chính thức của thương hiệu với
                                  nền trắng, hình ảnh rõ ràng.{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </label>{" "}
                      <div class="shopee-form-item__control">
                        <div class="shopee-form-item__content">
                          <div
                            data-v-2cea1363=""
                            data-v-164cebc8=""
                            class="edit-main shopee-image-manager"
                          >
                            <div data-v-2cea1363="" class="container">
                              <div
                                data-v-2cea1363=""
                                class="shopee-image-manager__itembox"
                                style="width: 80px; max-width: 80px; height: 80px; max-height: 80px;"
                              >
                                <div
                                  data-v-2cea1363=""
                                  class="shopee-image-manager__content"
                                >
                                  <div
                                    data-v-2cea1363=""
                                    class="shopee-image-manager__upload"
                                  >
                                    <div
                                      data-v-07b6c624=""
                                      data-v-2cea1363=""
                                      class="shopee-file-upload"
                                      accept=".jpg, .jpeg, .png"
                                    >
                                      <div
                                        data-v-07b6c624=""
                                        class="shopee-upload"
                                        aspect="1"
                                      >
                                        <div class="shopee-upload-wrapper shopee-upload-dragger">
                                          <input
                                            type="file"
                                            name="file"
                                            accept=".jpg, .jpeg, .png"
                                            multiple="multiple"
                                            aspect="1"
                                            class="shopee-upload__input"
                                          />{" "}
                                          <div
                                            data-v-2cea1363=""
                                            class="shopee-image-manager__upload__content"
                                          >
                                            <div
                                              data-v-2cea1363=""
                                              class="shopee-image-manager__upload__content__icon"
                                            >
                                              <i
                                                data-v-2cea1363=""
                                                class="shopee-icon"
                                              >
                                                {/* <svg
                                                  viewBox="0 0 23 21"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path d="M18.5 0A1.5 1.5 0 0 1 20 1.5V12c-.49-.07-1.01-.07-1.5 0V1.5H2v12.65l3.395-3.408a.75.75 0 0 1 .958-.087l.104.087L7.89 12.18l3.687-5.21a.75.75 0 0 1 .96-.086l.103.087 3.391 3.405c.81.813.433 2.28-.398 3.07A5.235 5.235 0 0 0 14.053 18H2a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 2 0h16.5Z"></path>
                                                  <path d="M6.5 4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM18.5 14.25a.75.75 0 0 1 1.5 0v2.25h2.25a.75.75 0 0 1 0 1.5H20v2.25a.75.75 0 0 1-1.5 0V18h-2.25a.75.75 0 0 1 0-1.5h2.25v-2.25Z"></path>
                                                </svg> */}
                                              </i>
                                            </div>
                                            <div
                                              data-v-2cea1363=""
                                              class="shopee-image-manager__upload__content__text"
                                            >
                                              {" "}
                                              Thêm hình ảnh (0/1){" "}
                                            </div>
                                          </div>
                                        </div>{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              data-v-31bcacae=""
                              data-v-2cea1363=""
                              class="shopee-modal image-cropper-modal"
                              close-inside=""
                            >
                              <div
                                class="shopee-modal__mask"
                                style="display: none; z-index: 1000005;"
                              >
                                <div class="shopee-modal__container">
                                  <div
                                    class="shopee-modal__box"
                                    style="display: none;"
                                  >
                                    <div class="shopee-modal__content shopee-modal__content--normal">
                                      <div class="shopee-modal__header">
                                        <div
                                          data-v-31bcacae=""
                                          class="image-cropper-header"
                                        >
                                          Chỉnh sửa hình ảnh sản phẩm
                                        </div>
                                      </div>{" "}
                                      <div
                                        class="shopee-modal__body"
                                        style="position: relative;"
                                      >
                                        <div
                                          data-v-31bcacae=""
                                          class="image-cropper-content"
                                        >
                                          <div
                                            data-v-31bcacae=""
                                            class="panel-left"
                                          >
                                            <div
                                              data-v-31bcacae=""
                                              class="image-container"
                                              style="width: 400px; height: 400px;"
                                            >
                                              {" "}
                                              <img
                                                data-v-31bcacae=""
                                                alt=""
                                                class="image"
                                              />
                                            </div>{" "}
                                            <div
                                              data-v-31bcacae=""
                                              class="actions-bar"
                                            >
                                              <div
                                                data-v-31bcacae=""
                                                class="actions-left"
                                              >
                                                <div
                                                  data-v-31bcacae=""
                                                  class="zoom"
                                                >
                                                  <div
                                                    data-v-31bcacae=""
                                                    class="shopee-tooltip tooltip shopee-popover shopee-popover--dark"
                                                  >
                                                    <div class="shopee-popover__ref">
                                                      <div
                                                        data-v-31bcacae=""
                                                        class="icon disabled"
                                                      >
                                                        <i
                                                          data-v-31bcacae=""
                                                          class="icon-zoom shopee-icon"
                                                        >
                                                          {/* <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 16 16"
                                                          >
                                                            <path d="M2.307 13.448a7.878 7.878 0 1111.525-.412l2.003 2.003a.563.563 0 11-.796.796l-2.003-2.003a7.878 7.878 0 01-10.729-.384zm10.675-1.15a6.753 6.753 0 10-.684.684l.366-.318.318-.366zM5.064 7.315h5.627a.563.563 0 010 1.125H5.064a.563.563 0 110-1.125z"></path>
                                                          </svg> */}
                                                        </i>
                                                      </div>
                                                    </div>{" "}
                                                    <div
                                                      class="shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper"
                                                      style="display: none; max-width: 280px;"
                                                    >
                                                      <div class="shopee-popover__content">
                                                        Thu nhỏ
                                                      </div>
                                                    </div>
                                                  </div>{" "}
                                                  <div
                                                    data-v-31bcacae=""
                                                    class="shopee-tooltip tooltip shopee-popover shopee-popover--dark"
                                                  >
                                                    <div class="shopee-popover__ref">
                                                      <div
                                                        data-v-31bcacae=""
                                                        class="icon"
                                                      >
                                                        <i
                                                          data-v-31bcacae=""
                                                          class="icon-zoom shopee-icon"
                                                        >
                                                          {/* <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 16 16"
                                                          >
                                                            <path d="M2.307 13.448a7.878 7.878 0 1111.525-.412l2.003 2.003a.563.563 0 11-.796.796l-2.003-2.003a7.878 7.878 0 01-10.729-.384zm10.675-1.15a6.753 6.753 0 10-.684.684l.366-.318.318-.366zM7.315 7.315v-2.25a.563.563 0 011.125 0v2.25h2.251a.563.563 0 010 1.125h-2.25v2.251a.563.563 0 01-1.126 0v-2.25h-2.25a.563.563 0 110-1.126h2.25z"></path>
                                                          </svg> */}
                                                        </i>
                                                      </div>
                                                    </div>{" "}
                                                    <div
                                                      class="shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper"
                                                      style="display: none; max-width: 280px;"
                                                    >
                                                      <div class="shopee-popover__content">
                                                        Phóng to
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>{" "}
                                                <div
                                                  data-v-31bcacae=""
                                                  class="shopee-tooltip tooltip shopee-popover shopee-popover--dark"
                                                >
                                                  <div class="shopee-popover__ref">
                                                    <div
                                                      data-v-31bcacae=""
                                                      class="icon"
                                                    >
                                                      <i
                                                        data-v-31bcacae=""
                                                        class="icon-others shopee-icon"
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
                                                    class="shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper"
                                                    style="display: none; max-width: 280px;"
                                                  >
                                                    <div class="shopee-popover__content">
                                                      Xoay phải 90°
                                                    </div>
                                                  </div>
                                                </div>{" "}
                                                <div
                                                  data-v-31bcacae=""
                                                  class="shopee-tooltip tooltip shopee-popover shopee-popover--dark"
                                                >
                                                  <div class="shopee-popover__ref">
                                                    <div
                                                      data-v-31bcacae=""
                                                      class="icon"
                                                    >
                                                      <i
                                                        data-v-31bcacae=""
                                                        class="icon-others shopee-icon"
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
                                                    class="shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper"
                                                    style="display: none; max-width: 280px;"
                                                  >
                                                    <div class="shopee-popover__content">
                                                      Lật ngược ảnh theo chiều
                                                      ngang
                                                    </div>
                                                  </div>
                                                </div>{" "}
                                                <div
                                                  data-v-31bcacae=""
                                                  class="shopee-tooltip tooltip shopee-popover shopee-popover--dark"
                                                >
                                                  <div class="shopee-popover__ref">
                                                    <div
                                                      data-v-31bcacae=""
                                                      class="icon"
                                                    >
                                                      <i
                                                        data-v-31bcacae=""
                                                        class="icon-others shopee-icon"
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
                                                    class="shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper"
                                                    style="display: none; max-width: 280px;"
                                                  >
                                                    <div class="shopee-popover__content">
                                                      Lật ngược ảnh theo chiều
                                                      dọc
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>{" "}
                                              <div
                                                data-v-31bcacae=""
                                                class="actions-right"
                                              >
                                                <button
                                                  data-v-31bcacae=""
                                                  type="button"
                                                  class="shopee-button shopee-button--small disabled"
                                                  disabled="disabled"
                                                >
                                                  <span>Nhập Lại</span>
                                                </button>
                                              </div>
                                            </div>{" "}
                                            <div
                                              data-v-31bcacae=""
                                              class="mask"
                                            >
                                              <div
                                                data-v-31bcacae=""
                                                class="mask-loading"
                                              >
                                                <img
                                                  data-v-31bcacae=""
                                                  src="https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/mmf_portal_seller_root_dir/static/modules/brand-registration/image/spinner-balls-g.cb8f25d.gif"
                                                  alt="loading"
                                                />
                                              </div>
                                            </div>
                                          </div>{" "}
                                          <div
                                            data-v-31bcacae=""
                                            class="panel-right"
                                          >
                                            {" "}
                                            <div
                                              data-v-31bcacae=""
                                              class="label label-preview"
                                            >
                                              Xem trước
                                            </div>{" "}
                                            <div
                                              data-v-31bcacae=""
                                              class="preview-image-container"
                                              style="width: 120px; height: 120px;"
                                            >
                                              <div
                                                data-v-31bcacae=""
                                                class="preview-image"
                                              ></div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="resize-triggers">
                                          <div class="expand-trigger">
                                            <div style="width: 1px; height: 1px;"></div>
                                          </div>
                                          <div class="contract-trigger"></div>
                                        </div>
                                      </div>{" "}
                                      <div class="shopee-modal__footer">
                                        {" "}
                                        <div class="shopee-modal__footer-buttons">
                                          <button
                                            type="button"
                                            class="shopee-button shopee-button--large"
                                          >
                                            <span>Đóng</span>
                                          </button>{" "}
                                          <button
                                            type="button"
                                            disabled="disabled"
                                            class="shopee-button shopee-button--primary shopee-button--large disabled"
                                          >
                                            <span>Lưu</span>
                                          </button>
                                        </div>
                                      </div>
                                    </div>{" "}
                                    <i class="shopee-icon shopee-modal__close">
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
                        </div>{" "}
                      </div>
                    </div>
                    <div
                      data-v-164cebc8=""
                      class="shopee-form-item shopee-form-item--large"
                    >
                      <label class="shopee-form-item__label">
                        {" "}
                        <div data-v-164cebc8="" class="form-label">
                          <span data-v-164cebc8="" class="brand-new-label">
                            {" "}
                            Website thương hiệu{" "}
                          </span>
                          <div
                            data-v-164cebc8=""
                            class="shopee-popover shopee-popover--light"
                          >
                            <div class="shopee-popover__ref">
                              <i
                                data-v-164cebc8=""
                                class="brand-new-icon-qa shopee-icon"
                              >
                                {/* <svg
                                  data-name="图层 1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 1024 1024"
                                >
                                  <g data-name="Layer 1">
                                    <path d="M512 1024A512.2 512.2 0 0 1 312.75 40.2a512.12 512.12 0 0 1 398.6 943.5A507.07 507.07 0 0 1 512 1024zm0-960a447.88 447.88 0 0 0-316.8 764.8A448 448 0 1 0 686.45 99.2 444.4 444.4 0 0 0 512 64z"></path>
                                    <path d="M512 640a32 32 0 0 1-32-32c0-81.7 44.1-118 79.6-147.1 31.8-26.2 48.4-41.5 48.4-76.9a96 96 0 1 0-192 0 32 32 0 0 1-64 0c0-88.2 71.8-160 160-160s160 71.8 160 160c0 67.3-39.8 100-71.8 126.3-31.35 25.8-56.2 46.2-56.2 97.7a32 32 0 0 1-32 32z"></path>
                                    <g clip-path="url(#a)">
                                      <path d="M459.05 699h106v106h-106z"></path>
                                    </g>
                                  </g>
                                </svg> */}
                              </i>
                            </div>{" "}
                            <div
                              class="shopee-popper shopee-popover__popper shopee-popover__popper--light with-arrow"
                              style="display: none; max-width: 320px;"
                            >
                              <div class="shopee-popover__content">
                                <div data-v-164cebc8="">
                                  {" "}
                                  Website của thương thiệu có thể là website
                                  chính thức hoặc trang mạng xã hội.{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </label>{" "}
                      <div class="shopee-form-item__control">
                        <div class="shopee-form-item__content">
                          <div
                            data-v-e4ecc97c=""
                            data-v-164cebc8=""
                            placeholder="Cung cấp đường dẫn website thương hiệu của shop."
                            class="form-input"
                          >
                            <div data-v-e4ecc97c="" class="shopee-input">
                              <div class="shopee-input__inner shopee-input__inner--large">
                                {" "}
                                <input
                                  type="text"
                                  placeholder="Cung cấp đường dẫn website thương hiệu của shop."
                                  resize="none"
                                  rows="2"
                                  minrows="2"
                                  maxlength="Infinity"
                                  restrictiontype="input"
                                  max="Infinity"
                                  min="-Infinity"
                                  class="shopee-input__input"
                                />{" "}
                                <div class="shopee-input__suffix">
                                  <span class="shopee-input__suffix-split"></span>
                                  0/254
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                    <div
                      data-v-164cebc8=""
                      class="shopee-form-item shopee-form-item--large"
                    >
                      <label class="shopee-form-item__label">
                        {" "}
                        <div data-v-164cebc8="" class="form-label">
                          <span data-v-164cebc8="" class="brand-new-label">
                            {" "}
                            Thông tin thêm{" "}
                          </span>
                        </div>
                      </label>{" "}
                      <div class="shopee-form-item__control">
                        <div class="shopee-form-item__content">
                          <div
                            data-v-e4ecc97c=""
                            data-v-164cebc8=""
                            placeholder="Cung cấp bất kỳ thông tin nào khác về thương hiệu của shop, có thể dùng để tham khảo."
                            autosize=""
                            minrows="6"
                            class="form-input"
                          >
                            <div
                              data-v-e4ecc97c=""
                              class="shopee-input shopee-input__area"
                            >
                              <textarea
                                type="textarea"
                                placeholder="Cung cấp bất kỳ thông tin nào khác về thương hiệu của shop, có thể dùng để tham khảo."
                                resize="none"
                                rows="2"
                                minrows="6"
                                autosize="true"
                                maxlength="Infinity"
                                restrictiontype="input"
                                max="Infinity"
                                min="-Infinity"
                                class="shopee-input__inner shopee-input__inner--large"
                                style="resize: none; min-height: 144px; height: 144px;"
                              ></textarea>
                            </div>
                            <div data-v-e4ecc97c="" class="text-area-label">
                              <span
                                data-v-e4ecc97c=""
                                class="text-area-label-pre"
                              >
                                0
                              </span>
                              /254{" "}
                            </div>
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                    <div
                      data-v-164cebc8=""
                      class="no-margin-bottom shopee-form-item shopee-form-item--large"
                    >
                      <label class="shopee-form-item__label">
                        {" "}
                        <div data-v-164cebc8="" class="form-label"></div>
                      </label>{" "}
                      <div class="shopee-form-item__control">
                        <div class="shopee-form-item__content">
                          <div data-v-164cebc8="">
                            <label
                              data-v-164cebc8=""
                              class="shopee-checkbox brand-new-tips"
                            >
                              <input
                                type="checkbox"
                                class="shopee-checkbox__input"
                                value='Nhấn chọn ô này đồng nghĩa là bạn đã đồng ý rằng nhãn hiệu đã được đăng kí của bạn sẽ phụ thuộc vào sự xét duyệt của Shopee và nó sẽ được tự động chuyển thành "Không có thương hiệu" nếu như không đủ tiêu chuẩn theo quy định của Shopee.'
                              />{" "}
                              <span class="shopee-checkbox__indicator">
                                <i class="shopee-icon">
                                  {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                  </svg> */}
                                </i>{" "}
                              </span>{" "}
                              <span class="shopee-checkbox__label">
                                {" "}
                                Nhấn chọn ô này đồng nghĩa là bạn đã đồng ý rằng
                                nhãn hiệu đã được đăng kí của bạn sẽ phụ thuộc
                                vào sự xét duyệt của Shopee và nó sẽ được tự
                                động chuyển thành "Không có thương hiệu" nếu như
                                không đủ tiêu chuẩn theo quy định của Shopee.{" "}
                              </span>
                            </label>
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  data-v-164cebc8=""
                  class="fix-bottom-bar shopee-fix-bottom-card"
                >
                  <div class="fix-container fixed-bottom" style="z-index: 999;">
                    <div data-v-164cebc8="" class="bottom-bar">
                      <button
                        data-v-164cebc8=""
                        type="button"
                        class="bottom-bar-btn shopee-button shopee-button--primary shopee-button--normal"
                      >
                        <span> Gửi </span>
                      </button>
                    </div>
                  </div>
                  <div class="fix-placeholder" style="height: 72px;"></div>
                </div>
                <div data-v-164cebc8="" class="shopee-modal">
                  <div
                    class="shopee-modal__mask"
                    style="z-index: 1000009; display: none;"
                  >
                    <div class="shopee-modal__container">
                      <div class="shopee-modal__box" style="display: none;">
                        <div
                          class="shopee-modal__content shopee-modal__content--large"
                          style="width: 650px;"
                        >
                          <div class="shopee-modal__header">
                            <div class="shopee-modal__header-inner shopee-modal__header-inner__has-close">
                              {" "}
                              <div class="shopee-modal__title">
                                Ngành hàng đã chọn
                              </div>{" "}
                            </div>
                          </div>{" "}
                          <div
                            class="shopee-modal__body"
                            style="position: relative;"
                          >
                            <div
                              data-v-6bdc1d4c=""
                              data-v-164cebc8=""
                              class="category-selector"
                            >
                              <div data-v-6bdc1d4c="" class="selector">
                                <div
                                  data-v-6bdc1d4c=""
                                  class="shopee-input search-input"
                                >
                                  <div class="shopee-input__inner shopee-input__inner--normal">
                                    <div class="shopee-input__prefix">
                                      <i class="shopee-input__prefix-icon shopee-icon">
                                        {/* <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 32 32"
                                        >
                                          <path
                                            d="M31.7 31.7c-.4.4-1 .4-1.3 0l-8.9-8.9c-2.3 2-5.2 3.2-8.5 3.2-7.2 0-13-5.8-13-13S5.8 0 13 0s13 5.8 13 13c0 3.2-1.2 6.2-3.2 8.5l8.9 8.9c.4.3.4.9 0 1.3zM24 13c0-6.1-4.9-11-11-11S2 6.9 2 13s4.9 11 11 11 11-4.9 11-11z"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                          ></path>
                                        </svg> */}
                                      </i>
                                    </div>{" "}
                                    <input
                                      type="text"
                                      placeholder="Tên Ngành Hàng"
                                      resize="vertical"
                                      rows="2"
                                      minrows="2"
                                      restrictiontype="input"
                                      max="Infinity"
                                      min="-Infinity"
                                      class="shopee-input__input"
                                    />{" "}
                                  </div>
                                </div>{" "}
                                <div data-v-6bdc1d4c="" class="category-wrap">
                                  <div data-v-6bdc1d4c="" class="category-list">
                                    <div
                                      data-v-6bdc1d4c=""
                                      class="category-list-menu"
                                    >
                                      <div
                                        data-v-6bdc1d4c=""
                                        class="shopee-scrollbar"
                                      >
                                        <div
                                          class="shopee-scrollbar__wrapper"
                                          style="margin-right: -20px; padding-right: 20px;"
                                        >
                                          <div class="shopee-scrollbar__bar vertical">
                                            <div
                                              class="shopee-scrollbar__thumb"
                                              style="top: 220.881px; height: 99.1189px;"
                                            ></div>
                                          </div>{" "}
                                          <div
                                            class="shopee-scrollbar__content"
                                            style="position: relative; margin-right: -20px; padding-right: 20px;"
                                          >
                                            <div
                                              data-v-6bdc1d4c=""
                                              class="category-item"
                                            >
                                              <label
                                                data-v-6bdc1d4c=""
                                                class="shopee-checkbox"
                                              >
                                                <input
                                                  type="checkbox"
                                                  class="shopee-checkbox__input"
                                                  value="true"
                                                />{" "}
                                                <span class="shopee-checkbox__indicator">
                                                  <i class="shopee-icon">
                                                    {/* <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                    </svg> */}
                                                  </i>{" "}
                                                </span>{" "}
                                              </label>{" "}
                                              <p
                                                data-v-6bdc1d4c=""
                                                class="text-overflow"
                                              >
                                                Thời Trang Nữ
                                              </p>{" "}
                                              <i
                                                data-v-6bdc1d4c=""
                                                class="icon-next shopee-icon"
                                              >
                                                {/* <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 32 32"
                                                >
                                                  <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                </svg> */}
                                              </i>
                                            </div>
                                            <div
                                              data-v-6bdc1d4c=""
                                              class="category-item"
                                            >
                                              <label
                                                data-v-6bdc1d4c=""
                                                class="shopee-checkbox"
                                              >
                                                <input
                                                  type="checkbox"
                                                  class="shopee-checkbox__input"
                                                  value="true"
                                                />{" "}
                                                <span class="shopee-checkbox__indicator">
                                                  <i class="shopee-icon">
                                                    {/* <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                    </svg> */}
                                                  </i>{" "}
                                                </span>{" "}
                                              </label>{" "}
                                              <p
                                                data-v-6bdc1d4c=""
                                                class="text-overflow"
                                              >
                                                Thời Trang Nam
                                              </p>{" "}
                                              <i
                                                data-v-6bdc1d4c=""
                                                class="icon-next shopee-icon"
                                              >
                                                {/* <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 32 32"
                                                >
                                                  <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                </svg> */}
                                              </i>
                                            </div>
                                            <div
                                              data-v-6bdc1d4c=""
                                              class="category-item"
                                            >
                                              <label
                                                data-v-6bdc1d4c=""
                                                class="shopee-checkbox"
                                              >
                                                <input
                                                  type="checkbox"
                                                  class="shopee-checkbox__input"
                                                  value="true"
                                                />{" "}
                                                <span class="shopee-checkbox__indicator">
                                                  <i class="shopee-icon">
                                                    {/* <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                    </svg> */}
                                                  </i>{" "}
                                                </span>{" "}
                                              </label>{" "}
                                              <p
                                                data-v-6bdc1d4c=""
                                                class="text-overflow"
                                              >
                                                Sắc Đẹp
                                              </p>{" "}
                                              <i
                                                data-v-6bdc1d4c=""
                                                class="icon-next shopee-icon"
                                              >
                                                {/* <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 32 32"
                                                >
                                                  <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                </svg> */}
                                              </i>
                                            </div>
                                            <div
                                              data-v-6bdc1d4c=""
                                              class="category-item"
                                            >
                                              <label
                                                data-v-6bdc1d4c=""
                                                class="shopee-checkbox"
                                              >
                                                <input
                                                  type="checkbox"
                                                  class="shopee-checkbox__input"
                                                  value="true"
                                                />{" "}
                                                <span class="shopee-checkbox__indicator">
                                                  <i class="shopee-icon">
                                                    {/* <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                    </svg> */}
                                                  </i>{" "}
                                                </span>{" "}
                                              </label>{" "}
                                              <p
                                                data-v-6bdc1d4c=""
                                                class="text-overflow"
                                              >
                                                Sức Khỏe
                                              </p>{" "}
                                              <i
                                                data-v-6bdc1d4c=""
                                                class="icon-next shopee-icon"
                                              >
                                                {/* <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 32 32"
                                                >
                                                  <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                </svg> */}{" "}
                                              </i>
                                            </div>
                                            <div
                                              data-v-6bdc1d4c=""
                                              class="category-item"
                                            >
                                              <label
                                                data-v-6bdc1d4c=""
                                                class="shopee-checkbox"
                                              >
                                                <input
                                                  type="checkbox"
                                                  class="shopee-checkbox__input"
                                                  value="true"
                                                />{" "}
                                                <span class="shopee-checkbox__indicator">
                                                  <i class="shopee-icon">
                                                    {/* <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                    </svg> */}
                                                  </i>{" "}
                                                </span>{" "}
                                              </label>{" "}
                                              <p
                                                data-v-6bdc1d4c=""
                                                class="text-overflow"
                                              >
                                                Phụ Kiện Thời Trang
                                              </p>{" "}
                                              <i
                                                data-v-6bdc1d4c=""
                                                class="icon-next shopee-icon"
                                              >
                                                {/* <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 32 32"
                                                >
                                                  <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                </svg> */}
                                              </i>
                                            </div>
                                            <div
                                              data-v-6bdc1d4c=""
                                              class="category-item"
                                            >
                                              <label
                                                data-v-6bdc1d4c=""
                                                class="shopee-checkbox"
                                              >
                                                <input
                                                  type="checkbox"
                                                  class="shopee-checkbox__input"
                                                  value="true"
                                                />{" "}
                                                <span class="shopee-checkbox__indicator">
                                                  <i class="shopee-icon">
                                                    {/* <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                    </svg> */}
                                                  </i>{" "}
                                                </span>{" "}
                                              </label>{" "}
                                              <p
                                                data-v-6bdc1d4c=""
                                                class="text-overflow"
                                              >
                                                Thiết Bị Điện Gia Dụng
                                              </p>{" "}
                                              <i
                                                data-v-6bdc1d4c=""
                                                class="icon-next shopee-icon"
                                              >
                                                {/* <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 32 32"
                                                >
                                                  <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                </svg> */}{" "}
                                              </i>
                                            </div>
                                            <div
                                              data-v-6bdc1d4c=""
                                              class="category-item"
                                            >
                                              <label
                                                data-v-6bdc1d4c=""
                                                class="shopee-checkbox"
                                              >
                                                <input
                                                  type="checkbox"
                                                  class="shopee-checkbox__input"
                                                  value="true"
                                                />{" "}
                                                <span class="shopee-checkbox__indicator">
                                                  <i class="shopee-icon">
                                                    {/* <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                    </svg> */}
                                                  </i>{" "}
                                                </span>{" "}
                                              </label>{" "}
                                              <p
                                                data-v-6bdc1d4c=""
                                                class="text-overflow"
                                              >
                                                Giày Dép Nam
                                              </p>{" "}
                                              <i
                                                data-v-6bdc1d4c=""
                                                class="icon-next shopee-icon"
                                              >
                                                {/* <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 32 32"
                                                >
                                                  <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                </svg> */}{" "}
                                              </i>
                                            </div>
                                            <div
                                              data-v-6bdc1d4c=""
                                              class="category-item"
                                            >
                                              <label
                                                data-v-6bdc1d4c=""
                                                class="shopee-checkbox"
                                              >
                                                <input
                                                  type="checkbox"
                                                  class="shopee-checkbox__input"
                                                  value="true"
                                                />{" "}
                                                <span class="shopee-checkbox__indicator">
                                                  <i class="shopee-icon">
                                                    {/* <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                    </svg> */}
                                                  </i>{" "}
                                                </span>{" "}
                                              </label>{" "}
                                              <p
                                                data-v-6bdc1d4c=""
                                                class="text-overflow"
                                              >
                                                Điện Thoại &amp; Phụ Kiện
                                              </p>{" "}
                                              <i
                                                data-v-6bdc1d4c=""
                                                class="icon-next shopee-icon"
                                              >
                                                {/* <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 32 32"
                                                >
                                                  <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                </svg> */}{" "}
                                              </i>
                                            </div>
                                            <div
                                              data-v-6bdc1d4c=""
                                              class="category-item"
                                            >
                                              <label
                                                data-v-6bdc1d4c=""
                                                class="shopee-checkbox"
                                              >
                                                <input
                                                  type="checkbox"
                                                  class="shopee-checkbox__input"
                                                  value="true"
                                                />{" "}
                                                <span class="shopee-checkbox__indicator">
                                                  <i class="shopee-icon">
                                                    {/* <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                    </svg> */}
                                                  </i>{" "}
                                                </span>{" "}
                                              </label>{" "}
                                              <p
                                                data-v-6bdc1d4c=""
                                                class="text-overflow"
                                              >
                                                Du lịch &amp; Hành lý
                                              </p>{" "}
                                              <i
                                                data-v-6bdc1d4c=""
                                                class="icon-next shopee-icon"
                                              >
                                                {/* <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 32 32"
                                                >
                                                  <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                </svg> */}{" "}
                                              </i>
                                            </div>
                                            <div
                                              data-v-6bdc1d4c=""
                                              class="category-item"
                                            >
                                              <label
                                                data-v-6bdc1d4c=""
                                                class="shopee-checkbox"
                                              >
                                                <input
                                                  type="checkbox"
                                                  class="shopee-checkbox__input"
                                                  value="true"
                                                />{" "}
                                                <span class="shopee-checkbox__indicator">
                                                  <i class="shopee-icon">
                                                    {/* <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                    </svg> */}
                                                  </i>{" "}
                                                </span>{" "}
                                              </label>{" "}
                                              <p
                                                data-v-6bdc1d4c=""
                                                class="text-overflow"
                                              >
                                                Túi Ví Nữ
                                              </p>{" "}
                                              <i
                                                data-v-6bdc1d4c=""
                                                class="icon-next shopee-icon"
                                              >
                                                {/* <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 32 32"
                                                >
                                                  <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                </svg> */}
                                              </i>
                                            </div>
                                            <div
                                              data-v-6bdc1d4c=""
                                              class="category-item"
                                            >
                                              <label
                                                data-v-6bdc1d4c=""
                                                class="shopee-checkbox"
                                              >
                                                <input
                                                  type="checkbox"
                                                  class="shopee-checkbox__input"
                                                  value="true"
                                                />{" "}
                                                <span class="shopee-checkbox__indicator">
                                                  <i class="shopee-icon">
                                                    {/* <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                    </svg> */}
                                                  </i>{" "}
                                                </span>{" "}
                                              </label>{" "}
                                              <p
                                                data-v-6bdc1d4c=""
                                                class="text-overflow"
                                              >
                                                Giày Dép Nữ
                                              </p>{" "}
                                              <i
                                                data-v-6bdc1d4c=""
                                                class="icon-next shopee-icon"
                                              >
                                                {/* <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 32 32"
                                                >
                                                  <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                </svg> */}
                                              </i>
                                            </div>
                                            <div
                                              data-v-6bdc1d4c=""
                                              class="category-item"
                                            >
                                              <label
                                                data-v-6bdc1d4c=""
                                                class="shopee-checkbox"
                                              >
                                                <input
                                                  type="checkbox"
                                                  class="shopee-checkbox__input"
                                                  value="true"
                                                />{" "}
                                                <span class="shopee-checkbox__indicator">
                                                  <i class="shopee-icon">
                                                    {/* <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                    </svg> */}
                                                  </i>{" "}
                                                </span>{" "}
                                              </label>{" "}
                                              <p
                                                data-v-6bdc1d4c=""
                                                class="text-overflow"
                                              >
                                                Túi Ví Nam
                                              </p>{" "}
                                              <i
                                                data-v-6bdc1d4c=""
                                                class="icon-next shopee-icon"
                                              >
                                                {/* <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 32 32"
                                                >
                                                  <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                </svg> */}
                                              </i>
                                            </div>
                                            <div
                                              data-v-6bdc1d4c=""
                                              class="category-item"
                                            >
                                              <label
                                                data-v-6bdc1d4c=""
                                                class="shopee-checkbox"
                                              >
                                                <input
                                                  type="checkbox"
                                                  class="shopee-checkbox__input"
                                                  value="true"
                                                />{" "}
                                                <span class="shopee-checkbox__indicator">
                                                  <i class="shopee-icon">
                                                    {/* <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                    </svg> */}
                                                  </i>{" "}
                                                </span>{" "}
                                              </label>{" "}
                                              <p
                                                data-v-6bdc1d4c=""
                                                class="text-overflow"
                                              >
                                                Đồng Hồ
                                              </p>{" "}
                                              <i
                                                data-v-6bdc1d4c=""
                                                class="icon-next shopee-icon"
                                              >
                                                {/* <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 32 32"
                                                >
                                                  <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                </svg> */}
                                              </i>
                                            </div>
                                            <div
                                              data-v-6bdc1d4c=""
                                              class="category-item"
                                            >
                                              <label
                                                data-v-6bdc1d4c=""
                                                class="shopee-checkbox"
                                              >
                                                <input
                                                  type="checkbox"
                                                  class="shopee-checkbox__input"
                                                  value="true"
                                                />{" "}
                                                <span class="shopee-checkbox__indicator">
                                                  <i class="shopee-icon">
                                                    {/* <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                    </svg> */}
                                                  </i>{" "}
                                                </span>{" "}
                                              </label>{" "}
                                              <p
                                                data-v-6bdc1d4c=""
                                                class="text-overflow"
                                              >
                                                Thiết Bị Âm Thanh
                                              </p>{" "}
                                              <i
                                                data-v-6bdc1d4c=""
                                                class="icon-next shopee-icon"
                                              >
                                                {/* <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 32 32"
                                                >
                                                  <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                </svg> */}
                                              </i>
                                            </div>
                                            <div
                                              data-v-6bdc1d4c=""
                                              class="category-item"
                                            >
                                              <label
                                                data-v-6bdc1d4c=""
                                                class="shopee-checkbox"
                                              >
                                                <input
                                                  type="checkbox"
                                                  class="shopee-checkbox__input"
                                                  value="true"
                                                />{" "}
                                                <span class="shopee-checkbox__indicator">
                                                  <i class="shopee-icon">
                                                    {/* <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                    </svg> */}
                                                  </i>{" "}
                                                </span>{" "}
                                              </label>{" "}
                                              <p
                                                data-v-6bdc1d4c=""
                                                class="text-overflow"
                                              >
                                                Thực phẩm và đồ uống
                                              </p>{" "}
                                              <i
                                                data-v-6bdc1d4c=""
                                                class="icon-next shopee-icon"
                                              >
                                                {/* <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 32 32"
                                                >
                                                  <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                </svg> */}
                                              </i>
                                            </div>
                                            <div
                                              data-v-6bdc1d4c=""
                                              class="category-item"
                                            >
                                              <label
                                                data-v-6bdc1d4c=""
                                                class="shopee-checkbox"
                                              >
                                                <input
                                                  type="checkbox"
                                                  class="shopee-checkbox__input"
                                                  value="true"
                                                />{" "}
                                                <span class="shopee-checkbox__indicator">
                                                  <i class="shopee-icon">
                                                    {/* <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                    </svg> */}
                                                  </i>{" "}
                                                </span>{" "}
                                              </label>{" "}
                                              <p
                                                data-v-6bdc1d4c=""
                                                class="text-overflow"
                                              >
                                                Chăm Sóc Thú Cưng
                                              </p>{" "}
                                              <i
                                                data-v-6bdc1d4c=""
                                                class="icon-next shopee-icon"
                                              >
                                                {/* <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 32 32"
                                                >
                                                  <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                </svg> */}
                                              </i>
                                            </div>
                                            <div
                                              data-v-6bdc1d4c=""
                                              class="category-item"
                                            >
                                              <label
                                                data-v-6bdc1d4c=""
                                                class="shopee-checkbox"
                                              >
                                                <input
                                                  type="checkbox"
                                                  class="shopee-checkbox__input"
                                                  value="true"
                                                />{" "}
                                                <span class="shopee-checkbox__indicator">
                                                  <i class="shopee-icon">
                                                    {/* <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                    </svg> */}
                                                  </i>{" "}
                                                </span>{" "}
                                              </label>{" "}
                                              <p
                                                data-v-6bdc1d4c=""
                                                class="text-overflow"
                                              >
                                                Mẹ &amp; Bé
                                              </p>{" "}
                                              <i
                                                data-v-6bdc1d4c=""
                                                class="icon-next shopee-icon"
                                              >
                                                {/* <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 32 32"
                                                >
                                                  <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                </svg> */}
                                              </i>
                                            </div>
                                            <div
                                              data-v-6bdc1d4c=""
                                              class="category-item"
                                            >
                                              <label
                                                data-v-6bdc1d4c=""
                                                class="shopee-checkbox"
                                              >
                                                <input
                                                  type="checkbox"
                                                  class="shopee-checkbox__input"
                                                  value="true"
                                                />{" "}
                                                <span class="shopee-checkbox__indicator">
                                                  <i class="shopee-icon">
                                                    {/* <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                    </svg> */}
                                                  </i>{" "}
                                                </span>{" "}
                                              </label>{" "}
                                              <p
                                                data-v-6bdc1d4c=""
                                                class="text-overflow"
                                              >
                                                Thời trang trẻ em &amp; trẻ sơ
                                                sinh
                                              </p>{" "}
                                              <i
                                                data-v-6bdc1d4c=""
                                                class="icon-next shopee-icon"
                                              >
                                                {/* <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 32 32"
                                                >
                                                  <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                </svg> */}
                                              </i>
                                            </div>
                                            <div
                                              data-v-6bdc1d4c=""
                                              class="category-item"
                                            >
                                              <label
                                                data-v-6bdc1d4c=""
                                                class="shopee-checkbox"
                                              >
                                                <input
                                                  type="checkbox"
                                                  class="shopee-checkbox__input"
                                                  value="true"
                                                />{" "}
                                                <span class="shopee-checkbox__indicator">
                                                  <i class="shopee-icon">
                                                    {/* <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                    </svg> */}
                                                  </i>{" "}
                                                </span>{" "}
                                              </label>{" "}
                                              <p
                                                data-v-6bdc1d4c=""
                                                class="text-overflow"
                                              >
                                                Gaming &amp; Console
                                              </p>{" "}
                                              <i
                                                data-v-6bdc1d4c=""
                                                class="icon-next shopee-icon"
                                              >
                                                {/* <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 32 32"
                                                >
                                                  <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                </svg> */}
                                              </i>
                                            </div>
                                            <div
                                              data-v-6bdc1d4c=""
                                              class="category-item"
                                            >
                                              <label
                                                data-v-6bdc1d4c=""
                                                class="shopee-checkbox"
                                              >
                                                <input
                                                  type="checkbox"
                                                  class="shopee-checkbox__input"
                                                  value="true"
                                                />{" "}
                                                <span class="shopee-checkbox__indicator">
                                                  <i class="shopee-icon">
                                                    {/* <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                    </svg> */}
                                                  </i>{" "}
                                                </span>{" "}
                                              </label>{" "}
                                              <p
                                                data-v-6bdc1d4c=""
                                                class="text-overflow"
                                              >
                                                Cameras &amp; Flycam
                                              </p>{" "}
                                              <i
                                                data-v-6bdc1d4c=""
                                                class="icon-next shopee-icon"
                                              >
                                                {/* <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 32 32"
                                                >
                                                  <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                </svg> */}
                                              </i>
                                            </div>
                                            <div
                                              data-v-6bdc1d4c=""
                                              class="category-item"
                                            >
                                              <label
                                                data-v-6bdc1d4c=""
                                                class="shopee-checkbox"
                                              >
                                                <input
                                                  type="checkbox"
                                                  class="shopee-checkbox__input"
                                                  value="true"
                                                />{" "}
                                                <span class="shopee-checkbox__indicator">
                                                  <i class="shopee-icon">
                                                    {/* <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                    </svg> */}
                                                  </i>{" "}
                                                </span>{" "}
                                              </label>{" "}
                                              <p
                                                data-v-6bdc1d4c=""
                                                class="text-overflow"
                                              >
                                                Nhà cửa &amp; Đời sống
                                              </p>{" "}
                                              <i
                                                data-v-6bdc1d4c=""
                                                class="icon-next shopee-icon"
                                              >
                                                {/* <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 32 32"
                                                >
                                                  <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                </svg> */}
                                              </i>
                                            </div>
                                            <div
                                              data-v-6bdc1d4c=""
                                              class="category-item"
                                            >
                                              <label
                                                data-v-6bdc1d4c=""
                                                class="shopee-checkbox"
                                              >
                                                <input
                                                  type="checkbox"
                                                  class="shopee-checkbox__input"
                                                  value="true"
                                                />{" "}
                                                <span class="shopee-checkbox__indicator">
                                                  <i class="shopee-icon">
                                                    {/* <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                    </svg> */}
                                                  </i>{" "}
                                                </span>{" "}
                                              </label>{" "}
                                              <p
                                                data-v-6bdc1d4c=""
                                                class="text-overflow"
                                              >
                                                Thể Thao &amp; Dã Ngoại
                                              </p>{" "}
                                              <i
                                                data-v-6bdc1d4c=""
                                                class="icon-next shopee-icon"
                                              >
                                                {/* <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 32 32"
                                                >
                                                  <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                </svg> */}
                                              </i>
                                            </div>
                                            <div
                                              data-v-6bdc1d4c=""
                                              class="category-item"
                                            >
                                              <label
                                                data-v-6bdc1d4c=""
                                                class="shopee-checkbox"
                                              >
                                                <input
                                                  type="checkbox"
                                                  class="shopee-checkbox__input"
                                                  value="true"
                                                />{" "}
                                                <span class="shopee-checkbox__indicator">
                                                  <i class="shopee-icon">
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                    </svg>
                                                  </i>{" "}
                                                </span>{" "}
                                              </label>{" "}
                                              <p
                                                data-v-6bdc1d4c=""
                                                class="text-overflow"
                                              >
                                                Văn Phòng Phẩm
                                              </p>{" "}
                                              <i
                                                data-v-6bdc1d4c=""
                                                class="icon-next shopee-icon"
                                              >
                                                {/* <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 32 32"
                                                >
                                                  <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                </svg> */}
                                              </i>
                                            </div>
                                            <div
                                              data-v-6bdc1d4c=""
                                              class="category-item"
                                            >
                                              <label
                                                data-v-6bdc1d4c=""
                                                class="shopee-checkbox"
                                              >
                                                <input
                                                  type="checkbox"
                                                  class="shopee-checkbox__input"
                                                  value="true"
                                                />{" "}
                                                <span class="shopee-checkbox__indicator">
                                                  <i class="shopee-icon">
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                    </svg>
                                                  </i>{" "}
                                                </span>{" "}
                                              </label>{" "}
                                              <p
                                                data-v-6bdc1d4c=""
                                                class="text-overflow"
                                              >
                                                Sở thích &amp; Sưu tầm
                                              </p>{" "}
                                              <i
                                                data-v-6bdc1d4c=""
                                                class="icon-next shopee-icon"
                                              >
                                                {/* <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 32 32"
                                                >
                                                  <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                </svg> */}
                                              </i>
                                            </div>
                                            <div
                                              data-v-6bdc1d4c=""
                                              class="category-item"
                                            >
                                              <label
                                                data-v-6bdc1d4c=""
                                                class="shopee-checkbox"
                                              >
                                                <input
                                                  type="checkbox"
                                                  class="shopee-checkbox__input"
                                                  value="true"
                                                />{" "}
                                                <span class="shopee-checkbox__indicator">
                                                  <i class="shopee-icon">
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                    </svg>
                                                  </i>{" "}
                                                </span>{" "}
                                              </label>{" "}
                                              <p
                                                data-v-6bdc1d4c=""
                                                class="text-overflow"
                                              >
                                                Ô tô
                                              </p>{" "}
                                              <i
                                                data-v-6bdc1d4c=""
                                                class="icon-next shopee-icon"
                                              >
                                                {/* <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 32 32"
                                                >
                                                  <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                </svg> */}
                                              </i>
                                            </div>
                                            <div
                                              data-v-6bdc1d4c=""
                                              class="category-item"
                                            >
                                              <label
                                                data-v-6bdc1d4c=""
                                                class="shopee-checkbox"
                                              >
                                                <input
                                                  type="checkbox"
                                                  class="shopee-checkbox__input"
                                                  value="true"
                                                />{" "}
                                                <span class="shopee-checkbox__indicator">
                                                  <i class="shopee-icon">
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                    </svg>
                                                  </i>{" "}
                                                </span>{" "}
                                              </label>{" "}
                                              <p
                                                data-v-6bdc1d4c=""
                                                class="text-overflow"
                                              >
                                                Mô tô, xe máy
                                              </p>{" "}
                                              <i
                                                data-v-6bdc1d4c=""
                                                class="icon-next shopee-icon"
                                              >
                                                {/* <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 32 32"
                                                >
                                                  <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                </svg> */}
                                              </i>
                                            </div>
                                            <div
                                              data-v-6bdc1d4c=""
                                              class="category-item"
                                            >
                                              <label
                                                data-v-6bdc1d4c=""
                                                class="shopee-checkbox"
                                              >
                                                <input
                                                  type="checkbox"
                                                  class="shopee-checkbox__input"
                                                  value="true"
                                                />{" "}
                                                <span class="shopee-checkbox__indicator">
                                                  <i class="shopee-icon">
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                    </svg>
                                                  </i>{" "}
                                                </span>{" "}
                                              </label>{" "}
                                              <p
                                                data-v-6bdc1d4c=""
                                                class="text-overflow"
                                              >
                                                Voucher &amp; Dịch vụ
                                              </p>{" "}
                                              <i
                                                data-v-6bdc1d4c=""
                                                class="icon-next shopee-icon"
                                              >
                                                {/* <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 32 32"
                                                >
                                                  <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                </svg> */}
                                              </i>
                                            </div>
                                            <div
                                              data-v-6bdc1d4c=""
                                              class="category-item"
                                            >
                                              <label
                                                data-v-6bdc1d4c=""
                                                class="shopee-checkbox"
                                              >
                                                <input
                                                  type="checkbox"
                                                  class="shopee-checkbox__input"
                                                  value="true"
                                                />{" "}
                                                <span class="shopee-checkbox__indicator">
                                                  <i class="shopee-icon">
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                    </svg>
                                                  </i>{" "}
                                                </span>{" "}
                                              </label>{" "}
                                              <p
                                                data-v-6bdc1d4c=""
                                                class="text-overflow"
                                              >
                                                Sách &amp; Tạp Chí
                                              </p>{" "}
                                              <i
                                                data-v-6bdc1d4c=""
                                                class="icon-next shopee-icon"
                                              >
                                                {/* <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 32 32"
                                                >
                                                  <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                </svg> */}
                                              </i>
                                            </div>
                                            <div
                                              data-v-6bdc1d4c=""
                                              class="category-item"
                                            >
                                              <label
                                                data-v-6bdc1d4c=""
                                                class="shopee-checkbox"
                                              >
                                                <input
                                                  type="checkbox"
                                                  class="shopee-checkbox__input"
                                                  value="true"
                                                />{" "}
                                                <span class="shopee-checkbox__indicator">
                                                  <i class="shopee-icon">
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 16"
                                                    >
                                                      <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                    </svg>
                                                  </i>{" "}
                                                </span>{" "}
                                              </label>{" "}
                                              <p
                                                data-v-6bdc1d4c=""
                                                class="text-overflow"
                                              >
                                                Máy tính &amp; Laptop
                                              </p>{" "}
                                              <i
                                                data-v-6bdc1d4c=""
                                                class="icon-next shopee-icon"
                                              >
                                                {/* <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 32 32"
                                                >
                                                  <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                </svg> */}
                                              </i>
                                            </div>
                                            <div class="resize-triggers">
                                              <div class="expand-trigger">
                                                <div style="width: 304px; height: 929px;"></div>
                                              </div>
                                              <div class="contract-trigger"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>{" "}
                                    <div
                                      data-v-6bdc1d4c=""
                                      class="category-list-menu"
                                    >
                                      <div
                                        data-v-6bdc1d4c=""
                                        class="shopee-scrollbar"
                                      >
                                        <div class="shopee-scrollbar__wrapper">
                                          <div class="shopee-scrollbar__bar vertical">
                                            <div
                                              class="shopee-scrollbar__thumb"
                                              style="top: 0px; height: 0px;"
                                            ></div>
                                          </div>{" "}
                                          <div
                                            class="shopee-scrollbar__content"
                                            style="position: relative;"
                                          >
                                            <div class="resize-triggers">
                                              <div class="expand-trigger">
                                                <div style="width: 284px; height: 1px;"></div>
                                              </div>
                                              <div class="contract-trigger"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>{" "}
                              <div data-v-6bdc1d4c="" class="category-selected">
                                <span data-v-6bdc1d4c="" class="label">
                                  Ngành hàng đã chọn :
                                </span>{" "}
                                <span data-v-6bdc1d4c="" class="no-select">
                                  Chưa chọn ngành hàng
                                </span>
                              </div>
                            </div>
                            <div class="resize-triggers">
                              <div class="expand-trigger">
                                <div style="width: 651px; height: 481px;"></div>
                              </div>
                              <div class="contract-trigger"></div>
                            </div>
                          </div>{" "}
                          <div class="shopee-modal__footer">
                            {" "}
                            <div class="shopee-modal__footer-buttons">
                              <button
                                type="button"
                                class="shopee-button shopee-button--normal"
                              >
                                <span>Hủy</span>
                              </button>{" "}
                              <button
                                type="button"
                                class="shopee-button shopee-button--primary shopee-button--normal"
                              >
                                <span>Xác nhận</span>
                              </button>
                            </div>
                          </div>
                        </div>{" "}
                        <i class="shopee-icon shopee-modal__close">
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
        </div>
      </div>
    </div>
  );
};

export default Brandprofile;
