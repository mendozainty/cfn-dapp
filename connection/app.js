const contract = require('@truffle/contract');
const Web3 = require('web3');
const cfn_artifact = require('../build/contracts/CommFutureNFT.json');
var CFN = contract(cfn_artifact);

var account_1 = '0x28eE29B6C1350A462D25F2fC602F3C4a3c01aD61';
var account_2 = '0x77bb8794Aa0fC9f4CFef02a8cEDD4084225dA509';
var account_3 = '0x68E54E1b0F516ceE62f6F3675d344Fe0016D5603';
var account_4 = '0xA8F73a405CDC2873A3c6898eefE73e87a20A8467';

var intefaceIERC721 = '0x80ac58cd';
var intefaceIERC721Metadata = '0x5b5e139f';
var intefaceIERC165 = '0x01ffc9a7';


module.exports = {     
  start: (callback) => {
    var web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');
    var self = this;
    web3.eth.getAccounts(function(err, accs) {
      if (err != null) {
        console.log("There was an error fetching your accounts.");
        return;
      }
      if (accs.length == 0) {
        console.log("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }
      self.accounts = accs;
      self.account = self.accounts[0];
      callback(self.accounts);
    })
  },

  getAddress: (callback) => {
    CFN.setProvider(Web3.givenProvider  || 'http://127.0.0.1:7545');
    var CFN_instance;
    CFN.deployed().then(function(instance){
      CFN_instance = instance;
      return CFN_instance.address;
    }).then((result) => {
      callback(result);
    }).catch((e) => {
      console.log(e);
      callback('Error 404');
    })
  },

  getName: (callback) => {        
    CFN.setProvider(Web3.givenProvider  || 'http://127.0.0.1:7545');
    var CFN_instance;
    CFN.deployed().then(function(instance){
      CFN_instance = instance;
      return CFN_instance.name.call();
    }).then((result) => {      
      callback(result);
    }).catch((e) => {
      console.log(e);
      callback('Error 404');
    })
  },

  getSymbol: (callback) => {
    CFN.setProvider(Web3.givenProvider || 'http://127.0.0.1:7545');
    var CFN_instance;
    CFN.deployed().then((instance) => {
      CFN_instance = instance;
      return CFN_instance.symbol.call();
    }).then((result) => {      
      callback(result);
    }).catch((e) => {
      console.log(e);
      callback('Error 404');
    })
  },

  getContractOwner: (callback) => {
    CFN.setProvider(Web3.givenProvider || 'http://127.0.0.1:7545');
    var CFN_instance;
    CFN.deployed().then((instance) => {
      CFN_instance = instance;
      return CFN_instance._contractOwner.call();
    }).then((result) => {
      console.log(result);
      callback(result);
    }).catch((e) => {
      console.log(e);
      callback('Error 404');
    })
  },

  balandeOf: (account, callback) => {
    CFN.setProvider(Web3.givenProvider || 'http://127.0.0.1:7545');
    var CFN_instance;
    CFN.deployed().then((instance) => {
      CFN_instance = instance;
      return CFN_instance.balanceOf.call(account);
    }).then((value) => {
      callback(value.toNumber());
      console.log(value.toNumber());
    }).catch((e) => {
      console.log(e);
      callback('Error 404')
    })
  },

  safeMint: (accountTo, currentAccount, callback) => {
    CFN.setProvider(Web3.givenProvider || 'http://127.0.0.1:7545');
    var CFN_instance;
    CFN.deployed().then((instance) => {
      CFN_instance = instance;
      return CFN_instance.safeMint(accountTo, {from: currentAccount});
    }).then((result) => {
      console.log(result);
      callback(result);
    }).catch((e) => {
      console.log(e);
      callback('Error 404');
    })
  },

  ownerOf: (tokenId, callback) => {
    CFN.setProvider(Web3.givenProvider || 'http://127.0.0.1:7545');
    var CFN_instance;
    CFN.deployed().then((instance) => {
      CFN_instance = instance;
      return CFN_instance.ownerOf.call(tokenId);
    }).then((result) => {
      console.log(result);
      callback(result);
    }).catch((e) => {
      console.log(e);
      callback('Error 404');
    })
  },

  approve: (approveTo, tokenId, currentAccount, callback) => {
    CFN.setProvider(Web3.givenProvider || 'http://127.0.0.1:7545');
    var CFN_instance;
    CFN.deployed().then((instance) => {
      CFN_instance = instance;
      return CFN_instance.approve(approveTo, tokenId, {from: currentAccount});
    }).then((result) => {
      console.log(result);
      callback(result);
    }).catch((e) => {
      console.log(e);
      callback('Error 404');
    })
  },

  safeTransferFrom: (accountFrom, accountTo, tokenId, currentAccount, callback) => {
    CFN.setProvider(Web3.givenProvider || 'http://127.0.0.1:7545');
    var CFN_instance;
    CFN.deployed().then((instance) => {
      CFN_instance = instance;
      return CFN_instance.safeTransferFrom(accountFrom, accountTo, tokenId, {from: currentAccount});
    }).then((result) => {
      console.log(result);
      callback(result);
    }).catch((e) => {
      console.log(e);
      callback('Error 404');
    })
  },

  burnCFN: (tokenId, currentAccount, callback) => {
    CFN.setProvider(Web3.givenProvider || 'http://127.0.0.1:7545');
    var CFN_instance;
    CFN.deployed().then((instance) => {
      CFN_instance = instance;
      return CFN_instance._burnCFN( tokenId, {from: currentAccount});
    }).then((result) => {      
        console.log(result);
        callback(result);      
    }).catch((e) => {
      console.log(e);
      callback('Error 404');
    })
  },

  getApproved: (tokenId, callback) => {
    CFN.setProvider(Web3.givenProvider || 'http://127.0.0.1:7545');
    var CFN_instance;
    CFN.deployed().then((instance) => {
      CFN_instance = instance;
      return CFN_instance.getApproved.call(tokenId);
    }).then((result) => {
      console.log(result);
      callback(result);
    }).catch((e) => {
      console.log(e);
      callback('Error 404');
    })
  },

  supportsInterfaceID: (interfaceId, callback) => {
    CFN.setProvider(Web3.givenProvider || 'http://127.0.0.1:7545');
    var CFN_instance;
    CFN.deployed().then((instance) => {
      CFN_instance = instance;
      return CFN_instance.supportsInterface.call(interfaceId);
    }).then((result) => {
      console.log(result);
      callback(result);
    }).catch((e) => {
      console.log(e);
      callback('Error 404');
    })
  }
}


//console.log(CFN_connect);





