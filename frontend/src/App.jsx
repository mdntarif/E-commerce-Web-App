import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import ProductList from "./pages/ProductList.jsx"
import Cart from "./pages/Cart.jsx"

export default function App() {

  useEffect(() => {
    // wait for SDK to fully load before calling
    setTimeout(() => {
      if (typeof window.intempt !== 'function') return

      window.intempt('identify', {
        userId: 'onboarding-tester@yourcompany.com',
        userAttributes: {
          name: 'Onboarding Tester',
          plan: 'trial',
          signupDate: '2026-06-15'
        }
      })

      window.intempt('group', {
        accountId: 'onboarding-corp',
        accountAttributes: {
          name: 'Onboarding Corp',
          industry: 'Technology',
          employeeCount: 50
        }
      })
    }, 2000) // give SDK 2 seconds to load
  }, [])

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