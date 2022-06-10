const contract = require('@truffle/contract');
const Web3 = require('web3');
const cfn_artifact = require('../build/contracts/CommFutureNFT.json');
var CFN = contract(cfn_artifact);

function getName(callback){
  // var web3 = new Web3();
  
  CFN.setProvider(Web3.givenProvider || 'http://127.0.0.1:7545');

  var CFN_instance;
  CFN.deployed().then(function(instance){
    CFN_instance = instance;
    return CFN_instance.name.call();
  }).then((result) => {
    console.log(result);
  })
}

function getSymbol(){

  CFN.setProvider(Web3.givenProvider || 'http://127.0.0.1:7545');
  var CFN_instance;
  CFN.deployed().then((instance) => {
    CFN_instance = instance;
    return CFN_instance.symbol.call();
  }).then((result) => {
    console.log(result);
  })
}

function getContractOwner(){
  CFN.setProvider(Web3.givenProvider || 'http://127.0.0.1:7545');
  var CFN_instance;
  CFN.deployed().then((instance) => {
    CFN_instance = instance;
    return CFN_instance._contractOwner.call();
  }).then((result) => {
    console.log(result);
  })
}


getName();
getSymbol();
getContractOwner()
