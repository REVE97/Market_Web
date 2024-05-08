import { Link } from 'react-router-dom';
import React from 'react';
import './nav.css';

export const Nav = () => {
    return (
        <div>
        <div className="navbar">
          <Link className="navbarMenu" to={'/'}>MAIN</Link>
          <Link className="navbarMenu" to={'/Notebook'}>NOTEBOOK</Link>
          <Link className="navbarMenu" to={'/Pad'}>PAD</Link>
          <Link className="navbarMenu" to={'/Phone'}>PHONE</Link>
        </div>
      </div>

    )
}