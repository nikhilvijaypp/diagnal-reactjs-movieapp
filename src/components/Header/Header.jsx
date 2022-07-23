import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterMovies,
  setSearchTerm,
  getsearchTerm,
} from "../../features/Movies/movieSlice";
import { IMAGE_URL, APP_URL } from "../../services/api/constants";


import "./Header.scss";

function Header() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(getsearchTerm);

  return (
    <div className="header">
        <div className="logo">
          <img src={`${APP_URL}assets/images/Back.png`} alt="back" />
          <span>Romantic Comedy</span>
        </div>

      <div className="seach-bar">
        <form action="">
          <input
            type="search"
            required
            onChange={(e) => {
              dispatch(setSearchTerm(e.target.value));
              dispatch(filterMovies(e.target.value));
            }}
            value={searchTerm}
          />
          <span>
            <i className="fa fa-search"></i>
          </span>
         
        </form>
      </div>
    </div>
  );
}

export default Header;
