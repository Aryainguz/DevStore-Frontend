import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy } from 'react'
import { Suspense } from 'react'
import Loading from './pages/Loading'
import './index.css'


const Home = lazy(() => import('./pages/Home'))


function App() {

  return (
    <>
    <Router>
    <Suspense fallback={<Loading/>}>
      <Routes>
      <Route path="/" element={<Home/>} />
      </Routes>
      </Suspense>
    </Router>
    </>
  )
}

export default App
