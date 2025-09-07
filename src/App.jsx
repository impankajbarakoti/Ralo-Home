import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeMain from './Components/HomeMain'
import Footer from './Components/Footer'
import Navigation from './Components/Navigation'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import BlogDetails from './Pages/BlogDeatils'
import Blogs from './Pages/Blogs'

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<Blogs/>} />
        <Route path="/blog/:id" element={<BlogDetails/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
