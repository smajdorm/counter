const counterEl = document.querySelector('.counter');
const buttonEls = document.querySelectorAll('.button');

let counter = 0;

buttonEls.forEach(button =>
  button.addEventListener('click', () => {
    const action = button.innerText.toLowerCase();
    manipulateCounter(action);
  })
);

function manipulateCounter(action) {
  if (action === 'increase') counter++;
  else if (action === 'decrease') counter--;
  else counter = 0;

  counterEl.innerText = counter;
}
