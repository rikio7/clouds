// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import { AuthProvider, useAuth } from './AuthContext'
// import Login from './Login'
// import Register from './Register'
// import Home from './Home'

// function ProtectedRoute({ children }) {
//   const { isLoggedIn } = useAuth()
//   return isLoggedIn ? children : <Navigate to="/login" />
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
//           <Route path="*" element={<Navigate to="/login" />} />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   )
// }

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './AuthContext'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import Landing from './Landing' // 👈 Import Landing page

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth()
  return isLoggedIn ? children : <Navigate to="/login" />
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} /> {/* 👈 Landing as default */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/" />} /> {/* 👈 Redirect unknown routes to landing */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
