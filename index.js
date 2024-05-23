const express = require('express')
const cors = require('cors')
const path = require('path')
const auth = require('./routes/auth')
const list = require('./routes/list')
require('./connection/connection')

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/v1', auth)
app.use('/api/v2', list)

app.get('/', (req, res) => {
    app.use(express.static(path.resolve(__dirname, 'frontend', 'dist')));
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
})

app.listen(1000, () => {
    console.log('Server started');
})