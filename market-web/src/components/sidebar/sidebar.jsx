import React from 'react'
import './sidebar.css'
// import HomeWorkIcon from '@mui/icon-material/HomeWork'


export const Sidebar = () => {
    return (
    
    <div className="sidebar">
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
                <h3 className='sideberTitle'>Dashboard</h3>
                <ul className='sidebarList'>
                    
                    <li className='sidebarListItem'>
                        {/* <HomeWorkIcon /> */}
                        Home
                    </li>
                    <li className='sidebarListItem'>
                        {/* <HomeWorkIcon /> */}
                        Analystics
                    </li>
                    <li className='sidebarListItem'>
                        {/* <HomeWorkIcon /> */}
                        Sales
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>


 )
}