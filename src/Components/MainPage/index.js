import React from 'react'
import Header from "../Header";
import Navigation from "../Navigation";
import Footer from "../Footer";
import  {Outlet} from "react-router-dom";
const MainPage = () => {
  return (
    <>
    <Header />
    <Navigation />
    <Outlet />
    <Footer />
  </>
  )
}

export default MainPage