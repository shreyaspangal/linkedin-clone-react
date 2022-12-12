import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
// ICONS
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';

const Header = () => {
  return (
    <div className='header'>
      <div className="header__left">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder='search' />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My networks" Icon={PeopleAltIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Messaging" Icon={MessageRoundedIcon} />
        <HeaderOption title="Notifications" Icon={NotificationsRoundedIcon} />
        <HeaderOption title="Shreyas" avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDzbt50KeFVmvrPK2X34uWqGnEv9SsHqlULReqk7D&s'} />
      </div>
    </div>
  )
}

export default Header;