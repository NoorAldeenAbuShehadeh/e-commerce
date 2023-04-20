import { Typography } from "@mui/material";

const SharedTitle = (props) => {
  return (
    <Typography mt={2} {...props}>
      {props.title}
    </Typography>
  );
};
export default SharedTitle;