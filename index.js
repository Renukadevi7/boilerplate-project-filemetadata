var express = require('express');
var cors = require('cors');
require('dotenv').config()
const multer = require('multer');
var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

const upload = multer({ dest: './public/data/uploads' })


app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


// method="POST" action="/api/fileanalyse"

app.post('/api/fileanalyse' , upload.single('upfile') , (req,res) => {
 //  res.json(req.file)
 const { originalname, mimetype, size } = req.file;
 res.json({
  name: originalname,
  type: mimetype,
  size,
 })
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
