function convertTemperature() {
    var temperatureInput = document.getElementById('temperatureInput').value;
    var unitSelect = document.getElementById('unitSelect').value;
    var result = document.getElementById('result');
    
    // Clear previous result
    result.innerHTML = '';
    
    // Validate input as a number
    if (isNaN(temperatureInput)) {
      result.innerHTML = 'Please enter a valid temperature.';
      return;
    }
    
    // Convert temperature based on the selected unit
    var convertedTemperature, convertedUnit;
    if (unitSelect === 'celsius') {
      convertedTemperature = (parseFloat(temperatureInput) * 9 / 5) + 32;
      convertedUnit = 'Fahrenheit';
    } else if (unitSelect === 'fahrenheit') {
      convertedTemperature = (parseFloat(temperatureInput) - 32) * 5 / 9;
      convertedUnit = 'Celsius';
    } else if (unitSelect === 'kelvin') {
      convertedTemperature = parseFloat(temperatureInput) - 273.15;
      convertedUnit = 'Celsius';
    }
    
    // Display the converted temperature
    result.innerHTML = convertedTemperature.toFixed(2) + ' ' + convertedUnit;
  }
  
  var convertBtn = document.getElementById('convertBtn');
  convertBtn.addEventListener('click', convertTemperature);
  