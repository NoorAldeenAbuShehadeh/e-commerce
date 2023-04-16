import axios from "axios";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import Product from "../Product";
const baseURL = "https://fakestoreapi.com/products";

const ProductsSlider = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProducts(response.data);
    });
  }, []);

  const sliderSettings = {
    arrows: false,
    slidesToShow: props.slides ? props.slides : 4.5,
    slidesToScroll: 1,
    infinite: false,
    rows: props.rows ? props.rows : 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <Slider
      ref={props?.setSliderRef}
      {...sliderSettings}
      className={styles.slider}
    >
      {products.map((product) => (
        <Product
          key={product.id}
          percentage={props?.percentage}
          new={props?.new}
          {...product}
          className={styles.slide}
        />
      ))}
    </Slider>
  );
};
export default ProductsSlider;
