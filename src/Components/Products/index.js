import styles from "./index.module.css";
import { useState, useEffect } from "react";
import { IconButton, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SharedTitle from "../SharedTitle";
import ProductsSlider from "./products_slider";
import DateTimeContainer from "./DateTime";
import SharedSubtitle from "../sharedSubtitle";
import axios from "axios";
const baseURL = "https://fakestoreapi.com/products";

const Products = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProducts(response.data);
    });
  }, []);
  const arrowBtn = {
    background: "#f5f5f5",
    color: "black",
    borderRadius: "23px",
    height: "46px",
    width: "46px",
  };

  return (
    <div className={styles.content}>
      <SharedSubtitle title={"Today's"} />
      <div className={styles.container}>
        <SharedTitle
          variant="h5"
          className={styles.products_title}
          title={"Flash Sales"}
        />
        <div className={styles.dateTimeBlock}>
          <DateTimeContainer number={"03"} type={"Days"} />
          <p className={styles.separator}>:</p>
          <DateTimeContainer number={"23"} type={"Hours"} />
          <p className={styles.separator}>:</p>
          <DateTimeContainer number={"19"} type={"Minutes"} />
          <p className={styles.separator}>:</p>
          <DateTimeContainer number={"56"} type={"Seconds"} />
        </div>

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
        percentage={true}
        setSliderRef={setSliderRef}
        products={products}
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
export default Products;
