import React from 'react';
import { PhotoCard } from './PhotoCard';

const AboutMe = (props) => {
    return(
        <section id="aboutme">
            <PhotoCard />
            <div className="text-section">
                <h2 style={{margin: "0px", marginBottom: "20px"}}>About Me.</h2>
                <p>Experienced Software Engineer with a demonstrated history of working in the computer software industry. Skilled in JavaScript, React js, HTML and CSS. Strong engineering professional with a Bachelor of Engineering (BE) focused in Computer Science from College of Engineering, Guindy.</p>
                <br/>
                <p>Expert in developing web applications and browser extensions as cross browser and cross platform. I am truly passionate about my work and always eager to connect with like minded people.</p>
            </div>
        </section>
    )
};

export default AboutMe;