function isValid(inputValue) {
  const number = parseInt(inputValue, 10);

  return (
    Number.isInteger(number) &&
    number > 0 &&
    number < 100);
}
function validator() {
  const input = document.getElementById('input');
  const validateButton = document.getElementById('validateButton');
  const clearButton = document.getElementById('clearButton');
  const result = document.getElementById('result');

  validateButton.addEventListener('click', () => {
    result.textContent = isValid(input.value) ? 'Valid' : 'Invalid';
  });

  clearButton.addEventListener('click', () => {
    input.value = '';
    result.textContent = '';
  });
}

validator();
