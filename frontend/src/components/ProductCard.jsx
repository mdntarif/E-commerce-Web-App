import { useCart } from "../context/CartContext.jsx"

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)

    // Task 3.3 — fire custom event when Add to Cart is clicked
    intempt('track', {
      eventTitle: 'button_clicked',
      data: { buttonName: 'add-to-cart', page: 'homepage', productName: product.name }
    })
  }

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>

        <button className="btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}