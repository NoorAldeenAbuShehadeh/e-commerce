import React from "react";
import Slider from "react-slick";
import styles from "./index.module.css";
import CategoryCard from "../CategoryCard";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MonitorIcon from "@mui/icons-material/Monitor";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import Categories from "./Categories";

const CategryIcon = [
  { icon: <PhoneAndroidIcon />, name: "Phones"},
  { icon: <MonitorIcon/>, name: "Computers"},
  { icon: <WatchOutlinedIcon />, name: "SmartWatch"},
  { icon: <CameraAltOutlinedIcon />, name: "Camera"},
  { icon: <HeadphonesOutlinedIcon />, name: "HeadPhones"},
  { icon: <VideogameAssetOutlinedIcon />, name: "Gaming"},
];


const CategorySlider = (props) => {
  
  const sliderSettings = {
    arrows: false,
    slidesToShow: props.slides ? props.slides : 6,
    slidesToScroll: 1,
    infinite: false,
    rows: props.rows ? props.rows : 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  };
  return (
    <>
   
    <Slider
      {...sliderSettings}
      className={styles.slider}
     
    >

      {CategryIcon.map((item, index) => (
        <CategoryCard  percentage={false} slides={6} title={item.name} key={index} icon={React.cloneElement(item.icon, {
          style: { fontSize: "inherit" },
        })}>

        </CategoryCard>

      ))}
    </Slider>
    </>

    );
  };
  

export default CategorySlider;
