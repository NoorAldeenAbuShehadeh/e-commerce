import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  createTheme,
  Divider,
  FormControl,
  IconButton,
  ImageList,
  InputAdornment,
  OutlinedInput,
  ThemeProvider,
  Typography,
} from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Container } from "@mui/system";
import Style from "./style.module.css";
import SendIcon from "@mui/icons-material/Send";
const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: "white",
          borderRadius: "4px",
          fontSize: "14px",
          padding: "8px!important",
        },
      },
    },
  },
});

export const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "black", color: "#FAFAFA" }}>
      <Container sx={{padding:'50px 10px'}}>
        <Grid container spacing={3} sx={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
          <Grid item md='2.2'>
            <Typography sx={{fontWeight:700,fontSize:'22px'}} display="block" gutterBottom>Exclusive</Typography>
            <Typography sx={{fontWeight:500,fontSize:'18px'}} display="block" gutterBottom>
              Subscribe
            </Typography>
            <Typography variant="caption" display="block" gutterBottom >
              Get 10% off your first order
            </Typography>
            <FormControl>
              <ThemeProvider theme={theme}>
                <OutlinedInput
                  type="text"
                  placeholder="Enter your email"
                  sx={{ border: "1px solid white",width:'175px' }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <SendIcon sx={{ color: "white" }} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </ThemeProvider>
            </FormControl>
          </Grid>
          <Grid item md='2.2'>
            <Typography sx={{fontWeight:500,fontSize:'18px'}} display="block" gutterBottom>
              Support
            </Typography>
            <Typography variant="caption" display="block" sx={{width:'140px'}} gutterBottom>
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              exclusive@gmail.com
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              +88015-88888-9999
            </Typography>
          </Grid>
          <Grid item md='2.2'>
            <Typography display="block" gutterBottom sx={{fontWeight:500,fontSize:'18px'}}>
              Account
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              My Account
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Login / Register
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Cart
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Wishlist
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Shop
            </Typography>
          </Grid>
          <Grid item md='2.2'>
            <Typography sx={{fontWeight:500,fontSize:'18px'}}  display="block" gutterBottom>
              Quick Link
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Privacy Policy
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Terms Of Use
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              FAQ
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Contact
            </Typography>
          </Grid>
          <Grid item md='2.2'>
            <Typography sx={{fontWeight:500,fontSize:'18px'}} display="block" gutterBottom>
              Download App
            </Typography>
            <Typography display="block" gutterBottom sx={{fontSize:'12px',opacity:0.8}}>
              Save $3 with App New User Only
            </Typography>
            <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
              <img src="Qrcode 1.png" />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src="logo-google-play.png"
                  className={Style.install_logo}
                />
                <img src="logo-appstore.png" className={Style.install_logo} />
              </Box>
            </Grid>
            <ImageList cols={4}>
              <img src="icon-facebook.png" />
              <img src="icon-twitter.png" />
              <img src="icon-instagram.png" />
              <img src="icon-linkedIn.png" />
            </ImageList>
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ border:'0.1px solid white', opacity: "0.4" }} />
      <Container
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CopyrightIcon sx={{ color: "#FFFFFF",opacity:'0.4'  }} />
        <Typography
          sx={{ fontWeight: "400", fontSize: "16px",opacity:'0.4',padding:'10px 0px' }}
        >
          Copyright Rimel 2022. All right reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
