let counter = 0;

let loop = setInterval(function () {
  const elements = document.querySelectorAll('.randomize');

  elements.forEach(function (e) {
    counter++;
    e.innerHTML = Math.floor(Math.random() * 10);


    if (counter === 100) {
      e.classList.remove('randomize');
      e.innerHTML = e.dataset.number;
      counter = 0;
    }
  });

  if (elements.length === 0) {
    removeLoop(loop);
  }
}, 10);

removeLoop = (element) => {
  clearInterval(element);
}