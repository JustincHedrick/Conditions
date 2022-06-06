export default function WeatherShow(props) {
  const { data } = props;
  let total = 0;

  function getTotal() {
    if (data.current.temp > 30 && data.current.temp < 70) total += 1;
    if (data.current.humidity < 60) total += 1
    if (data.current.dew_point * 2 < data.current.temp) total += 1;
    if (data.current.wind_speed > 3 && data.current.wind_speed < 20) total += 1;
    return total;
  }
  
  return (
    <div className="weathershow">
      <>
        <div className="maincard">
          <span className="titlecard">
            <span>Latitude: {data.lat}, Longitude: {data.lon}</span>
          </span>
          <br />
          <div>Current Temperature: °{data.current.temp}</div>
          <div>Current humidity: {data.current.humidity}%</div>
          <div>Current Dewpoint: {data.current.dew_point}</div>
          <div>Current windspeed: {data.current.wind_speed} mph</div>
          <div>
            Its a {getTotal()} star day!
          </div>
          <div>Sunrise: {new Date(data.current.sunrise * 1000).toLocaleTimeString()}</div>
          <div>Sunset: {new Date(data.current.sunset * 1000).toLocaleTimeString()}</div>
        </div>
      </>
    </div>
  )
}