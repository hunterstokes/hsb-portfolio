import React from 'react'


export const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth"});
  };

  
  return (
    <div className='navbar'>
        <a className='navbar__home' onClick={() => scrollToSection('landing')}>HSB</a>
        <ul className='navbar__buttons'>
          <li >
  
            <a className='about__button' onClick={() => scrollToSection('about')}>
            About</a>
          </li>
          <li>
            <a className='skills__button' onClick={() => scrollToSection('skills')}>Skills</a>
          </li>
          <li>
            <a className='projects__button' onClick={() => scrollToSection('projects')}>Projects</a>
          </li>
          <li>
            <a className='contact__button' onClick={() => scrollToSection('contact')}>Contact</a>
          </li>
        </ul>
    </div>
  )
}
