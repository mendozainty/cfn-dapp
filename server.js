const express = require('express');
const bodyParser = require('body-parser');
const CFN_connect = require('./connection/app.js');
const Web3 = require(`web3`);

const port = process.env.PORT || 3000;
const app = express();
const web3 = new Web3;


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
  let accountFrom = req.body.accountFrom; 
  let contractAddress = req.body.contractAddress; 
  const safeMintEncode = web3.eth.abi.encodeFunctionCall({
    name: 'safeMint',
    type: 'function',
    inputs: [{
        type: 'address',
        name: ''
    }]
  }, [accountTo]);  
  const transactionParameters = {
    to: contractAddress,
    from: accountFrom,
    data: safeMintEncode,
  };  
 res.send(transactionParameters);
})

app.post('/burn', (req, res) => {
  let tokenId = req.body.tokenId;
  let accountFrom = req.body.currentAccount;
  let contractAddress = req.body.contractAddress;
  const _burnCFNEncode = web3.eth.abi.encodeFunctionCall({
    name: 'burn',
    type: 'function',
    inputs: [{
      type: 'uint256',
      name: 'tokenId'
    }]
  }, [tokenId]);
  const transactionParameters = {
    to: contractAddress,
    from: accountFrom,
    data: _burnCFNEncode,
  };
  res.send(transactionParameters);
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

app.post('/safeTransferFrom', (req, res) => {
  let accountFrom = req.body.accountFrom;
  let accountTo = req.body.accountTo;
  let tokenId = req.body.tokenId;
  let currentAccount = req.body.currentAccount;
  let contractAddress = req.body.contractAddress;
  const safeTransferFromEncode = web3.eth.abi.encodeFunctionCall({
    name: 'safeTransferFrom',
    type: 'function',
    inputs: [{
        type: 'address',
        name: 'from'
    },
    {
      type: 'address',
      name: 'to'
    }, {
      type: 'uint256',
      name: 'tokenId'
    }]
  }, [accountFrom, accountTo, tokenId]);  
  const transactionParameters = {
    to: contractAddress,
    from: currentAccount,
    data: safeTransferFromEncode,
  };   
  res.send(transactionParameters);  
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