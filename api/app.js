const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});


const port = 3000;
app.listen(port, () => {
    console.log('server is live on port 3000')
});