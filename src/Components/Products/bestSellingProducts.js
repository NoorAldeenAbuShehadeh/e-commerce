import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import ProductsSlider from "./products_slider";
import styles from "./index.module.css";
import SharedSubtitle from "../sharedSubtitle";
import ProductTitle from "../ProductTitle";
import axios from "axios";
const baseURL = "https://fakestoreapi.com/products";
const BestProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className={styles.content}>
      <SharedSubtitle title={"This Month"} />
      <div className={styles.container}>
        <ProductTitle
          variant="h5"
          className={styles.products_title}
          title={"Best Selling Products"}
        />

        <Button
          variant="contained"
          className={styles.view_all}
          sx={{
            backgroundColor: "#DB4444",
            textTransform: "capitalize",
            width: "159px",
          }}
        >
          View All
        </Button>
      </div>
      <ProductsSlider percentage={false} slides={4} products={products} />
    </div>
  );
};
export default BestProducts;
