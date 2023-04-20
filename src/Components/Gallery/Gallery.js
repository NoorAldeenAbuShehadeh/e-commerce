import React, { useState } from 'react';
import { Grid, Card, CardMedia } from '@mui/material';
import styles from './Gallery.module.css';
import Thumbnail from './Cards';

import sec1 from './img/sec1.png';
import sec2 from './img/sec2.png';
import sec3 from './img/sec3.png';
import sec4 from './img/sec4.png';


function Gallery({Image}) {
  const IMAGES = [
    { id: 1, src: Image },
    { id: 2, src: Image },
    { id: 3, src: Image },
    { id: 4, src: Image },
  ];
  const [selectedImage, setSelectedImage] = useState(IMAGES[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <Grid container spacing={2} className={styles.grid} >
      <Grid item xs={12} sm={4}>
        {IMAGES.map((image) => (
          <Thumbnail
            key={image.id}
            image={image}
            isSelected={selectedImage.id === image.id}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </Grid>
      <Grid item xs={12} sm={8}>
        <Card className={styles.mainThumbnail}>
          <CardMedia
            component="img"
            src={selectedImage.src}
            alt={`Image ${selectedImage.id}`}
            className={styles.mainImage}
            sx={{objectFit: 'contain'}}
          />
        </Card>
      </Grid>
    </Grid>
  );
}

export default Gallery;
