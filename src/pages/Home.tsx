import CTA from '../components/CTA'
import ContactCTA from '../components/ContactCTA'
import CustomersCTA from '../components/CustomersCTA'
import Hero from '../components/Hero'
import Products from './Hoodies'

const Home = () => {
  return (
  <>
  <Hero/>
  <CustomersCTA/>
  <Products/>
  <CTA/>
  <ContactCTA/>
  </>
  )
}

export default Home