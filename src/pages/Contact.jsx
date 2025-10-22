import { Box, Container, Typography, IconButton } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import PhoneIcon from '@mui/icons-material/Phone'
import Header from '../components/Header'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import { siteConfig } from '../config/siteConfig' // تأكد إن المسار صحيح

const Contact = () => {
  return (
    <>
      <Header />
      <main>
        {/* قسم البطل */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)',
            color: 'white',
            py: { xs: 8, md: 12 },
            textAlign: 'center',
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h2"
              data-aos="fade-down"
              sx={{
                fontFamily: '"Amiri", serif',
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '2rem', md: '3rem' },
              }}
            >
              تواصل معنا
            </Typography>

            <Typography
              variant="h5"
              data-aos="fade-up"
              data-aos-delay="100"
              sx={{
                fontWeight: 400,
                maxWidth: 800,
                mx: 'auto',
                mb: 4,
                lineHeight: 1.8,
                opacity: 0.95,
              }}
            >
              نحن هنا لمساعدتك في تحقيق أهدافك الإعلانية
            </Typography>

            {/* روابط التواصل */}
            <Box
              data-aos="zoom-in"
              data-aos-delay="200"
              sx={{
                display: 'flex',
                justifyContent: 'center',
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
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  color: 'white',
                  width: { xs: 45, md: 55 },
                  height: { xs: 45, md: 55 },
                  '&:hover': {
                    backgroundColor: '#1877F2',
                    transform: 'translateY(-5px) scale(1.1)',
                  },
                  transition: 'all 0.3s ease',
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
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  color: 'white',
                  width: { xs: 45, md: 55 },
                  height: { xs: 45, md: 55 },
                  '&:hover': {
                    backgroundColor: '#25D366',
                    transform: 'translateY(-5px) scale(1.1)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <WhatsAppIcon fontSize="medium" />
              </IconButton>

              <IconButton
                component="a"
                href={`tel:${siteConfig.phone}`}
                aria-label="الاتصال بنا"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  color: 'white',
                  width: { xs: 45, md: 55 },
                  height: { xs: 45, md: 55 },
                  '&:hover': {
                    backgroundColor: '#F59E0B',
                    transform: 'translateY(-5px) scale(1.1)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <PhoneIcon fontSize="medium" />
              </IconButton>
            </Box>
          </Container>
        </Box>

        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default Contact