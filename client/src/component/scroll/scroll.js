import React from 'react'
import {Link} from "react-router-dom";
import './scroll.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const scroll = () => {

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
    <div>
          <div className='scroll-container'>
        <div className='scroll-m-div'>
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
  )
}

export default scroll
