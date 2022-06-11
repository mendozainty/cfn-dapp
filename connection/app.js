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
const web3 = new Web3(); 

CFN_connect = {
  
  loadWeb3: async () => {    
      if (typeof web3 !== 'undefined') {
        CFN_connect.web3Provider = web3.currentProvider
        web3 = new Web3(web3.currentProvider)
      } else {
        window.alert("Please connect to Metamask.")
      }
      if (window.ethereum) {
        window.web3 = new Web3(ethereum)
        try {
          // Request account access if needed
          await ethereum.enable()
          // Acccounts now exposed
          // web3.eth.sendTransaction({/* ... */})
        } catch (error) {
          // User denied account access...
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        CFN_connect.web3Provider = web3.currentProvider
        window.web3 = new Web3(web3.currentProvider)
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */})
      }
      // Non-dapp browsers...
      else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
      }    
  },  
    
  start: () => {
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

  getName: () => {
        
    CFN.setProvider(Web3.givenProvider || 'http://127.0.0.1:7545');

    var CFN_instance;
    CFN.deployed().then(function(instance){
      CFN_instance = instance;
      return CFN_instance.name.call();
    }).then((result) => {
      console.log(result);
    })
  },

  getSymbol: () => {

    CFN.setProvider(Web3.givenProvider || 'http://127.0.0.1:7545');
    var CFN_instance;
    CFN.deployed().then((instance) => {
      CFN_instance = instance;
      return CFN_instance.symbol.call();
    }).then((result) => {
      console.log(result);
    })
  },

  getContractOwner: () => {
    CFN.setProvider(Web3.givenProvider || 'http://127.0.0.1:7545');
    var CFN_instance;
    CFN.deployed().then((instance) => {
      CFN_instance = instance;
      return CFN_instance._contractOwner.call();
    }).then((result) => {
      console.log(result);
    })
  },

  balandeOf: () => {
    CFN.setProvider(Web3.givenProvider || 'http://127.0.0.1:7545');
    var CFN_instance;
    CFN.deployed().then((instance) => {
      CFN_instance = instance;
      return CFN_instance.balanceOf.call(account_2);
    }).then((value) => {
      console.log(value.toNumber());
    })
  },

  safeMint: () => {
    CFN.setProvider(Web3.givenProvider || 'http://127.0.0.1:7545');
    var CFN_instance;
    CFN.deployed().then((instance) => {
      CFN_instance = instance;
      return CFN_instance.safeMint(account_3, {from: account_1});
    }).then((result) => {
      console.log(result);
    })
  },

  ownerOf: () => {
    CFN.setProvider(Web3.givenProvider || 'http://127.0.0.1:7545');
    var CFN_instance;
    CFN.deployed().then((instance) => {
      CFN_instance = instance;
      return CFN_instance.ownerOf.call(1);
    }).then((result) => {
      console.log(result);
    })
  },

  approve: () => {
    CFN.setProvider(Web3.givenProvider || 'http://127.0.0.1:7545');
    var CFN_instance;
    CFN.deployed().then((instance) => {
      CFN_instance = instance;
      return CFN_instance.approve(account_4, 2, {from: account_3});
    }).then((result) => {
      console.log(result);
    })
  },

  safeTransferFrom: () => {
    CFN.setProvider(Web3.givenProvider || 'http://127.0.0.1:7545');
    var CFN_instance;
    CFN.deployed().then((instance) => {
      CFN_instance = instance;
      return CFN_instance.safeTransferFrom(account_4, account_2, 1, {from: account_3});
    }).then((result) => {
      console.log(result);
    })
  },

  burnCFN: () => {
    CFN.setProvider(Web3.givenProvider || 'http://127.0.0.1:7545');
    var CFN_instance;
    CFN.deployed().then((instance) => {
      CFN_instance = instance;
      return CFN_instance._burnCFN( 1, {from: account_4});
    }).then((result) => {
      console.log(result);
    })
  },

  getApproved: () => {
    CFN.setProvider(Web3.givenProvider || 'http://127.0.0.1:7545');
    var CFN_instance;
    CFN.deployed().then((instance) => {
      CFN_instance = instance;
      return CFN_instance.getApproved.call(2);
    }).then((result) => {
      console.log(result);
    })
  },

  supportsInterfaceID: () => {
    CFN.setProvider(Web3.givenProvider || 'http://127.0.0.1:7545');
    var CFN_instance;
    CFN.deployed().then((instance) => {
      CFN_instance = instance;
      return CFN_instance.supportsInterface.call(intefaceIERC165);
    }).then((result) => {
      console.log(result);
    })
  }
}

module.exports = { CFN_connect };
console.log(CFN_connect);





