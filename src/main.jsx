import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routr from './Component/Routr.jsx'
import { Provider } from 'react-redux'
import store from './Redux/store.js'
import { ProductProvider } from './Component/ProductContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
  <ProductProvider>

    <Routr/>
   
    </ProductProvider>
    </Provider>
  //  </React.StrictMode>,
)
