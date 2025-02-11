// Function to toggle dark mode
const body = document.body;
const darkModeIcon = document.getElementById('dark-mode-icon');
const lightModeIcon = document.getElementById('light-mode-icon');

darkModeIcon.addEventListener('click', () => {
  body.classList.remove('light-mode');
  body.classList.add('dark-mode');
  darkModeIcon.style.display = 'none';
  lightModeIcon.style.display = 'block';
});

lightModeIcon.addEventListener('click', () => {
  body.classList.remove('dark-mode');
  body.classList.add('light-mode');
  darkModeIcon.style.display = 'block';
  lightModeIcon.style.display = 'none';
});

// Kalkulator Functions
function clearDisplay() {
  document.getElementById('result').value = '';
}

function append(value) {
  document.getElementById('result').value += value;
}

function calculate() {
  try {
    const result = eval(document.getElementById('result').value.replace('^', '**'));
    document.getElementById('result').value = result;
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}

function calculateSquareRoot() {
  try {
    const value = Math.sqrt(eval(document.getElementById('result').value));
    document.getElementById('result').value = value;
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}
