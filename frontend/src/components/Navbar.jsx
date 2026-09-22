import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext.jsx"

// Login trigger buttons — ask the user for their email/phone, then fire a login
// event with that value as the userId. No real auth flow.
export default function Navbar() {
  const { totalItems } = useCart()

  const handleLoginWithEmail = () => {
    const email = window.prompt('Enter your email')
    if (!email) return

    try {
      if (!window.intempt) return
      window.intempt.record({
        eventTitle: 'login',
        userId: email,
        data: { method: 'email' }
      })
    } catch (err) {
      console.error('Intempt error:', err.message)
    }
  }

  const handleLoginWithPhone = () => {
    const phone = window.prompt('Enter your phone number (with country code, e.g. +911234567890)')
    if (!phone) return

    try {
      if (!window.intempt) return
      window.intempt.record({
        eventTitle: 'login',
        userId: phone,
        data: { method: 'phone' }
      })
    } catch (err) {
      console.error('Intempt error:', err.message)
    }
  }

  // Logout trigger button — fires a logout event, then resets the SDK's identity.
  // Uses record() instead of track() because track() requires a non-empty `data`
  // object or the SDK throws (and we have nothing meaningful to attach here).
  const handleLogout = () => {
    try {
      if (!window.intempt) return
      window.intempt.record({ eventTitle: 'logout' })
      window.intempt.logOut()
    } catch (err) {
      console.error('Intempt error:', err.message)
    }
  }

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Mini Shop
      </Link>

      <div className="navbar-actions">
        <button className="btn" onClick={handleLoginWithEmail}>
          Login With Email
        </button>
        <button className="btn" onClick={handleLoginWithPhone}>
          Login With Phone Number
        </button>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <Link to="/cart" className="navbar-cart">
        Cart
        {/* Only show the badge when there is at least one item */}
        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
      </Link>
    </nav>
  )
}
