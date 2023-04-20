import Grid from '@mui/material/Grid';
import styles from './ImageGrid.module.css';
import React from 'react';
import { images } from './data';
import Grids from './Grids/Grids';


const ImageGrid = () => {
    const renderImageGrid = () => {
        return (
          <>
          
            <Grid item xs={8} className={styles.left}>
                <Grids  myImage= {images[0].src} id={images[0].id} imageClass={styles.image1} boxClass={styles.box1} name={images[0].title} desc={images[0].desc} buttonClass={styles.buyButton} nameClass={styles.productName1} descClass={styles.productDescription1} />
            </Grid>
            <Grid item container xs={4} direction="column" className={styles.right}>
                <Grid item xs={8} direction="row" className={styles.rightTop}>
                    <Grids  myImage= {images[1].src} id={images[1].id} imageClass={styles.image2} boxClass={styles.box2} name={images[1].title} desc={images[1].desc} buttonClass={styles.buyButton} nameClass={styles.productName2} descClass={styles.productDescription2} />
                </Grid>
                <Grid item xs className={styles.rightBottom}>
                    <Grid item xs className={styles.rightBottomLeft}>
                        <Grids  myImage= {images[2].src} id={images[2].id} imageClass={styles.image3} boxClass={styles.box3} name={images[2].title} desc={images[2].desc} buttonClass={styles.buyButton} nameClass={styles.productName3} descClass={styles.productDescription3} />
                    </Grid>
                    <Grid item xs className={styles.rightBottomRight}>
                        <Grids  myImage= {images[3].src} id={images[3].id} imageClass={styles.image4} boxClass={styles.box4} name={images[3].title} desc={images[3].desc} buttonClass={styles.buyButton} nameClass={styles.productName4} descClass={styles.productDescription4} />    
                    </Grid>
                </Grid>              
            </Grid>
          </>
        );
      };
      

  return (
    <Grid container spacing={1} className={styles.gridContainer}>
      {renderImageGrid()}
    </Grid>
  );
};

export default ImageGrid;
