import CTA from '../components/CTA'
import ContactCTA from '../components/ContactCTA'
import CustomersCTA from '../components/CustomersCTA'
import Hero from '../components/Hero'
import LatestProducts from '../components/LatestProducts'

const Home = () => {
  return (
  <>
  <Hero/>
  <CustomersCTA/>
  <LatestProducts/>
  <CTA/>
  <ContactCTA/>
  </>
  )
}

export default Home