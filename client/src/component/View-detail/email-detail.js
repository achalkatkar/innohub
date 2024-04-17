import React from 'react'
import {Link} from 'react-router-dom'

import './view.css';

const EmailDetail = () => {
  return (
    <>
    <div className='view-container'>

        <div className='view-info'>
            <h3>A Complete Guide to Email Marketing</h3><br/>
            <p>Email Marketing is one of the most effective marketing channels playing a pivotal role to foster the value of your brand and building a fast effective way to reach out to new potential customers. Since people always check their mail, communicating with them can help you to nurture your brand awareness.</p> <br/><br/>

            <ul type='circle'>
              <li>Improves Sales</li>
              <li> Increase Brand Recognition</li>
              <li>Higher Conversion</li>
              <li> Global Reach</li>
            </ul>

            <Link to='/enroll'><button>Enroll  Now</button></Link>
        </div>

        <div className='view-img'>
        <iframe width="500" height="315" src="https://www.youtube.com/embed/2yX3Fh7j7is?si=lrS_WjVT0-iAuksH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
     
    </div>

    </>
  )
}

export default EmailDetail
