import {useState} from "react";
import axios from "axios";

const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=';
const API_KEY = 'b6ecc4e9ccc794b6086944fc00e582f2';
const REQUEST_URL = `${BASE_URL}${API_KEY}`;

const useForecast = () => {
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [forecast, setForecast] = useState(null);

    // call the api
    const submitRequest = async location => {
        //1. get woeid
        const response = await axios(`${REQUEST_URL}`);
        //2. get wheather
        console.log(response);
        console.log({response});

    };

    return {
        isError,
        isLoading,
        forecast,
        submitRequest
    }
};

export default useForecast;