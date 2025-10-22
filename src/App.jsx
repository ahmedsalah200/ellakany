import React, { lazy, Suspense } from 'react' // 1. استيراد
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

// 3. استخدام React.lazy
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Works = lazy(() => import('./pages/Works'))
const Contact = lazy(() => import('./pages/Contact'))

// مكون بسيط يظهر أثناء تحميل الصفحة (Fallback)
const PageFallback = () => (
  <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      backgroundColor: '#f8fafc' 
    }}>
    {/* تم استخدام الـ CSS Loader الموجود لديك في global.css */}
    <div className="loading"></div>
  </div>
)


function App() {
  return (
    <>
      <ScrollToTop />
      {/* 4. لف الـ Routes بـ Suspense */}
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </Suspense>
    </>
  )
}

export default App