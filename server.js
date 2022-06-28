const express = require('express');
const bodyParser = require('body-parser');
const CFN_connect = require('./connection/app.js');

const port = process.env.PORT || 3000;
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
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

app.post('/mint', (req, res) => {
  let accountTo = req.body.accountTo;
  let currentAccount = req.body.currentAccount;
  CFN_connect.safeMint(accountTo, currentAccount, (callback) => {    
    res.send(callback);
  })

})

app.post('/balanceOf', (req, res) => {
  let tokenOwner = req.body.tokenOwner;
  CFN_connect.balandeOf(tokenOwner, (callback) => {
    res.send(callback.toString());
  })
})

app.post('/ownerOf', (req, res) => {
  let tokenId = req.body.tokenId;
  CFN_connect.ownerOf(tokenId, (callback) => {
    res.send(callback);
  })
})

//accountFrom: accountFrom, accountTo: accountTo, tokenId: tokenId, currentAccount: currentAccount

app.post('/safeTransferFrom', (req, res) => {
  let accountFrom = req.body.accountFrom;
  let accountTo = req.body.accountTo;
  let tokenId = req.body.tokenId;
  let currentAccount = req.body.currentAccount;
  CFN_connect.safeTransferFrom(accountFrom, accountTo, tokenId, currentAccount, (callback) => {
    res.send(callback);
  })
})

app.post('/approveTo', (req, res) => {
  let approveTo = req.body.approveTo;
  let tokenId = req.body.tokenId;
  let currentAccount = req.body.currentAccount;
  CFN_connect.approve(approveTo, tokenId, currentAccount, (callback) => {
    res.send(callback);
  })
})

app.listen(port, () => {
  console.log((`Running on ${port}`));
})