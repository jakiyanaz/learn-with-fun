import React from 'react'
import logo from '../assets/images/logo2.png'
import { FaBars } from "react-icons/fa"
import { AiFillCloseCircle } from "react-icons/ai"
import Sidebar from './Sidebar'
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const showNav = () => {
    const sidebar = document.getElementById('sidebar');
    const baricon = document.getElementById('bar-icon');
    sidebar.style.display = 'block';
    baricon.style.display = 'none';
  }

  const closeSideBar = () => {
    const iconClose = document.getElementById('iconclose');
    const baricon = document.getElementById('bar-icon');
    const sidebar = document.getElementById('sidebar');
    // const sideBarComp = document.getElementById('sidebarcomp');
    sidebar.style.display = 'none';
    baricon.style.display = 'flex';
  }

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'underline' : 'none'
    }
  }

  return (
    <>
       <header className="fixed flex flex-row px-4 justify-between items-center">
          <div id="logo" className='rounded-full object-cover'>
            <img className='rounded-full' src={logo} alt="" />
          </div>
          <div className='xl:hidden 2xl:hidden' id="baricon">
            <FaBars id='bar-icon' size={40} onClick={showNav} />
          </div>
          <div className='hidden' id="sidebar">
            <Sidebar 
              icon={<AiFillCloseCircle size={40} onClick={closeSideBar} />} 
            />
          </div>
          <p className='hidden xl:flex'><NavLink style={navLinkStyles} to='/'>Home</NavLink></p>
          <div id="app-list" className='basis-4/5 hidden xl:flex'>
            <ul className='flex flex-row grow gap-x-5 justify-between'>
              <li><NavLink style={navLinkStyles} to='/quotes'>Quotes</NavLink></li>
              <li><NavLink style={navLinkStyles} to='/facts'>Facts</NavLink></li>
              <li><NavLink style={navLinkStyles} to='/geocoding'>Geocoding</NavLink></li>
              <li><NavLink style={navLinkStyles} to='/riddles'>Riddles</NavLink></li>
              <li><NavLink style={navLinkStyles} to='/trivia'>Trivia</NavLink></li>
              <li><NavLink style={navLinkStyles} to='/historical-events'>Historical Events</NavLink></li>
              <li><NavLink style={navLinkStyles} to='/historical-figures'>Historical Figures</NavLink></li>
              <li><NavLink style={navLinkStyles} to='/planets'>Planets</NavLink></li>
              <li><NavLink style={navLinkStyles} to='/thesaurus'>Thesaurus</NavLink></li>
            </ul>
          </div>
       </header>
    </>
  )
}

export default Header