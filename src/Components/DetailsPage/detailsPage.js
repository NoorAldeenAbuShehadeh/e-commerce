import { useParams } from "react-router";
import { useState, useEffect } from "react";
import RelatedItems from "../Products/relatedItems";
import ProductTitle from "../ProductTitle";
import axios from "axios";
import styles from "./index.module.css";
import ProductAttributes from "../ProductAttributes";

const baseURL = "https://fakestoreapi.com/products";
const DetailsPage = (props) => {
  const params = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      const data = response.data.filter((el) => el.title == params.product);
      console.log(data);

      setProduct(data[0].category);
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
        <ProductTitle title={`Account `} sx={textTitle} />
        <ProductTitle title={` / `} sx={textTitle} />
        <ProductTitle title={`${product}`} sx={textTitle} />
        <ProductTitle title={` / `} sx={textTitle} />
        <ProductTitle title={`${params.product}`} />
      </div>
      <ProductAttributes
        title={"Havic HV G-92 Gamepad"}
        rate={3}
        price={55}
        details={
          "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
        }
      />
      <RelatedItems product={params.product} />
    </div>
  );
};
export default DetailsPage;
