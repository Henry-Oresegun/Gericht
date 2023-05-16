import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper__img-reverse'>
      <img src={images.chef} alt="chef" />
   </div>

   <div className='app__wrapper_info'>
    <SubHeading title="Chef's word" />
    <h1 className='headtext__cormorant'> What We Believe In</h1>

    <div className='app__chef-content'>
      <div className='app__chef-content_quote'>
        <img src={images.quote} alt="quote" />
        <p className='p__opensans'>Proident anim excepteur qui nisi dolore do aliquip aute irure consequat. Labore aliqua dolor aute mollit ea tempor laborum velit magna eu in veniam eu minim. Id ex ipsum voluptate fugiat excepteur excepteur ea dolor magna enim culpa. Aliquip occaecat laboris voluptate eiusmod. Exercitation velit nisi velit exercitation laborum laboris culpa deserunt id labore et officia pariatur. Fugiat pariatur ullamco amet culpa ad exercitation adipisicing irure.</p>
      </div>
    </div>

    <div className='app__chef-sign'>
      <p>Peter Balogun</p>
      <p className='p__opensans'>Chef & Founder</p>
      <img src={images.sign} alt="sign_image" />
    </div>
   </div>
    
  </div>
);

export default Chef;
