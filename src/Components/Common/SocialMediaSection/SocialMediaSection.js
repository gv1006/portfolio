import React from 'react';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

import { SocialMediaIcon } from './SocialMediaIcon';

export const SocialMediaSection = (props) => {
  const socialMediaSectionInfo = [
    {
      link: "https://www.linkedin.com/in/gowtham-venkatesh-kr-106a9b5a/",
      label: "linkedin button",
      className: "linkedin-icon",
      icon: faLinkedin
    },
    {
      link: "https://github.com/gv1006",
      label: "github button",
      className: "github-icon",
      icon: faGithubSquare
    },
    {
      link: "mailto:gowthamvenkatesh.gv@gmail.com",
      label: "mailto button",
      className: "mailto-icon",
      icon: faEnvelope
    },
    {
      link: "https://twitter.com/gowtham_gv",
      label: "twitter button",
      className: "twitter-icon",
      icon: faTwitterSquare
    },
  ];
  const socialMediaItems = socialMediaSectionInfo.map(socialMediaItem => {
    return(
      <SocialMediaIcon 
        key={socialMediaItem.label}
        link={socialMediaItem.link}
        label={socialMediaItem.label}
        className={socialMediaItem.className}
        icon={socialMediaItem.icon}
      />
    )
  });
  return(
    <div className="social-media">
      { socialMediaItems }
    </div>
  );
};