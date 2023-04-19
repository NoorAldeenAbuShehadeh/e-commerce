import { Box, Button, ButtonGroup } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const CountItem = () => {
  const [count, setCount] = useState(1);

  const StyleUnClickedBtn = {
    minWidth: "0",
    width: "32px!important",
    color: "black",
    fontWeight: 500,
    border: "1px solid black",
    "&:hover": { backgroundColor: "white", borderColor: "black" },
    borderColor: 'black!important',
  };

  const StyleClickedBtn = {
    minWidth: "0",
    width: "32px!important",
    color: "white",
    borderColor: "#DB4444",
    fontWeight: 500,
    backgroundColor: "#DB4444",
    border: "1px solid #DB4444",
    "&:hover": { backgroundColor: "#DB4444", borderColor: "#DB4444" },
  };

  const handleDecrement=()=>{
    if(count>1)setCount(count-1);
  }
  const handleIncrement=()=>{
    setCount(count+1);
  }

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group"
    sx={{boxShadow:'none'}}
    >
      <Button variant="outlined" value="-" sx={StyleUnClickedBtn} onClick={handleDecrement}>
        <RemoveIcon />
      </Button>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 600,
          width: "80px",
          borderTop:'1px solid black',
          borderBottom:'1px solid black'
        }}
      >
        {count}
      </Box>
      <Button variant="outlined" value="+" sx={StyleClickedBtn} onClick={handleIncrement}>
        <AddIcon />
      </Button>
    </ButtonGroup>
  );
};

export default CountItem;
