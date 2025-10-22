import { useState } from 'react'
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  TextField, 
  Button,
  MenuItem,
  Alert
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import siteConfig from '../config/siteConfig'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    bannerType: '',
    details: ''
  })
  
  const [errors, setErrors] = useState({})

  const bannerTypes = [
    { value: '', label: 'اختر نوع اليافطة' },
    { value: 'بانر', label: 'بانر' },
    { value: 'فلكس', label: 'فلكس' },
    { value: 'فينيل', label: 'فينيل' },
    { value: 'لوحة مدرسية', label: 'لوحة مدرسية' },
    { value: 'يافطة مضيئة', label: 'يافطة مضيئة' },
    { value: 'أخري', label: 'أخرى' },
  ]

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'الاسم مطلوب'
    if (!formData.bannerType) newErrors.bannerType = 'نوع اليافطة مطلوب'
    if (formData.details.length > 200) newErrors.details = 'التفاصيل يجب ألا تتجاوز 200 حرف'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateForm()) return

    const message = 
`السلام عليكم يا أستاذ صلاح،
أنا ${formData.name}.

تفاصيل الطلب:
- نوع اليافطة: ${formData.bannerType}
${formData.details ? `- تفاصيل إضافية: ${formData.details}` : ''}.`;
    
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
    setFormData({ name: '', bannerType: '', details: '' })
    setErrors({})
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  return (
    <Box sx={{ py: 8, backgroundColor: '#f8fafc' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          data-aos="fade-up"
          sx={{
            textAlign: 'center',
            mb: 1,
            fontFamily: '"Amiri", serif',
            fontWeight: 700,
            color: '#0f766e',
          }}
        >
          تواصل معنا
        </Typography>
        
        <Typography
          variant="body1"
          data-aos="fade-up"
          data-aos-delay="100"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: '#64748b',
          }}
        >
          نحن هنا لخدمتك وتحويل أفكارك إلى واقع
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6} data-aos="fade-right">
            <Box className="glass-effect-dark" sx={{ p: 4, height: '100%' }}>
              <Typography
                variant="h5"
                sx={{
                  mb: 3,
                  fontFamily: '"Amiri", serif',
                  color: '#0f766e',
                  fontWeight: 700,
                }}
              >
                أرسل طلبك الآن
              </Typography>

              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <TextField
                    fullWidth
                    required
                    name="name"
                    label="الاسم الكامل"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    sx={{ '& .MuiOutlinedInput-root': { backgroundColor: 'white' } }}
                  />
                </Box>

                <Box sx={{ mb: 3 }}>
                  <TextField
                    fullWidth
                    required
                    select
                    name="bannerType"
                    label="نوع اليافطة"
                    value={formData.bannerType}
                    onChange={handleChange}
                    error={!!errors.bannerType}
                    helperText={errors.bannerType}
                    sx={{ '& .MuiOutlinedInput-root': { backgroundColor: 'white' } }}
                  >
                    {bannerTypes.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    name="details"
                    label="تفاصيل العمل (اختياري)"
                    value={formData.details}
                    onChange={handleChange}
                    error={!!errors.details}
                    helperText={
                      errors.details || `${formData.details.length}/200 حرف`
                    }
                    sx={{ '& .MuiOutlinedInput-root': { backgroundColor: 'white' } }}
                  />
                </Box>

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  endIcon={<SendIcon />}
                  sx={{
                    backgroundColor: '#F59E0B',
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: '#D97706',
                      transform: 'translateY(-2px)',
                      boxShadow: 6,
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  إرسال عبر واتساب
                </Button>
              </form>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} data-aos="fade-left">
            <Box className="glass-effect-dark" sx={{ p: 4, height: '100%' }}>
              <Typography
                variant="h5"
                sx={{
                  mb: 3,
                  fontFamily: '"Amiri", serif',
                  color: '#0f766e',
                  fontWeight: 700,
                }}
              >
                موقعنا
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                <LocationOnIcon sx={{ ml: 2, color: '#F59E0B', mt: 0.5 }} />
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  {siteConfig.address}
                </Typography>
              </Box>

              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: 350,
                  borderRadius: 2,
                  overflow: 'hidden',
                  mb: 2,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  '& iframe': {
                    width: '100% !important',
                    height: '100% !important',
                    border: 'none !important',
                    display: 'block !important',
                  },
                }}
              >
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3415.1940166419017!2d30.64395387559611!3d31.13212617439407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDA3JzU1LjciTiAzMMKwMzgnNDcuNSJF!5e0!3m2!1sen!2seg!4v1760951947289!5m2!1sen!2seg`}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="موقع اللقاني للدعاية والإعلان على الخريطة"
                />
              </Box>

              <Button
                variant="outlined"
                fullWidth
                component="a"
                href={siteConfig.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<LocationOnIcon />}
                sx={{
                  color: '#0f766e',
                  borderColor: '#0f766e',
                  py: 1.5,
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#0f766e',
                    color: 'white',
                    borderColor: '#0f766e',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                افتح على Google Maps
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ContactSection