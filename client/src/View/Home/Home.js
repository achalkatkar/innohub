import React from 'react'
import './Home.css';
import FAQ from '../../FAQ/faq';
import { Link } from "react-router-dom"

const Home = () => {
  return (
  <> 
   <div>
     <img src='https://www.millionairetrack.com/assets/images/Websitebanner-01.png' height={400} width={1500} alt='img' className='main-img'></img>
   </div> 

    <b className='b-text'>Mt Bundle Courses</b>

    <div className='main-card'>
      <div className='a-card'>hello fhjkgfhdg</div>
      <div className='a-card'>hellosdfghjjk</div>
      <div className='a-card'>hello</div>

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
        <button className='view-btn'>View Details</button><br/>
        <Link to='/enroll'><button className='view-btn'>Enroll Now</button></Link>
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
        <button className='view-btn'>View Details</button><br/>
        <Link to='/enroll'><button className='view-btn'>Enroll Now</button></Link>
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
        <button className='view-btn'>View Details</button><br/>
        <Link to='/enroll'><button className='view-btn'>Enroll Now</button></Link>
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
        <button className='view-btn'>View Details</button><br/>
        <Link to='/enroll'><button className='view-btn'>Enroll Now</button></Link>
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
        <button className='view-btn'>View Details</button><br/>
        <Link to='/enroll'><button className='view-btn'>Enroll Now</button></Link>
        </div>
      </div>
    </div>


    

   

    <h1 className='o-m-p'> Our media presence </h1>


    <div className='sub-card'>
      <div className='s-card'>hello fhjkgfhdg</div>
      <div className='s-card'>hellosdfghjjk</div>
      <div className='s-card'>hello</div>

    </div>


    <h1 className='o-m-p'> frquently ask question </h1>

    <div className='faq-container'>
      <FAQ/>
    </div>





    
   
    </>

  )
}

export default Home
