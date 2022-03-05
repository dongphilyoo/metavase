import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Product from './Pages/Product'
import About from './Pages/About'
import Contact from './Pages/Contact'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
