import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './View/Home/Home';
import Project from './View/Product/Product'
import Service from './View/Service/Service';
import About from './View/About/About';
import Blog from './View/Blog/Blog';
import Login from './View/Login/Login';
import Navbar from './component/Navbar/Navbar';
import FAQ from './FAQ/faq';
import Enroll from './component/enroll/enroll';
import Footer from './component/Footer/Footer';
import View from './component/View-detail/View';
import YoutubeDetail from './component/View-detail/youtube-detail';
import GoogleDetail from './component/View-detail/google-detail';
import EmailDetail from './component/View-detail/email-detail';
import DigitalView from './component/View-detail/digitals-detail';
import Signup from './View/Signup/Signup';
import Scroll from './component/scroll/scroll'
import { ContactUs } from './View/Contact/Contact';


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
            path: "/project",
            element: <Project/> ,
        },
        
        {
            path: "/about",
            element: <About/> ,
        },
        
        {
            path: "/blog",
            element: <Blog/> ,
        },
        
        {
            path: "/contact",
            element: <ContactUs/> ,
        },
        
        {
            path: "/login",
            element: <Login/> ,
        },

        {
            path: "/faq",
            element: <FAQ/> ,
        },
        {
            path: "/enroll",
            element: <Enroll/> ,
        },
        {
            path: "/view",
            element: <View/> ,
        },
        {
            path: "/digitalView",
            element: <DigitalView/> ,
        },
        {
            path: "/youtubeDetail",
            element: <YoutubeDetail/> ,
        },
        {
            path: "/googleDetail",
            element: <GoogleDetail/> ,
        },
        {
            path: "/emailDetail",
            element: <EmailDetail/> ,
        },
        {
            path: "/signup",
            element: <Signup/> ,
        },
        {
            path: "/scroll",
            element: <Scroll/> ,
        },

    ])

 

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render( <>
          <Navbar/>
        < RouterProvider router = { router }
          />
          <Footer/>
          
          </>
      );
