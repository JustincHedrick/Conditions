import { useState } from 'react'
import WeatherShow from '../WeatherShow/WeatherShow'


export default function WeatherForm () {
  const [weather, setWeather] = useState([])
  const [form, setform] = useState({
    latitude: 0,
    longitude: 0,
  })

  
  const APIKEY = "3ce857b3e51d7ad8af05cfbc872bd7cf";
  async function weatherData(e) {
    e.preventDefault();

    if (form.latitude === 0 || form.longitude === 0) {
    alert("Add values");
    } else {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${form.latitude}8&lon=${form.longitude}&units=imperial&exclude=minutely&appid=${APIKEY}`)
    .then((res) => res.json())
    .then((data) => data)

      setWeather({data:data})
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "latitude") {
      setform({ ...form, latitude: value})
    }
    if (name === "longitude") {
      setform({ ...form, longitude: value})
    }
  }

  return (
    <div className="weather">
      <span className="title">Conditions</span>
      <br />
      <form>
        <input type="text" placeholder='Latitude' name="latitude" onChange={(e) => handleChange(e)} />
        <br />
        <input type="text" placeholder='Longitude' name='longitude' onChange={(e) => handleChange(e) } />
        <button className="weatherbtn" onClick={(e) => weatherData(e)}>Submit</button>
        {console.log(weather)}
      </form>
      {weather.data !== undefined ? (
        <div>
          <WeatherShow data={weather} />
        </div>
      ) : null}
    </div>
  );
}