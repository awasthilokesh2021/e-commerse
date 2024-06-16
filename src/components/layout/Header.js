import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";


const Header = ({setSearchResults}) => {
  const itemCount = useSelector((state) => state.cart.length);

  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    const input = e.target.value;
    setSearchInput(input);
    setSearchResults(input);
  }
  return (
    <>
      <nav>
        <div className="navbar">
          <div className="left">
            <span>ECOMMERCE</span>
          </div>

          <div>
            <form>
              <input
                type="text"
                placeholder="search bar"
                className="inputbar"
                name="input"
                value={searchInput}
                onChange={handleSearch}
              ></input>
            </form>
          </div>

          <div className="right">
            <Link to="/" className="rightclass">
              Home
            </Link>
            <Link className="navLink" to="/Cart">
              <span>
                <i
                  class="fa-solid fa-cart-shopping"
                  style={{
                    color: "white",
                    fontSize: "30px",
                    position: "relative",
                  }}
                >
                  <span className="itemcount">{itemCount}</span>
                </i>
              </span>
              cart
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;