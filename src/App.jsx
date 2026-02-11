import './App.css'
import { Navbar } from './Componnet/Navbar'
import AdminPenl from './admin/AdminPenl'
import { Routes, Route, Navigate } from 'react-router-dom'
import Herobanner from './Page/Herobanner'
import EnquiryForm from './Page/EnquiryForm'
import Infrormastion from './Page/Informastion'
import Blog from './Page/Blog'
import BlogDetails from './Page/blogDetails'
import Contact from './Page/Contact'
import About from './Page/About'
import Courses from './Page/Coures'
// Compose homepage sections into a single component
function Home() {
  return (
    <>
      <Herobanner />
      <EnquiryForm />
      <About />
      <Courses/>
      <Infrormastion />
      <Blog />
      <Contact />
    </>
  )
}
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Home renders all sections */}
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/admin" element={<AdminPenl/>}/>
      </Routes>
    </>
  )
}

export default App
