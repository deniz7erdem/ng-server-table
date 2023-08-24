const express = require('express');
const cors = require('cors');
const pg = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/api/users', async (req, res) => {
    try {
        const { pageNo, perPage } = req.body;
        const offset = (pageNo - 1) * perPage;
        console.warn(offset);
        const users = await pg.query('SELECT * FROM users ORDER BY id ASC LIMIT $1 OFFSET $2', [perPage, offset]);
        res.json(users.rows);
    } catch (err) {
        console.log(err.message);
    }
});

const port = 3000;
app.listen(port, () => {
    console.log('server is live on port 3000');
    pg.connect(err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Postgresql'e başarıyla bağlanıldı.");
        }
    });
});