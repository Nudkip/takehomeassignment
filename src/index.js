const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const multer = require('multer');
const upload = multer();
const router = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(upload.array());
app.use('/images', express.static(path.join(__dirname, 'uploads')));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use('/', router);

app.listen(80, () => {
    console.log('Server running at port 80');
});
