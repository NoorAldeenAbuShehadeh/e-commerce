import {
  Card,
  CardHeader,
  Box,
  CardContent,
  Rating,
  IconButton,
  Button,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SharedTitle from "../SharedTitle";
import styles from "./index.module.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Product = (props) => {
  const [showBtn, setShowBtn] = useState(false);
  const navigate = useNavigate();
  const avatarT = props.percentage ? (
    <div className={styles.left_icon}>-40%</div>
  ) : props.new && props.id % 2 == 0 ? (
    <div className={styles.new_icon}> New</div>
  ) : null;

  return (
    <div className={`${styles.product}`}>
      <Card
        sx={{ background: "#F5F5F5" }}
        onMouseMove={() => setShowBtn(true)}
        onMouseOut={() => setShowBtn(false)}
      >
        <CardHeader
          avatar={avatarT}
          action={
            <div className={styles.actionButtons}>
              <IconButton
                sx={{
                  background: "white",
                  marginBottom: "0.5em",
                }}
              >
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton
                sx={{
                  background: "white",
                }}
              >
                <RemoveRedEyeIcon />
              </IconButton>
            </div>
          }
        />

        <CardContent
          className={showBtn ? styles.withshowBtn : styles.product_content}
        >
          <Box
            className={styles.product_image}
            component="img"
            sx={{
              height: 172,
              width: 152,
            }}
            src={props.image}
          />
        </CardContent>
        {showBtn && (
          <Button
            variant="contained"
            sx={{ background: "black", textTransform: "capitalize" }}
            className={styles.addToCart}
          >
            Add To Cart
          </Button>
        )}
      </Card>
      <Link to={`/Details/${props.id}`} preventScrollReset={true} onClick  className={styles.Link}> 
      <SharedTitle
        title={props.title}
        className={styles.product_title}
        // onClick={() => navigate(`/Details/${props.id}`)}
      /></Link>
      <SharedTitle
        title={`$${props.price}`}
        className={styles.product_price}
      />
      <Box className={styles.rating_box}>
        <Rating
          name="half-rating-read"
          precision={0.5}
          value={props.rating.rate}
          readOnly
        />
        <Box className={styles.rating_count}>({props.rating.count})</Box>
      </Box>
    </div>
  );
};
export default Product;
