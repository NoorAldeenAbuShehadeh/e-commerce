import { IconButton, Button } from "@mui/material";
import CategoryCard from "../CategoryCard";
import styles from "./index.module.css";
import { useState } from "react";
import SharedSubtitle from "../sharedSubtitle";
import ProductTitle from "../ProductTitle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const Categories = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const arrowBtn = {
    background: "#f5f5f5",
    color: "black",
    borderRadius: "23px",
    height: "46px",
    width: "46px",
  };
  return (
    <div className={styles.content}>
      <SharedSubtitle title={"Categories"} />
      <div className={styles.container}>
        <ProductTitle
          variant="h5"
          className={styles.products_title}
          title={"Browse By Category"}
        />

<div className={`${styles.controls}`}>
          <IconButton sx={arrowBtn} onClick={sliderRef?.slickPrev}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton sx={arrowBtn} onClick={sliderRef?.slickNext}>
            <ArrowForwardIcon />
          </IconButton>
        </div>
      </div>
  
    </div>
    
     
     
);};
export default Categories;
