$(window).on('load', function() {
  $('.enableEthereumButton').on('click', () => {  
    ethereum.request({ method: 'eth_requestAccounts' });
    })
    
    let currentAccount;
    const getAccount = () => {    
      ethereum.request({ 
        method: 'eth_accounts'
      }).then((result) => {
        currentAccount = result[0];
      }).catch((e) => {
        console.log(e);
      })       
    }
    
    getAccount();

    $('.ethereumGetAccount').on('click', () => { 
      $('#account').text(currentAccount);
    })    

    
    $('.ethereumGetBalance').on('click', () => { 
      getAccount(); 
      let balance;
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
    
      
      $('.contractAddress').on('click', () =>{
        let contractAddress;
        $.get('/nftAddress', (response) => {
          contractAddress = response;
          $('#contaddress').text(contractAddress)
        })
      })
  
      $('.nftName').on('click', () => {
        let NftName;
        $.get('/nftName', (response) => {
          NftName = response;
          $('#name').text(NftName);
        })
      })
  
      $('.nftSymbol').on('click', () => {
        let NftSymbol;
        $.get('/nftSymbol', (response) => {
          NftSymbol = response;
          $('#symbol').text(NftSymbol);
  
        })
      })
      
      $('.contractOwner').on('click', () => {
        let contractOwner;
        $.get('/contOwner', (response) => {
          contractOwner = response;
          $('#contOwner').text(contractOwner);
        })
      })
  
      $('#mint').on('click', () => {
        getAccount();
        let accountTo = $('#Mintreceiver').val();     
        $.post('/mint', { accountTo: accountTo, currentAccount: currentAccount }, (response) => {
          if(response.tx == null){
            $('#txMint').text(response);
          } else {
            $('#txMint').text(response.tx); 
          }        
        })
      })
  
      
      $('.balandeOf').on('click', () => {
        let tokenOwned;
        let tokenOwner = $('#tokenOwnerAddress').val();
        $.post('/balanceOf', { tokenOwner: tokenOwner}, (response) => {
          tokenOwned = response;        
          $('#tokenQtty').text(tokenOwned);
        })
      })
      
      $('.ownerOf').on('click', () => {
        let ownerOf;
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
        let currentAccount = getAccount();
        $.post('/safeTransferFrom', { accountFrom: accountFrom, accountTo: accountTo, tokenId: tokenId, currentAccount: currentAccount}, (response) => {
          if(response.tx == null){
            $('#txTransfer').text(response);
          } else {
            $('#txTransfer').text(response.tx); 
          }
        })
      })
  
      $('#approveTo').on('click', () => {
        let approveTo = $('#approveAccountTo').val();
        let tokenId = $('#approveTokenId').val();
        let currentAccount = ethereum.request({ 
          method: 'eth_accounts'
        }).then((result) => {
          currentAccount = result[0];
          console.log(currentAccount);
        }).catch((e) => {
          console.log(e);
        })
        $.post('/approveTo', { approveTo: approveTo, tokenId: tokenId, currentAccount: currentAccount}, (response) => {
          if(response.tx == null){
            $('#txApprove').text(response);
          } else {
            $('#txApprove').text(response.tx); 
          }
        })
      })  
})



  