/* eslint-disable no-unused-vars */
import React from 'react'
import { CgShoppingCart } from 'react-icons/cg'
import { Link } from 'react-router-dom';
import Featuredproducts from '../components/featuredproducts';
import Newarrivals from '../components/newarrivals'
import banner from '../assets/images/banner/best.jpeg'
import banner1 from '../assets/images/banner/sea.jpg'
import blog1 from '../assets/images/blog/g6.jpeg'
import blog2 from '../assets/images/blog/g4.jpeg'
import blog3 from '../assets/images/blog/b1.jpeg'
import blog4 from '../assets/images/blog/g3.jpeg'
import Newsletter from '../components/newsletter';
import Hero from '../components/hero';
import Category from '../components/category';


const home = () => {
  return <>
  <section className="banner">
    <div className="container-xxl">
      <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="d-flex flex-column justify-content-center ">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                  <div className='back-details'>
                  <p className='mb-3 text'>Made with Natural</p>
                  <h1>Save upto 10%</h1>
                  <h2>On all products</h2>

                  <p className='mb-3'>Save more today with us</p>

                  <Link to='/shop' className='btn btn-primary' id='button-link'>Shop Now</Link>
                  </div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  </section>
  <Hero />
  <section className="featured-products p-4">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Product Categories</h1>
          
        </div>
       <Category />
    </div>
    </div>
    </section>
  <section className="featured-products p-4">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Featured Products</h1>
          <p>All Weather New Modern Designs</p>
        </div>
       <Featuredproducts />
      </div>
    </div>
  </section>

  <section className="repair-services p-5">
    <div className="container-xxl">
      <div className="row ">
        <div className="repair-details text-center align-items-center">
          <h3 className='mb-1 text-black'>Natural Products</h3>
          <h5 className='mb-1 text-black'>On 60% off on all Products</h5>
          <button>Explore Now</button>
        </div>
      </div>
    </div>
  </section>

  <section className="new-arrivals p-4">
    <div className="container-xxl">
      <div className="row">
        <div className="d-flex align-items-center justify-content-center flex-column">
          <h1>New Arrivals</h1>
          <p>Your Best Designer Outfits</p>
        </div>
        <Newarrivals />
      </div>
    </div>
  </section>
  <section className="hot-deals p-5 d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start">
    <div className="container-xxl">
      <div className="row">
        <div className="col-md-6 d-flex">
                  <div className="card m-auto mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={banner} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Best Deals</h5>
                  <h2 className="card-text mb-2">Buy One get One free.</h2>
                  <p className="card-text mb-2"><small className="text-body-secondary">The latest best products with biodegradable material with designs <br />Feel  happy with our products</small></p>
                  <Link to='blog'>
                  <button className='mt-4'>Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div className="col-md-6 d-flex">
                  <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={banner1} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Season-In</h5>
                  <h2 className="card-text mb-2">All Weather Attire</h2>
                  <p className="card-text mb-2"><small className="text-body-secondary">It never matter which season it is <br />We got you covered</small></p>
                  <Link to='blog'>
                  <button className='mt-4'>Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>

  <section className="blogs p-5">
  <div className="container-xxl">
    <div className="row">
      <div className="col-12 text-center">
        <h1 className="mb-3">What our customers say...</h1>
        <p className="mb-4">Our customers never miss a bit on providing feedback</p>
      </div>
      <div className="col-md-3 col-sm-6 mb-4">
        <div className="card">
          <img src={blog1} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <p className="card-text">Outstanding selection of eco-friendly products, makes sustainability. User-friendly interface and premium quality make it a go-to for conscious consumers."</p>
            <Link to='about'>
            <button className="mt-4">Learn more</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6 mb-4">
        <div className="card">
          <img src={blog2} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <p className="card-text">Outstanding selection of eco-friendly products, makes sustainability. User-friendly interface and premium quality make it a go-to for conscious consumers.".</p>
            <Link to='about'>
            <button className="mt-4">Learn more</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6 mb-4">
        <div className="card">
          <img src={blog3} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <p className="card-text">Outstanding selection of eco-friendly products, makes sustainability. User-friendly interface and premium quality make it a go-to for conscious consumers.</p>
            <Link to='about'>
            <button className="mt-4">Learn more</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6 mb-4">
        <div className="card">
          <img src={blog4} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <p className="card-text">Outstanding selection of eco-friendly products makes  sustainability. User-friendly interface and premium quality make it a go-to for conscious consumers.</p>
            <Link to='about'>
            <button className="mt-4">Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  <Newsletter />
  </>;
}

export default home