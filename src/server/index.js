const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const DIST_DIR = path.join(__dirname, '../../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW

const exampleObject = {
    usuario: "Velryba",
    post: "Nuevo Mundo"
};

app.use(express.static(DIST_DIR));
app.get('/api', (req, res) => { 
    res.send(exampleObject);
});

app.get('/', (req, res) => {
    res.sendFile(HTML_FILE); // EDIT
});

app.listen(port, function() {
    console.log(`App escuchando en el puerto ${port}`);
});