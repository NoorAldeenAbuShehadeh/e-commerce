import { Button } from "@mui/material";
import ProductsSlider from "./products_slider";
import styles from "./index.module.css";
import SharedSubtitle from "../sharedSubtitle";
import ProductTitle from "../ProductTitle";
const BestProducts = () => {
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
      <ProductsSlider percentage={false} slides={4} />
    </div>
  );
};
export default BestProducts;
