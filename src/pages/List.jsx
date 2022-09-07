import React from 'react';
import logo from '../assets/img/logo.png';
import {Buttonletters} from '../styled';

function List() {
    
  return (
    <>
    <div className="container">
    <img className='logonavbar' src={logo} alt=""></img>
    <button>Next<Buttonletters/></button>
    </div>
    </>
  )
}

export default List