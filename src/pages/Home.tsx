import CTA from '../components/CTA'
import ContactCTA from '../components/ContactCTA'
import CustomersCTA from '../components/CustomersCTA'
import Hero from '../components/Hero'
import TopProducts from './TopProducts'

const Home = () => {
  return (
  <>
  <Hero/>
  <CustomersCTA/>
  <TopProducts/>
  <CTA/>
  <ContactCTA/>
  </>
  )
}

export default Home