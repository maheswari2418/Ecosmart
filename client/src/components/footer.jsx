/* eslint-disable no-unused-vars */
import React from 'react'
import {  BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import {  BsGithub } from 'react-icons/bs'
import playstore from '../assets/images/pay/play.jpg'
import appstore from '../assets/images/pay/app.jpg'
import visa from '../assets/images/pay/pay.png'

const footer = () => {
  return <>
  <footer  style={{backgroundColor:'#f5f5f8'}} className='footer p-5'>
    <div style={{backgroundColor:''}} className="container-xxl ">
      <div className="row justify-content-center justify-content-md-start">
        <div className="col-md-4 col-lg-4 mb-4 mb-md-0 ">
          <h2 className='footer-title mb-3'><b>Contact</b></h2>
          <div className='mb-3'><p><b>Address:</b>  3-101 Banjara hills, Hyderabad, Andhra Pradesh</p> </div>
          <div className='mb-3'><p><b>Phone:</b>  <a className='footer-tel' href="tel:+2134567890">Call us at +2 (213) 567-890</a></p> </div>
          <div className='mb-4'><p><b>Hours:</b>  From 8 a.m To 6 p.m</p> </div>
          <div className='mb-3'><p><b>Follow the developer</b></p> </div>
          <div className="socials d-flex gap-3">
          <Link to='https://www.facebook.com/NaturalProductsGlobal/' id='footer-link' target='_blank' className='gap-3'>
          <BsFacebook />
          </Link>
          <Link to='https://twitter.com/natural_wp?lang=en' id='footer-link' target='_blank' className='gap-3'>
          <BsTwitter />
          </Link>
          <Link to={'https://github.com/Maheswari1187/maheswari_18'} className='gap-3' id='footer-link'>
          <BsGithub />
          </Link>
          <Link to='https://www.instagram.com/naturesessenceofficial/?hl=en' id='footer-link' target='_blank' className='gap-3'>
          <BsInstagram />
          </Link>
          </div>
        </div>
        <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
          <h2 className='footer-title mb-3'><b>About</b></h2>
          <div className='mb-3'> <Link to='/about' id='footer-links'>About Us</Link>  </div>
          <div className='mb-3'> <Link to='checkout' id='footer-links'>Delivery</Link>  </div>
          <div className='mb-3'> <Link id='footer-links'>Privacy Policy</Link>  </div>
          <div className='mb-3'> <Link id='footer-links'>Terms & Conditions</Link>  </div>
          <div className='mb-3'> <Link id='footer-links'>Fee Policy</Link>  </div>
        </div>
        <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
          <h2 className='footer-title mb-3'><b>Account</b></h2>
          <div className='mb-3'> <Link to='/login' id='footer-links'>Profile</Link>  </div>
          <div className='mb-3'> <Link to='/cart' id='footer-links'>View Cart</Link>  </div>
          <div className='mb-3'> <Link to='/contact' id='footer-links'>Help</Link>  </div>
          <div className='mb-3'> <Link id='footer-links'>Payments</Link>  </div>
          <div className='mb-3'> <Link id='footer-links'>My Wishlist</Link>  </div>
          <div className='mb-3'> <Link id='footer-links'>Coupons</Link> </div>
        </div>
        <div className="col-md-4 col-lg-4">
          <h2 className='footer-title mb-3'><b>Install App</b></h2>
          <p className='mb-3'>Available On Google Play Services & App Store</p>
          <div className="className='mb-3 col-md-6 col-12 pay">
          <div className='mb-3'>
          <Link to='https://play.google.com/store/games?hl=en_US&gl=US' target='_blank'>
          <img src={playstore} alt="" />
          </Link>
          </div>
          <div className='mb-3'>
          <Link to='https://www.apple.com/app-store/' target='_blank'>
          <img src={appstore} alt="" />
          </Link>
          </div>
          </div>
          <p className="mb-3">
            Payment Methods
          </p>
          <div className="pay">
          <Link to='https://www.paypal.com/signin' target='_blank'>
          <img src={visa} alt="" />
          </Link>
          </div>
        </div>
      </div>
      <hr className='my-4' />
      <div className="row">
        <div className="col-12 col-md-6">
        <p className="text-center text-md-start">&copy;Developed by Makers 2023</p>
        </div>
        <div className="col-12 col-md-6">
        <ul className="list-inline text-center text-md-end">
          <li className="list-inline-item"><Link to="#" className="text-dark">Privacy Policy</Link></li>
          <li className="list-inline-item"><Link to="#" className="text-dark">Terms of Use</Link></li>
          <li className="list-inline-item"><Link to="#" className="text-dark">Contact Us</Link></li>
        </ul>
      </div>
      </div>
    </div>
  </footer>
  </>;
}

export default footer