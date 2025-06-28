// // // server.js
// // const express = require('express')
// // const sqlite3 = require('sqlite3').verbose()
// // const bodyParser = require('body-parser')
// // const cors = require('cors')
// // const app = express()
// // const PORT = process.env.PORT || 3000

// // app.use(cors())
// // app.use(bodyParser.json())


// // app.get('/',(req, res) => {
// //   res.send('clouds is running!')
// // })

// // // Initialize SQLite DB
// // const db = new sqlite3.Database('./clout.db', (err) => {
// //   if (err) {
// //     console.error('Error opening database:', err.message)
// //   } else {
// //     console.log('Connected to SQLite database.')
// //     db.run(
// //       `CREATE TABLE IF NOT EXISTS users (
// //         id INTEGER PRIMARY KEY AUTOINCREMENT,
// //         email TEXT UNIQUE,
// //         password TEXT
// //       )`,
// //       (err) => {
// //         if (err) console.error('Table creation error:', err.message)
// //       }
// //     )
// //   }
// // })

// // // Register endpoint
// // app.post('/register', (req, res) => {
// //   const { email, password } = req.body
// //   if (!email || !password) {
// //     return res.status(400).json({ error: 'Email and password required' })
// //   }
// //   const sql = 'INSERT INTO users (email, password) VALUES (?, ?)'
// //   db.run(sql, [email, password], function (err) {
// //     if (err) {
// //       return res.status(400).json({ error: 'User already exists' })
// //     }
// //     res.json({ message: 'User registered', userId: this.lastID })
// //   })
// // })

// // // Login endpoint
// // app.post('/login', (req, res) => {
// //   const { email, password } = req.body
// //   if (!email || !password) {
// //     return res.status(400).json({ error: 'Email and password required' })
// //   }
// //   const sql = 'SELECT * FROM users WHERE email = ? AND password = ?'
// //   db.get(sql, [email, password], (err, row) => {
// //     if (err) return res.status(500).json({ error: err.message })
// //     if (!row) return res.status(401).json({ error: 'Invalid credentials' })
// //     res.json({ message: 'Login successful', userId: row.id })
// //   })
// // })

// // // Start server
// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`)
// // })


// const express = require('express')
// const sqlite3 = require('sqlite3').verbose()
// const bodyParser = require('body-parser')
// const cors = require('cors')

// const app = express()
// const PORT = process.env.PORT || 3000

// app.use(cors())
// app.use(bodyParser.json())

// app.get('/', (req, res) => {
//   res.send('clout is running!')
// })

// // Initialize SQLite DB
// const db = new sqlite3.Database('./clout.db', (err) => {
//   if (err) {
//     console.error('Error opening database:', err.message)
//   } else {
//     console.log('Connected to SQLite database.')
//     db.run(
//       `CREATE TABLE IF NOT EXISTS users (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         email TEXT UNIQUE,
//         password TEXT
//       )`,
//       (err) => {
//         if (err) console.error('Table creation error:', err.message)
//       }
//     )
//   }
// })

// // Register endpoint
// app.post('/register', (req, res) => {
//   const { email, password } = req.body
//   if (!email || !password) {
//     return res.status(400).json({ message: 'Email and password required' })
//   }
//   const sql = 'INSERT INTO users (email, password) VALUES (?, ?)'
//   db.run(sql, [email, password], function (err) {
//     if (err) {
//       return res.status(400).json({ message: 'User already exists' })
//     }
//     res.json({ message: 'User registered', userId: this.lastID })
//   })
// })

// // Login endpoint
// // app.post('/login', (req, res) => {
// //   console.log('Login request:', req.body)
// //   const { email, password } = req.body
// //   if (!email || !password) {
// //     return res.status(400).json({ message: 'Email and password required' })
// //   }
// //   const sql = 'SELECT * FROM users WHERE email = ? AND password = ?'
// //   db.get(sql, [email, password], (err, row) => {
// //     if (err) return res.status(500).json({ message: err.message })
// //     if (!row) return res.status(401).json({ message: 'Invalid credentials' })
// //     res.json({ message: 'Login successful', userId: row.id })
// //   })
// // })

// // app.post('/login', (req, res) => {
// //   console.log('Login request body:', req.body)  // <-- Add this line

// //   const { email, password } = req.body
// //   if (!email || !password) {
// //     return res.status(400).json({ message: 'Email and password required' })
// //   }
// //   const sql = 'SELECT * FROM users WHERE email = ? AND password = ?'
// //   db.get(sql, [email, password], (err, row) => {
// //     if (err) {
// //       console.error('DB error:', err)  // <-- Also good to log DB errors
// //       return res.status(500).json({ message: err.message })
// //     }
// //     if (!row) return res.status(401).json({ message: 'Invalid credentials' })
// //     res.json({ message: 'Login successful', userId: row.id })
// //   })
// // })



// // app.post('/login', (req, res) => {
// //   const { email, password } = req.body

// //   if (!email || !password) {
// //     // Always respond with JSON
// //     return res.status(400).json({ message: 'Email and password required' })
// //   }

// //   const sql = 'SELECT * FROM users WHERE email = ? AND password = ?'
// //   db.get(sql, [email, password], (err, row) => {
// //     if (err) {
// //       console.error('DB error:', err)
// //       return res.status(500).json({ message: 'Internal server error' })
// //     }
// //     if (!row) {
// //       return res.status(401).json({ message: 'Invalid credentials' })
// //     }
// //     // Success: respond with JSON data
// //     res.json({ message: 'Login successful', userId: row.id })
// //   })
// // })


// app.post('/login', (req, res) => {
//   console.log('Login request:', req.body)
//   const { email, password } = req.body
//   if (!email || !password) {
//     return res.status(400).json({ message: 'Email and password required' })
//   }

//   const sql = 'SELECT * FROM users WHERE email = ? AND password = ?'
//   db.get(sql, [email, password], (err, row) => {
//     if (err) {
//       console.error('DB error:', err)
//       return res.status(500).json({ message: err.message })
//     }
//     if (!row) {
//       console.log('No user found for:', email)
//       return res.status(401).json({ message: 'Invalid credentials' })
//     }
//     console.log('User logged in:', row.email)
//     res.json({ message: 'Login successful', userId: row.id })
//   })
// })


// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })

const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(cors())
app.use(bodyParser.json())

// SQLite database setup
const dbPath = path.resolve(__dirname, 'clout.db')
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('❌ Failed to open database:', err.message)
  } else {
    console.log('✅ Connected to SQLite database.')

    db.run(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE,
        password TEXT
      )`,
      (err) => {
        if (err) console.error('❌ Failed to create users table:', err.message)
        else console.log('✅ Users table ready.')
      }
    )
  }
})

// Health check route
app.get('/', (req, res) => {
  res.send('✅ Clout backend is running!')
})

// Register endpoint
app.post('/register', (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' })
  }

  const sql = 'INSERT INTO users (email, password) VALUES (?, ?)'
  db.run(sql, [email, password], function (err) {
    if (err) {
      console.error('Register error:', err.message)
      return res.status(400).json({ message: 'User already exists or DB error' })
    }
    res.status(201).json({ message: 'User registered', userId: this.lastID })
  })
})

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' })
  }

  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?'
  db.get(sql, [email, password], (err, row) => {
    if (err) {
      console.error('Login DB error:', err.message)
      return res.status(500).json({ message: 'Internal server error' })
    }

    if (!row) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    res.status(200).json({ message: 'Login successful', userId: row.id })
  })
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://0.0.0.0:${PORT}`)
})
