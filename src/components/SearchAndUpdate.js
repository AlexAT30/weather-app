import { useEffect, useState } from "react";

const SearchAndUpdate = ({ setUbication, darkModeButton, setDarkModeButton, ubicationError }) => {
  const [search, setSearch] = useState ('')
  // Comprueba si la ubicacion existe y si no es asi, te deja un mensaje en el input
  useEffect (
    () => {
      if (ubicationError) {
        setSearch ('we cant find that place');
      }
    }, [ubicationError]
  )
  return (
    <div className={`SearchAndUpdate-${darkModeButton}`} >
      <input value={search} onChange={e => setSearch (e.target.value)} />
      <button onClick={ () => {
        setUbication (search)
      }
      }>
        <i className="fas fa-search"></i>
      </button>
      <button onClick={
        () => {
          navigator.geolocation.getCurrentPosition (e => setUbication (`${e.coords.latitude},${e.coords.longitude}`));
        }
      } >
        <i className="fas fa-home"></i>
      </button>
      <button onClick={
        () => {
          if (darkModeButton === `off`) {
            setDarkModeButton ('on')
          }
          else {
            setDarkModeButton ('off')
          }
        }
      } >
        {/* <i class="fas fa-toggle-on"></i> */}
        <i className={`fas fa-toggle-${darkModeButton}`}></i>
      </button>
    </div>
  )

}
export default SearchAndUpdate;