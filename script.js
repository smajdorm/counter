const counterEl = document.querySelector('.counter');
const buttonEls = document.querySelectorAll('.button');
const stepEl = document.querySelector('.step');

let counter = 0;
let step = 1;

stepEl.addEventListener('input', () => {
  if (stepEl.value === '') stepEl.value = 1;

  step = +stepEl.value;
});

buttonEls.forEach(button =>
  button.addEventListener('click', () => {
    const action = button.innerText.toLowerCase();
    manipulateCounter(action);
  })
);

function manipulateCounter(action) {
  if (action === 'increase') counter += step;
  else if (action === 'decrease') counter -= step;
  else counter = 0;

  counterEl.innerText = counter;
}

function init() {
  counterEl.innerText = counter;
  stepEl.value = step;
}

init();
