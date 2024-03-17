import React from 'react';
import Navbar from './Navbar';
import useCards from './useCards';
import Item from './Item';
import Shimmer from './Shimmer';


import { Provider } from 'react-redux';
import store from '../Redux/store';




const Shop = () => {
  const products = useCards();

  

  console.log(products);
 if(products.length===0){
  return <Shimmer/>
 }
  return (
    <>
  
  <Provider store={store}>
      <Navbar  />

     
      <div className=" flex flex-wrap w-full ">
        
        { products.map((item) => (
          <Item
            key={item.id}
            itemid={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            rating={item.rating.rate}
            count={item.rating.count}
            descripition={item.description}
          />
        ))}
      </div>
      </Provider>
    </>
  );
};

export default Shop;
