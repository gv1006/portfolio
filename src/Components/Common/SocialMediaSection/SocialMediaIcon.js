import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SocialMediaIcon = (props) => {
  console.log(props);
  return(
    <a href={props.link} target="_blank" aria-label={props.label}>
        <FontAwesomeIcon className={props.className} icon={props.icon}/> 
    </a>
  );
};