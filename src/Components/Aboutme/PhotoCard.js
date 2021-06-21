import React from 'react';
import { SocialMediaSection } from '../Common/SocialMediaSection/SocialMediaSection';
import myIcon from '../../images/myIcon.jpg';

export const PhotoCard = (props) => {
  return(
    <div className="photo-card">
      <img src={myIcon} alt="Profile Picture"/>
      <SocialMediaSection />
    </div>
  );
}