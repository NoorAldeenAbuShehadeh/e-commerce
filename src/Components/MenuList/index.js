import React, { useState } from "react";
import  Style from './Style.module.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box } from "@mui/material";

const MenuList = ({ li }) => {
  const [window] = useState(false);


  return (
    <Box className= {Style.navbarmenu} sx={{width: window === false ? 250 : 60,display:{xs:'none',md:'block'}}}>
     
      <ul className={Style.navbar__list}>
        {li.map((item, i) => (
          <div className="Style.navbar__li-box" key={i}>
          
            <li
              className={Style.navbar__li}
              style={{ display: window === false ? "inline-block" : "none" }}
            >
            
              {item} 
              <div className={Style.icon_}> 
              {i===0  && <ChevronRightIcon/> }
             
              {i===1 && <ChevronRightIcon/>}
              </div>
            </li>
          </div>
        ))}
      </ul>
    </Box>
  );
};

export default MenuList;
