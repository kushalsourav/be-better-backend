const express = require('express');
const cors = require('cors');
const db = require('./db/db')
const app = express();

const group = require('./routes/groupRoutes');

app.use(cors());

const port = process.env.port || 3000;


app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));


app.get('/', (req, res) => {
  res.send('Hello World !')
})

app.use('/api', group)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

