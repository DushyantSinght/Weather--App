import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Searchbox.css";
import { useState } from 'react';
export default function Searchbox({updateinfo}){
    let[city,setCity] = useState("");
    let[error,setError] = useState(false);
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "429cd0e5d8995424bf174953f5bfa40f";
    let getweather = async ()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonresponse = await response.json();
            let result = {
                city : city,
                temp: jsonresponse.main.temp,
                tempmin: jsonresponse.main.temp_min,
                tempmax: jsonresponse.main.temp_mix,
                humidity: jsonresponse.main.humidity,
                feelslike: jsonresponse.main.feels_like,
                weather: jsonresponse.weather[0].description,
            };
            console.log(result);
            return result;
        }
        catch(err){
            throw err;
        }
    }
    let newval =(event)=>{
        console.log("new value added")
        setCity(event.target.value);
    }
    let handle = async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newinfo = await getweather();
            updateinfo(newinfo);
        }
        catch(err){
            setError(true);
        }

    }
    return(
        <div className="Searchbox">
            <form onSubmit={handle}>
                <TextField id="city" label="city" variant="outlined" onChange={newval} required value={city} />
                <br></br>
                <br></br>
                <Button variant="contained" type='submit'>Search</Button>
            {error && <p style={{color:"red"}}>No such place exists</p>}
            </form>
        </div>
    )

}