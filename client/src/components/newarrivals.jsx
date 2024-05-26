/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
import { PRODUCTS } from './products';
import { PRODUCTS1 } from './products';
import ReactStars from "react-rating-stars-component";

const newarrivals = () => {
  return <>
    <div  className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-1 p-3">
      {PRODUCTS1.slice(1, 6).map((product) => (
        <div className="col mb-3">
        <div key={product.id} className="card h-80 m-auto">
          <img src={product.image} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <p className="card-text fs-6">{product.brand}</p>
            <h2 className='mb-1 text fs-6'>{product.name} </h2>
            <div className="card-footer text-center m-auto">
            <p className="fs-6 text-danger">{product.status} </p>
            <p className="price"><span className="red"></span><strike>{product.rate} </strike></p>
            </div>
            <div className="card-footer d-md-none">
                <div className="d-flex justify-content-between align-items-center">
                  <Link to='shop' className='m-auto'>View products</Link>
                </div>
              </div>

          </div>
          
        </div>
        </div>
        ))}
      
     
    </div>
  </>;
}

export default newarrivals