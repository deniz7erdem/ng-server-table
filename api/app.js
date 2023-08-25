const express = require('express');
const cors = require('cors');
const pg = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/api/user', async (req, res) => {
    try {
        const { pageNo, perPage } = req.body;
        const offset = (pageNo - 1) * perPage;
        const user = await pg.query('SELECT * FROM public."user" LIMIT $1 OFFSET $2', [perPage, offset]);
        const length = await pg.query('SELECT COUNT(*) FROM public."user"');
        // res.status(200);
        // res.end();
        // return;
        let data = {
            data:user.rows,
            length:length.rows[0].count
        }
        res.json(data);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: err.message });
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