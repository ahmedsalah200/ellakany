import { Box, Container, Grid, Typography } from '@mui/material'
import { useEffect, useState, useRef } from 'react'
import CountUp from 'react-countup'
import WorkIcon from '@mui/icons-material/Work'
import PeopleIcon from '@mui/icons-material/People'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import siteConfig from '../config/siteConfig'

const StatsCounter = () => {
  const [startCounting, setStartCounting] = useState(false)
  const statsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounting(true)
        }
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      icon: <EmojiEventsIcon sx={{ fontSize: { xs: 50, md: 60 } }} />,
      value: siteConfig.stats.experience,
      label: 'سنة خبرة',
      prefix: 'أكثر من ',
      suffix: ''
    },
    {
      icon: <WorkIcon sx={{ fontSize: { xs: 50, md: 60 } }} />,
      value: siteConfig.stats.projects,
      label: 'عمل منجز',
      prefix: 'أكثر من ',
      suffix: ''
    },
    {
      icon: <PeopleIcon sx={{ fontSize: { xs: 50, md: 60 } }} />,
      value: siteConfig.stats.clients,
      label: 'عميل سعيد',
      prefix: 'أكثر من ',
      suffix: ''
    },
  ]

  return (
    <Box
      ref={statsRef}
      data-aos="fade-in" // AOS added to the whole section
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                className="glass-effect"
                data-aos="zoom-in" // AOS added to individual boxes
                data-aos-delay={index * 150} // AOS added
                sx={{
                  textAlign: 'center',
                  p: 4,
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                {/* الأيقونة */}
                <Box
                  sx={{
                    color: '#F59E0B',
                    mb: 2,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  {stat.icon}
                </Box>

                {/* العدد */}
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    fontFamily: '"Amiri", serif',
                    fontSize: { xs: '2rem', md: '2.5rem' },
                  }}
                >
                  {stat.prefix}
                  {startCounting && (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      separator=","
                    />
                  )}
                  {stat.suffix}
                </Typography>

                {/* النص */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 500,
                    color: 'rgba(255, 255, 255, 0.9)',
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default StatsCounter