const express = require('express');
const bodyParser = require('body-parser');
const CFN_connect = require('./connection/app.js');


const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/', express.static('public'))

app.get('/nftName', (req, res) => {
  CFN_connect.getName((callback) => {
    res.send(callback)
  })
})

app.get('/nftSymbol', (req, res) => {
  CFN_connect.getSymbol((callback) => {
    res.send(callback);
  })
})

app.get('/nftAddress', (req, res) => {
  CFN_connect.getAddress((callback) => {
    res.send(callback)
  })
})

app.get('/contOwner', (req, res) => {
  CFN_connect.getContractOwner((callback) => {
    res.send(callback);
  })
})

app.listen(port, () => {
  console.log((`Running on ${port}`));
})