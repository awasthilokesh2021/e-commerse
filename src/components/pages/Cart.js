import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    const itemCount = useSelector((state) => state.cart.length); // Calculate the count of items in the cart

    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };
          
    return (
        <div>
            <h3>Cart</h3>
            <div className="cartWrapper">
                {products.map((product) => (
                    <div key={product.id} className="cartCard">
                        <Link to={`/Carddetails/${product.id}`}>
                            <img src={product.image} alt="" />
                        </Link>
                        <h7>{product.title}</h7>
                        <h8>{product.price}</h8>
                        <button className="btn" onClick={() => handleRemove(product.id)}>
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;