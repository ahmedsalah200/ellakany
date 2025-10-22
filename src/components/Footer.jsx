import { Box, Container, Grid, Typography, IconButton, Divider } from '@mui/material'
import { Link } from 'react-router-dom'
import PhoneIcon from '@mui/icons-material/Phone'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import FacebookIcon from '@mui/icons-material/Facebook'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import siteConfig from '../config/siteConfig'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1e293b',
        color: 'white',
        pt: 6,
        pb: 3,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* القسم الأول - الشعار والوصف */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 2 }}>
              <img 
                src="/assets/logo.svg" 
                alt={siteConfig.companyName}
                style={{ height: 70, marginBottom: 16 }}
              />
              <Typography variant="body2" sx={{ color: '#94a3b8', lineHeight: 1.8 }}>
                {siteConfig.companyName} - {siteConfig.tagline}
              </Typography>
            </Box>

            {/* أيقونات التواصل */}
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              <IconButton
                component="a"
                href={`tel:${siteConfig.phone}`}
                aria-label="الاتصال بنا"
                sx={{ 
                  color: 'white', 
                  backgroundColor: 'rgba(245, 158, 11, 0.1)',
                  '&:hover': { 
                    backgroundColor: '#F59E0B',
                    transform: 'translateY(-3px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <PhoneIcon />
              </IconButton>

              <IconButton
                component="a"
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="واتساب"
                sx={{ 
                  color: 'white', 
                  backgroundColor: 'rgba(37, 211, 102, 0.1)',
                  '&:hover': { 
                    backgroundColor: '#25D366',
                    transform: 'translateY(-3px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <WhatsAppIcon />
              </IconButton>

              <IconButton
                component="a"
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="فيسبوك"
                sx={{ 
                  color: 'white', 
                  backgroundColor: 'rgba(24, 119, 242, 0.1)',
                  '&:hover': { 
                    backgroundColor: '#1877F2',
                    transform: 'translateY(-3px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <FacebookIcon />
              </IconButton>

              <IconButton
                component="a"
                href={siteConfig.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="الموقع على الخريطة"
                sx={{ 
                  color: 'white', 
                  backgroundColor: 'rgba(234, 67, 53, 0.1)',
                  '&:hover': { 
                    backgroundColor: '#EA4335',
                    transform: 'translateY(-3px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <LocationOnIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* القسم الثاني - خدماتنا */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontFamily: '"Amiri", serif',
                mb: 2,
                color: '#F59E0B',
                fontWeight: 700
              }}
            >
              خدماتنا
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {siteConfig.services.map((service, index) => (
                <Box 
                  component="li" 
                  key={index}
                  sx={{ 
                    mb: 1,
                    '&::before': {
                      content: '"◄ "',
                      color: '#F59E0B',
                      marginLeft: 1
                    }
                  }}
                >
                  <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                    {service}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* القسم الثالث - روابط سريعة */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontFamily: '"Amiri", serif',
                mb: 2,
                color: '#F59E0B',
                fontWeight: 700
              }}
            >
              روابط سريعة
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {[
                { to: '/', label: 'الرئيسية' },
                { to: '/about', label: 'من نحن' },
                { to: '/works', label: 'معرض أعمالنا' },
                { to: '/contact', label: 'تواصل معنا' },
              ].map((link) => (
                <Box component="li" key={link.to} sx={{ mb: 1 }}>
                  <Link
                    to={link.to}
                    style={{ 
                      textDecoration: 'none',
                      color: '#94a3b8',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#F59E0B'}
                    onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                  >
                    <Typography variant="body2">
                      {link.label}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* القسم الرابع - معلومات الاتصال */}
          <Grid item xs={12} md={3}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontFamily: '"Amiri", serif',
                mb: 2,
                color: '#F59E0B',
                fontWeight: 700
              }}
            >
              تواصل معنا
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
              <PhoneIcon sx={{ ml: 1, color: '#F59E0B', fontSize: 20 }} />
              <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                {siteConfig.phoneFormatted}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
              <EmailIcon sx={{ ml: 1, color: '#F59E0B', fontSize: 20 }} />
              <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                {siteConfig.email}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
              <LocationOnIcon sx={{ ml: 1, color: '#F59E0B', fontSize: 20 }} />
              <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                {siteConfig.address}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
              <AccessTimeIcon sx={{ ml: 1, color: '#F59E0B', fontSize: 20 }} />
              <Box>
                <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                  {siteConfig.workingHours}
                </Typography>
                <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                  {siteConfig.dayOff}: إجازة
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* حقوق النشر */}
        <Typography 
          variant="body2" 
          sx={{ 
            textAlign: 'center',
            color: '#94a3b8'
          }}
        >
          {siteConfig.copyright}
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer