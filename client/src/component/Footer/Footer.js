import React from "react";
import "./Footer.css";

function Footer(){
  return(
    <>

    
<section class="footer">
        <div class="footer-row">
          <div class="footer-col">
          <h4 className="m-l-footer">Info</h4>
            <ul class="links">
              <li><a href="/about">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Course</a></li>
              <li><a href="#">Knowledge</a></li>
            </ul>
          </div>  
          <div class="footer-col">
            <h4 className="m-l-footer">Get Help</h4>
            <ul class="links">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Syallabus</a></li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Payment Options</a></li>
            </ul>
          </div> 
          <div class="footer-col">
            <h4 className="m-l-footer">Quick Links</h4>
            <ul class="links">
              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Disclaimer</a></li>
            </ul>
          </div> 
          
          <div class="footer-col">
            <h4>Marketing Mastery</h4>
            <p>
              Subscribe to our Marketing Mastery website for a weekly dose
              of offers, updates, helpful tips, and
              exclusive offers.
            </p>
            <form action="#">
              <input type="text" placeholder="Enter your email address" required/>
              <button type="submit">SUBSCRIBE</button>
            </form>
            <div class="icons">
              <i class="fa-brands fa-facebook-f"></i> 
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
            </div>   
          </div>
      </section>
    

  
    
      </>
    )}

      export default Footer