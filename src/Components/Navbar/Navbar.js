import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const NavbarItems = (props) => {
  return(
    <React.Fragment>
      <a href="">
        <FontAwesomeIcon icon={props.icon}/> 
        <p>{props.text}</p>
      </a>
    </React.Fragment>
  )
}

export const Navbar = (props) => {
  const navBarInfo = [
    {
      text: 'about me',
      icon: faUser
    },
    {
      text: 'skills',
      icon: faLaptopCode
    },
    {
      text: 'experience',
      icon: faBriefcase
    },
    {
      text: 'contact me',
      icon: faPhone
    }
  ];
  const listItems = navBarInfo.map((navBarItem) =>
    <li className="navbar-list">
      <NavbarItems 
        key={navBarItem.text} 
        text={navBarItem.text} 
        icon ={navBarItem.icon}
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