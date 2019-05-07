import React from "react"
import Form from "./components/Form.js"
import Title from "./components/title.js"
import Weather from "./components/Weather.js"
import PhotoBox from "./components/PhotoBox.js"
import "./App.css"


const API_KEY = "eb2ef92efaae174b0697d714264f2f66"
const accessKey = "69d89ac158761b9818cc0a47de282143d0c6bfece10c3e82daf6b9c2d4c1b0f4"

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    photo: undefined,
    error: undefined
  }
  clear = (e) =>{
    e.target.parentElement.parentElement.elements.city.value = "";
    e.target.parentElement.parentElement.elements.country.value = "";
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      photo: undefined,
      error: undefined
  })
  }
  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;
    const searchWord = city ? city : "weather"
    const country = e.target.elements.country.value
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`)
    const data = await api_call.json()
    const api_call_photo = await fetch(`https://api.unsplash.com/search/photos?client_id=${accessKey}&page=1&query=${searchWord}`)
    const photoRes = await api_call_photo.json()
    const random = Math.floor(Math.random()*photoRes.results.length)
    if(city && country && data.cod!=="404" ) {
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          photo:photoRes.results[random].urls.regular,
          error:undefined
      })
    } else if (city && country && data.cod==="404") {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          photo:photoRes.results[random].urls.regular,
          error: data.message
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        photo:undefined,
        error: "Please, enter valid city and country name."
    })
    }
  }

  render() {
    return(
      <div className="wrapper">
        <PhotoBox bg={this.state.photo}/>
        <div className="main">
          <div className="main-wrapper">
            <Title/>
            <Form getWeather={this.getWeather} clear={this.clear}/>
            <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
