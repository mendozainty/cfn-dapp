const express = require('express');
const bodyParser = require('body-parser');
const CFN_connect = require('./connection/app');


const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/', express.static('public'))

// app.get('/', function(req, res){
//   res.sendFile(__dirname + './index.html')
// })

app.get('/dapp', function(req, res){ 

  CFN_connect.loadWeb3().then(CFN_connect.start((cb) => {
    console.log(cb);
  }))
})


app.listen(port, () => {
  console.log((`Running on ${port}`));
})