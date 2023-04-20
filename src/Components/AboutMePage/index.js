import { Box, CardMedia, CardContent, Typography, Card } from "@mui/material";
import Paragraph from "../Paragraph";
import SharedTitle from "../SharedTitle";
import styles from "./index.module.css";
import EServices from "../EServices/EServices";
import { images } from "./data";
import { team } from "./team";
import Twitter from "./images/Icon-Twitter.png";
import Instagram from "./images/icon-instagram.png";
import LinkedIn from "./images/Icon-Linkedin.png";
import dots from "./images/dots.png";

const AboutMe = () => {
  const textTitle = {
    color: "#000000",
    fontWeight: "400",

    marginRight: "1em",
    opacity: "0.5",
  };
  const ourStory = `Launced in 2015, 
      Exclusive is South Asia’s premier 
      online shopping makterplace with an active presense in Bangladesh. 
      Supported by wide range of tailored marketing, data and service solutions, 
      Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.`;
  return (
    <div className={styles.content}>
      <div className={styles.Title}>
        <SharedTitle sx={textTitle} title="Home" />
        <SharedTitle sx={textTitle} title="/" />
        <SharedTitle title="About Me" />
      </div>
      <div className={styles.container}>
        <div className={styles.aboutme_text}>
          <SharedTitle
            sx={{ fontSize: "54px", marginBottom: "0.5em" }}
            variant="h5"
            title={"Our Story"}
          />
          <Paragraph textP={ourStory} />
        </div>
        <div>
          <Box
            className={styles.story_image}
            component="img"
            sx={{
              height: "auto",
              width: 609,
            }}
            src={"ourstory.png"}
          />
        </div>
      </div>
      <div className={styles.container}>
        {images.map((image) => (
          <Card
            key={image.id}
            sx={{ backgroundColor: image.id == 2 ? "#DB4444" : "white" }}
            className={styles.card}
          >
            <CardMedia
              className={styles.img}
              image={image.src}
              title={image.title}
            />
            <CardContent className={styles.descBox}>
              <Typography
                gutterBottom
                variant="h5"
                component="h4"
                className={styles.mainDesc}
                sx={{
                  fontSize: "1rem",
                  color: image.id == 2 ? "white" : "black",
                }}
              >
                {image.mainDescription}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                sx={{ color: image.id == 2 ? "white" : "black" }}
                className={styles.secondaryDesc}
              >
                {image.secondaryDescription}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className={styles.container}>
        {team.map((member) => (
          <div className={`${styles.member}`}>
            <Card sx={{ background: "#F5F5F5" }}>
              <CardContent className={styles.team_content}>
                <Box
                  className={styles.image}
                  component="img"
                  sx={{
                    height: 250,
                    width: 152,
                    objectFit:'cover'
                  }}
                  src={member.src}
                />
              </CardContent>
            </Card>
            <SharedTitle
              title={member.mainDescription}
              sx={{ fontSize: "32px", fontWeight: "500" }}
            />
            <SharedTitle
              title={`${member.secondaryDescription}`}
              sx={{ marginTop: "-0.3em", fontSize: "16px" }}
            />
            <div className={styles.icons}>
              <Box
                className={styles.image}
                component="img"
                sx={{
                  height: 16,
                  width: 16,
                }}
                src={Twitter}
              />
              <Box
                className={styles.image}
                component="img"
                sx={{
                  height: 16,
                  width: 16,
                }}
                src={Instagram}
              />
              <Box
                className={styles.image}
                component="img"
                sx={{
                  height: 16,
                  width: 16,
                }}
                src={LinkedIn}
              />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        <Box
          className={styles.image}
          component="img"
          sx={{
            height: 16,
            width: "112px",
            
          }}
          src={dots}
        />
      </div>
      <EServices />
    </div>
  );
};
export default AboutMe;
