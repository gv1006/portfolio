import React from 'react';
import Typed from 'react-typed';
const Main = (props) => {
  return(
    <header id="home">
       <section className="main">
        <h2 className="main-title center">Gowtham Venkatesh KR</h2>
        <p className="main-desc center">I am a <Typed
          strings={['Web Developer.', 'browser extension Developer.']}
          typeSpeed={60}
          backSpeed={45}
          loop/>
        </p>
      </section>
    </header>
  );
}

export default Main;