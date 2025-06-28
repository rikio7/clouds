import { Link } from 'react-router-dom'
import styles from './Landing.module.css'

export default function Landing() {
  return (
    <div className={styles.landingWrapper}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Clout</div>
        <div className={styles.navLinks}>
          <Link to="/login" className={styles.navLink}>Login</Link>
          <Link to="/register" className={styles.navLink}>Register</Link>
        </div>
      </nav>

      <header className={styles.heroSection}>
        <h1>Welcome to Clout</h1>
        <p>Your secure cloud file sharing platform</p>
        <img 
          className={styles.heroImage}
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" 
          alt="Cloud storage" 
        />
      </header>
    </div>
  )
}
