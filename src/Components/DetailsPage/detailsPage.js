import { useParams } from "react-router";
import { useState, useEffect } from "react";
import RelatedItems from "../Products/relatedItems";
import SharedTitle from "../SharedTitle";
import axios from "axios";
import styles from "./index.module.css";
import ProductAttributes from "../ProductAttributes";
import PathActive from "../PathActive";
import Gallery from "../Gallery/Gallery";
import { Box, Container } from "@mui/material";
const baseURL = "https://fakestoreapi.com/products";
const DetailsPage = (props) => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      const data = response.data.filter((el) => el.id == params.id);
      setProduct(data[0]);
    });
  }, []);

  if (!product) return <></>;
  console.log(product)
  return (
    <Container className={styles.content}>
      <Box sx={{margin:'30px 0px'  }}>
        <PathActive category={product.category} title={product.title} />
      </Box>
      <Box sx={{ display: "flex",flexDirection:{xs:'column',md:'row'} }}>
        <Gallery Image={product.image}/>
        <ProductAttributes Product={product} />
      </Box>
      <RelatedItems id={params.id} />
    </Container>
  );
};
export default DetailsPage;
