
$(window).on('load', function() {
  
  const ethereumButton = document.querySelector('.enableEthereumButton');
  const getAccountButton = document.querySelector('.ethereumGetAccount');
  const getAccBalance = document.querySelector('.ethereumGetBalance');
  const getContractAddress = document.querySelector('.contractAddress');
  const getNftName = document.querySelector('.nftName');
  const getNftSymbol = document.querySelector('.nftSymbol');
  const getContractOwner = document.querySelector('.contractOwner');
  const getBalanceOf = document.querySelector('.balandeOf');
  const getOwnerOf = document.querySelector('.ownerOf');
  
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

    $('#mint').on('click', () => {
      let accountTo = $('#Mintreceiver').val();
      ethereum.request({ method: 'eth_accounts'}).then((result) => {
        currentAccount = result
      });
      $.post('/mint', { accountTo: accountTo, currentAccount: currentAccount }, (response) => {
        if(response.tx == null){
          $('#txMint').text(response);
        } else {
          $('#txMint').text(response.tx); 
        }        
      })
    })

    let tokenOwned;
    getBalanceOf.addEventListener('click', () => {
      let tokenOwner = $('#tokenOwnerAddress').val();
      $.post('/balanceOf', { tokenOwner: tokenOwner}, (response) => {
        tokenOwned = response;
        console.log(tokenOwned);
        $('#tokenQtty').text(tokenOwned);
      })
    })

    let ownerOf;
    getOwnerOf.addEventListener('click', () => {
      let tokenId = $('#tokenIdOwned').val();
      $.post('/ownerOf', { tokenId: tokenId }, (response) => {
        ownerOf = response;
        $('#tokenOwner').text(ownerOf)        
      })
    })

    $('#safeTransferFrom').on('click', () => {
      let accountTo = $('#transferAccountTo').val();
      let accountFrom = $('#transferAccountFrom').val();
      let tokenId = $('#transferTokenId').val();
      $.post('/safeTransferFrom', { accountFrom: accountFrom, accountTo: accountTo, tokenId: tokenId, currentAccount: currentAccount}, (response) => {
        if(response.tx == null){
          $('#txTransfer').text(response);
        } else {
          $('#txTransfer').text(response.tx); 
        }
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
 

  