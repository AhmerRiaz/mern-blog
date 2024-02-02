import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Signup from './pages/SignUp'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
   <BrowserRouter>
   <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
   <Footer/>
   </BrowserRouter>
  )
}
