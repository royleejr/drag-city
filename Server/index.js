const express = require('express');
const cors = require('cors');
const app = express();

const imageData = require('./data/images.json');

app.use(cors());

// middleware
app.use(express.json());


app.get('/', (req, res) => {
    res.send(imageData);
})

app.listen(8080, () => {
    console.log('server is running');
});
