import moment from 'moment';

const getCurrentDayForecast = (data, date) => ({
    weekday: date.toLocaleDateString('en-US', { weekday: 'long' }),
    weekday: date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' }),
    location: data.name,

    temperature: Math.round(data.main.temp),
    // weatherIcon: `https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`,
    // weatherDescription: data.weather_state_name,
});

export default getCurrentDayForecast;
