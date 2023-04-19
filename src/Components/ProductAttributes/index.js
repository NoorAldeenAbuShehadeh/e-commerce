import { Button, Divider, Rating, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box } from "@mui/system";
import Colors from "./Colors";
import CountItem from "./CountItem";
import Sizes from "./Sizes";
const ProductAttributes = ({ title, rate, price, details }) => {
  const StyleUnClickedBtn = {
    minWidth: "0",
    width: "40px!important",
    color: "black",
    fontWeight: 500,
    border: "1px solid black",
    "&:hover": { backgroundColor: "white", borderColor: "black" },
    borderColor: "black!important",
  };

  return (
    <div>
      <Typography
        sx={{ fontSize: "24px", fontWeight: 600, marginBottom: "10px" }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "260px",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "10px",
        }}
      >
        <Rating name="read-only" value={rate} readOnly size="small" />
        <Typography sx={{ opacity: 0.4, fontSize: "14px" }}>
          (150 Reviews)
        </Typography>
        <Typography sx={{ opacity: 0.4, fontSize: "14px" }}>|</Typography>
        <Typography sx={{ color: "#00FF66", fontSize: "14px" }}>
          In Stock
        </Typography>
      </Box>

      <Typography
        sx={{ fontSize: "24px", marginBottom: "10px", fontWeight: 500 }}
      >
        {`$${price}`}
      </Typography>

      <Typography
        sx={{ maxWidth: "360px", fontSize: "14px", marginBottom: "10px"}}
      >
        {details}
      </Typography>
      <Divider sx={{ width: "380px", marginBottom: "10px" }} />

      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <Typography sx={{ marginRight: "10px", fontSize: "20px" }}>
          Colours:{" "}
        </Typography>
        <Colors />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <Typography sx={{ marginRight: "10px", fontSize: "20px" }}>
          Size:{" "}
        </Typography>
        <Sizes />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" , marginBottom: "10px"}}>
        <CountItem />
        <Button
          variant="contained"
          sx={{
            margin: " 0px 10px",
            backgroundColor: "#DB4444",
            padding: "6px 30px",
            "&:hover": { backgroundColor: "#DB4444" },
          }}
        >
          Buy Now
        </Button>
        <Button sx={StyleUnClickedBtn}>
          <FavoriteBorderIcon />
        </Button>
      </Box>
    </div>
  );
};

export default ProductAttributes;

/*



*/
