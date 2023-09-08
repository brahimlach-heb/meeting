import React, { Children } from 'react'
import {
    FaTh, FaHistory, FaUserFriends, FaSignOutAlt,FaBars
} from 'react-icons/fa';
import {AiOutlineSchedule} from 'react-icons/ai';
import { IoMdSettings } from 'react-icons/io';
import {BsFillChatLeftTextFill} from 'react-icons/bs';

import { NavLink } from 'react-router-dom';
import "./Sidebar.css"
import {useNavigate} from 'react-router-dom';

function Sidebar({Children}){
    const navigate = useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('/');
    }
    const menuItem=[
        {
            path:"/home",
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
            icon:<AiOutlineSchedule/>    
        },
        {
            path:"/Chat",
            name:"Chat",
            icon:<BsFillChatLeftTextFill/>
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
      }

            <NavLink onClick={logout} to='/'  className='link' activeClassName='active'exact>
                <div className='icon'><FaSignOutAlt/>  </div>
                <div className='link_text'>Sign Out</div>
            </NavLink>


      <main className='mainS'>{Children}</main>
    </div>       
    )
}
export default Sidebar
