import Searchbox from './Searchbox';
import Infobox from './Infobox';
import { useState } from 'react';
export default function Weatherapp(){
    const [weatherinfo,setWeatherinfo] = useState({
        city : "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempmin: 25.05,
        tempmax: 25.05,
        humidity: 47,
        weather: "Haze"
    })
    let updateinfo =(result) =>{
        setWeatherinfo(result)
    }
    return(
        <div>
            <h1>Weather info by D.S.T.</h1>
                <Searchbox updateinfo={updateinfo}/>
                <Infobox info={weatherinfo}/>
        </div>
    )
}