import React from 'react'
// import cat1 from '../images/cat1.jpg'
import cat2 from '../images/cat2.jpg'
// import cat3 from '../images/cat3.jpg'
import cat4 from '../images/cat4.jpg'
import cat5 from '../images/cat5.jpg'
import cat6 from '../images/cat6.jpg'
import cat7 from '../images/cat7.jpg'
import cat8 from '../images/cat8.jpg'
import cat9 from '../images/cat9.jpg'
import cat10 from '../images/cat10.jpg' 


function Card() {
    return (
        <div className='container-fluid'>
          <h3 className='mt-4'>Cards</h3>
          
            <div className='row'>
                
                <div className='col-md-3'>
                    <div class="card hover-effect">
                        <img src={cat10} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 '>
                    <div class="card hover-effect" >
                        <img src={cat2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 '>
                    <div class="card hover-effect" >
                        <img src={cat9} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 '>
                    <div class="card hover-effect">
                        <img src={cat4} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 '>
                    <div class="card hover-effect">
                        <img src={cat5} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 '>
                    <div class="card hover-effect">
                        <img src={cat6} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div class="card hover-effect">
                        <img src={cat7} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 '>
                    <div class="card hover-effect">
                        <img src={cat8} class="card-img-top " alt="..." />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Card
