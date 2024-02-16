import React from "react";
import { BsSearch, BsArrowRight } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./SearchBar.module.css";
const SearchBar = ({ onHandleSearch, onClearSearch }) => {
  return (
    <div className={Style.SearchBar}>
      <div className={Style.SearchBar_box}>
        <BsSearch className={Style.SearchBar_box_icon} />
        <input 
          type="text" 
          placeholder="Type your keyword..."
          onChange={(e) => {e.target.value.length == 0 ? onClearSearch() : onHandleSearch(e.target.value)}}
        />
        <BsArrowRight className={Style.SearchBar_box_icon} />
      </div>
    </div>
  );
};

export default SearchBar;
