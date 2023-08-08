import React, { Children } from 'react'
import {
    FaTh, FaHistory, FaUserFriends, FaSignOutAlt,FaBars
} from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';

import { NavLink } from 'react-router-dom';
import "./Sidebar.css"

function Sidebar({Children}){
    const menuItem=[
        {
            path:"/",
            name:"Meetings",
            icon:<FaTh/>
        },
        {
            path:"/History",
            name:"History",
            icon:<FaHistory/> 
        },
        {
            path:"/Schedule",
            name:"Schedule",
            icon:<FaUserFriends/>    
        },
        {
            path:"/Setting",
            name:"Setting",
            icon:<IoMdSettings/>
        },
        {
            path:"/Sign Out",
            name:"Sign Out",
            icon:<FaSignOutAlt/>    
        }
    ]
    return(
        <div className='sidebar'>
      <div className='top_section'></div>
      {menuItem.map((item, index) => (
        <NavLink to={item.path} key={index} className='link' activeClassName='active'exact>
          <div className='icon'>{item.icon}</div>
          <div className='link_text'>{item.name}</div>
        </NavLink>
      ))
      }<main>{Children}</main>
    </div>       
    )
}
export default Sidebar