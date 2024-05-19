const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'yourdatabase'
});

db.connect(err => {
    if (err) {
        console.log('Database connection error:', err);
    } else {
        console.log('Database connected');
    }
});

// CRUD endpoints
app.post('/api/create', (req, res) => {
    const { name, email, phoneNumber, dob } = req.body;
    const sql = 'INSERT INTO users (name, email, phoneNumber, dob) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, email, phoneNumber, dob], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send({ message: 'User added', userId: result.insertId });
    });
});

app.get('/api/users', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(results);
    });
});

app.put('/api/update/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, phoneNumber, dob } = req.body;
    const sql = 'UPDATE users SET name = ?, email = ?, phoneNumber = ?, dob = ? WHERE id = ?';
    db.query(sql, [name, email, phoneNumber, dob, id], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send({ message: 'User updated' });
    });
});

app.delete('/api/delete/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send({ message: 'User deleted' });
    });
});
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

const PORT = 5001;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});