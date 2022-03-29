import { weatherInfo } from './weather-info.js';

function calculateWeather(day) {
  const forecast = weatherInfo.getForecast(day);
  if (forecast === 'not-known') {
    return 'Cannot predict the weather for that day.';
  }
  const { temp, mist, snow, rain, clouds } = forecast;
  const intro = `At the day of ${day}, it will be: `;
  const joins = [];
  if (temp <= 10) {
    joins.push('cold');
  } else if (temp > 10 && temp < 16) {
    joins.push('chill');
  } else if (temp >= 16) {
    joins.push('warm');
  }
  if (mist >= 30) {
    joins.push('misty');
  }
  if (snow) {
    joins.push('snowy');
  }
  if (rain >= 10) {
    joins.push('rainy');
  }
  // Celowy błąd w logice działania:
  if (rain >= 45) {
    joins.push('cloudy');
  }
  return intro + joins.join(', ') + ' day';
}
