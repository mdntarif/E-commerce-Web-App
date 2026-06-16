import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import ProductList from "./pages/ProductList.jsx"
import Cart from "./pages/Cart.jsx"

export default function App() {

  useEffect(() => {
    if (!window.intemptInstance) return

    try {
      window.intemptInstance.identify({
        userId: 'onboarding-tester@yourcompany.com',
        eventTitle: 'User Identified',
        userAttributes: {
          name: 'Onboarding Tester',
          plan: 'trial',
          signupDate: '2026-06-15'
        }
      })

      window.intemptInstance.group({
        accountId: 'onboarding-corp',
        eventTitle: 'Account Grouped',
        accountAttributes: {
          name: 'Onboarding Corp',
          industry: 'Technology',
          employeeCount: 50
        }
      })
    } catch (err) {
      console.error('Intempt error:', err.message)
    }
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