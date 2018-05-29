import React, { Component } from 'react';
import AudioPlayer from "react-responsive-audio-player";
import './Audioplayer.css'

class Audioplayer extends Component {
  render() {
    const playlist = [
      {
        url: 
        'http://houseoffunkandsoul.com/track1.mp3',
        title: "Fes Travaganza - NINA"
      }
    ]

    const controls = ['playpause', 'forwardskip', 'progress']

    return (
      <div className="audioPlay">
        <AudioPlayer playlist={playlist}
        autoplay={true}
        autoplayDelayInSeconds={2.1}
        style={{ position: 'fixed', bottom: 0 }} 
        controls={controls}
         />
      </div>
    );
  }
}

export default Audioplayer