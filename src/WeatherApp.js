import React, { useState } from "react";

import { CitiesList } from "./components/CitiesList";
import { AddCity } from "./components/AddCity";
import { BasicInfo } from "./components/BasicInfo";
import { WeatherDetails } from "./components/WeatherDetails";
import { useFetchCurrentWeather } from "./hooks/useFetchCurrentWeather";

export const WeatherApp = () => {

  const [cities, setCities] = useState([
    "Paris, France",
    "Centro Habana, Cuba",
    "Berlin, Alemania",
  ]);

  //Select first city from the cities list
  const city = cities[0];

  const { data, loading } = useFetchCurrentWeather( city );

  return (
    <>
      <div className="main-container animate__animated animate__fadeInUp">

        <p id="appTitle">WeatherApp</p>

        { loading && <p>Loading...</p>}

        <div id="panel">
          <div className="content">
            <AddCity setCities = { setCities } />
            <CitiesList cities = { cities } />
            <hr />
            <WeatherDetails data={ data }/>
          </div>
        </div>

        <BasicInfo data={ data } />

      </div>

      <div id="linkback">
        Powered by{" "}
        <a href="https://www.weatherapi.com/" title="Free Weather API">
          WeatherAPI.com
        </a>
      </div>
    </>
  );
};

export default WeatherApp;
