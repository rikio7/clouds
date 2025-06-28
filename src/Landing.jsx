import { Link } from 'react-router-dom'


export default function Landing() {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <h1 className="logo">Clouds</h1>
        <div className="nav-links">
          <Link to="/login" className="nav-btn">Login</Link>
          <Link to="/register" className="nav-btn">Register</Link>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-text">
          <h2>Secure Cloud Storage for Everyone</h2>
          <p>Upload, manage, and access your files from anywhere with confidence and speed.</p>
          <div className="cta-buttons">
            <Link to="/register" className="btn-primary">Get Started</Link>
            <Link to="/login" className="btn-secondary">Already have an account?</Link>
          </div>
        </div>
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1607083201483-460f74c0dd09?auto=format&fit=crop&w=1170&q=80"
          alt="Cloud storage visual"
        />
      </header>
    </div>
  )
}
