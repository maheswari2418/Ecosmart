import React from 'react';
import { Link } from 'react-router-dom';
//import ReactStars from 'react-rating-stars-component';
import { PRODUCTS } from './products';

const FeaturedProducts = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-1 p-3">
      {PRODUCTS.slice(2, 7).map((product) => (
        <div className="col mb-3" key={product.id}>
          <div className="card h-70 m-auto">
            <img src={product.image} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
              <p className="card-text mb-2">{product.brand}</p>
              <h2 className="mb-1 text fs-6">{product.name}</h2>
              <div className="card-footer s-auto text-center">
                <p className="text-danger fs-5">{product.status}</p>
                <p className="price">
                  <span className="red"></span> <strike>{product.rate}</strike>
                </p>
              </div>
              <div className="card-footer d-md-none">
                <div className="d-flex justify-content-between align-items-center">
                  <Link to="shop" className="m-auto">
                    View products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
