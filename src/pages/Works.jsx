import { useState, useMemo } from 'react' 
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  TextField,
  MenuItem,
  Button,
  Chip,
  IconButton,
  Modal,
  Fade,
  Backdrop,
} from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import CloseIcon from '@mui/icons-material/Close'
import Header from '../components/Header'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import { worksData, workTypes } from '../data/worksData'

const Works = () => {
  const [filterType, setFilterType] = useState('all')
  const [itemsToShow, setItemsToShow] = useState(3)
  const [currentImageIndex, setCurrentImageIndex] = useState({})
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedWork, setSelectedWork] = useState(null)
  const [modalImageIndex, setModalImageIndex] = useState(0)

  // تهيئة currentImageIndex عند تغيير البيانات
  useState(() => {
    const initialIndex = {}
    worksData.forEach(work => {
      initialIndex[work.id] = 0
    })
    setCurrentImageIndex(initialIndex)
  }, [worksData])

  // تصفية الأعمال
  const filteredWorks = useMemo(() => {
    let filtered = worksData

    // تصفية حسب النوع فقط
    if (filterType !== 'all') {
      filtered = filtered.filter((work) => work.type === filterType)
    }

    return filtered
  }, [filterType])

  // الأعمال المعروضة حالياً
  const displayedWorks = filteredWorks.slice(0, itemsToShow)
  const hasMore = filteredWorks.length > itemsToShow

  const handleLoadMore = () => {
    setItemsToShow((prev) => prev + 3)
  }

  const handleImageChange = (workId, direction) => {
    setCurrentImageIndex(prev => {
      const work = worksData.find(w => w.id === workId)
      if (!work) return prev
      
      const total = work.images ? work.images.length : 1
      const current = prev[workId] || 0
      const next = direction === 'next' ? (current + 1) % total : (current - 1 + total) % total
      return { ...prev, [workId]: next }
    })
  }

  const handleOpenModal = (work) => {
    setSelectedWork(work)
    setModalImageIndex(currentImageIndex[work.id] || 0)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setSelectedWork(null)
  }

  const handleModalImageChange = (direction) => {
    if (!selectedWork) return
    
    const total = selectedWork.images ? selectedWork.images.length : 1
    setModalImageIndex(prev => 
      direction === 'next' ? (prev + 1) % total : (prev - 1 + total) % total
    )
  }

  const getCurrentImage = (work) => {
    if (work.images && work.images.length > 0) {
      return work.images[currentImageIndex[work.id] || 0]
    }
    return work.imagePath
  }

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
              معرض أعمالنا
            </Typography>
            <Typography
              variant="h5"
              data-aos="fade-up"
              data-aos-delay="100"
              sx={{
                fontWeight: 400,
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.8,
                opacity: 0.95,
              }}
            >
              اكتشف مجموعة من أفضل أعمالنا في مجال الدعاية والإعلان
            </Typography>
          </Container>
        </Box>

        {/* قسم الفلترة */}
        <Box sx={{ py: 6, backgroundColor: '#f8fafc' }}>
          <Container maxWidth="lg">
            <Grid container spacing={3} sx={{ mb: 4 }} data-aos="fade-in">
              {/* الفلتر فقط */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: 2,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                    },
                  }}
                >
                  {workTypes.map((type) => (
                    <MenuItem key={type.value} value={type.value}>
                      {type.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>

            {/* عدد النتائج */}
            <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }} data-aos="fade-in">
              <Typography variant="body1" sx={{ color: '#64748b' }}>
                عدد الأعمال: {filteredWorks.length}
              </Typography>
              {filterType !== 'all' && (
                <Chip
                  label={workTypes.find((t) => t.value === filterType)?.label}
                  onDelete={() => setFilterType('all')}
                  color="primary"
                  size='small'
                  sx={{paddingLeft:"10px"}}
                />
              )}
            </Box>

            {/* عرض الأعمال */}
            {displayedWorks.length > 0 ? (
              <>
                <Grid container spacing={4}>
                  {displayedWorks.map((work, index) => (
                    <Grid item xs={12} sm={6} md={4} key={work.id}>
                      <Card
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        sx={{
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          border: "1px solid rgba(15, 118, 110, 0.2)",
                          borderRadius: 3,
                          overflow: 'hidden',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-10px)',
                            boxShadow: '0 12px 24px rgba(15, 118, 110, 0.15)',
                          },
                        }}
                      >
                        {/* منطقة الصور */}
                        <Box 
                          sx={{ 
                            position: 'relative', 
                            width: '100%', 
                            height: "auto",
                            overflow: 'hidden',
                            cursor: 'pointer',
                            backgroundColor: 'rgba(15, 118, 110, 0.04)',
                          }}
                          onClick={() => handleOpenModal(work)}
                        >
                          <CardMedia
                            component="img"
                            image={getCurrentImage(work)}
                            alt={work.title}
                            sx={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              transition: 'opacity 0.5s ease-in-out',
                            }}
                          />
                          
                          {/* أزرار التحكم - تظهر فقط إذا كان هناك أكثر من صورة */}
                          {(work.images && work.images.length > 1) && (
                            <>
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
                                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.1))',
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
                                      width: (currentImageIndex[work.id] || 0) === i ? 10 : 8,  
                                      height: (currentImageIndex[work.id] || 0) === i ? 10 : 8,  
                                      borderRadius: '50%',  
                                      backgroundColor:  
                                        (currentImageIndex[work.id] || 0) === i  
                                          ? '#F59E0B'  
                                          : 'rgba(255,255,255,0.6)',  
                                      cursor: 'pointer',  
                                      transition: 'all 0.3s ease',  
                                    }}  
                                  />  
                                ))}  
                              </Box>
                            </>
                          )}
                        </Box>

                        <CardContent sx={{ flexGrow: 1, p: 3 }}>
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              mb: 1.5,
                            }}
                          >
                            <Chip
                              label={workTypes.find((t) => t.value === work.type)?.label}
                              size="small"
                              sx={{
                                backgroundColor: '#0f766e',
                                color: 'white',
                                fontWeight: 600,
                              }}
                            />
                            <Typography
                              variant="caption"
                              sx={{ color: '#94a3b8', fontWeight: 500 }}
                            >
                              {work.year}
                            </Typography>
                          </Box>

                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 700,
                              mb: 1,
                              color: '#1e293b',
                              fontFamily: '"Amiri", serif',
                              fontSize: '1.2rem',
                            }}
                          >
                            {work.title}
                          </Typography>

                          <Typography
                            variant="body2"
                            sx={{
                              color: '#64748b',
                              lineHeight: 1.7,
                            }}
                          >
                            {work.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>

                {/* زر عرض المزيد */}
                {hasMore && (
                  <Box sx={{ textAlign: 'center', mt: 6 }} data-aos="zoom-in">
                    <Button
                      variant="contained"
                      size="large"
                      onClick={handleLoadMore}
                      sx={{
                        backgroundColor: '#0f766e',
                        color: 'white',
                        px: 6,
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
                      عرض المزيد
                    </Button>
                  </Box>
                )}
              </>
            ) : (
              <Box
                data-aos="fade-in"
                sx={{
                  textAlign: 'center',
                  py: 8,
                  backgroundColor: 'white',
                  borderRadius: 3,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: '#64748b',
                    fontFamily: '"Amiri", serif',
                  }}
                >
                  لا توجد أعمال مطابقة للبحث
                </Typography>
              </Box>
            )}
          </Container>
        </Box>

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
                    src={selectedWork.images ? selectedWork.images[modalImageIndex] : selectedWork.imagePath}
                    alt={selectedWork.title}
                    sx={{
                      maxWidth: '100%',
                      maxHeight: '60vh',
                      objectFit: 'contain',
                      borderRadius: 2,
                      boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                    }}
                  />
                  
                  {/* أزرار التنقل في الـ Modal - تظهر فقط إذا كان هناك أكثر من صورة */}
                  {(selectedWork.images && selectedWork.images.length > 1) && (
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
                  )}

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

        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default Works