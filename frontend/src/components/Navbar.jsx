import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext.jsx"

const USER_ID = 'onboarding-tester@yourcompany.com'

// Top navigation bar. Shows the shop name and a link to the cart with a count badge.
export default function Navbar() {
  const { totalItems } = useCart()

  // Login trigger buttons — fire a login event with the userId (email), no real auth flow.
  const handleLogin = (method) => {
    try {
      if (!window.intempt) return
      window.intempt.record({
        eventTitle: 'login',
        userId: USER_ID,
        data: { method }
      })
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
        <button className="btn" onClick={() => handleLogin('email')}>
          Login With Email
        </button>
        <button className="btn" onClick={() => handleLogin('phone')}>
          Login With Phone Number
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
