import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import WindWidget from './WindWidget';
import DisplayWidget from './DisplayWidget';
import SunsetWidget from './SunsetWidget';

function WeatherWidget() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(()=>{
        const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
        navigator.geolocation.getCurrentPosition((position)=>{
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
            axios.get(url).then((result)=>{
                setWeatherData(result.data);
            })
        })

    }, []);

    console.log(weatherData)
    return (
        <>
            <WindWidget wind={weatherData?.wind}/>
            <DisplayWidget weather={weatherData?.weather} />
            <SunsetWidget sys={weatherData?.sys} />
         </>
    )
}

export default WeatherWidget