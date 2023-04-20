import styles from "./index.module.css";
import { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductsSlider from "./products_slider";
import SharedSubtitle from "../sharedSubtitle";
import axios from "axios";
const baseURL = "https://fakestoreapi.com/products";
const RelatedItems = (props) => {
  const [sliderRef, setSliderRef] = useState(null);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      const data = response.data.filter((el) => el.id == props.id);
      setProducts(
        response.data.filter((el) => data[0].category == el.category)
      );
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
      <SharedSubtitle title={"Related Item"} />
      <div className={`${styles.controls}`}>
        <IconButton sx={arrowBtn} onClick={sliderRef?.slickPrev}>
          <ArrowBackIcon />
        </IconButton>
        <IconButton sx={arrowBtn} onClick={sliderRef?.slickNext}>
          <ArrowForwardIcon />
        </IconButton>
      </div>
      <ProductsSlider
        percentage={true}
        rows={1}
        slides={4}
        new={false}
        products={products}
        setSliderRef={setSliderRef}
      />
    </div>
  );
};
export default RelatedItems;
