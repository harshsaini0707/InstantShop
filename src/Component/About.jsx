import React from 'react'
import Navbar from './Navbar'
import abt from './../assets/About.jpg'
import './../Css/About.css'

import { Provider } from 'react-redux';
import store from '../Redux/store';

export const About = () => {
  return (
    <>
    <Provider store={store}>
    <Navbar/>
    <div className='about-container'>
      <img src={abt}  alt='about'/>
      <h1>
        
      Welcome to  <b>Instant Shop!</b> We are not your average ecommerce platform. At Instant Shop , we celebrate the unconventional, the eccentric, and the extraordinary. Our curated collection of products is a testament to the vibrant creativity that exists in the world, and we take pride in providing a space where artists, creators, and innovators can showcase their exceptional creations. From one-of-a-kind artworks to whimsical gadgets, our platform is a treasure trove of unique finds that cater to the bold and adventurous souls who seek to stand out from the crowd. Embrace the bizarre, explore the extraordinary, and join us on a journey to discover the unexpected wonders that Instant Shop has to offer.
      </h1>
  </div>
  <div className='ft'>
    <h1>
    <b>Instant Shop</b>
    </h1>
    <h3>Terms of Service | Privacy Policy</h3>
    <h2>Made With ❤️by Harsh Saini</h2>
</div>
</Provider>
    </>
  )
}
export default About;
