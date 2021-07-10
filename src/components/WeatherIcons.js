const WeatherIcons = ({ current }) => {
  return (
    <div className='WeatherIcons'>
      <p>
        <i className="fas fa-cloud"></i>
        {` ${current.cloud}%`}
      </p>
      <p>
        <i className="fas fa-wind"></i> 
        {` ${current.gust_kph} km/ph`}
      </p>
      <p>
        <i className="fas fa-tint"></i>
        {` ${current.humidity}%`}
      </p>
      <p>
        <i className="fas fa-sun"></i>
        {` ${current.uv} uv`}
      </p>
    </div>
  )
}
export default WeatherIcons;