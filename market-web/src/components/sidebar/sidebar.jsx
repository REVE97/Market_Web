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

                <h3 className='sidebarTitle'>
                <Link className="sidebarTitle" to={'/computer devices'}>Computer Devices</Link></h3>
                <ul className='sidebarList'>
    
                    <li className='sidebarListItem'>
                       <img src="/images/icon-notebook.svg" alt="notebook" />
                       <Link className="sidebarLink" to={'/categoryId/1'}>NOTEBOOK</Link>
                    </li>
                    <li className='sidebarListItem'>
                       <img src="/images/icon-desktop.svg" alt="desktop" /> 
                       <Link className="sidebarLink" to={'/categoryId/2'}>DESKTOP</Link>
                    </li>
                    <li className='sidebarListItem'>
                    <img src="/images/icon-monitor.svg" alt="monitor" />
                       <Link className="sidebarLink" to={'/categoryId/3'}>MONITOR</Link>
                    </li>
                    <li className='sidebarListItem'>
                       <img src="/images/icon-keyboard.svg" alt="keyboard" />
                       <Link className="sidebarLink" to={'/categoryId/4'}>KEYBOARD</Link>
                    </li>
                    <li className='sidebarListItem'>
                       <img src="/images/icon-mouse.svg" alt="mouse" />
                       <Link className="sidebarLink" to={'/categoryId/5'}>MOUSE</Link>
                    </li>
                </ul>

                <h3 className='sidebarTitle'><Link className="sidebarTitle" to={'/digital'}>Digital</Link></h3>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                       <img src="/images/icon-phone.svg" alt="smartphone" />
                       <Link className="sidebarLink" to={'/categoryId/6'}>SMARTPHONE</Link>
                    </li>
                    <li className='sidebarListItem'>
                       <img src="/images/icon-tablet.svg" alt="tablet" />
                       <Link className="sidebarLink" to={'/categoryId/7'}>TABLET</Link>
                    </li>
                    <li className='sidebarListItem'>
                       <img src="/images/icon-watch.svg" alt="watch" />
                       <Link className="sidebarLink" to={'/categoryId/8'}>SMARTWATCH</Link>
                    </li>
                    <li className='sidebarListItem'>
                       <img src="/images/icon-game.svg" alt="game" />
                       <Link className="sidebarLink" to={'/categoryId/9'}>GAME</Link>
                    </li>

                <hr></hr><br></br>

                </ul>

                <h3 className='sidebarTitle'><Link className="sidebarTitle" to={'/'}>Brand</Link></h3>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                       <img src="/images/icon-apple.svg" alt="apple" />
                       <Link className="sidebarLink" to={'/brand_id/5'}>APPLE</Link>
                    </li>
                    <li className='sidebarListItem'>
                       <img src="/images/icon-samsung.svg" alt="samsung" />
                       <Link className="sidebarLink" to={'/brand_id/42'}>SAMSUNG</Link>
                    </li>
                    <li className='sidebarListItem'>
                       <img src="/images/icon-lg.png" alt="lg" />
                       <Link className="sidebarLink" to={'/brand_id/6'}>LG</Link>
                    </li>
                    <li className='sidebarListItem'>
                       <img src="/images/icon-nintendo.svg" alt="nintendo" />
                       <Link className="sidebarLink" to={'/brand_id/79'}>NINTENDO</Link>
                    </li>

                </ul>
            </div>
        </div>
    </div>
 )
}