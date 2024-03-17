import React from 'react';
import { FaStar } from 'react-icons/fa6';

import { useProductContext } from '/home/harsh/VS FULLSTACK/React/InstantShop/InstanstShop/src/Component/ProductContext.jsx';
import Navbar from './Navbar';
import '/home/harsh/VS FULLSTACK/React/InstantShop/InstanstShop/src/Css/Product.css'


const Product = () => {
 
  const { selectedProduct } = useProductContext();

 
  return (
    <div>
      <Navbar/>
      {selectedProduct && (
        <div className="details">
         
        
          <img id="image" src={ selectedProduct.image}/>
        
          <div className="description">
          <h1>{ selectedProduct.title}</h1>
          <h2>Price: ₹{ Math.floor(selectedProduct.price*83)}</h2>
      
          <p className="rate flex items-center flex-row justify-center">
              Rating: {selectedProduct.rating}<FaStar/> ({selectedProduct.count})
          </p>
          <p className='des'>{selectedProduct.descripition}</p>
        
          </div>
        </div>
      )}
      <div className='ft'>
    <h1>
    <b>Instant Shop</b>
    </h1>
    <h3>Terms of Service | Privacy Policy</h3>
    <h2>Made With ❤️by Harsh Saini</h2>
</div>
  
    </div>
    
  );
};

export default Product;