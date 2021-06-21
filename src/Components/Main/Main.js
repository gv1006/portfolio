import React from 'react';
import Typed from 'react-typed';

export const Main = (props) => {
  return(
    <header>
       <section className="main">
          <h2 className="main-title center">Gowtham Venkatesh KR</h2>
          <p className="main-desc center">I am a <Typed
            strings={['Web Developer.', 'Chrome extension Developer.']}
            typeSpeed={60}
            backSpeed={45}
            loop/>
          </p>
          <a className="main-button center">Download Resume</a>
      </section>
    </header>
  );
}