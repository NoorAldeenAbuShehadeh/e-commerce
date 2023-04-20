import React from 'react'
import SharedSubtitle from '../sharedSubtitle';
import SharedTitle from '../SharedTitle';
import ImageGrid from './ImageGrid';
import styles from './ImageGrid.module.css';

const FeaturedSection = () => {
  return (
    <div className={styles.content}>
        <SharedSubtitle title={"Featured"} />
        <SharedTitle variant="h5" className={styles.products_title} title={"New Arrival"} />
        <div className={styles.container}>
            <ImageGrid />
        </div>
    </div>
  )
}

export default FeaturedSection