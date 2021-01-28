import React from "react";
import "./App.css";
import Form from "./components/form";
import Weather from "./components/weather";
import "bootstrap/dist/css/bootstrap.min.css";

//API key
const Api_Key = "b7fb8b4b5634af484393a5dcab940f40";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: null,
      temp_min: null,
      description: "",
      error: false,
    };
  }

  // Coverting Celcius
  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  getWeather = async (e) => {
    e.preventDefault();

    //Handling user input
    const city = e.target.elements.city.value;

    if (city) {
      const result = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`
      );
      const response = await result.json();
      console.log(response.name);

      this.setState({
        city: `${response.name},${response.sys.country}`,
        main: response.weather[0].main,
        celsius: this.calCelsius(response.main.temp),
        temp_max: this.calCelsius(response.main.temp_max),
        temp_min: this.calCelsius(response.main.temp_min),
        description: response.weather[0].description,
        error: false,
      });
    } else {
      this.setState({
        error: true,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Form loadweather={this.getWeather} error={this.state.error} />
        <Weather
          cityname={this.state.city}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default App;


// Written by Ogundele Olalekan
//Task 14 Level 2