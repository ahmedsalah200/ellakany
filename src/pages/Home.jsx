import Header from '../components/Header'
import Hero from '../components/Hero'
import FeaturedWorks from '../components/FeaturedWorks'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedWorks />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default Home