import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Infobox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function Infobox({info}){
    const INIT_URL = "https://www.shutterstock.com/image-photo/climate-change-africa-dramatic-dusty-600nw-1751879375.jpg";
    let COLD_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvIvvuHtaW3DFi2rgJVErmbFWGAkuVrTaQvw&s";
    let HOT_URL = "https://media.istockphoto.com/id/813720840/photo/summer-heat-wave-in-the-city.jpg?s=612x612&w=0&k=20&c=8DxY8mLBr1ogKBwHxxC0bd6lv8tlBXytISdAjdPBhTE=";
    let RAIN_URL ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMShOhjWg0SZU8LWcoodgtj9BS4Oqu3xtBSg&s";
    return(
        <div className='Infobox'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140, width:345 }}
                image= {info.humidity>80 ? RAIN_URL : info.temp>15 ? HOT_URL : COLD_URL}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city} {
                info.humidity>80 ? <ThunderstormIcon/> : info.temp>15 ? <WbSunnyIcon/> : <AcUnitIcon/>
                }
                </Typography>
                <Typography variant="body2" color='text.secondary' component={"span"}>
                    <p>Temperature: {info.temp}&deg;C</p>
                    <p>Humidity: {info.humidity}</p>
                    <p>Min. Temperature: {info.tempmin}</p>
                    <p>Max. Temperature: {info.tempmax}</p>
                    <p>Feels like: {info.feelslike}&deg;C</p>
                    <p>Weather looks as {info.weather}</p>
                </Typography>
            </CardContent>
            </Card>
        </div>

    )
}