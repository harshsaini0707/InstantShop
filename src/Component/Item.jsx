import React from 'react';
import { FaStar } from "react-icons/fa";
import './../Css/item.css';

import { useDispatch } from 'react-redux';
import { addItem } from '../Redux/cartSlice';

import { useProductContext } from './ProductContext';
import { useNavigate } from 'react-router-dom';

const Item = ({  image,itemid, title, price, rating, count  , descripition}) => {
  const dispatch = useDispatch();




  const handleAddItem = () => {
     
    const item = {image, title, price, rating, count };
    // Dispatching an action to add the item to the cart
    //Dispatch an action(import)
    dispatch(addItem(item));
   
    console.log("Item added to cart:", item);
  }

  const navigate = useNavigate();

  const {setProduct} = useProductContext();

  const handleContextClick =()=>{
  setProduct({
    rating,itemid, image , title , price , count , descripition
  });
  navigate(`/item/product/${itemid}`)

  }

  return (

    <div className='cardd mx-auto' id={`${itemid}`}>
      <div className='boxcard pt-10'>
    
        <img onClick={handleContextClick}  src={image} className='h-64' alt='' />
   
        <h2>{title}</h2>
 
        <h1>Price: ₹{Math.floor(price * 83)}</h1>
     
        <h3 className='flex items-center flex-row justify-center'>Rating: {rating} <FaStar color={'gold'} /> ({count})</h3>
        <div className='bbt'>
         
          <button id='one' onClick={handleAddItem }>Add to Cart</button>
          
          <button onClick={handleContextClick}  id='two'>Buy Now</button>
        </div>
      </div>
    </div>
  
  );
}

export default Item;
