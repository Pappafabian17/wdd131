const temperature = document.getElementById("temperature");
const conditions = document.getElementById("conditions");
const wind = document.getElementById("wind");
const windChill = document.getElementById("windchill");

const temperatureValue = 5;
const windSpeedValue = 10;

temperature.textContent = `${temperatureValue} °C`;
wind.textContent = `${windSpeedValue} km/h`;
conditions.textContent = "Party Cloudy";

const calculateWindChill = (temperature, windSpeed) => {
  return (
    13.12 +
    0.6215 * temperature -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * temperature * Math.pow(windSpeed, 0.16)
  ).toFixed(2);
};

const displayWindChill = () => {
  if (temperatureValue <= 10 && windSpeedValue > 4.3) {
    const value = calculateWindChill(temperatureValue, windSpeedValue);
    windChill.textContent = `${value}`;
  } else {
    windChill.textContent = "N/A";
  }
};

displayWindChill();
