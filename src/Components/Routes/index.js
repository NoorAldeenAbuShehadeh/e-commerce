import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from "../DetailsPage/detailsPage";
import HomePage from '../HomePage'
import MainPage from '../MainPage'
import NotFoundPage from "../NotFoundPage";
import AboutMe from "../AboutMePage";
const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/Details/:id" element={<DetailsPage />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="*" element={<NotFoundPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
