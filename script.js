const formElement = document.querySelector('form');

formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(formElement);
  let text = '';
  for (let [key, value] of data.entries()) {
    text += `${key} : ${value}<br>`
  }
  
  document.querySelector('p').innerHTML = text;
  
  document.querySelector('.first').classList.add('hidden');
  document.querySelector('.submitted_form').classList.remove('hidden');
});
