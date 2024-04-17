import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Contact.css'

import fb from './../../image/fb-2.png'
import insta from './../../image/in.jpg'
import linkedin from './../../image/linkedin.jpg'
import twitter from './../../image/twitter-2.png'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vq7ojrf', 'template_bfpxfh8', form.current, {
        publicKey: 'JAfSRHLV9NoCOgaox',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
   <div className='contact-container'>

    <div className='contact-img-content'>
    <div className="col m-3">
          <h2 className="mt-3 heading">Reach Us:</h2>
          <p className="para mt-3">Head Office 🏠</p><br/>
          <p className="para">Marketing Mastery 🛣️ 💻</p><br/>
          <p className="para para-1"> 404, Laxmi Heights, Above Lotus Multi-speciality Hospital Manjari BK, Nagpur - 412307</p><br/>
          <p className="para para-1">📱 8767344987, 7020487429</p><br/>
          <p className="para para-1">📩 https://www.maketing-mastery.org</p><br/>
          <br/>
          <h2 className="mt-1 heading">Social</h2>
          <img src={fb} className="small-symbol m-2"/>
          <img src={linkedin}className="small-symbol m-2"/>
          <img src={twitter} className="small-symbol m-2"/>
          <img src={insta} className="small-symbol m-2"/>
        </div>

    </div>

    <div className='contact-img-info'>
    <h2 className="mt-3 ms-5 ml-5 g-y-S">Give Your Suggestions:</h2>
    <form ref={form} onSubmit={sendEmail} >

     <input type="text" placeholder="Enter Your Name:" className="input-text" name="from_name" /><br/>

      <input type="text" placeholder="Enter Phone Number:" className="input-text"/><br/>
      
      <input type="email" placeholder="Enter Your Email-id:" name="from_email" className="input-text"/><br/>
      
      <input type="type"   className="input-text" placeholder="Enter Your Organisation:" /><br/>
      
      <textarea name="message"  className="input-text textarea" placeholder="Enter Your Message (Optional):" /><br/>

      <input type="submit" value="Send" class="btn-size"/>
    </form>
    </div>



   </div>

  

    </>
  );
};
