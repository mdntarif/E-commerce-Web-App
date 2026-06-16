import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard.jsx"

// Base URL of the Express backend.
const API_URL = import.meta.env.PROD ? "" : "http://localhost:5000"

// Product listing page: fetches products from the backend and shows them in a grid.
export default function ProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch products once when the page first loads.
  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load products")
        return res.json()
      })
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="status-text">Loading products...</p>
  if (error)
    return (
      <p className="status-text">
        {error}. Make sure the backend is running on {API_URL}.
      </p>
    )

  return (
    <section>
      <h1 className="page-title">Products</h1>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
