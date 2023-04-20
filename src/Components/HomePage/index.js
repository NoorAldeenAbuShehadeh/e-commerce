import React from "react";
import Products from "../Products";
import CatProduct from "../CatProduct";
import Slider from "../Slider/Slider.js";
import { Box, Container, Divider } from "@mui/material";
import BestProducts from "../Products/bestSellingProducts";
import NewProducts from "../Products/exploreNewProducts";
import EServices from "../EServices/EServices";
import ImageGrid from "../ImageGrid/ImageGrid";
import MenuList from "../MenuList";
const HomePage = () => {
  return (
    <Box>
      <Container sx={{ display: "flex", width: "100%" }}>
        <MenuList
          li={[
            "Woman's Fashion",
            "Men's Fashion",
            "Electronics",
            "Home & Lifestyle",
            "Medicine",
            "Sports & Outdoor",
            "Baby's & Toys",
            "Groceries & Pets",
            "Health & Beauty",
          ]}
        />
        <Slider />
      </Container>

      <Products />
      <Divider variant="middle" />
      <BestProducts />
      <Divider variant="middle" />
      <NewProducts />
      <CatProduct />
      <ImageGrid />
      <EServices />
    </Box>
  );
};

export default HomePage;
