import CircleIcon from '@mui/icons-material/Circle';
import { useState } from 'react';
import { Box, Button } from '@mui/material';
export default function ToggleButtons() {
  const [color, setColor] = useState('red');

  const handlecolor = (newColor) => {
    setColor(newColor);
  };
  const StyleUnClickedBtn = {
    minWidth: "0",
    width: "32px!important",
  };

let selectedColor={border:'2px solid black',borderRadius:'16px',width:'16px',height:'16px'}
let unSelectedColor={borderRadius:'25px',width:'25px',height:'25px'}
  return (
<Box>
  <Button sx={StyleUnClickedBtn} onClick={()=>handlecolor('red')}>
  <CircleIcon sx={color==='red'?{color:"red",...selectedColor}:{color:"red",...unSelectedColor}} />
  </Button>
  <Button sx={StyleUnClickedBtn} onClick={()=>handlecolor('green')}>
  <CircleIcon sx={color==='green'?{color:'green',...selectedColor}:{color:'green',...unSelectedColor}} />
  </Button>
  <Button sx={StyleUnClickedBtn} onClick={()=>handlecolor('blue')}>
  <CircleIcon sx={color==='blue'?{color:'blue',...selectedColor}:{color:'blue',...unSelectedColor}} />
  </Button>
        </Box>
  );
}