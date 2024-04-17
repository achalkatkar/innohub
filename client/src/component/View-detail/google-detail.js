import React from 'react'
import {Link} from 'react-router-dom'

import './view.css';

const GoogleDetail = () => {
  return (
    <>
    <div className='view-container'>

        <div className='view-info'>
            <h3>Google Ads a platform to advertise your brand value</h3><br/>
            <p>Google Ads is an advertising platform. Since it is leading the world today it can help you to gain larger exposure for your brand and raise awareness on a wider scale. If you want to increase traffic to your platform then you must come and explore the best opportunities.</p> <br/><br/>

            <ul type='circle'>
                <li>What Are Communication Skills Exactly</li>
                <li>How to Improve Communication Skills</li>
                <li>How to Make Your Communication Skills Stand Out</li>
            </ul>

            <Link to='/enroll'><button>Enroll  Now</button></Link>
        </div>

        <div className='view-img'>
        <iframe width="500" height="315" src="https://www.youtube.com/embed/GUj3Rz4TSos?si=kfiDRsFd72pg62FT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
     
    </div>

    </>
  )
}

export default GoogleDetail
