import moment from 'moment';

const getCurrentDayForecast = (data) => ({
    weekday: moment(data.applicable_date).format('dddd'),
    date: moment(data.applicable_date).format('MMMM Do'),
    location: data.name,
    temperature: Math.round(data.the_temp),
    weatherIcon: `https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`,
    weatherDescription: data.weather_state_name,
});

export default getCurrentDayForecast;
