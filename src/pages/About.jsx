import { Box, Container, Typography, Grid, Paper } from '@mui/material'
import Header from '../components/Header'
import StatsCounter from '../components/StatsCounter'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const About = () => {
  const features = [
    'خبرة تمتد لأكثر من 30 عاماً في مجال الدعاية والإعلان',
    'استخدام أحدث التقنيات والمعدات في الطباعة والتصميم',
    'جودة عالية في جميع أعمالنا بأسعار تنافسية',
    'التزام تام بمواعيد التسليم المتفق عليها',
    'خدمة عملاء متميزة ومتابعة دائمة',
    'تصاميم إبداعية تناسب جميع الأذواق والمتطلبات',
    'تركيب جميع أنواع اليفط باحترافية عالية',
  ]

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
              data-aos="fade-down" // AOS added
              sx={{
                fontFamily: '"Amiri", serif',
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '2rem', md: '3rem' },
              }}
            >
              من نحن
            </Typography>
            <Typography
              variant="h5"
              data-aos="fade-up" // AOS added
              data-aos-delay="100" // AOS added
              sx={{
                fontWeight: 400,
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.8,
                opacity: 0.95,
              }}
            >
              رواد الدعاية والإعلان في دسوق منذ عقود
            </Typography>
          </Container>
        </Box>

        {/* قسم الإحصائيات */}
        <StatsCounter />

        {/* قسم من نحن */}
        <Box sx={{ py: 8, backgroundColor: '#f8fafc' }}>
          <Container maxWidth="lg">
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h3"
                  data-aos="fade-right" // AOS added
                  sx={{
                    fontFamily: '"Amiri", serif',
                    fontWeight: 700,
                    mb: 3,
                    color: '#0f766e',
                  }}
                >
                  قصة نجاح مستمرة
                </Typography>
                <Typography
                  variant="body1"
                  data-aos="fade-right" // AOS added
                  data-aos-delay="100" // AOS added
                  sx={{
                    color: '#475569',
                    lineHeight: 2,
                    mb: 2,
                    fontSize: '1.1rem',
                  }}
                >
                   نفخر بخبرتنا الممتدة 
                  لأكثر من 30 عاماً في تقديم حلول إعلانية مبتكرة واحترافية.
                </Typography>
                <Typography
                  variant="body1"
                  data-aos="fade-right" // AOS added
                  data-aos-delay="200" // AOS added
                  sx={{
                    color: '#475569',
                    lineHeight: 2,
                    mb: 2,
                    fontSize: '1.1rem',
                  }}
                >
                  نسعى دائماً لتحويل أفكار عملائنا إلى واقع ملموس من خلال تصاميم 
                  جذابة ومميزة تلفت الأنظار وتحقق الأهداف المرجوة. نستخدم أحدث 
                  التقنيات والمعدات لضمان جودة فائقة في كل عمل نقدمه.
                </Typography>
                <Typography
                  variant="body1"
                  data-aos="fade-right" // AOS added
                  data-aos-delay="300" // AOS added
                  sx={{
                    color: '#475569',
                    lineHeight: 2,
                    fontSize: '1.1rem',
                  }}
                >
                  عملاؤنا هم أساس نجاحنا، ولذلك نحرص على تقديم خدمة متميزة 
                  تلبي وتتجاوز توقعاتهم في كل مرة.
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper
                  elevation={0}
                  className="glass-effect-dark"
                  data-aos="fade-left" // AOS added to container
                  sx={{
                    p: 4,
                    borderRadius: 3,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: '"Amiri", serif',
                      fontWeight: 700,
                      mb: 3,
                      color: '#0f766e',
                    }}
                  >
                    لماذا تختارنا؟
                  </Typography>
                  <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                    {features.map((feature, index) => (
                      <Box
                        component="li"
                        key={index}
                        data-aos="fade-up" // AOS added to list items
                        data-aos-delay={index * 50} // AOS added
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          mb: 2.5,
                        }}
                      >
                        <CheckCircleIcon
                          sx={{
                            color: '#F59E0B',
                            ml: 1.5,
                            mt: 0.3,
                            fontSize: 24,
                          }}
                        />
                        <Typography
                          variant="body1"
                          sx={{
                            color: '#334155',
                            lineHeight: 1.7,
                          }}
                        >
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>

        

        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default About