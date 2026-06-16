import { createContext, useContext, useState } from "react"

// React Context lets us share the cart state across all components
// without passing props down manually at every level.
const CartContext = createContext()

// Custom hook so components can easily read/update the cart: const { ... } = useCart()
export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  // cartItems is an array of products, each with an extra "quantity" field.
  const [cartItems, setCartItems] = useState([])

  // Add a product to the cart. If it already exists, just increase its quantity.
  function addToCart(product) {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id)

      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }

      return [...prevItems, { ...product, quantity: 1 }]
    })
  }

  // Change the quantity of a cart item. Removes it if quantity hits 0.
  function updateQuantity(id, newQuantity) {
    if (newQuantity <= 0) {
      removeFromCart(id)
      return
    }

    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    )
  }

  // Remove a product from the cart completely.
  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  // Total number of items (used for the navbar badge).
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  // Total price of everything in the cart.
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const value = {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    totalItems,
    totalPrice,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
