import { useParams } from "react-router";
import { useState, useEffect } from "react";
import RelatedItems from "../Products/relatedItems";
import SharedTitle from "../SharedTitle";
import axios from "axios";
import styles from "./index.module.css";
import ProductAttributes from "../ProductAttributes";
import PathActive from '../PathActive'
import { Box } from "@mui/material";
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

  if(!product) return <></>
  return (
    <div className={styles.content}>
      <Box>
        <PathActive category={product.category} title={product.title}/>
      </Box>
      <ProductAttributes Product={product}/>
      <RelatedItems product={params.id} />

    </div>
  );
};
export default DetailsPage;
