import React from 'react';
import logo from '../assets/img/logo.png';
import homeimage from '../assets/img/homeimage.jpg';
import '../../src/App.css';

function Home() {
  return (
    <>
    <div className='containerimage'>
      <img className='homeimage' src={homeimage} alt=""></img>
      <div className='texthome'>
      welcome to virtul zoo
    </div>
    </div>
    <div className='rectangle'>
    </div>
    <div className="container">
    <img className='logo' src={logo} alt=""></img>
    </div>
    </>
  )
}
export default Home