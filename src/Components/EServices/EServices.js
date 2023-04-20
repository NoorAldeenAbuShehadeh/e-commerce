import React from 'react';
import { Card, CardMedia, CardContent, Typography ,Box} from '@mui/material';
import styles from './EServices.module.css';
import { images } from './data';
 
const EServices = () => {
    return (
      <div className={styles.container}>
        {images.map((image) => (

          <Card key={image.id} className={styles.card}  >
            <CardMedia
              className={styles.img}
              image={image.src}
              title={image.title}
            />
            <CardContent className={styles.descBox}>
              <Typography gutterBottom variant="h5" component="h2" className={styles.mainDesc}>
                {image.mainDescription}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={styles.secondaryDesc}>
                {image.secondaryDescription}
              </Typography>
            </CardContent>
          </Card>
    
        ))}
      </div>
    );
  };
  
  export default EServices;