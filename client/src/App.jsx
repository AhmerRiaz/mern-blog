import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Signup from './pages/SignUp'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute'
import CreatePost from './pages/CreatePost'
import UpdatePost from './pages/UpdatePost'
import PostPage from './pages/PostPage'

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
      <Route element={<PrivateRoute/>}>
      <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route element={<OnlyAdminPrivateRoute/>}>
      <Route path="/create-post" element={<CreatePost/>}></Route>
      <Route path="/update-post/:postId" element={<UpdatePost/>}></Route>
      </Route>
      <Route path="/projects" element={<Projects />} />
      <Route path="/post/:postSlug" element={<PostPage/>} />
    </Routes>
   <Footer/>
   </BrowserRouter>
  )
}
