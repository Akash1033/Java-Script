const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `plz give a lnvalid height ${height} `;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `plz give a lnvalid weight ${weight} `;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    const bmiValue = parseFloat(bmi);
    results.innerHTML = `<span>${bmi}</span>\n`;
    
    if(bmiValue < 18.6 ){
      results.innerHTML  +="you are under weight";
    }else if(bmiValue >= 18.6 && bmiValue < 24.6){
      results.innerHTML +=" you are in normal range";
    }
    else{
      results.innerHTML += " you are overweight";
    }
  }
});
