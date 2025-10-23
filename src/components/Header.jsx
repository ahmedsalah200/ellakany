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
        position="fixed" 
        elevation={0}
        sx={{
          backgroundColor: 'white', 
          borderBottom: '1px solid #dadee3ff',
          zIndex: 1500, 
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          transition: 'background-color 0.3s',
        }}
      >
        <Toolbar 
            sx={{ 
                justifyContent: 'space-between', 
                minHeight: { xs: 80, md: 100 }, // 💡 تم تعديل الحد الأدنى للارتفاع ليتوافق مع ارتفاع اللوجو (80px/100px)
                alignItems: 'center', // 💡 لضمان تمركز العناصر عمودياً داخل Toolbar
            }}
        >
          {/* الشعار */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <Box
                    component="img"
                    src="/assets/logo.svg"
                    alt="اللقاني للدعاية والإعلان"
                    sx={{
                        height: { xs: 80, md: 100 },
                        width: 'auto',
                        maxWidth: '100%',
                        ml: 2,                        
                    }}
                />          
            </Link>

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

      {/* 2. مكون Toolbar Spacer مُعدَّل */}
      {/* يتم تعديل ارتفاع الـ Spacer ليتناسب مع الارتفاع الجديد للهيدر */}
      <Toolbar 
            sx={{ 
                display: 'block', 
                minHeight: { xs: 80, md: 100 } // 💡 تم تعديل الارتفاع ليتطابق مع ارتفاع الـ Toolbar الثابت
            }} 
        /> 

      <BurgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}

export default Header