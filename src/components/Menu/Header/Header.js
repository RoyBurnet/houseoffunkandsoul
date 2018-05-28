import React, { Component } from 'react'

import './Header.css';
import {Link, NavLink } from 'react-router-dom';
import smallLogo from '../../../images/logo_parts/logo_illustration.png';
import textLogo from '../../../../src/images/logo_parts/logo_text.png';


class Header extends Component {
  render () {
    return (
  
      <div>   
      <div className="headerMenu">
      <Link to="/"><img src={smallLogo} alt="hfsLogo" className="smallLogoIllustrationHeader"/></Link>

      <ul className="headerMenu--list">

        <li className="headerMenu--item">
          <div className="item--about item">
            <NavLink
            activeClassName="is-active" 
            to="/about" 
            >ABOUT</NavLink>
          </div>
        </li>

        <li className="headerMenu--item">
          <div className="item--releases item">
            <NavLink 
            activeClassName="is-active"
            to="/events" 
            >EVENTS</NavLink>
          </div>
        </li>

      <li className="headerMenu--item ">
        <div className="item--contact item ">
        <NavLink 
        activeClassName="is-active"
        to="/contact" 
        >CONTACT</NavLink>
        </div>
      </li>

      </ul>
      <img src={textLogo} className="smallLogoTextHeader" alt=""/>
    </div>
    </div>
  

    )
  }
}

export default Header