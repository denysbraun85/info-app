import {useState} from "react";
import axios from "axios";

const BASE_URL = 'https://api.open-meteo.com/v1/forecast';
const BASE_URL2 = 'https://api.open-meteo.com/v1/forecast';
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
const REQUEST_URL = `${CROSS_DOMAIN}${BASE_URL}`;

const useForecast = () => {
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [forecast, setForecast] = useState(null);

    // call the api
    const submitRequest = location => {
        axios();
    };

    return {
        isError,
        isLoading,
        forecast,
        submitRequest
    }
};

export default useForecast;