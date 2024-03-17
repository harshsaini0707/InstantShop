import { createContext , useContext , useState } from "react";

const ProductContext = createContext();
export const ProductProvider = ({children})=>{
    const[selectedProduct , setselectedProduct ] = useState([]);
     

    const setProduct = (details) =>{
        setselectedProduct(details);
    };
     return(
        <ProductContext.Provider value={{selectedProduct , setProduct}}>
            {children}
        </ProductContext.Provider>
     )

};

export  function useProductContext(){
    const context = useContext(ProductContext);
    return context;
}