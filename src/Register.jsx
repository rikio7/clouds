import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'

export default function Register() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleRegister = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('http://15.222.64.84:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.ok) {
        login()           // call auth context login method
        navigate('/home') // redirect to dashboard/home
      } else {
        setError(data.message || 'Registration failed')
      }
    } catch (err) {
      setError('Network error: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={handleRegister} className="form-box">
        <h2>Register for Clout</h2>
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
          {loading ? 'Registering...' : 'Register'}
        </button>

        {error && <p style={{ color: 'red', marginTop: '0.5rem' }}>{error}</p>}

        <p className="form-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  )
}
