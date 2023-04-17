import styles from "./index.module.css";
import { useState } from "react";
import { IconButton, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductTitle from "../ProductTitle";
import ProductsSlider from "./products_slider";
import SharedSubtitle from "../sharedSubtitle";

const NewProducts = () => {
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
      <SharedSubtitle title={"Our Product's"} />
      <div className={styles.container}>
        <ProductTitle
          variant="h5"
          className={styles.products_title}
          title={"Explore Our Products"}
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
      <ProductsSlider
        percentage={false}
        rows={2}
        slides={4}
        new={true}
        setSliderRef={setSliderRef}
      />
      <div className={styles.center_container}>
        <Button
          variant="contained"
          className={styles.view_all}
          sx={{
            backgroundColor: "#DB4444",
            textTransform: "capitalize",
          }}
        >
          View All Products
        </Button>
      </div>
    </div>
  );
};
export default NewProducts;
