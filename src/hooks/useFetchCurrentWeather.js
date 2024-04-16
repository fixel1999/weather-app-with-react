import { useEffect, useState } from "react";
import { getCurrentWeather } from "../helpers/getCurrentWeather";

export const useFetchCurrentWeather = (city) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getCurrentWeather(city)
        .then( dat => setState({
            data: dat,
            loading: false,
        }));
  }, [city]);

  return state;
};
