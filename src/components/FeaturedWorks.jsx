import { useState } from 'react'
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button, IconButton, Modal, Fade, Backdrop } from '@mui/material'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import CloseIcon from '@mui/icons-material/Close'

const initialFeaturedWorks = [
  {
    id: 1,
    images: [
      '/assets/featured/featured1/work1.png',
      '/assets/featured/featured1/work2.png',
    ],
    title: 'تصميم واجهة مطعم فاخرة',
    description: 'تصميم عصري وألوان جذابة'
  },
  {
    id: 2,
    images: [
      '/assets/featured/featured2/work3.png',
      '/assets/featured/featured2/work2.png',
    ],
    title: 'تصميم واجهة عصرية لمقهي',
    description: 'جودة طباعة عالية وتصميم احترافي'
  },
  {
    id: 3,
    images: [
      '/assets/featured/featured3/work1.png',
      '/assets/featured/featured3/work2.png',
    ],
    title: 'تصميم كارت لشركة مقاولات',
    description: 'تصميم احترافي بشفافية مناسبة'
  },
  {
    id: 4,
    images: [
      '/assets/featured/featured4/work1.png',
      '/assets/featured/featured4/work2.png',
    ],
    title: 'تصميم كارت شخصي أنيق',
    description: 'تصميم أنيق وهادئ ومريح'
  },
]

const FeaturedWorks = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(
    initialFeaturedWorks.reduce((acc, work) => ({ ...acc, [work.id]: 0 }), {})
  )
  
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedWork, setSelectedWork] = useState(null)
  const [modalImageIndex, setModalImageIndex] = useState(0)

  const handleImageChange = (workId, direction) => {
    setCurrentImageIndex(prev => {
      const total = initialFeaturedWorks.find(w => w.id === workId).images.length
      const current = prev[workId]
      const next = direction === 'next' ? (current + 1) % total : (current - 1 + total) % total
      return { ...prev, [workId]: next }
    })
  }

  const handleOpenModal = (work) => {
    setSelectedWork(work)
    setModalImageIndex(currentImageIndex[work.id])
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setSelectedWork(null)
  }

  const handleModalImageChange = (direction) => {
    if (!selectedWork) return
    
    const total = selectedWork.images.length
    setModalImageIndex(prev => 
      direction === 'next' ? (prev + 1) % total : (prev - 1 + total) % total
    )
  }

  return (
    <Box sx={{ py: 8, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          data-aos="fade-up"
          sx={{
            textAlign: 'center',
            mb: 2,
            fontFamily: '"Amiri", serif',
            fontWeight: 700,
            color: '#0f766e',
          }}
        >
          بعض أعمالنا
        </Typography>
        
        <Typography  
          variant="body1"  
          data-aos="fade-up"  
          data-aos-delay="100"  
          sx={{  
            textAlign: 'center',  
            mb: 6,  
            color: '#64748b',  
            maxWidth: 600,  
            mx: 'auto',  
          }}  
        >  
          نفخر بتقديم أفضل الحلول الإعلانية لعملائنا بجودة عالية واحترافية  
        </Typography>  

        <Grid container spacing={3}>  
          {initialFeaturedWorks.map((work, index) => (  
            <Grid item xs={12} sm={6} md={3} key={work.id}>  
              <Card  
                data-aos="fade-up"  
                data-aos-delay={index * 150}  
                sx={{  
                  height: '100%',  
                  display: 'flex',  
                  flexDirection: 'column',  
                  borderRadius: 3,  
                  overflow: 'hidden',  
                  border: "1px solid rgba(15, 118, 110, 0.2)",  
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',  
                  transition: 'all 0.3s ease',  
                  '&:hover': {  
                    transform: 'translateY(-8px)',  
                    boxShadow: '0 12px 24px rgba(15, 118, 110, 0.12)',  
                  },  
                }}  
              >  
                {/* منطقة الصور */}
                <Box 
                  sx={{ 
                    position: 'relative', 
                    width: '100%', 
                    overflow: 'hidden',
                    cursor: 'pointer' 
                  }}
                  onClick={() => handleOpenModal(work)}
                >
                  <CardMedia
                    component="img"
                    image={work.images[currentImageIndex[work.id]]}
                    alt={work.title}
                    sx={{
                      width: '100%',
                      height: { xs: 200, sm: 240, md: 260 },
                      objectFit: 'cover',
                      backgroundColor: 'rgba(15, 118, 110, 0.04)',
                      transition: 'opacity 0.5s ease-in-out',
                    }}
                  />
                  
                  {/* أزرار التحكم */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      px: 1.5,
                      opacity: { xs: 1, sm: 0 },
                      transition: 'opacity 0.3s ease',
                      '&:hover': { opacity: 1 },
                      background: {
                        xs: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2))',
                        sm: 'linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.25))',
                      },
                    }}
                  >
                    {/* السهم السابق */}
                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation()
                        handleImageChange(work.id, 'prev')
                      }}
                      sx={{
                        backgroundColor: 'rgba(255,255,255,0.85)',
                        color: '#0f766e',
                        transform: 'rotate(180deg)',
                        '&:hover': {
                          backgroundColor: '#F59E0B',
                          color: 'white',
                          transform: 'rotate(180deg) scale(1.1)',
                        },
                        transition: 'all 0.3s ease',
                        ml: { xs: 0.2, sm: 0.5 },
                      }}
                    >
                      <ArrowForwardIosIcon sx={{ fontSize: { xs: 16, sm: 20 } }} />  
                    </IconButton>

                    {/* السهم التالي */}
                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation()
                        handleImageChange(work.id, 'next')
                      }}
                      sx={{
                        backgroundColor: 'rgba(255,255,255,0.85)',
                        color: '#0f766e',
                        '&:hover': {
                          backgroundColor: '#F59E0B',
                          color: 'white',
                          transform: 'scale(1.1)',
                        },
                        transition: 'all 0.3s ease',
                        mr: { xs: 0.2, sm: 0.5 },
                      }}
                    >
                      <ArrowForwardIosIcon sx={{ fontSize: { xs: 16, sm: 20 } }} />  
                    </IconButton>
                  </Box>

                  {/* النقاط أسفل الصورة */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 8,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      gap: 0.6,
                    }}
                  >
                    {work.images.map((_, i) => (  
                      <Box  
                        key={i}  
                        onClick={(e) => {
                          e.stopPropagation()
                          setCurrentImageIndex(prev => ({ ...prev, [work.id]: i }))  
                        }}  
                        sx={{  
                          width: currentImageIndex[work.id] === i ? 10 : 8,  
                          height: currentImageIndex[work.id] === i ? 10 : 8,  
                          borderRadius: '50%',  
                          backgroundColor:  
                            currentImageIndex[work.id] === i  
                              ? '#F59E0B'  
                              : 'rgba(255,255,255,0.6)',  
                          cursor: 'pointer',  
                          transition: 'all 0.3s ease',  
                        }}  
                      />  
                    ))}  
                  </Box>
                </Box>

                {/* محتوى النص */}
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 2.5 }}>  
                  <Typography  
                    variant="h6"  
                    sx={{  
                      fontWeight: 700,  
                      mb: 1,  
                      color: '#1e293b',  
                      fontFamily: '"Amiri", serif',  
                      fontSize: '1.1rem',  
                    }}  
                  >  
                    {work.title}  
                  </Typography>  
                  <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.6 }}>  
                    {work.description}  
                  </Typography>  
                </CardContent>  
              </Card>  
            </Grid>  
          ))}  
        </Grid>  

        {/* زر المزيد */}  
        <Box data-aos="zoom-in" sx={{ textAlign: 'center', mt: 6 }}>  
          <Button  
            component={Link}  
            to="/works"  
            variant="contained"  
            size="large"  
            endIcon={<ArrowBackIcon />}  
            sx={{  
              backgroundColor: '#0f766e',  
              color: 'white',  
              px: 5,  
              py: 1.5,  
              fontSize: '1.1rem',  
              fontWeight: 600,  
              borderRadius: 2,  
              '&:hover': {  
                backgroundColor: '#0d5a54',  
                transform: 'translateY(-3px)',  
                boxShadow: '0 8px 20px rgba(15, 118, 110, 0.3)',  
              },  
              transition: 'all 0.3s ease',  
            }}  
          >  
            المزيد من اعمالنا  
          </Button>  
        </Box>  
      </Container>

      {/* Modal لعرض الصورة بشكل مكبر */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Fade in={modalOpen}>
          <Box 
            sx={{ 
              position: 'relative',
              outline: 'none',
              maxWidth: '90vw',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* زر الإغلاق */}
            <IconButton
              onClick={handleCloseModal}
              sx={{
                position: 'absolute',
                top: -50,
                right: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.7)',
                },
                zIndex: 1,
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* الصورة في الـ Modal */}
            {selectedWork && (
              <>
                <Box
                  component="img"
                  src={selectedWork.images[modalImageIndex]}
                  alt={selectedWork.title}
                  sx={{
                    maxWidth: '100%',
                    maxHeight: '70vh',
                    objectFit: 'contain',
                    borderRadius: 2,
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                  }}
                />
                
                {/* أزرار التنقل في الـ Modal */}
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, gap: 2 }}>
                  <IconButton
                    onClick={() => handleModalImageChange('prev')}
                    sx={{
                      backgroundColor: '#0f766e',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#0d5a54',
                      },
                    }}
                  >
                    <ArrowForwardIosIcon sx={{ transform: 'rotate(180deg)' }} />
                  </IconButton>

                  <Typography variant="body2" sx={{ color: 'white', minWidth: 60, textAlign: 'center' }}>
                    {modalImageIndex + 1} / {selectedWork.images.length}
                  </Typography>

                  <IconButton
                    onClick={() => handleModalImageChange('next')}
                    sx={{
                      backgroundColor: '#0f766e',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#0d5a54',
                      },
                    }}
                  >
                    <ArrowForwardIosIcon />
                  </IconButton>
                </Box>

                {/* معلومات الصورة */}
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>
                    {selectedWork.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                    {selectedWork.description}
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>  
  )
}

export default FeaturedWorks 