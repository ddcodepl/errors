var i = 0;
setInterval(function() {
  var fields = document.querySelectorAll('.randomize');

  fields.forEach(function(e) {
    e.html = 'r';

    i++;
    e.innerHTML = Math.floor(Math.random() * 10);

    if (i == 100) {
      e.classList.remove('randomize');
      e.innerHTML = e.dataset.number;
      i = 0;
    }
  });
}, 10);