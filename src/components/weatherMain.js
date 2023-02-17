export default function WeatherMain({weather}){
    return (
        <div>
            <div> <h1>tengo sueño</h1>{weather?.current.temp_c} </div>
        </div>
    )
}