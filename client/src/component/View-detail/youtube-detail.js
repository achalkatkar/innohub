import React from 'react'
import {Link} from 'react-router-dom'

import './view.css';

const YoutubeDetail = () => {
  return (
    <>
    <div className='view-container'>

        <div className='view-info'>
            <h3>Youtube Marketing Strategy 2024</h3><br/>
            <p>YouTube Marketing is an effective marketing strategy to promote your brand and services. Since it is the second most visited site in the world after Google you will attract many potential customers. If you want to enhance your business exposure run your YouTube campaign now.</p> <br/><br/>

            <ul type='circle'>
                <li>Heavy Traffic</li>
                <li>High Conversion Rates</li>
                <li>Business Growth</li>
                <li>Higher Revenue</li>
            </ul>

            <Link to='/enroll'><button>Enroll  Now</button></Link>
        </div>

        <div className='view-img'>
        <iframe width="500" height="315" src="https://www.youtube.com/embed/tvir9A5CJv8?si=lYfOIkxyFMOWVz02" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
     
    </div>

    </>
  )
}

export default YoutubeDetail
