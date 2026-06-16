import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import ProductList from "./pages/ProductList.jsx"
import Cart from "./pages/Cart.jsx"

export default function App() {

  useEffect(() => {
    // Task 3.7 — identify the user
    intempt('identify', {
      userId: 'onboarding-tester@yourcompany.com',
      userAttributes: {
        name: 'Onboarding Tester',
        plan: 'trial',
        signupDate: '2026-06-15'
      }
    })

    // Task 3.8 — group the user into an account
    intempt('group', {
      accountId: 'onboarding-corp',
      accountAttributes: {
        name: 'Onboarding Corp',
        industry: 'Technology',
        employeeCount: 50
      }
    })
  }, []) // runs once when app first loads

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