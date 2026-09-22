import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext.jsx"
import { useAuth } from "../context/AuthContext.jsx"

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, totalPrice } = useCart()
  const { userId } = useAuth()

  // Purchase trigger button — fires a purchase event using the userId from
  // whichever login button was used, no real checkout.
  const handlePurchase = () => {
    if (!userId) {
      alert('Please log in with email or phone first.')
      return
    }

    try {
      if (!window.intempt) return
      window.intempt.record({
        eventTitle: 'purchase',
        userId,
        data: { total: totalPrice, itemCount: cartItems.length }
      })
      alert('Purchase event sent! Check Intempt dashboard.')
    } catch (err) {
      console.error('Intempt error:', err.message)
    }
  }

  // Task 3.5 — fire a rich event with user info
  const handleDemoRequest = () => {
    try {
      if (!window.intempt) return
      window.intempt.record({
        eventTitle: 'demo_requested',
        userId: 'onboarding-tester@yourcompany.com',
        userAttributes: { name: 'Onboarding Tester', role: 'New Hire' },
        data: { plan: 'growth', source: 'onboarding-exercise' }
      })
      alert('Demo requested! Check Intempt dashboard.')
    } catch (err) {
      console.error('Intempt error:', err.message)
    }
  }

  if (cartItems.length === 0) {
    return (
      <section>
        <h1 className="page-title">Your Cart</h1>
        <p className="status-text">Your cart is empty.</p>
        <Link to="/" className="btn">Continue Shopping</Link>
      </section>
    )
  }

  return (
    <section>
      <h1 className="page-title">Your Cart</h1>

      <div className="cart-list">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />

            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p className="product-price">${item.price.toFixed(2)}</p>
            </div>

            <div className="quantity-controls">
              <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span className="qty-value">{item.quantity}</span>
              <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>

            <p className="cart-item-subtotal">${(item.price * item.quantity).toFixed(2)}</p>

            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <span>Total:</span>
        <strong>${totalPrice.toFixed(2)}</strong>
      </div>

      <button className="btn" style={{ marginTop: '1rem' }} onClick={handlePurchase}>
        Purchase
      </button>

      {/* Task 3.5 — Request Demo button */}
      <button className="btn" style={{ marginTop: '1rem', marginLeft: '0.5rem' }} onClick={handleDemoRequest}>
        Request Demo
      </button>
    </section>
  )
}