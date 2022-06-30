const contract = require('@truffle/contract');
const Web3 = require('web3');
const cfn_artifact = require('../build/contracts/CommFutureNFT.json');
var CFN = contract(cfn_artifact);

// var intefaceIERC721 = '0x80ac58cd';
// var intefaceIERC721Metadata = '0x5b5e139f';
// var intefaceIERC165 = '0x01ffc9a7';


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
      callback(JSON.stringify(e.data));
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
      callback(JSON.stringify(e.data));
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
      callback(JSON.stringify(e.data));
    })
  },

  getContractOwner: (callback) => {
    CFN.setProvider(Web3.givenProvider || 'http://127.0.0.1:7545');
    var CFN_instance;
    CFN.deployed().then((instance) => {
      CFN_instance = instance;
      return CFN_instance._contractOwner.call();
    }).then((result) => {      
      callback(result);
    }).catch((e) => {
      console.log(e);
      callback(JSON.stringify(e.data));
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
    }).catch((e) => {
      console.log(e);
      callback(JSON.stringify(e.data))
    })
  },

  safeMint: (accountTo, currentAccount, callback) => {
    CFN.setProvider(Web3.givenProvider || 'http://127.0.0.1:7545');
    var CFN_instance;
    CFN.deployed().then((instance) => {
      CFN_instance = instance;
      return CFN_instance.safeMint(accountTo, {from: currentAccount});
    }).then((result) => {      
      callback(result);
    }).catch((e) => {
      callback(JSON.stringify(e.data));
    })
  },

  ownerOf: (tokenId, callback) => {
    CFN.setProvider(Web3.givenProvider || 'http://127.0.0.1:7545');
    var CFN_instance;
    CFN.deployed().then((instance) => {
      CFN_instance = instance;
      return CFN_instance.ownerOf.call(tokenId);
    }).then((result) => {      
      callback(result);
    }).catch((e) => {      
      callback(JSON.stringify(e.data));
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
      callback(JSON.stringify(e.data));
    })
  },

  safeTransferFrom: (accountFrom, accountTo, tokenId, currentAccount, callback) => {
    CFN.setProvider(Web3.givenProvider || 'http://127.0.0.1:7545');
    var CFN_instance;
    CFN.deployed().then((instance) => {
      CFN_instance = instance;
      return CFN_instance.safeTransferFrom(accountFrom, accountTo, tokenId, {from: currentAccount});
    }).then((result) => {
      callback(result);
    }).catch((e) => {      
      callback(JSON.stringify(e.data));
    })
  },

  burnCFN: (tokenId, currentAccount, callback) => {
    CFN.setProvider(Web3.givenProvider || 'http://127.0.0.1:7545');
    var CFN_instance;
    CFN.deployed().then((instance) => {
      CFN_instance = instance;
      return CFN_instance.burn( tokenId, {from: currentAccount});
    }).then((result) => {      
        console.log(result);
        callback(result);      
    }).catch((e) => {
      console.log(e);
      callback(JSON.stringify(e.data));
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
      callback(JSON.stringify(e.data));
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
      callback(JSON.stringify(e.data));
    })
  }
}


//console.log(CFN_connect);





