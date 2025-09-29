import React from 'react'

function Header() {
  return (
     <nav class="navbar navbar-expand-lg navbar-dark bg-info text-white ">
        <div class="container-fluid">
            <h1>my portfolio</h1>
            <div>
                <a class="text-decoration-none m-3 text-white " href="#about me">aboutme</a>
                <a class="text-decoration-none m-3 text-white" href="#Education">Education</a>
                <a class="text-decoration-none m-3 text-white" href="#skills">skills</a>
                <a class="text-decoration-none m-3 text-white" href="#contact">Contact</a>
            </div>
        </div>
    </nav>
  )
}

export default Header
