import React from 'react'
import Navbar from './Navbar';
import cct from '/home/harsh/VS FULLSTACK/React/InstantShop/InstanstShop/src/assets/contact.jpg'
import '/home/harsh/VS FULLSTACK/React/InstantShop/InstanstShop/src/Css/Contact.css'

import { Provider } from 'react-redux';
import store from '../Redux/store';


export const Contact = () => {
  return (

   <>
   <Provider store={store}>
      
   <Navbar/>
  <div className='contact-container'>
    <img src={cct} alt='contact'/>
<div className='inpt'>
<input className='name' type='text' placeholder='Enter Name'/>
    <input className='name' type='text' placeholder='Enter Email'/>
    <textarea type='text' className='feedback' placeholder='Reason for Contacting!'></textarea>
    <button type='submit' onClick={()=>{
      alert('Thanks For Contacting Us!! Your Issue Should be Resolved Soon')
    }} className='contact-btn'>Submit</button>
</div>


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
export default Contact;