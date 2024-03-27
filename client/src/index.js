import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './View/Home/Home';
import Product from './View/Product/Product';
import Service from './View/Service/Service';




    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home/>,
        },
        {
            path: "/service",
            element: <Service/> ,
        },
        {
            path: "/product",
            element: <Product/> ,
        },

    ])

 

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render( <>
        < RouterProvider router = { router }
          />
          
          </>
      );
