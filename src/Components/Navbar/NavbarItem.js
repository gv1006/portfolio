import React from 'react';

export const NavbarItem = (props) => {
    return(
      <React.Fragment>
        <a href={props.navigateTo}>
          <p>{props.text}</p>
        </a>
      </React.Fragment>
    )
}