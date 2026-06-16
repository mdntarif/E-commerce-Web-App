// -----------------------------------------------------------------------------
// Minimal Express backend for a simple e-commerce app.
// Data is stored in an in-memory array (resets every time the server restarts).
// -----------------------------------------------------------------------------

import express from "express"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors()) // Allow the React frontend (different port) to call this API
app.use(express.json()) // Parse incoming JSON request bodies

// -----------------------------------------------------------------------------
// In-memory "database" of products.
// In a real app this would live in a database like Postgres or MongoDB.
// -----------------------------------------------------------------------------
let products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80",
  },
  {
    id: 5,
    name: "Wireless Mouse",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80",
  },
  {
    id: 6,
    name: "USB-C Charger",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80",
  },
]

// Keeps track of the next id to assign when adding a product.
let nextId = products.length + 1

// -----------------------------------------------------------------------------
// Routes
// -----------------------------------------------------------------------------

// Health check (handy to confirm the server is running)
app.get("/", (req, res) => {
  res.send("E-commerce API is running. Try GET /api/products")
})

// GET /api/products  ->  return all products
app.get("/api/products", (req, res) => {
  res.json(products)
})

// POST /api/products  ->  add a new product
// Expects a JSON body: { "name": "...", "price": 12.99, "image": "..." }
app.post("/api/products", (req, res) => {
  const { name, price, image } = req.body

  // Basic validation
  if (!name || price === undefined) {
    return res.status(400).json({ error: "name and price are required" })
  }

  const newProduct = {
    id: nextId++,
    name,
    price: Number(price),
    image: image || "https://via.placeholder.com/500x500?text=No+Image",
  }

  products.push(newProduct)
  res.status(201).json(newProduct)
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
