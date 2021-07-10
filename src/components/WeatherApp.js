import SearchAndUpdate from './SearchAndUpdate';
import WheaterInf from './WeatherInf';

const WeatherApp = ({ location, current, search, setSearch, setUbication, darkModeButton, setDarkModeButton, temp, setTemp }) => {
  return (
    <div className={`WeatherApp-${darkModeButton}`}>
      <SearchAndUpdate search={search} setSearch={setSearch} setUbication={setUbication} darkModeButton={darkModeButton} setDarkModeButton={setDarkModeButton} />
      <WheaterInf location={location} current={current} temp={temp} setTemp={setTemp} darkModeButton={darkModeButton} />
    </div>
  )
}
export default WeatherApp;