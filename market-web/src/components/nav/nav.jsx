import { Link } from 'react-router-dom';
import React from 'react';
import './nav.css';

export const Nav = () => {
    return (
        <div>
        <div className="navbar">
          
          <Link className="navbarMenu" to={'/'}>MAIN</Link>
          <Link className="navbarMenu" to={'/Desktop'}>DESKTOP</Link>
          <Link className="navbarMenu" to={'/Monitor'}>MONITOR</Link>
          <Link className="navbarMenu" to={'/Notebook'}>NOTEBOOK</Link>
          <Link className="navbarMenu" to={'/Pad'}>PAD</Link>
          <Link className="navbarMenu" to={'/Phone'}>PHONE</Link>
          <Link className="navbarMenu" to={'/Keyboard'}>KEYBOARD</Link>
          <Link className="navbarMenu" to={'/Mouse'}>MOUSE</Link>
          <Link className="navbarMenu" to={'/Game'}>GAME</Link>
          <Link className="navbarMenu" to={'/Smartwatch'}>SMARTWATCH</Link>

        </div>
      </div>

    )
}

export default Nav;