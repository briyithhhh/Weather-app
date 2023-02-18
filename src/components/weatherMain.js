export default function WeatherMain({weather}){
    return (
        <div>
            <div>{weather?.location.name} </div>
            <div>{weather?.location.country} </div>
            <div>
              <div>
                <img src={weather?.current.condition.icon} width="128" alt="weather icon" />
              </div>
            </div>
        </div>
    )
}