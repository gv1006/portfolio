import React from 'react';
import { SocialMediaSection } from '../Common/SocialMediaSection/SocialMediaSection';

export const TextSection = (props) => {
  return(
    <div className="text-section">
      <h2>say hello!</h2>
      <p className="contact-me-desc">Feel free to get in touch with me.
I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
      <div className="text-sub-section">
        <div>
          <h3 className="need-help-h">need help ?</h3>
          <p>gowthamvenkatesh.gv@gmail.com</p>
        </div>
        <div>
          <h3>feel like talking ?</h3>
          <p>+91 9952915205</p>
        </div>
        <div className="text-subsection-icon">
          <h3>Find me at</h3>
          <span><SocialMediaSection /></span>
        </div>
      </div>
    </div>
  );
}