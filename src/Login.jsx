import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    login()
    navigate('/home')
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={handleLogin} className="form-box">
        <h2>Login to Clout</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="btn login-btn">Login</button>
        <p className="form-link">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  )
}
