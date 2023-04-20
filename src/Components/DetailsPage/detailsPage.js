import { useParams } from "react-router";
import { useState, useEffect } from "react";
import RelatedItems from "../Products/relatedItems";
import SharedTitle from "../SharedTitle";
import axios from "axios";
import styles from "./index.module.css";
import ProductAttributes from "../ProductAttributes";

const baseURL = "https://fakestoreapi.com/products";
const DetailsPage = (props) => {
  const params = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      const data = response.data.filter((el) => el.id == params.id);
      setProduct(data[0]);
    });
  }, []);
  const textTitle = {
    color: "#000000",
    fontWeight: "400",

    marginRight: "1em",
    opacity: "0.5",
  };
  return (
    <div className={styles.content}>
      <div className={styles.detailsTitle}>
        <SharedTitle title={`Account `} sx={textTitle} />
        <SharedTitle title={` / `} sx={textTitle} />
        <SharedTitle title={`${product.category}`} sx={textTitle} />
        <SharedTitle title={` / `} sx={textTitle} />
        <SharedTitle title={`${product.title}`} />
      </div>
      <RelatedItems id={params.id} />
    </div>
  );
};
export default DetailsPage;
