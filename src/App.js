import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import Product from './Pages/Product/Product'
import ProductDetail from './Pages/Product/ProductDetail'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import { Routes, Route, Navigate } from 'react-router-dom'
import Cart from './Pages/Cart/Cart'
import Checkout from './Pages/Checkout/Checkout'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
