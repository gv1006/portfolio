import React, {useState} from 'react';
import { Switch, Route, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export const Navbar = (props) => {
  const [hamBurgerIconClicked, setHamburgerIconClicked] = useState(false);
  const navBarInfo = [
    {
      navigateTo: 'home',
      text: 'home'
    },
    {
      navigateTo: 'aboutme',
      text: 'about'
    },
    {
      navigateTo: "experience",
      text: 'education & experience'
    },
    {
      navigateTo: "contactme",
      text: 'contact me'
    }
  ];

  const _hamBurgerMenuClicked = (event) => {
    if(!event.isTrusted) {
      return;
    }
    setHamburgerIconClicked(hamBurgerIconClicked => !hamBurgerIconClicked);
  };

  const _navItemClicked = (event) => {
    if(!event.isTrusted) {
      return;
    }
    setHamburgerIconClicked(false);
  }

  const listItems = navBarInfo.map((navBarItem) =>{
    return (
      <li key={navBarItem.text}  className="navbar-list">
        <NavLink activeClassName="navitem-selected" to={navBarItem.navigateTo} onClick= {_navItemClicked}>{navBarItem.text}</NavLink>
      </li>
    );
  }
  );
  const navbarListClassList = ['nav-bar-list'];
  if(hamBurgerIconClicked) {
    navbarListClassList.push('nav-bar-list-active');
  } 
  let hamBurgerIcon = hamBurgerIconClicked ? faTimesCircle : faBars;
  return(
  <nav className="nav-bar">
    <NavLink to="" className="logo" onClick={_navItemClicked}>GV</NavLink>
    <ul className={navbarListClassList.join(' ')}>
      {listItems}
    </ul>
    <span className="hamburger-icon" onClick={_hamBurgerMenuClicked}>
      <FontAwesomeIcon className={props.className} icon={hamBurgerIcon}/>
    </span>
  </nav>
  );
} 