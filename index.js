const express = require('express');
const bodyParser = require('body-parser');
const startDb = require("./src/configs/db");
const model = require("./src/model/chat");

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/storeLocation', (req, res) => {
    const { latitude, longitude } = req.body;
    // Store the location data on the server
    model.create({ latitude, longitude })
    console.log({ latitude, longitude })
    res.json({ message: 'Location stored successfully.' });
});

app.listen(port, () => {
    startDb()
    console.log(`Server is listening at http://localhost:${port}`);
});
