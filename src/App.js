import React, {useState, useEffect} from "react";
import WeatherData from "./WeatherData";
import InputField from "./InputField";
import style from './weather.module.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { findRenderedComponentWithType } from "react-dom/test-utils";

function App(){

    const [data, setData] = useState('');

    let handleCityChange = async (location) => {
        let response = await getCoordinates(location);
        setData(response);
        // console.log(data);
    }

    return (
        <div className={style.weather}>
            {data == ''  && <InputField handleCityChange={handleCityChange} />}
            {data.length != 0 && <WeatherData weatherData = {data} />}
        </div>
    )
}


const getCoordinates = async (location) => {
    console.log(`Hello ${location}`);
    let response = await fetch(`${process.env.REACT_APP_GEOCODING_API_URL}${location.replaceAll(' ', '+')}&apiKey=${process.env.REACT_APP_GEOCODING_API_KEY}`)
    response = await response.json();
    let lat = response.items[0].position.lat;
    let lng = response.items[0].position.lng;
    let weatherResponse = await fetch(`${process.env.REACT_APP_WEATHER_API_URL}/weather/?lat=${lat}&lon=${lng}&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`);
    weatherResponse = await weatherResponse.json();
    return weatherResponse;
}

export default App;