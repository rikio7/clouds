import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'

export default function Home() {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const [files, setFiles] = useState([])

  const handleUpload = (e) => {
    const uploaded = Array.from(e.target.files)
    setFiles((prev) => [...prev, ...uploaded])
  }

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header" style={{flexDirection: 'column',alignItems:'center', gap:'1rem'}}>
        <h1>My Files</h1>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <label className="btn upload-btn" style={{ cursor: 'pointer' }}>
            Upload File
            <input type="file" hidden onChange={handleUpload} />
          </label>
          <button className="btn delete-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="file-grid">
        {files.length === 0 && <p>No files uploaded.</p>}
        {files.map((file, i) => (
          <div key={i} className="file-card">
            <h2>{file.name}</h2>
            <p>{(file.size / 1024).toFixed(2)} KB</p>
            <p className="uploaded-date">Uploaded: {new Date().toLocaleDateString()}</p>
            <div className="file-actions">
              <button className="btn download-btn">Download</button>
              <button className="btn delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
