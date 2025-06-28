import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  // Styles
  const containerStyle = {
    height: '100vh',
    backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    color: '#fff',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  }

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.55)',
    zIndex: 1,
  }

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 1rem',
    textAlign: 'center',
  }

  const navStyle = {
    position: 'absolute',
    top: 20,
    right: 30,
    zIndex: 3,
    display: 'flex',
    gap: '20px',
    fontWeight: '600',
    fontSize: '1rem',
  }

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    border: '2px solid white',
    transition: 'background-color 0.3s, color 0.3s',
  }

  const linkHover = {
    backgroundColor: 'white',
    color: '#111',
  }

  const [hoverLogin, setHoverLogin] = React.useState(false)
  const [hoverRegister, setHoverRegister] = React.useState(false)

  const headingStyle = {
    fontSize: '4rem',
    fontWeight: '800',
    marginBottom: '0.5rem',
    letterSpacing: '2px',
    textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
  }

  const subheadingStyle = {
    fontSize: '1.5rem',
    maxWidth: '600px',
    marginBottom: '2rem',
    fontWeight: '400',
    textShadow: '1px 1px 6px rgba(0,0,0,0.7)',
  }

  const buttonStyle = {
    padding: '1rem 3rem',
    fontSize: '1.2rem',
    fontWeight: '700',
    backgroundColor: '#1DA1F2',
    color: '#fff',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(29,161,242,0.4)',
    transition: 'background-color 0.3s',
  }

  const [hoverButton, setHoverButton] = React.useState(false)

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>

      <nav style={navStyle}>
        <Link
          to="/login"
          style={hoverLogin ? { ...linkStyle, ...linkHover } : linkStyle}
          onMouseEnter={() => setHoverLogin(true)}
          onMouseLeave={() => setHoverLogin(false)}
        >
          Login
        </Link>
        <Link
          to="/register"
          style={hoverRegister ? { ...linkStyle, ...linkHover } : linkStyle}
          onMouseEnter={() => setHoverRegister(true)}
          onMouseLeave={() => setHoverRegister(false)}
        >
          Register
        </Link>
      </nav>

      <div style={contentStyle}>
        <h1 style={headingStyle}>Welcome to Clout</h1>
        <p style={subheadingStyle}>
          Secure, fast, and easy cloud file sharing — your files, your control.
        </p>

        <Link to="/register">
          <button
            style={hoverButton ? { ...buttonStyle, backgroundColor: '#0d8ddb' } : buttonStyle}
            onMouseEnter={() => setHoverButton(true)}
            onMouseLeave={() => setHoverButton(false)}
          >
            Get Started
          </button>
        </Link>
      </div>
    </div>
  )
}
