import React, { useContext } from 'react';
import { ShopContext } from './shopcontext';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const Prod = (props) => {
  const { id, name, price, image, brand } = props.data;
  const { addToCart, cartItems, viewProductDetails } = useContext(ShopContext);

  const cartItemAmount = cartItems[id] || 0;

  const handleAddToCart = (productId) => {
    addToCart(productId);
  };

  return (
   /* <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-1 p-3">*/
    <div className="">
      <div className="card h-55 m-2">
        <img src={image} className="card-img-top img-fluid" alt="Product" />
        <div className="card-body">
          <p className="card-text fs-6">{brand}</p>
          <h6>{name}</h6>
          <ReactStars
            count={5}
            edit={false}
            value={4} // Replace this with the actual rating value
            size={24}
            activeColor="#f7e011"
          />
          <div className="">
            <p className="price ">
              <span className="black">₹{price}</span>&nbsp;
              <strike>₹{price * 2}</strike>
            </p>
            
            <Link to='/details' onClick={() => viewProductDetails(id)}>
              <p className="d flex align-items-center">
                <button className='fs-7' id='clear-cart'>View Details</button>
              </p>
            </Link>
          
          
            <button
              onClick={() => {
                handleAddToCart(id);
              }}
              className={`myButton ${cartItemAmount > 0 ? 'red' : ''}`}
            >
              Add To Cart
              {cartItemAmount > 0 && `(${cartItemAmount})`}
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Prod;
