import React from 'react';
import { TextSection } from './TextSection';
import { FormSection } from './FormSection';
import './ContactMe.css';
export const ContactMe = (props) => {
  return(
    <section id="contactme">
      <TextSection />
      <FormSection />
    </section>
  )
};