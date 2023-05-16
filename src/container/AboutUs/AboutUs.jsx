import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='g letter'/>
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About us</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans'> Ad ullamco minim ipsum do exercitation elit labore consequat aliqua nulla excepteur. Aliquip ad consequat velit cupidatat eu voluptate est proident laboris proident aliqua duis. Nulla Lorem qui ad quis excepteur ut tempor est dolore. Veniam eiusmod esse ut deserunt cillum duis eu non adipisicing esse. Esse eiusmod enim duis amet qui non est do fugiat in ex.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'/>
      <img src={images.knife} alt='about__knife'/>
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans'> Ad ullamco minim ipsum do exercitation elit labore consequat aliqua nulla excepteur. Aliquip ad consequat velit cupidatat eu voluptate est proident laboris proident aliqua duis. Nulla Lorem qui ad quis excepteur ut tempor est dolore. Veniam eiusmod esse ut deserunt cillum duis eu non adipisicing esse. Esse eiusmod enim duis amet qui non est do fugiat in ex.</p>
        <button type='button' className='custom__button' >Know More</button>
      </div>
  </div>
  </div>
  
);

export default AboutUs;
