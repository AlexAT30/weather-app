const SearchAndUpdate = ({ search, setSearch, setUbication, darkModeButton, setDarkModeButton }) => {
  return (
    <div className={`SearchAndUpdate-${darkModeButton}`} >
      <input onChange={e => setSearch (e.target.value)} />
      <button onClick={ () => {
        setUbication (search)
      }
      }>
        <i class="fas fa-search"></i>
      </button>
      <button onClick={
        () => {
          navigator.geolocation.getCurrentPosition (e => setUbication (`${e.coords.latitude},${e.coords.longitude}`));
        }
      } >
        <i class="fas fa-home"></i>
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