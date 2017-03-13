var timer = setInterval(randomNumber, 10);
$i  = 0;
function randomNumber() {
  $('span.randomize').each(function() {
    $(this).html(Math.floor((Math.random() * 10)))
    $i++;
    if ($i == 100) {
      var val = $(this).data('number');
      $(this).html(val).removeClass('randomize');
      $i = 0;
    }
  })
}

function clearTimer() { 
  clearInterval(timer);
}