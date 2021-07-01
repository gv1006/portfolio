import React from 'react';
import './Experience.css';

const BoxHOC = function(Comp) {
  return function(props) {
    return(
      <div className="box">
        <div className="cover-picture">
          <div className="overlay-c"></div>
        </div>
        <div className="box-body">
          <div className="box-title">
            <h6 className="box-category">{props.title}</h6>
            <div className="section-body">
            <Comp {...props}/>
            </div>
          </div>
        </div>
      </div>
    ) 
  }
}

const ExperienceSection = function(props) {
  return(
    <>
      <p className="title">Senior Software Engineer - NortonLifeLock</p>
      <p className="desc">Chennai, India</p>
      <p className="desc"> Worked in products called Norton safe web and Norton safe search - Browser extensions available for chrome, firefox, edge and Safari browsers.  Did front end UI activities with react js and implemented business logic of product with vanilla JS.</p>
      <p className="desc">Part of the team developing a high revenue generating feature in norton antivirus product.</p>
      <p className="title blue">Accomplishments</p>
      <ul>
        <li>Results/Progress Beyond Expectations - May 2019</li>
        <li>Winning thru Focused & Collaborative Teams - Mar 2019</li>
        <li>Results/Progress Beyond Expectations - Feb 2018</li>
        <li>Winning thru Focused & Collaborative Teams - Oct 2017</li>
      </ul>
    </>
  )
}

const EducationSection = function(props) {
  return(
    <>
      <p className="title">BE - Computer Science and Engineering - 2015</p>
      <p className="desc">CEG - Anna University, Chennai</p>
      <p className="title blue"> Certifications</p>
      <p className="title"> React - The Complete Guide</p>
      <p className="desc">Udemy - April 2020</p>
      <p className="title">Modern HTML & CSS from the beginning</p>
      <p className="desc">Udemy - June 2020</p>
      <p className="title">Responsive Web Design</p>
      <p className="desc">FreeCodeCamp - August 2020</p>
      <p className="title">Javascript Algorithm and Data structure Masterclass</p>
      <p className="desc">FreeCodeCamp - Feb 2021</p>
    </>
  )
}

const ExperienceSectionWrapped = BoxHOC(ExperienceSection);
const EducationSectionWrapped = BoxHOC(EducationSection);

const Experience = function() {
  return(
    <section id="experience">
      <h2 className=" text-box text-center">Education & Experience</h2>
      <div className="experience-container">
        <section className="education">
          <EducationSectionWrapped title="education"/>
        </section>
        <section className="experience">
          <ExperienceSectionWrapped title="experience"/>
        </section>
      </div>
    </section>
  );
}

export default Experience;