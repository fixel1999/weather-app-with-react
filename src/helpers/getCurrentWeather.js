export const getCurrentWeather = async (city) => {
  const key = "0f6ce5eee14b40b994545816241504";
  const url = `http://api.weatherapi.com/v1/current.json?q=${encodeURI(
    city
  )}&Key=${key}`;
  const resp = await fetch(url);
  const data = await resp.json();

  return data;
};
