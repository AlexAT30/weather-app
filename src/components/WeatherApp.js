import SearchAndUpdate from './SearchAndUpdate';
import WheaterInf from './WeatherInf';

const WeatherApp = ({ location, current, setUbication, darkModeButton, setDarkModeButton, temp, setTemp, ubicationError }) => {
  return (
    <div className={`WeatherApp-${darkModeButton}`}>
      <SearchAndUpdate setUbication={setUbication} darkModeButton={darkModeButton} setDarkModeButton={setDarkModeButton} ubicationError={ubicationError} />
      <WheaterInf location={location} current={current} temp={temp} setTemp={setTemp} darkModeButton={darkModeButton} />
    </div>
  )
}
export default WeatherApp;