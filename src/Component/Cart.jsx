import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './../Redux/store.js'
import {clearCart} from './../Redux/cartSlice.js'
import Navbar from './../Component/Navbar.jsx'
import './../Css/Cart.css'
import cartimg from './../assets/empty-cart.png'
import './../App.css'
function Cart() {

  //subscribing using selector
    const cartItems = useSelector((stores) => stores.cart.items);

    const dispatch = useDispatch();

  const handleclearCart = ()=>{
    dispatch(clearCart()); 
  }

    return (
      <>
      <Provider store={store}>
        <Navbar/>
        {cartItems.length!=0 && <button  onClick={handleclearCart}className='clearcart'>Clear Cart</button>}
       
        <div className='Cart-section'>
       {cartItems.length === 0  &&  <img  className='cartim'src={cartimg} />  }
            {cartItems.map(product => (
                <div className='cart-info ' key={product.id}>
                    <img src={product.image} alt={product.title} />
                  <div className='data' >
                  <h1 ><b>{product.title}</b></h1>
                    
                    <h2>Quantity:1</h2>
                
                    <h5 >Price:₹ {Math.floor(product.price * 83)}</h5>
                  </div>
                  
                </div>

               
            ))}
            {cartItems.length!=0 &&  <div className='check'>
                  <p>Order Summary</p>
                  <input type='text' placeholder='Enter Your Coupon Code Here'></input>
                  <button onClick={()=>{
                    alert('Invalid Coupon Code!!');
                  }}  className='btn-1'>Apply Coupon</button>
                  <button onClick={()=>{
                    alert("Checkout Done!! Payment Successful")
                  }} className='btn-2'>Continue to Checkout</button>
                   </div>
      }
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
    );
}

export default Cart;
