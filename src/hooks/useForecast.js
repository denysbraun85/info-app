import {useState} from "react";
import axios from "axios";
import getCurrentDayForecast from "../helpers/getCurrentDayForecast";
import getUpcomingDaysForecast from "../helpers/getUpcomingDaysForecast";
import getCurrentDayDetailedForecast from "../helpers/getCurrentDayDetailedForecast";

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '&appid=b6ecc4e9ccc794b6086944fc00e582f2';
const FORECAST_URL = 'http://api.openweathermap.org/data/2.5/forecast?q='
const INPUT_LANG_CODE_UA = '&lang=ua';

const useForecast = () => {
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [forecast, setForecast] = useState(null);

    const getWeatherData = async location => {
        let data;
        try {
            data = await axios(`${BASE_URL}${location}${INPUT_LANG_CODE_UA}${API_KEY}`);
            console.log(data);
            return data;
        } catch(e) {
            setIsError('There no such location');
            return;
        }
    }

    const getForecastData = async location => {
        let data;
        try {
            data = await axios(`${FORECAST_URL}${location}${INPUT_LANG_CODE_UA}${API_KEY}`);
            console.log(data);
            return data;
        } catch(e) {
            setIsError('Something went wrong!');
            return;
        }
    }

    const gatherForecastData = (dataDay, dataForecast) => {
        // const currentDay = getCurrentDayForecast(data);
        // const upcomingDaysForecast = getUpcomingDaysForecast(data);
        // const currentDayDetailes = getCurrentDayDetailedForecast(data);

        // setForecast({currentDay, upcomingDaysForecast, currentDayDetailes});
        setIsLoading(false);
    }

    // call the api
    const submitRequest = async location => {
        setIsLoading(true);
        setIsError(false);

        const wheather = await getWeatherData(location);
        const forecast = await getForecastData(location);

        gatherForecastData(wheather, forecast);
    };

    return {
        isError,
        isLoading,
        forecast,
        submitRequest
    }
};

export default useForecast;