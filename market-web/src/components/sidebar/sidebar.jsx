import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    return (
    
    <div className="sidebar">
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
               
                <h3 className='sidebarTitle'>Main</h3>
                <ul className='sidebarList'>
    
                    <li className='sidebarListItem'>
                       <img src="/images/icon-home.svg" alt="home" />
                       <Link className="sidebarLink" to={'/'}>Home</Link>
                    </li>

                </ul>

                <h3 className='sidebarTitle'>Computer Devices</h3>
                <ul className='sidebarList'>
    
                    <li className='sidebarListItem'>
                       <img src="/images/icon-desktop.svg" alt="desktop" /> 
                       <Link className="sidebarLink" to={'/desktop'}>DESKTOP</Link>
                    </li>
                    <li className='sidebarListItem'>
                       <img src="/images/icon-notebook.svg" alt="notebook" />
                       <Link className="sidebarLink" to={'/notebook'}>NOTEBOOK</Link>
                    </li>
                    <li className='sidebarListItem'>
                       <img src="/images/icon-tablet.svg" alt="tablet" />
                       <Link className="sidebarLink" to={'/pad'}>PAD</Link>
                    </li>
                    <li className='sidebarListItem'>
                       <img src="/images/icon-phone.svg" alt="phone" />
                       <Link className="sidebarLink" to={'/phone'}>PHONE</Link>
                    </li>
                    <li className='sidebarListItem'>
                       <img src="/images/icon-watch.svg" alt="watch" />
                       <Link className="sidebarLink" to={'/smartwatch'}>SMARTWATCH</Link>
                    </li>
                </ul>

                <h3 className='sidebarTitle'>Digital</h3>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                       <img src="/images/icon-monitor.svg" alt="monitor" />
                       <Link className="sidebarLink" to={'/monitor'}>MONITOR</Link>
                    </li>
                    <li className='sidebarListItem'>
                       <img src="/images/icon-mouse.svg" alt="mouse" />
                       <Link className="sidebarLink" to={'/mouse'}>MOUSE</Link>
                    </li>
                    <li className='sidebarListItem'>
                       <img src="/images/icon-keyboard.svg" alt="keyboard" />
                       <Link className="sidebarLink" to={'/keyboard'}>KEYBOARD</Link>
                    </li>
                    <li className='sidebarListItem'>
                       <img src="/images/icon-game.svg" alt="game" />
                       <Link className="sidebarLink" to={'/game'}>GAME</Link>
                    </li>

                </ul>
            </div>
        </div>
    </div>


 )
}