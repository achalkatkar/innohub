
import './Navbar.css'

import React from 'react' 

const Navbar = () => {
  return (
    <div>
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Mastery Marketing</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/">Home</a>
        <a class="nav-link" href="/service">Course</a>
        <a class="nav-link" href="/about">About us</a>
        <a class="nav-link" href="/contact">Contact us</a>
        <a class="nav-link" href="/login">Login</a>
      </div>
    </div>
  </div>
</nav>
     

      
    </div>
  )
}

export default Navbar


