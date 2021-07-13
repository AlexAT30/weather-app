import Temp from "./Temp";
import WeatherIcons from "./WeatherIcons";

 const WeatherInf = ({ location, current, temp, setTemp, darkModeButton }) => {
   return (
    <div>

      <h2 className='location'>
        <i className="fas fa-map-marker-alt"></i>
        {` ${location.region}, ${location.country}`}
      </h2>

      <h4 className='position'>
        {location.name}
      </h4>

      <h3 className='weather'>
        <img src={current.condition.icon} alt={current.condition.text} />
        {current.condition.text}
      </h3>

      <Temp temp={temp} setTemp={setTemp} current={current} darkModeButton={darkModeButton} />
      
      <WeatherIcons current={current} location={location} />
    </div>
   )
 }
 export default WeatherInf;