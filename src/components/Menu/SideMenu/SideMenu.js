import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import  './SideMenu.css'

import facebook from '../../../images/social/facebook.png';
import instagram from '../../../images/social/instagram.png'

class SideMenu extends Component {
  constructor(props){
    super(props)
    this.state = {
      menuOpen: false
    }
  }f

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }


  render () {
    let styles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '14px',
        top: '18px'
      },
      bmBurgerBars: {
        background: 'black'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px'
      },
      bmCross: {
        background: 'black'
      },
      bmMenu: {
        background: 'white',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
        overflow: 'hidden'
      },
      bmMorphShape: {
        fill: '#373a47'
      }
      
    }



    return (
      <Menu 
        styles={styles} 
        isOpen={this.state.menuOpen} 
        onStateChange={(state) => this.handleStateChange(state)}      
        >
        <div className="sideBarMenuItem">
          <NavLink to="/" onClick={() => this.closeMenu()} className="sideBarMenuItem sideBarMenuItem--home">Home</NavLink>
        </div>

        <div className="sideBarMenuItem">
          <NavLink to="/about" onClick={() => this.closeMenu()} className="sideBarMenuItem sideBarMenuItem--about">About</NavLink> 
        </div>

        <div className="sideBarMenuItem">
          <NavLink to="/events"  onClick={() => this.closeMenu()} className="sideBarMenuItem sideBarMenuItem--releases">Events</NavLink>
        </div>

        <div className="sideBarMenuItem">
          <NavLink to="/contact" onClick={() => this.closeMenu()} className="sideBarMenuItem sideBarMenuItem--contact">Contact</NavLink>
        </div>

        <span className="socialHolder">
        <img src={facebook} alt="" className="socialLogo"/>
        <img src={instagram} alt="" className="socialLogo"/>
        </span>

      </Menu>
    )
  }
}


export default SideMenu