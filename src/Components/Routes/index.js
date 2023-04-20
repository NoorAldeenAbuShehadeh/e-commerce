import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import DetailsPage from "../DetailsPage/detailsPage";
import HomePage from '../HomePage'
import MainPage from '../MainPage'
const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}>
          <Route path="/" element={<HomePage/>} />
          <Route path="/Details/:id" element={<DetailsPage />} />
          {/* <Route path="*" element={<h1>404 Not Found</h1>}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
