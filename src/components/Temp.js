const Temp = ( { temp, setTemp, current, darkModeButton }) => {
  return (
    <div className={`Temp-${darkModeButton}`}>
      <p>
        {temp}
      </p>
      <button onClick={
        () => {
          if (temp === `${current.temp_c} C, Feel's like: ${current.feelslike_c} C`) {
            setTemp (`${current.temp_f} F, Feel's like: ${current.feelslike_f} F`)
          }
          else {
            setTemp (`${current.temp_c} C, Feel's like: ${current.feelslike_c} C`)
          }
        }
      } >
        <i className="fas fa-exchange-alt"></i>
      </button>
    </div>
  )

}
export default Temp;