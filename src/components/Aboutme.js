import React from 'react'
import profile from "../images/profile.jpeg"
import { hover } from '@testing-library/user-event/dist/hover';

function Aboutme() {
    return (

        <div class="container my-5">
            <div class="row align-items-center">

                <div class="col-md-8">
                    <h2 class="mb-3">Teja Kutchula</h2>
                    <p>Web developer | Designer</p>
                    <p>My name is <strong>k.Teja</strong>. I'm a UI/UX developer driven by a fascination for how
                        people interact with technology. My journey into this field started with a love for graphic
                        design, which gave me a strong eye for aesthetics, typography, and color theory. I quickly
                        realized I wanted to do more than just create beautiful visuals; I wanted to create experiences
                        that were functional, intuitive, and solved real-world problems.</p>
                </div>
                <div class="col-md-4 text-center ">
                    <img src={profile} alt="profile" class="img-fluid  shadow-lg" id='img'
                        style={{
                            width: '300px',
                            height: '320px',
                            objectPosition: 'top',
                            objectFit: 'cover',
                            borderRadius: '10px',
                            // border: '3px solid #24cdef9a',
                            borderRadius: '10px'
                        }} />
                </div>
            </div>
        </div>

    )
}


export default Aboutme
