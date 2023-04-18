

import React from 'react';
import style from './Slider.module.css';
import Carousel from 'react-material-ui-carousel';
import Box from '@mui/material/Box';
import { slides } from './data';

const Slider = () => {
  return (
    <Box className={style.root}>
      <Carousel
        className={style.carousel}
        showArrows={false}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        swipeable
        infiniteLoop
        emulateTouch
      >
        {slides.map((slide) => (
          <Box key={slide.id} className={style.slideContainer}>
            <img className={style.slideImage} src={slide.image} alt={slide.description} />
            <Box className={style.slideContent}>
              <img className={style.slideTitle} src={slide.tag} />
              <div className={style.slideDescription}>{slide.description}</div>
              <a className={style.buyButton} href='#'>Shop Now</a>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Slider;
