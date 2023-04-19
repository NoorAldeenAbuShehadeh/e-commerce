import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Header from "../Header";
import Navigation from "../Navigation";
import Footer from "../Footer";
import Products from "../Products";
import CatProduct from "../CatProduct";
import Slider from "../Slider/Slider.js";
import { Divider } from "@mui/material";
import BestProducts from "../Products/bestSellingProducts";
import NewProducts from "../Products/exploreNewProducts";
import RelatedItems from "../Products/relatedItems";
import DetailsPage from "../DetailsPage/detailsPage";
const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Navigation />
              <Outlet />
              <Footer />
            </>
          }
        >
          {/*--------------------------------- Home page --------------------------------------*/}
          <Route
            path="/"
            element={
              <>
                <Slider />
                <Products />
                <Divider variant="middle" />
                <BestProducts />
                <Divider variant="middle" />
                <NewProducts />
                <CatProduct />
              </>
            }
          />
          <Route path="/Details/:product" element={<DetailsPage />} />
          {/*-------------------------------- End home page ----------------------------------*/}

          {/* <Route path="*" element={<h1>404 Not Found</h1>}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
