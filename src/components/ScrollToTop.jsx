import { useState, useEffect } from 'react'
import { Fab } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  // إظهار/إخفاء الزر عند التمرير
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // التمرير للأعلى
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <Fab
          onClick={scrollToTop}
          color="primary"
          size="medium"
          aria-label="العودة للأعلى"
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 1000,
            boxShadow: 3,
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: 6,
            },
            transition: 'all 0.3s ease'
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      )}
    </>
  )
}

export default ScrollToTop