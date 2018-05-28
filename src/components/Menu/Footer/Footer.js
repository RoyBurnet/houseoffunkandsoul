import React from 'react'
import Audiop from '../../Audioplayer/Audioplayer'
import '../../../../node_modules/react-responsive-audio-player/dist/audioplayer.css'
import './Footer.css';

const Header = () => {
  return (
    <div className="footer">
      <ul className="footerMenu--list">
        <li className="footerMenu--item"></li>
      </ul>
      <Audiop />
      <div className="smallLogoTextFooter">
      </div>
    </div>
  )
}

export default Header
