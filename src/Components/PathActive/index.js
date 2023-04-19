import { Breadcrumbs, Typography,Link } from "@mui/material";

const PathActive = ({type, name}) => {
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
          {type}
        </Link>
        <Typography color="text.primary">{name}</Typography>
      </Breadcrumbs>
  )
}

export default PathActive