import React, { useState } from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { Link } from 'react-router-dom';

function Header() {
  const [inputSearch, setinputSearch]=useState("");
  return (
    <div className="header">
        <div className="header_left">
        <MenuIcon/>
        <Link to="/">
        <img className="header_logo" 
        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="" />
        </Link>
        </div>
        
        <div className="header_center">
        <input onChange={e=>setinputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
        <Link to={`/search/${inputSearch}`}>
        <SearchIcon className="header_centerButton"/>
        </Link>
       
        </div>
        
        <div className="header_icon">
        <VideoCallIcon className='header__icons'/>
        <AppsIcon className='header__icons'/>
        <NotificationsIcon className='header__icons'/>
        <AccountCircleSharpIcon className='header__icons'/>
        </div>
    </div>
  )
}

export default Header
