import React from 'react'
import SharedSubtitle from '../sharedSubtitle';
import ProductTitle from '../ProductTitle';
import ImageGrid from './ImageGrid';
import styles from './ImageGrid.module.css';

const FeaturedSection = () => {
  return (
    <div className={styles.content}>
        <SharedSubtitle title={"Featured"} />
        <ProductTitle variant="h5" className={styles.products_title} title={"New Arrival"} />
        <div className={styles.container}>
            <ImageGrid />
        </div>
    </div>
  )
}

export default FeaturedSection