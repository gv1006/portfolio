import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NavbarItem = (props) => {
    return(
      <React.Fragment>
        <a href={props.navigateTo}>
          <FontAwesomeIcon icon={props.icon}/> 
          <p>{props.text}</p>
        </a>
      </React.Fragment>
    )
}