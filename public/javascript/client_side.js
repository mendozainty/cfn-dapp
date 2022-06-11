
$(window).on('load', function() {
  const ethereumButton = document.querySelector('.enableEthereumButton');
  const getAccountButton = document.querySelector('.ethereumGetAccount');
  const getAccBalance = document.querySelector('.ethereumGetBalance');
  const getContractAddress = document.querySelector('.contractAddress');
  const getNftName = document.querySelector('.nftName');
  const getNftSymbol = document.querySelector('.nftSymbol');
  const getContractOwner = document.querySelector('.contractOwner');

  
  ethereumButton.addEventListener('click', () => {  
  ethereum.request({ method: 'eth_requestAccounts' });
  })
  
  let currentAccount;
  getAccountButton.addEventListener('click', () => {
    ethereum.request({ 
      method: 'eth_accounts'
    }).then((result) => {
      currentAccount = result[0];      
      $('#account').text(currentAccount);
    }).catch((e) => {
      console.log(e);
    })
  })
  
    let balance;
    getAccBalance.addEventListener('click', () => {
      ethereum.request({
        method: 'eth_getBalance',
        params: [currentAccount]
      }).then((value) => {
        balance = parseInt(value);
        $('#balance').text(balance);
      }).catch((e) => {
        console.log(e);
      })
    })
  
    let contractAddress;
    getContractAddress.addEventListener('click', () =>{
      $.get('/nftAddress', (response) => {
        contractAddress = response;
        $('#contaddress').text(contractAddress)
      })
    })

    let NftName;
    getNftName.addEventListener('click', () => {
      $.get('/nftName', (response) => {
        NftName = response;
        $('#name').text(NftName);
      })
    })

    let NftSymbol;
    getNftSymbol.addEventListener('click', () => {
      $.get('/nftSymbol', (response) => {
        NftSymbol = response;
        $('#symbol').text(NftSymbol);

      })
    })

    let contractOwner;
    getContractOwner.addEventListener('click', () => {
      $.get('/contOwner', (response) => {
        contractOwner = response;
        $('#contOwner').text(contractOwner);
      })
    })


  });


    // if (typeof web3 !== 'undefined') {
    //   CFN_connect.web3Provider = web3.currentProvider
    //   web3 = new Web3(web3.currentProvider)
    // } else {
    //   window.alert("Please connect to Metamask.")
    // }
    // if (window.ethereum) {
    //   window.web3 = new Web3(ethereum)
    //   console.log('connected to ethereum');      
    // }
    // // Legacy dapp browsers...
    // else if (window.web3) {
    //   CFN_connect.web3Provider = web3.currentProvider
    //   window.web3 = new Web3(web3.currentProvider)
    //   // Acccounts always exposed
    //   web3.eth.sendTransaction({/* ... */})
    // }
    // // Non-dapp browsers...
    // else {
    //   console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
    // }
 

  