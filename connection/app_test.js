const contract = require('@truffle/contract');
const Web3 = require('web3');
const cfn_artifact = require('../build/contracts/CommFutureNFT.json');
var CFN = contract(cfn_artifact);
const web3 = new Web3();
 

const getDeployed = () => {
  CFN.setProvider(Web3.givenProvider || 'http://127.0.0.1:7545')
  var CFN_instance;
  CFN.deployed().then((instance) => {
    CFN_instance = instance;
    return CFN_instance;
  }).then((result) => {
    console.log(result);
  })
}

const safeMintEncode = web3.eth.abi.encodeFunctionCall({
      name: 'safeMint',
      type: 'function',
      inputs: [{
          type: 'address',
          name: ''
      }]
    }, ['0x77bb8794Aa0fC9f4CFef02a8cEDD4084225dA509']);
//console.log(safeMintEncode);

const _burnCFNEncode = web3.eth.abi.encodeFunctionCall({
  name: '_burnCFN',
  type: 'function',
  inputs: [{
    type: 'uint256',
    name: 'tokenId'
  }]
}, ['1']);
console.log(_burnCFNEncode);
//0xb602e84c0000000000000000000000000000000000000000000000000000000000000001
//0xb602e84c0000000000000000000000000000000000000000000000000000000000000001
//getDeployed();

