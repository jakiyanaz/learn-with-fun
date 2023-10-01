import React from 'react'
import { NavLink } from "react-router-dom";

const Sidebar = ({icon, onClick}) => {
    const iconStyle = {
        float: 'right',
    };

    const navLinkStyles = ({ isActive }) => {
        return {
          fontWeight: isActive ? 'bold' : 'normal',
          textDecoration: isActive ? 'underline' : 'none'
        }
    }
    
  return (
    <div id='sidebarcomp' className='border border-solid border-red-800 p-3'>
        {/* <AiFillCloseCircle id='iconclose' size={40} style={iconStyle} onClick={closeSideBar} /> */}
        {icon}
        <p className='mb-4'><NavLink style={navLinkStyles} to='/'>Home</NavLink></p>
        <div id="sidebar-applist">
            <ul>
                <li>Apps List</li>
                <li className='px-4'><NavLink style={navLinkStyles} to='/quotes'>Quotes</NavLink></li>
                <li className='px-4'><NavLink style={navLinkStyles} to='/facts'>Facts</NavLink></li>
                <li className='px-4'><NavLink style={navLinkStyles} to='/geocoding'>Geocoding</NavLink></li>
                <li className='px-4'><NavLink style={navLinkStyles} to='/riddles'>Riddles</NavLink></li>
                <li className='px-4'><NavLink style={navLinkStyles} to='/trivia'>Trivia</NavLink></li>
                <li className='px-4'><NavLink style={navLinkStyles} to='/historical-events'>Historical Events</NavLink></li>
                <li className='px-4'><NavLink style={navLinkStyles} to='/historical-figures'>Historical Figures</NavLink></li>
                <li className='px-4'><NavLink style={navLinkStyles} to='/planets'>Planets</NavLink></li>
                <li className='px-4'><NavLink style={navLinkStyles} to='/thesaurus'>Thesaurus</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar