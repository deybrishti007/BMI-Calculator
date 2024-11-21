document.getElementById('calculateButton').addEventListener('click', () => {
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);

  if (!height || !weight || height <= 0 || weight <= 0) {
      alert('Please enter valid height and weight values.');
      return;
  }

  const bmi = (weight / (height * height)).toFixed(2);
  let status;

  if (bmi < 18.5) {
      status = 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
      status = 'Normal weight';
  } else if (bmi >= 25 && bmi <= 29.9) {
      status = 'Overweight';
  } else {
      status = 'Obese';
  }

  document.getElementById('bmiValue').textContent = bmi;
  document.getElementById('bmiStatus').textContent = status;
  document.getElementById('result').classList.remove('hidden');
});
