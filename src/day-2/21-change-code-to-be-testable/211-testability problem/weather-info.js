const forecasts = new Map();

forecasts.set('30.03.2022', {
  temp: 10,
  snow: true,
  clouds: 46,
  rain: 0,
  mist: 0,
});
forecasts.set('31.03.2022', {
  temp: 12,
  snow: false,
  clouds: 45,
  rain: 2,
  mist: 0,
});
forecasts.set('01.04.2022', {
  temp: 14,
  snow: false,
  clouds: 30,
  rain: 0,
  mist: 0,
});
forecasts.set('02.04.2022', {
  temp: 16,
  snow: false,
  clouds: 30,
  rain: 26,
  mist: 0,
});
forecasts.set('03.04.2022', {
  temp: 16,
  snow: false,
  clouds: 0,
  rain: 0,
  mist: 49,
});
forecasts.set('04.04.2022', {
  temp: 20,
  snow: false,
  clouds: 0,
  rain: 0,
  mist: 34,
});

export const weatherInfo = {
  getForecast(day) {
    const forecast = forecasts.get(day);
    return forecast ? forecast : 'not-known';
  },
};
