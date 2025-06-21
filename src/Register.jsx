import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'

export default function Register() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()
    login()
    navigate('/home')
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={handleRegister} className="form-box">
        <h2>Register for Clout</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="btn login-btn">Register</button>
        <p className="form-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  )
}
