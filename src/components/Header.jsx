import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AppBar, Toolbar, Box, Typography, Button, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import BurgerMenu from './BurgerMenu'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const menuItems = [
    { path: '/', label: 'الرئيسية' },
    { path: '/about', label: 'من نحن' },
    { path: '/works', label: 'معرض أعمالنا' },
    { path: '/contact', label: 'تواصل معنا' },
  ]

  return (
    <>
      <AppBar 
        position="fixed" // 1. وضعية ثابتة ليكون الهيدر مرئياً دائماً
        elevation={0}
        sx={{
          backgroundColor: '#e2e8f0cc', // خلفية شبه شفافة
          borderBottom: '1px solid #e2e8f0',
          zIndex: 1500, // لضمان بقائه فوق كل العناصر
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          transition: 'background-color 0.3s',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: { xs: 56, md: 64 } }}>
          {/* الشعار */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            {/* تم افتراض أن ملف الشعار الجديد هو /logo.svg */}
<Box
  component="img"
  src="/assets/logo.svg"
  alt="اللقاني للدعاية والإعلان"
  sx={{
    height: { xs: 60, md: 80 },
    width: 'auto', // خلي العرض يتناسب تلقائيًا
    maxWidth: '100%', // يمنعها من الخروج عن حدود الحاوية
    ml: 2,
  }}
/>          </Link>

          {/* القائمة على الشاشات الكبيرة */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {menuItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  color: location.pathname === item.path ? '#0f766e' : '#475569',
                  fontWeight: 600,
                  fontSize: '1rem',
                  position: 'relative',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    width: location.pathname === item.path ? '100%' : '0%',
                    height: '3px',
                    bottom: -8,
                    right: 0,
                    backgroundColor: '#0f766e',
                    transition: 'width 0.3s ease-out',
                  },
                  '&:hover:after': {
                    width: '100%',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* زر قائمة البرجر على الشاشات الصغيرة */}
          <IconButton
            onClick={() => setIsMenuOpen(true)}
            aria-label="فتح القائمة الرئيسية"
            sx={{ 
              display: { xs: 'block', md: 'none' },
              color: '#0f766e' 
            }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* 2. الإضافة الرئيسية والحل: مكون Toolbar Spacer */}
      {/* هذا المكون غير مرئي، ووظيفته الوحيدة هي إزاحة المحتوى لأسفل 
          بمسافة تعادل ارتفاع شريط التنقل الثابت (Fixed Header) */}
      <Toolbar sx={{ display: { xs: 'block', md: 'block' } }} /> 

      <BurgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}

export default Header