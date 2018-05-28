import React from 'react'

//STYLING | IMAGES
import './Home.css'
import Logo from '../../../images/logo_parts/logo_full.png';
import cardContainerBackdrop from '../../../images/backdrop/backdrop_main.jpg';


const HomePage = () => {
  return (

    <div className="homepage">
    <img src={cardContainerBackdrop} alt="" className="cardBackdrop"/>
    <div className="flip-container">
        <div className="flipper">
          <div className="card card--back">
              <div className="card-menu">
                <p className="card-text">Welcome to our House</p>
              </div>
          </div>
          <div className="card card--front">
            <img src={Logo} alt=""/>
          </div>
        </div>        
      </div>
      </div>

  )
}


export default HomePage;

