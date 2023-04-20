import Grid from '@mui/material/Grid';
import styles from './ImageGrid.module.css';
import React from 'react';
import { images } from './data';
import Grids from './Grids/Grids';
//import { makeStyles } from '@material-ui/styles';


const ImageGrid = () => {
    const renderImageGrid = () => {
     
        return (
          <>
            <Grid item className={`${styles.left} `}>
                <Grids  myImage= {images[0].src} id={images[0].id} imageClass={styles.mainImage} boxClass={styles.mainBox} name={images[0].title} desc={images[0].desc} buttonClass={styles.buyButton} nameClass={styles.mainProductName} descClass={styles.mainProductDescription} />
            </Grid>
            <Grid item container xs={4} direction="column" className={styles.right}>
                <Grid item  direction="row" className={styles.rightTop}>
                    <Grids  myImage= {images[1].src} id={images[1].id} imageClass={styles.secondaryImage} boxClass={styles.secondaryBox} name={images[1].title} desc={images[1].desc} buttonClass={styles.buyButton} nameClass={styles.secondaryProductName} descClass={styles.secondaryProductDescription} />
                </Grid>
                <Grid item xs className={styles.rightBottom}>
                    <Grid item xs className={styles.rightBottomLeft}>
                        <Grids  myImage= {images[2].src} id={images[2].id} imageClass={styles.leftSmallImage} boxClass={styles.leftSmallBox} name={images[2].title} desc={images[2].desc} buttonClass={styles.buyButton} nameClass={styles.leftSmallProductName} descClass={styles.leftProductDescription} />
                    </Grid>
                    <Grid item xs className={styles.rightBottomRight}>
                        <Grids  myImage= {images[3].src} id={images[3].id} imageClass={styles.rightSmallImage} boxClass={styles.rightSmallBox} name={images[3].title} desc={images[3].desc} buttonClass={styles.buyButton} nameClass={styles.rightSmallProductName} descClass={styles.rightProductDescription} />    
                    </Grid>
                </Grid>              
            </Grid>
          </>
        );
      };
      

  return (
    <Grid container classes={{ root: {} }} spacing={1} className={styles.gridContainer}>
      {renderImageGrid()}
    </Grid>
  );
};

export default ImageGrid;
