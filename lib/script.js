const nameInput = document.querySelector('#name');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const calculateButton = document.querySelector('#calculate-button');

[nameInput, heightInput, weightInput].forEach(function (input, index, array) {
  input.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (index < array.length - 1) {
        array[index + 1].focus();
      }
    }

    if (nameInput.value.trim() !== '' && !isNaN(heightInput.value) && heightInput.value > 0 && !isNaN(weightInput.value) && weightInput.value > 0) {
      calculateButton.removeAttribute('disabled');
    } else {
      calculateButton.setAttribute('disabled', 'true');
    }
  });
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const message = document.querySelector('#message');

  if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
    results.innerHTML = 'Berikan tinggi dan berat badan yang valid';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    results.innerHTML = `<span>${bmi}</span>`;
    let bmiCategory = '';
    let nameColor = '';

    if (bmi < 18.5) {
      bmiCategory = 'Kurus';
      results.querySelector('span').style.color = 'grey';
      nameColor = 'grey';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiCategory = 'Normal';
      results.querySelector('span').style.color = 'blue';
      nameColor = 'blue';
    } else if (bmi >= 25 && bmi < 29.9) {
      bmiCategory = 'Kegemukan';
      results.querySelector('span').style.color = 'yellow';
      nameColor = 'yellow';
    } else {
      bmiCategory = 'Obesitas';
      results.querySelector('span').style.color = 'red';
      nameColor = 'red';
    }

    message.innerHTML = `<span style="color:${nameColor}">${name}</span>, Berat kamu ${bmiCategory}`;

    document.querySelector('#name').value = '';
    document.querySelector('#height').value = '';
    document.querySelector('#weight').value = '';
  }
});
