const contract = require('@truffle/contract');
const Web3 = require('web3');
const cfn_artifact = require('../build/contracts/CommFutureNFT.json');
var CFN = contract(cfn_artifact);

 

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

getDeployed();