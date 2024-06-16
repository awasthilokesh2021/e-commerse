import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { remove } from "../store/cartSlice";
import "./cardetails.css";
import axios from "axios";

const Carddetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const selectedProduct = products.find(
    (product) => product.id.toString() === id
  );

  const handleRemove = () => {
    dispatch(remove(selectedProduct.id));
  };

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  const calculateTotalAmount = () => {
    // Assuming products is an array of items in the cart with a 'price' property
    return products.reduce((total, product) => total + product.price, 0);
  };

  const totalAmount = calculateTotalAmount();

  const handlePayment = async () => {
    // Payment gateway configuration
    try {
      const response = await axios.post("http://localhost:4000/create-order", {
        amount: totalAmount * 100, // Convert amount to paise (assuming totalAmount is in rupees)
      });
      console.log(response);
      const { id: orderId, amount, currency } = response.data;
      const options = {
        key: "rzp_test_ZBBBPEzeRAhiG2", // Replace with your Razorpay API key
        amount: amount, // Amount in paise (example: 50000 paise = ₹500)
        currency: currency,
        name: "lokesh awasthi",
        description: "Payment for your order",
        image: "path_to_your_logo",
        order_id: orderId, // Generate a unique order ID on your server
        handler: function (response) {
          alert(response.razorpay_payment_id);
          // Handle success payment response here
        },
        prefill: {
          name: "lokesh Kumar",
          email: "lokesh.kumar@example.com",
          contact: "1111199999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#F37254", // Razorpay checkout theme color
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
       <h1>card_details</h1>
       <div className="details">
      <div className="card_details">
        <div className="card">
          <img src={selectedProduct.image} alt={selectedProduct.title} />
          <h5>{selectedProduct.title}</h5>
          <h5>{selectedProduct.price}</h5>
          <h5>{selectedProduct.rating.rate}</h5>
          <button  style={{backgroundColor:"red",padding:"2px"}} onClick={handleRemove}>
            Remove
          </button>
          <br></br>
          <br></br>
          <button  style={{backgroundColor:"lightblue",padding:"2px"}} onClick={handlePayment}>
            Payment
          </button>
        </div>
      </div>
       </div>  
    </>
  );
};

export default Carddetails;
