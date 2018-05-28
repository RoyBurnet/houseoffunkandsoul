import React from 'react'
//STYLING | IMAGES
import './CardContainer.css'
import Logo from '../../images/logo_parts/logo_full.png';
import cardContainerBackdrop from '../../images/backdrop/backdrop_main.jpg';
import About from '../Pages/About/about';

const CardContainer = () => {
  return (
    <div>
    <img src={cardContainerBackdrop} alt="" className="cardBackdrop"/>
    <div className="flip-container">
        <div className="flipper">
          <div className="card card--back">
              <div className="card-menu">
                <ul className="menu">
                  <li className="menu_item">ABOUT</li>
                  <li className="menu_item">CONTACT</li>
                  <li className="menu_item">RELEASES</li>
              </ul>
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


export default CardContainer

