import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
export default function ToggleButtons() {
  const [selected, setSelected] = useState('M');

  const handleSelected = (newSelected) => {
    setSelected(newSelected);
  };
 
  const StyleUnClickedBtn = {
    minWidth:'0',width:'32px!important', height:'32px!important'
    ,margin:'5px',color:'black',borderColor:'black',fontWeight:500,
    "&:hover": {backgroundColor:'white',borderColor:'black'}
};
    const StyleClickedBtn = {
        minWidth:'0',width:'32px!important', height:'32px!important'
        ,margin:'5px',color:'white',borderColor:'#DB4444',fontWeight:500,
        backgroundColor:'#DB4444', "&:hover": {backgroundColor:'#DB4444',borderColor:'#DB4444'}
    };

  return (
    <Box>
        <Button variant="outlined" value='XS' sx={selected==='XS'?StyleClickedBtn:StyleUnClickedBtn} onClick={()=>handleSelected('XS')}>XS</Button>
        <Button variant="outlined" value='S' sx={selected==='S'?StyleClickedBtn:StyleUnClickedBtn} onClick={()=>handleSelected('S')}>S</Button>
        <Button variant="outlined" value='M' sx={selected==='M'?StyleClickedBtn:StyleUnClickedBtn} onClick={()=>handleSelected('M')}>M</Button>
        <Button variant="outlined" value='L' sx={selected==='L'?StyleClickedBtn:StyleUnClickedBtn} onClick={()=>handleSelected('L')}>L</Button>
        <Button variant="outlined" value='XL' sx={selected==='XL'?StyleClickedBtn:StyleUnClickedBtn} onClick={()=>handleSelected('XL')}>XL</Button>
    </Box>
  );
}