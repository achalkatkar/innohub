import React from 'react';
import './Navbar.css'; // Import CSS file for styling

function Navbar() {

  

  return (
    <>

    <nav className='nav'>
      <a href='#' className='brand'>marketing mastery</a>
      <ul className='nav-menu'>
        <li className='nav-item'><a href='./' className='nav-link'>Home</a></li>
        <li className='nav-item'><a href='./about' className='nav-link'>About</a></li>
        <li className='nav-item'><a href='./service' className='nav-link'>Course</a></li>
        <li className='nav-item'><a href='./contact' className='nav-link'>Contact</a></li>
        <li className='nav-item'><a href='./login' className='nav-link'>Login</a></li>
        <li className='nav-item er-btn'><a href='./enroll' className='nav-link'>Enroll</a></li>
      </ul>

    </nav>

    </>
  );
}

export default Navbar;

