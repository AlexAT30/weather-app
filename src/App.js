import './App.css';
import { useState, useEffect } from 'react';
import LoadingPage from './components/LoadingPage';
import WeatherApp from './components/WeatherApp';

const App = () => {

  // Variables
  const [search, setSearch] = useState ('')
  const [darkModeButton, setDarkModeButton] = useState ("off")
  const [temp, setTemp] = useState (null)
  // Obtener ubicacion
  const [ubication, setUbication] = useState(null);
  const [ubicationData, setUbicationData] = useState(null);
  // Datos de la ubicacion
  const [location, setLocation] = useState (null);
  const [current, setCurrent] = useState (null);

  // Obtiene las coordenadas
  useEffect(
    () => {
    navigator.geolocation.getCurrentPosition (e => setUbication (`${e.coords.latitude},${e.coords.longitude}`));
    }, []
  );
  // Obtiene todos los datos con las coordenadas a traves de la API
  useEffect ( 
    () => {
      if (ubication) {
        const url = `https://api.weatherapi.com/v1/current.json?key=540744b04c96489391303832210907&q=${ubication}&aqi=no`;
        fetch (url)
        .then (response => response.json ()
        .then (data => setUbicationData (data) ));
      }
    }, [ubication]
  );
  // Asignamos todos los datos para ser usados por la aplicacion
  useEffect (
    () => {
      if (ubicationData) {
        setLocation (ubicationData.location);
        setCurrent (ubicationData.current);
      }
    }, [ubicationData]
  );
  // Asignar la temperatura a una variable para poder cambiarla con un botón
  useEffect (
    () => {
      if (location && current) {
        setTemp (`${current.temp_c} C, Feel's like: ${current.feelslike_c} C`)
      }
    },[location, current]
  )

  return (
    <div className={`App-${darkModeButton}`}>
      {
        location && current
        ?
        <WeatherApp location={location} current={current} search={search} setSearch={setSearch} setUbication={setUbication} darkModeButton={darkModeButton} setDarkModeButton={setDarkModeButton} temp={temp} setTemp={setTemp} />
        
        :
        <LoadingPage />
      }
    </div>
  )
}
export default App

 