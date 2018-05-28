import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';


//Components
import Header from './components/Menu/Header/Header';
import Home from './components/Routes/Home/Home'
import About from './components/Routes/About/about'
import SideMenu from './components/Menu/SideMenu/SideMenu'
import Events from './components/Routes/Events/Events'
import Contact from './components/Routes/Contact/Contact'
import Footer from './components/Menu/Footer/Footer';


class App extends Component {

  render() {
    return (
      <div className='App'> 

        <Header />
          <SideMenu />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} /> 
          <Route path='/events' component={Events} /> 
          <Route path='/contact' component={Contact} /> 
        <Footer />

      </div>
    );
  }
}

export default App;
