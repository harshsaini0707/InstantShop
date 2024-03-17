import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';


function Description() {
  const [itemInfo, setItemInfo] = useState(null);
  
  useEffect(()=>{
    data();
      },[]);
    
    const data = async() => {
        const response  = await fetch('https://fakestoreapi.com/products');
        const json = await (response.json());
        setItemInfo(json);
        };

  if (!itemInfo) {
    return <Shimmer/>;
  }

  return (
    <div className='description'>
     <h1>{itemInfo.title}</h1>
     <h1>{itemInfo.category}</h1>
    </div>
  );
}

export default Description;
