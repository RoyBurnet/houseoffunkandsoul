import React from 'react';
import './Events.css';

import aboutBackdropReleases from '../../../images/backdrop/backdrop_4_huge.jpg';
import hfslogoimg from '../../../images/logo_parts/logo_illustration.png';
const EventsPage = () => {
  return (
    <div className="aboutEvents">
      <div className="overlayBlack"></div>
      <img src={aboutBackdropReleases} alt=""/>
      <div className="EventsContent">
        <img src={hfslogoimg} alt=""/>
        <h2>31  08 2018</h2> <p>LABEL NIGHT  <span className="bold">BIRD ROTTERDAM</span>  </p>
      </div>
    </div>
  );
};

export default EventsPage;