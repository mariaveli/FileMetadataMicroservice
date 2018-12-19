
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// require and use "multer"...

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.use(require('./controller/fmmController'));


app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.get('/hello', function(req, res){
    res.json({greetings: "Hello, API"});
});

app.listen(3004, function () {
    console.log('Node.js listening ...');
});
