import { Box, Container, Typography, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import siteConfig from "../config/siteConfig";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "70vh", md: "85vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <picture>
        <img
          src="/assets/copy.jpg"
          alt="Hero image"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
      </picture>

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(15, 118, 110, 0.85) 0%, rgba(13, 90, 84, 0.9) 100%)",
          zIndex: 1,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          data-aos="fade-up"
          sx={{
            color: "white",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem", lg: "4rem" },
            fontWeight: 700,
            mb: 2,
            textShadow: "2px 4px 8px rgba(0, 0, 0, 0.3)",
            lineHeight: 1.3,
          }}
        >
          اللقاني للدعاية والاعلان
        </Typography>

        <Typography
          variant="h2"
          data-aos="fade-up"
          data-aos-delay="100"
          sx={{
            color: "#F59E0B",
            fontSize: { xs: "1.3rem", sm: "1.6rem", md: "2rem", lg: "2.5rem" },
            fontWeight: 600,
            mb: 4,
            textShadow: "1px 2px 6px rgba(0, 0, 0, 0.4)",
          }}
        >
          نحول أفكارك إلى تصاميم جذابة
        </Typography>

        <Box
          data-aos="fade-up"
          data-aos-delay="200"
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mb: 4,
          }}
        >
          <IconButton
            component="a"
            href={siteConfig.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="فيسبوك"
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              color: "white",
              width: { xs: 45, md: 55 },
              height: { xs: 45, md: 55 },
              "&:hover": {
                backgroundColor: "#1877F2",
                transform: "translateY(-5px) scale(1.1)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <FacebookIcon fontSize="medium" />
          </IconButton>

          <IconButton
            component="a"
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="واتساب"
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              color: "white",
              width: { xs: 45, md: 55 },
              height: { xs: 45, md: 55 },
              "&:hover": {
                backgroundColor: "#25D366",
                transform: "translateY(-5px) scale(1.1)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <WhatsAppIcon fontSize="medium" />
          </IconButton>

          <IconButton
            component="a"
            href={`tel:${siteConfig.phone}`}
            aria-label="الاتصال بنا"
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              color: "white",
              width: { xs: 45, md: 55 },
              height: { xs: 45, md: 55 },
              "&:hover": {
                backgroundColor: "#F59E0B",
                transform: "translateY(-5px) scale(1.1)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <PhoneIcon fontSize="medium" />
          </IconButton>
        </Box>

        <Button
          component={Link}
          to="/works"
          variant="contained"
          size="large"
          endIcon={<ArrowBackIcon />}
          data-aos="zoom-in"
          data-aos-delay="300"
          sx={{
            backgroundColor: "#F59E0B",
            color: "white",
            px: { xs: 4, md: 6 },
            py: { xs: 1.5, md: 2 },
            fontSize: { xs: "1rem", md: "1.2rem" },
            fontWeight: 700,
            borderRadius: 3,
            boxShadow: "0 8px 20px rgba(245, 158, 11, 0.4)",
            "&:hover": {
              backgroundColor: "#D97706",
              transform: "translateY(-5px)",
              boxShadow: "0 12px 30px rgba(245, 158, 11, 0.5)",
            },
            animation: "pulse 2s ease-in-out infinite",
            "@keyframes pulse": {
              "0%, 100%": {
                transform: "scale(1)",
              },
              "50%": {
                transform: "scale(1.05)",
              },
            },
            transition: "all 0.3s ease",
          }}
        >
          تصفح اعمالنا
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;