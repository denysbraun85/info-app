import {useState} from "react";
import axios from "axios";

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '&appid=b6ecc4e9ccc794b6086944fc00e582f2';

const useForecast = () => {
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [forecast, setForecast] = useState(null);

    // call the api
    const submitRequest = async location => {
        let data;
        try {
            //1. get woeid
            //2. get wheatherw
            data = await axios(`${BASE_URL}${location}${API_KEY}`);
            console.log(data);
            setIsError(false);
        } catch(e) {
            setIsError('There no such location');
        }
    };

    return {
        isError,
        isLoading,
        forecast,
        submitRequest
    }
};

export default useForecast;