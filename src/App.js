import * as React from "react";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Slider from "./Components/Slider/Slider";
import CatProduct from "./Components/CatProduct";
import Products from "./Components/Products";
import { Divider } from "@mui/material";
import BestProducts from "./Components/Products/bestSellingProducts";
import NewProducts from "./Components/Products/exploreNewProducts";
export default function BasicButtons() {
  return (
    <div>
      <Header />
      <Navigation />
      <Slider />
      <Products />
      <Divider variant="middle" />
      <BestProducts/>
      <Divider variant="middle" />
      <NewProducts/>
      <CatProduct />
    </div>
  );
}
