import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (

        <footer class="text-center bg-info text-white py-3 mt-5 " >
            <p class="text-center m-0">© Copyright 2025 baby care center.</p>
            <div class="down ">
                <a href="https://github.com/teja143kt" className='p-3 text-decoration-none'><FaGithub /> Github</a>
                <a href="https://www.linkedin.com/in/teja-kutchula-2ba02a294/" className='text-decoration-none'> <FaLinkedin /> Linkedin</a><br />
            </div>
        </footer>


    )
}

export default Footer
