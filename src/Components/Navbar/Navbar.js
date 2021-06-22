import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import { NavbarItem } from './NavbarItem';

export const Navbar = (props) => {
  const navBarInfo = [
    {
      navigateTo: '#aboutme',
      text: 'about me',
      icon: faUser
    },
    {
      navigateTo: "",
      text: 'skills',
      icon: faLaptopCode
    },
    {
      navigateTo: "",
      text: 'experience',
      icon: faBriefcase
    },
    {
      navigateTo: "#contactme",
      text: 'contact me',
      icon: faPhone
    }
  ];
  const listItems = navBarInfo.map((navBarItem) =>
    <li key={navBarItem.text}  className="navbar-list">
      <NavbarItem 
        text={navBarItem.text} 
        icon ={navBarItem.icon}
        navigateTo = {navBarItem.navigateTo}
      />
    </li>
  );
  return(
  <nav className="nav-bar">
    <ul>
      {listItems}
    </ul>
  </nav>
  );
} 