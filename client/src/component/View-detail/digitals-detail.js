import React from 'react'
import {Link} from 'react-router-dom'

import './view.css';

const DigitalView = () => {
  return (
    <>
    <div className='view-container'>

        <div className='view-info'>
            <h3>Digital Marketing Master Class</h3><br/>
            <p>Digital Marketing is one of the most demanding skills to connect with potential customers on social media platforms. The advancement of the brand is made easy with the assistance of online marketing strategies. Now, you have the opportunity to utilize digital channels to grow or promote your marketing campaigns effectively.</p> <br/><br/>

            <ul type='circle'>
                <li>Increased Revenue</li>
                <li>Increased Engagement</li>
                <li> Global Reach</li>
                <li>Cost-Effective Results</li>
            </ul>

            <Link to='/enroll'><button>Enroll  Now</button></Link>
        </div>

        <div className='view-img'>
        <iframe width="500" height="315" src="https://www.youtube.com/embed/G6DmDqYLWL8?si=0mLVN2zm0IJYKtKf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          
           </div>
     
    </div>

    </>
  )
}

export default DigitalView
