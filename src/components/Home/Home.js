import React, { useState } from "react";
import Products from "../pages/Products";
import MainComponent from "../Main/MainComponent ";


const Home = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <div className="wrapper">
        <div className="left_wrapper">
          <h3>category</h3>
          <div>
            <h5>Color</h5>
            <ul>
              <li>
                <span>
                  <i class="fa-solid fa-square-check"></i>
                </span>
                Black
              </li>
              <li>
                <span>
                  <i class="fa-solid fa-square-check"></i>
                </span>
                Red
              </li>
              <li>
                <span>
                  <i class="fa-solid fa-square-check"></i>
                </span>
                Blue
              </li>
              <li>
                <span>
                  <i class="fa-solid fa-square-check"></i>
                </span>
                White
              </li>
            </ul>
          </div>

          <div>
            <h5>Brand</h5>
            <ul>
              <li>Nike</li>
              <li>Puma</li>
              <li>Addidas</li>
              <li>Jacket</li>
              <li>Tshirt</li>
            </ul>
          </div>

          <div>
            <h5>Price-Range</h5>
            <ul>
              <li>100 - 500</li>
              <li>500 - 1000</li>
              <li>1000-5000</li>
              <li>5000-10,000</li>
            </ul>
          </div>
        </div>
         <section>
          <h3>Products</h3>
          <Products filteredData={searchResults} />
        </section> 
      </div>
    </>
  );
};

export default Home;
