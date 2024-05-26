/* eslint-disable no-unused-vars */
import React from 'react'
import b1 from '../assets/images/blog/g6.jpeg'
import b6 from '../assets/images/blog/b6.jpg'
import b2 from '../assets/images/blog/g1.jpeg'
import b3 from '../assets/images/blog/g4.jpeg'
import b4 from '../assets/images/blog/g3.jpeg'
//import b5 from '../assets/images/blog/b5.jpg'
//import b7 from '../assets/images/blog/b7.jpg'

const blog = () => {
  return <>
  <section className="blog-wrapper p-5">
    <div className="container-xxl">
      <div className="row">
      <div className="col-12">
          <div className="shop-details text-center align-items-center">
            <h1 className="text-black">#Read More</h1>
            <p className='text-black fs-3'>Get to know what our trusted customers say...</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="blogs p-5">
    <div className="container-xxl container">
      <div className="row">
        <div className="d-flex flex-column align-items-center">
          <h1 className='mb-3'>Explore more in our Patron</h1>
          <p className='mb-4'>Why we reach our products Everywhere</p>
        </div>
        <div className="col-12 p-5">
          <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={b1} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">Keerthi purswani</h5>
                <p className="card-text">Outstanding selection of eco-friendly products, reflecting a strong commitment<br/> to sustainability. User-friendly interface and premium quality<br/> make it a go-to for conscious consumers."</p>
                <p className="card-text"><small className="text-body-secondary">Last updated 5 mins ago</small></p>
              </div>
              </div>
           
             </div>
          </div>
        </div>
        <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b2} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-4">
                    <div className="card-body">
                      <h5 className="card-title">Ishwarya</h5>
                      <p className="card-text">Outstanding selection of eco-friendly products,<br/> reflecting a strong commitment to sustainability. User-friendly interface and <br/>premium quality make it a go-to for conscious consumers."</p>
                      <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b3} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Sanorika sin</h5>
                      <p className="card-text">Outstanding selection of eco-friendly products, reflecting a<br/> strong commitment to sustainability. User-friendly interface and<br/> premium quality make it a go-to for conscious consumers.".</p>
                      <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b4} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Phania Tin</h5>
                      <p className="card-text">Outstanding selection of eco-friendly products, reflecting a <br/>strong commitment to sustainability. User-friendly interface and <br/>premium quality make it a go-to for conscious consumers."</p>
                      <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b2} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Melisa Tiy</h5>
                      <p className="card-text">Outstanding selection of eco-friendly products, reflecting a <br/>strong commitment to sustainability. User-friendly interface and<br/> premium quality make it a go-to for conscious consumers."</p>
                      <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
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

export default blog