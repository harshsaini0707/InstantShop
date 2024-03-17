import React from 'react'
import home from '/home/harsh/VS FULLSTACK/React/InstantShop/InstanstShop/src/assets/home.jpg'
import Navbar from './Navbar';
import './../App.css'

import { Provider } from 'react-redux';
import store from '../Redux/store';


const Home = () => {
  return (
   <>
  
  <Provider store={store}>
      <Navbar />
<div className="home-box">
<h2>
   Welcome to <b>Instant Shop</b> , your one-stop online shop
for all things weird and wonderful! Unleash
your inner curiosity and discover the extraordinary
in our diverse and delightfully unconventional marketplace.
   </h2>
   <img src={home} />
</div>
<div className='text'>
    <h1>
    Elevate Your Shopping:
Unleash Possibilities!
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
export default Home;