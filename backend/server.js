const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const PORT = 8081;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON payloads

// Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test',
});

// Connect to the Database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.message);
    } else {
        console.log('Connected to the MySQL database.');
    }
});

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Backend API' });
});

// Get all users
app.get('/users', (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Database query failed' });
        }
        res.json(results);
    });
});

app.post('/users', (req, res) => {
    const { username, email, password } = req.body;

    // Validate input
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if the email already exists
    const checkEmailSql = "SELECT * FROM users WHERE email = ?";
    db.query(checkEmailSql, [email], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Database query failed' });
        }

        if (results.length > 0) {
            return res.status(409).json({ error: 'Email already exists' }); // Conflict error
        }

        // Proceed to insert the new user
        const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        db.query(sql, [username, email, password], (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ error: 'Failed to insert user' });
            }
            res.status(201).json({ message: 'User  added successfully', userId: result.insertId });
        });
    });
});

// Handle 404 Errors
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
