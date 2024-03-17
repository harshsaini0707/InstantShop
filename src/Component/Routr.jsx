import React from "react";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import Contact from "./Contact";

import { BrowserRouter , Route, Routes} from "react-router-dom";
import Cart from "./Cart";
import Product from "./Product";

const Routr =()=>{
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/item/product/:itemid" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />

        </Routes>
        </BrowserRouter>
    )
}
export  default Routr;