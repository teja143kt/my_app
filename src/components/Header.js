import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-info text-white ">
      <div class="container-fluid">
        <h1>my portfolio</h1>
        <div >
          <Link to="/" className='m-3 text-decoration-none text-white font-weight-bold fs-5'>Home</Link>
          <Link to="/about" className='m-3 text-decoration-none text-white font-weight-bold fs-5'>About</Link>
          <Link to="/education" className='m-3 text-decoration-none text-white font-weight-bold fs-5'>Education</Link>
          <Link to="/skills" className='m-3 text-decoration-none text-white font-weight-bold fs-5'>Skills</Link>
          <Link to="/resister" className='m-3 text-decoration-none text-white font-weight-bold fs-5'>Resister</Link>
          <button type="login" class="btn btn-primary">login</button>
        </div>
      </div>
    </nav>
  )
}

export default Header
