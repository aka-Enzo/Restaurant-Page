import React from 'react';

import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';


const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header-h1'>The Key To Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0'}}>We serve food that reflects a longstanding commitment to local agriculture and sustainability. Our menu celebrates our relationships with area farmers, tradition-based artisans, agricultural-based Italian importers, and winemakers.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>     

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img'/>
    </div>
  
  </div>
);

export default Header;
