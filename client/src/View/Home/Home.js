import React, {useEffect} from 'react'
import './Home.css';
import FAQ from '../../FAQ/faq';
import { Link } from "react-router-dom"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { checkLogin } from "../../utils/auth";

import background from '../../image/background.png'


const Home = () => {

  useEffect(()=> {
    checkLogin();

}, []);

  const settings ={
    dots: true,
    isFinite:true,
    speed:500,
    slidesToShow:3,
    slidesToScroll:1
    };


    const data = [
      {
          name:'Instagram Marketing',
          img: 'https://www.millionairetrack.com/admin/img/YOUTUBEMARKETING.png',
          review: 'A new way to transform your business.'
      },
      {
          name:'Digital Marketing',
          img: 'https://www.millionairetrack.com/admin/img/GOOGLEADS.png',
          review: 'Build digital strategies for evolving business.'
      },
      {
          name:'Email Marketing',
          img: 'https://www.millionairetrack.com/admin/img/EMAILMARKETING.png',
          review: 'Analyze the new trending marketing skills.'
      },
      {
          name:'Google Ads',
          img: 'https://www.millionairetrack.com/admin/img/DIGITALMARKETING.png',
          review: 'A great way of investing in your business.'
      },
      {
          name:'Youtube Marketing',
          img: 'https://www.millionairetrack.com/admin/img/INSTAGRAMMARKETING.png',
          review: 'Transform your creativity easily.'
      }
  ]

  return (
  <> 
   <div>
     <img src={background} height={430} width={1500} alt='img' className='main-img'></img>
   </div> 

    <b className='b-text'> Marketing Mastery  Bundle Courses</b>

    <div className='main-card'>
     <div className='scroll-container'>
        <div className='mt-20'>
            <Slider {...settings}>
            {data.map((d) =>(
                <div className=''>
                    <div className='scroll-div-1'>
                        <img src={d.img} alt=''className='scroll-img' />
                    </div>
                    <div className='scroll-div-2'>
                        <p className='scroll-name'>{d.name}</p>
                        <p>{d.review}</p>
                        <Link to="/digitalView"><button className='scroll-btn'>Read More</button></Link>
                    </div>    
                </div>
            ))}
            </Slider>

        </div>
      
    </div>
    </div>





    


    
   
    <div className='parent'>
      <div className='child'>
        <div className='sub-child sub'>
          <b className='h-box'>Explore new program</b><br/>
          <b className='h-insta-text'>Instagram Marketing</b>
        </div>
        <div className='sub-child sun' >
        <img src='https://www.millionairetrack.com/admin/img/INSTAGRAMMARKETING.png' height={130} width={180} className='m-i-ml'></img>
        </div>
      
      </div>
      <div className='child'>
        <div className='sub-child sub'>
        <p> A new way to transform your business.</p>
        <img src='https://www.millionairetrack.com/assets/images/gp6.png' height={52} width={350}></img>
        <p><del> ₹1000</del>   ₹399/-</p>
        </div>
        <div className='sub-child'>
        <Link to='/view'><button className='view-btn'>View Details</button><br/></Link>
        <Link to='/enroll'><button className='enroll-view-btn'>Enroll Now</button></Link>
        </div>
      </div>
    </div>

    <div className='parent'>
      <div className='child'>
        <div className='sub-child sub'>
          <b className='h-box'>Explore new program</b><br/>
          <b className='h-insta-text'>Digital Marketing</b>
        </div>
        <div className='sub-child sun' >
        <img src='https://www.millionairetrack.com/admin/img/DIGITALMARKETING.png' height={130} width={180} className='m-i-ml'></img>
        </div>
      
      </div>
      <div className='child'>
        <div className='sub-child sub'>
        <p> Build digital strategies for evolving business.</p>
        <img src='https://www.millionairetrack.com/assets/images/gp6.png' height={52} width={350}></img>
        <p><del> ₹4999</del>   ₹2359/-</p>
        </div>
        <div className='sub-child'>
        <Link to='/digitalView'><button className='view-btn'>View Details</button><br/></Link>
        <Link to='/enroll'><button className='enroll-view-btn'>Enroll Now</button></Link>
        </div>
      </div>
    </div>

    <div className='parent'>
      <div className='child'>
        <div className='sub-child sub'>
          <b className='h-box'>Explore new program</b><br/>
          <b className='h-insta-text'>Email Marketing</b>
        </div>
        <div className='sub-child sun' >
        <img src='https://www.millionairetrack.com/admin/img/EMAILMARKETING.png' height={130} width={180} className='m-i-ml'></img>
        </div>
      
      </div>
      <div className='child'>
        <div className='sub-child sub'>
        <p>Analyze the new trending marketing skills.</p>
        <img src='https://www.millionairetrack.com/assets/images/gp6.png' height={52} width={350}></img>
        <p><del> ₹2000</del>   ₹499/-</p>
        </div>
        <div className='sub-child'>
       <Link to='/emailDetail'><button className='view-btn'>View Details</button><br/></Link> 
        <Link to='/enroll'><button className='enroll-view-btn'>Enroll Now</button></Link>
        </div>
      </div>
    </div>


    <div className='parent'>
      <div className='child'>
        <div className='sub-child sub'>
          <b className='h-box'>Explore new program</b><br/>
          <b className='h-insta-text'>Google Ads</b>
        </div>
        <div className='sub-child sun' >
        <img src='https://www.millionairetrack.com/admin/img/GOOGLEADS.png' height={130} width={180} className='m-i-ml'></img>
        </div>
      
      </div>
      <div className='child'>
        <div className='sub-child sub'>
        <p> A great way of investing in your business.</p>
        <img src='https://www.millionairetrack.com/assets/images/gp6.png' height={52} width={350}></img>
        <p><del> ₹8500</del>   ₹699/-</p>
        </div>
        <div className='sub-child'>
        <Link to="/googleDetail"><button className='view-btn'>View Details</button></Link><br/>
        <Link to='/enroll'><button className='enroll-view-btn'>Enroll Now</button></Link>
        </div>
      </div>
    </div>


    <div className='parent'>
      <div className='child'>
        <div className='sub-child sub'>
          <b className='h-box'>Explore new program</b><br/>
          <b className='h-insta-text'>Youtube Marketing</b>
        </div>
        <div className='sub-child sun' >
        <img src='https://www.millionairetrack.com/admin/img/YOUTUBEMARKETING.png' height={130} width={180} className='m-i-ml'></img>
        </div>
      
      </div>
      <div className='child'>
        <div className='sub-child sub'>
        <p>Transform your creativity easily.</p>
        <img src='https://www.millionairetrack.com/assets/images/gp6.png' height={52} width={350}></img>
        <p><del> ₹1500</del>   ₹399/-</p>
        </div>
        <div className='sub-child'>
        <Link to="/youtubeDetail"><button className='view-btn'>View Details</button><br/></Link>
        <Link to='/enroll'><button className='enroll-view-btn'>Enroll Now</button></Link>
        </div>
      </div>
    </div>


    

   


    <h1 className='o-m-p'> Frequently ask question </h1>

    <div className='faq-container'>
      <FAQ/>
    </div>





    
   
    </>

  )
}

export default Home
