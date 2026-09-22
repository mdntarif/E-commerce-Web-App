import { createContext, useContext, useState } from "react"

// Tracks whatever the user typed into the Login With Email / Login With Phone
// Number prompts, so other components (like the Purchase button) can reuse it
// as the userId for their own Intempt events.
const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [userId, setUserId] = useState(null)

  const value = { userId, setUserId }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
