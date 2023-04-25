import {CardMedia, Typography} from "@mui/material";
import {
  Card,
  CardContent,
} from "@mui/material";
import styles from "./index.module.css";


const CategoryCard = (props) => {
  return (
    <div>
      <Card className= {styles.category_card}>
        
        <CardContent
          className={ styles.category_image}
        >
          <CardMedia  className={styles.category_icon}
          sx={{ fontSize: '3em', marginTop: '4px', marginBottom:'8px' ,overflow:'visible' }}>
            {props.icon}
            </CardMedia>
            <Typography  sx={{ fontSize: '1.3em'}}>
            
        {props.title}
      </Typography>
      
        </CardContent>
      
      </Card>
      </div>
  );
};

export default CategoryCard;
