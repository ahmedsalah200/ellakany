import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IconButton, Box, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import AOS from 'aos'; // Correct AOS import

const BurgerMenu = ({ isOpen, onClose }) => {
  const location = useLocation()

  // إغلاق القائمة بالضغط على Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
      // Call AOS refresh to ensure animations start when the menu is opened/visible
      AOS.refreshHard(); 
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const menuItems = [
    { path: '/', label: 'الرئيسية' },
    { path: '/about', label: 'من نحن' },
    { path: '/works', label: 'معرض أعمالنا' },
    { path: '/contact', label: 'تواصل معنا' },
  ]

  if (!isOpen) return null

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(15, 118, 110, 0.98)',
        zIndex: 2000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
        overflow: 'hidden',
      }}
      role="dialog"
      aria-modal="true"
      aria-label="القائمة الرئيسية"
    >
      {/* زر الإغلاق */}
      <IconButton
        onClick={onClose}
        aria-label="إغلاق القائمة"
        data-aos="zoom-in" 
        sx={{
          position: 'absolute',
          top: 20,
          left: 20,
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            transform: 'rotate(90deg)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        <CloseIcon fontSize="large" />
      </IconButton>

      {/* عناصر القائمة (تم تعديل data-aos إلى fade-up) */}
      <Box sx={{ textAlign: 'center' , display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {menuItems.map((item, index) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={onClose}
            style={{ textDecoration: 'none' }}
          >
            <Typography
              variant="h4"
              data-aos="fade-up" // تم التعديل إلى fade-up
              data-aos-delay={100 + index * 100} 
              sx={{
                color: 'white',
                fontFamily: '"Amiri", serif',
                my: 3,
                cursor: 'pointer',
                position: 'relative',
                display: 'inline-block',
                '&:hover': {
                  color: '#F59E0B',
                  transform: 'translateX(-10px)',
                },
                '&::after': location.pathname === item.path ? {
                  content: '""',
                  position: 'absolute',
                  bottom: -5,
                  right: 0,
                  width: '100%',
                  height: 3,
                  backgroundColor: '#F59E0B',
                } : {},
                transition: 'all 0.3s ease',
              }}
            >
              {item.label}
            </Typography>
          </Link>
        ))}
      </Box>
    </Box>
  )
}

export default BurgerMenu