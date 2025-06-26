import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('http://15.222.64.84:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.ok) {
        login()           // Mark user as logged in in your auth context
        navigate('/home') // Redirect to dashboard/home page
      } else {
        setError(data.message || 'Login failed')
      }
    } catch (err) {
      setError('Network error: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={handleLogin} className="form-box">
        <h2>Login to Clout</h2>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" className="btn login-btn" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>

        {error && <p style={{ color: 'red', marginTop: '0.5rem' }}>{error}</p>}

        <p className="form-link">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  )
}
