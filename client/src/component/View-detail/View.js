import React from 'react'
import {Link} from 'react-router-dom'

import './view.css';

const View = () => {
  return (
    <>
    <div className='view-container'>

        <div className='view-info'>
            <h3>A Master Class in Instagram Marketing</h3><br/>
            <p>Instagram is one of the most trending and fastest growing platform, if you want to grow fast then you must learn the techinques of most used social media networking sites to reach the potential customers.</p> <br/><br/>

            <ul type='circle'>
                <li>Brand Strengthening</li>
                <li>Improved Engagement</li>
                <li>Higher Revenue Generation</li>
                <li>Growth Opportunities</li>
            </ul>

            <Link to='/enroll'><button>Enroll  Now</button></Link>
        </div>

        <div className='view-img'>
        <iframe width="500" height="315" src="https://www.youtube.com/embed/0ocRHZkM2OM?si=NYlLo09hAByf4r8c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
     
    </div>

    </>
  )
}

export default View
