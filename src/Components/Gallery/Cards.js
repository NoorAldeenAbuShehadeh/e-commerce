import React from 'react';
import { Card, CardMedia } from '@mui/material';
import styles from './Gallery.module.css';

function Thumbnail({ image, isSelected, onClick }) {
  return (
    <Card
      onClick={onClick}
      className={isSelected ? styles.selectedThumbnail : styles.thumbnail}
    >
      <CardMedia
        component="img"
        src={image.src}
        alt={`Image ${image.id}`}
        className={styles.thumbnailImage}
        sx={{objectFit: 'contain'}}
      />
    </Card>
  );
}

export default Thumbnail;
