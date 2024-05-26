/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
import orders from '../assets/images/icons/home.jpg'
import orders1 from '../assets/images/icons/gro.jpeg'
import orders2 from '../assets/images/icons/f.webp'
import orders3 from '../assets/images/icons/beauty.jpeg'
import orders4 from '../assets/images/icons/fas.avif'

const category = () => {
  return <>
    <section className="hero p-4">
  <div className="container-xxl">
    <div className="row">
      <div className="col-11 col-md-12 offset-xs col-lg-17 offset-xs-2 category-details">
        <div className="row  justify-content-center justify-content-xs-between align-items-center">
          <div className="col-7 col-md-2 col-lg-2">
            <div className="card text-center h-40 m-auto">
            <img src={orders} className="card-img-top img-fluid h-65 m-auto" alt="home" />
              <div className="card-body">
                <Link to='/shop'  className="mb-1 text-black h4 fs-5">Home</Link>
              </div>
            </div>
          </div>

          <div className="col-7 col-md-4 col-lg-2">
            <div className="card text-center h-50 m-auto">
              <img src={orders1} className="card-img-top img-fluid m-auto" alt="grocery" />
              <div className="card-body">
                <Link to='/shop'  className="mb-1 text-black h4 fs-5">Grocery</Link>
              </div>
            </div>
          </div>

          <div className="col-7 col-md-6 col-lg-2">
            <div className="card text-center h-70 m-auto">
              <img src={orders2} className="card-img-top img-fluid h-70 " alt="food" />
              <div className="card-body">
                <Link to='/shop'  className="mb-1 text-black h4 fs-5">Food</Link>
              </div>
            </div>
          </div>

          <div className="col-7 col-md-2 col-lg-2">
            <div className="card text-center m-auto">
              <img src={orders3} className="card-img-top img-fluid m-auto" alt="Beauty" />
              <div className="card-body">
                <Link to='/shop'  className="mb-1 text-black h4 fs-5">Beauty</Link>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <div className="card text-center m-auto">
              <img src={orders4} className="card-img-top img-fluid m-auto" alt="Fashion" />
              <div className="card-body">
                <Link to='/shop'  className="mb-1 text-black h4 fs-5">Fashion</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </>;
}

export default category