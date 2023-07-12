import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='g letter' />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans'>Welcome to Gericht, where hard work, passion, and uncompromising quality have paved the way to our undeniable success. We believe that good food speaks volumes, especially when paired with a warm and inviting atmosphere and friendly faces.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='about_knife'/>
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans'>We reinvent the neighborhood dining, combining timeless inspiration from classic Americana with inventive and playful modern flair. With influences ranging from the 1930s diner to the elegant railway dining cars of days past, you'll find a nostalgic collection of comforts, classics and curiosities with a modern twist.</p>
        <button type='button' className='custom__button'>Find Out More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
