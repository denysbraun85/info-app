import {useState} from "react";
import axios from "axios";

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '&appid=b6ecc4e9ccc794b6086944fc00e582f2';
const FORECAST_URL = 'http://api.openweathermap.org/data/2.5/forecast?q='
const INPUT_LANG_CODE_UA = '&lang=ua';

const useForecast = () => {
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [forecast, setForecast] = useState(null);

    const getData = async (location, weatherUrl, errorMessage) => {
        try {
            let {data} = await axios(`${weatherUrl}${location}${INPUT_LANG_CODE_UA}${API_KEY}`);
            console.log(data);
            return data;
        } catch(e) {
            setIsError(errorMessage);
            setIsLoading(false);
        }
    }

    const getWeatherData = async location => {
        getData(location, BASE_URL, 'There no such location');
    }

    const getForecastData = async location => {
        getData(location, FORECAST_URL, 'Something went wrong!');
    }

    // call the api
    const submitRequest = async location => {
        setIsLoading(true);
        setIsError(false);

        const wheather = await getWeatherData(location);
        const forecast = await getForecastData(location);
    };

    return {
        isError,
        isLoading,
        forecast,
        submitRequest
    }
};

export default useForecast;