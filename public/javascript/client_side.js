
$(() => {
  $(window).load(() => {
    $.get('/dapp', function(response){
      for(let i = 0; i < response.length; i++){
        curraccount = response[i];
        $('#options').append("<option value='"+curraccount+"'>"+curraccount+"</option>");
      }
    })
  })
})