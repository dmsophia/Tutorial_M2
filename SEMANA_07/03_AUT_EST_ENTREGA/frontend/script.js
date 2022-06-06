function slideToggle(){
$('#down').click(function() {
    $('img').slideDown('fast');
  });
  
  $('#up').click(function() {
    $('img').slideUp(200);
  });
  
  $('#toggle-sliding').click(function() {
    $('img').slideToggle('slow');
  })
}

