import { Breadcrumbs, Typography,Link } from "@mui/material";

const PathActive = ({category, title}) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="#">
          Account
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="#"
        >
          {category}
        </Link>
        <Typography color="text.primary">{title}</Typography>
      </Breadcrumbs>
  )
}

export default PathActive