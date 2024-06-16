import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Products = ({ filteredData }) => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  useEffect(() => {
    // Set products based on filteredData or fetch if filteredData is empty
    if (filteredData && filteredData.length > 0) {
      setProducts(filteredData);
    } else {
      const fetchProducts = async () => {
        try {
          
          const res = await fetch("https://fakestoreapi.com/products");
          const data = await res.json();
          setProducts(data);
            
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
      fetchProducts();
    }
  }, [filteredData]);

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h6>{product.title}</h6>
          <h5>{product.price}$</h5>
          <button
            onClick={() => handleAdd(product)}
            style={{ backgroundColor: "blue", padding: "2px", color: "white" }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
