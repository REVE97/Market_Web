import React, { useState } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    
   // 메가메뉴 방식 네비게이션
   const [openMenu, setOpenMenu] = useState(null);
   const handleMouseEnter = (menu) => {
        setOpenMenu(menu);
   };

   const handleMouseLeave = () => {
        setOpenMenu(null);
   };

    return (
        <div className="sidebar">
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <h2 className='menu'>MENU_</h2>
                    <hr />
                    <h3 className='sidebarTitle' onMouseEnter={() => handleMouseEnter('main')} onMouseLeave={handleMouseLeave}>
                        <Link className="sidebarTitleLink" to={'/'}>Main</Link>
                    </h3>
                    <ul className={`sidebarList ${openMenu === 'main' ? 'show' : ''}`} onMouseEnter={() => handleMouseEnter('main')} onMouseLeave={handleMouseLeave}>
                        <li className='sidebarListItem'>
                            <img src="/images/icon-home.svg" alt="home" />
                            <Link className="sidebarLink" to={'/'}>Home</Link>
                        </li>
                    </ul>

                    <h3 className='sidebarTitle' onMouseEnter={() => handleMouseEnter('computerDevices')} onMouseLeave={handleMouseLeave}>
                        <Link className="sidebarTitleLink" to={''}>Computer Devices</Link>
                    </h3>
                    <ul className={`sidebarList ${openMenu === 'computerDevices' ? 'show' : ''}`} onMouseEnter={() => handleMouseEnter('computerDevices')} onMouseLeave={handleMouseLeave}>
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

                    <h3 className='sidebarTitle' onMouseEnter={() => handleMouseEnter('digital')} onMouseLeave={handleMouseLeave}>
                        <Link className="sidebarTitleLink" to={''}>Digital</Link>
                    </h3>
                    <ul className={`sidebarList ${openMenu === 'digital' ? 'show' : ''}`} onMouseEnter={() => handleMouseEnter('digital')} onMouseLeave={handleMouseLeave}>
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
                    </ul>

                    <h3 className='sidebarTitle' onMouseEnter={() => handleMouseEnter('brand')} onMouseLeave={handleMouseLeave}>
                        <Link className="sidebarTitleLink" to={'/'}>Brand</Link>
                    </h3>
                    <ul className={`sidebarList ${openMenu === 'brand' ? 'show' : ''}`} onMouseEnter={() => handleMouseEnter('brand')} onMouseLeave={handleMouseLeave}>
                        
                        <li className='sidebarListItem'>
                            <img src="/images/icon-lenovo.svg" alt="lenovo" />
                            <Link className="sidebarLink" to={'/brand_id/1'}>LENOVO</Link>
                        </li>
                        <li className='sidebarListItem'>
                            <img src="/images/icon-dell.svg" alt="dell" />
                            <Link className="sidebarLink" to={'/brand_id/2'}>DELL</Link>
                        </li>
                        <li className='sidebarListItem'>
                            <img src="/images/icon-asus.svg" alt="asus" />
                            <Link className="sidebarLink" to={'/brand_id/3'}>ASUS</Link>
                        </li>
                        <li className='sidebarListItem'>
                            <img src="/images/icon-hp.svg" alt="hp" />
                            <Link className="sidebarLink" to={'/brand_id/4'}>HP</Link>
                        </li>
                        <li className='sidebarListItem'>
                            <img src="/images/icon-apple.svg" alt="apple" />
                            <Link className="sidebarLink" to={'/brand_id/5'}>APPLE</Link>
                        </li>
                        <li className='sidebarListItem'>
                            <img src="/images/icon-lg.png" alt="lg" />
                            <Link className="sidebarLink" to={'/brand_id/6'}>LG</Link>
                        </li>
                        <li className='sidebarListItem'>
                            <img src="/images/icon-msi.svg" alt="msi" />
                            <Link className="sidebarLink" to={'/brand_id/8'}>MSI</Link>
                        </li>
                        <li className='sidebarListItem'>
                            <img src="/images/icon-gigabyte.svg" alt="gigabyte" />
                            <Link className="sidebarLink" to={'/brand_id/11'}>GIGABYTE</Link>
                        </li>
                        <li className='sidebarListItem'>
                            <img src="/images/icon-microsoft.svg" alt="microsoft" />
                            <Link className="sidebarLink" to={'/brand_id/13'}>MICROSOFT</Link>
                        </li>
                        <li className='sidebarListItem'>
                            <img src="/images/hansung.png" alt="hansung" />
                            <Link className="sidebarLink" to={'/brand_id/18'}>HANSUNG</Link>
                        </li>
                        <li className='sidebarListItem'>
                            <img src="/images/icon-emtec.svg" alt="emtec" />
                            <Link className="sidebarLink" to={'/brand_id/19'}>EMTEC</Link>
                        </li>
                        <li className='sidebarListItem'>
                            <img src="/images/icon-benq.svg" alt="benq" />
                            <Link className="sidebarLink" to={'/brand_id/22'}>BENQ</Link>
                        </li>
                        <li className='sidebarListItem'>
                            <img src="/images/icon-logitech.svg" alt="logitech" />
                            <Link className="sidebarLink" to={'/brand_id/38'}>LOGITECH</Link>
                        </li>
                        <li className='sidebarListItem'>
                            <img src="/images/abko.png" alt="abko" />
                            <Link className="sidebarLink" to={'/brand_id/40'}>ABKO</Link>
                        </li>
                        <li className='sidebarListItem'>
                            <img src="/images/cox.jpg" alt="cox" />
                            <Link className="sidebarLink" to={'/brand_id/41'}>COX</Link>
                        </li>
                        <li className='sidebarListItem'>
                            <img src="/images/icon-samsung.svg" alt="samsung" />
                            <Link className="sidebarLink" to={'/brand_id/42'}>SAMSUNG</Link>
                        </li>
                        <li className='sidebarListItem'>
                            <img src="/images/icon-corsair.svg" alt="corsair" />
                            <Link className="sidebarLink" to={'/brand_id/49'}>CORSAIR</Link>
                        </li>
                        <li className='sidebarListItem'>
                            <img src="/images/icon-razer.svg" alt="razer" />
                            <Link className="sidebarLink" to={'/brand_id/52'}>RAZER</Link>
                        </li>
                        <li className='sidebarListItem'>
                            <img src="/images/icon-nintendo.svg" alt="nintendo" />
                            <Link className="sidebarLink" to={'/brand_id/79'}>NINTENDO</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
