import { Button, Typography, Container, Breadcrumbs, Link } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();
  return (
    <Container sx={{marginTop:'40px'}}>
    <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">404 Error</Typography>
      </Breadcrumbs>
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "64px",
          fontWeight: 700,
          marginTop: "100px",
        }}
      >
        404 Not Found
      </Typography>
      <Typography>
        Your visited page not found. You may go home page.
      </Typography>
      <Button onClick={() => navigate(`/`)}
        variant="contained"
        sx={{
          margin: "70px 0px",marginBottom:'120px',
          backgroundColor: "#DB4444",
          "&:hover": { backgroundColor: "#DB4444" },
          padding:'10px 20px'
        }}
      >
        Back to home page
      </Button>
    </Container>
    </Container>
  );
};

export default NotFoundPage;
