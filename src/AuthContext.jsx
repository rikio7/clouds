import React, { createContext, useContext, useState, useEffect } from 'react'

// Create context
const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Optionally persist login status in localStorage
  useEffect(() => {
    const storedStatus = localStorage.getItem('isLoggedIn')
    if (storedStatus === 'true') {
      setIsLoggedIn(true)
    }
  }, [])

  // Login function to call after successful login/register
  function login() {
    setIsLoggedIn(true)
    localStorage.setItem('isLoggedIn', 'true')
  }

  // Logout function
  function logout() {
    setIsLoggedIn(false)
    localStorage.removeItem('isLoggedIn')
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to use auth context easily
export function useAuth() {
  return useContext(AuthContext)
}
