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
  const [selected, setSelected] = useState(null);
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

  if(!selected) return <></>
  return (
    <div className={styles.content}>
      <Box>
        <PathActive category={selected.category} title={selected.title}/>
      </Box>
      <ProductAttributes Product={selected}/>
      <RelatedItems product={params.id} />

    </div>
  );
};
export default DetailsPage;
