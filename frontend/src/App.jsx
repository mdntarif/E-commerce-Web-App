import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import ProductList from "./pages/ProductList.jsx"
import Cart from "./pages/Cart.jsx"

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </>
  )
}