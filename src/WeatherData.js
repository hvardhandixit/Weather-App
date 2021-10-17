import React from "react";
import style from './weather.module.css';

const weatherData = (props) => {
    let data = props.weatherData;
    let city = data.name;
    let mainData = data.main;
    console.log(data);
    return(
        <div className={style.weatherData}>
            <div className={style.heading}>Showing results for <strong>{city}</strong></div>
            <div><strong>Latitude:</strong> {data.coord.lat}</div>
            <div><strong>Longitude:</strong> {data.coord.lon}</div>
            <div><strong>Temperature:</strong> {mainData.temp}</div>
            <div><strong>Humidity:</strong> {mainData.humidity}%</div>
        </div>
    )
}

export default weatherData;