import { useState , useEffect } from 'react';
export const useCards = () => {
    const[products, setProducts] =useState([]);

    useEffect(()=>{
    data();
      },[]);
    
    const data = async() => {
        const response  = await fetch('https://fakestoreapi.com/products');
        const json = await (response.json());
        setProducts(json);

        };
  return products;
    
}
export default useCards;
