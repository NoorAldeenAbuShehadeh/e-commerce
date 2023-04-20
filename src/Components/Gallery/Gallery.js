import React, { useState } from 'react';
import { Grid, Card, CardMedia } from '@mui/material';
import styles from './Gallery.module.css';
import Thumbnail from './Cards';

import sec1 from './img/sec1.png';
import sec2 from './img/sec2.png';
import sec3 from './img/sec3.png';
import sec4 from './img/sec4.png';

const IMAGES = [
  { id: 1, src: sec1 },
  { id: 2, src: sec2 },
  { id: 3, src: sec3 },
  { id: 4, src: sec4 },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(IMAGES[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <Grid container spacing={2} className={styles.grid}>
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
          />
        </Card>
      </Grid>
    </Grid>
  );
}

export default Gallery;
