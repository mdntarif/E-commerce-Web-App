import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext.jsx"

// Top navigation bar. Shows the shop name and a link to the cart with a count badge.
export default function Navbar() {
  const { totalItems } = useCart()

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Mini Shop
      </Link>

      <Link to="/cart" className="navbar-cart">
        Cart
        {/* Only show the badge when there is at least one item */}
        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
      </Link>
    </nav>
  )
}
