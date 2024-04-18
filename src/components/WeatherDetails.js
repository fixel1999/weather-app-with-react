import React from "react";

export const WeatherDetails = ({ data }) => {
  return (
    <table style={{ border: "none" }}>
      <tbody>
        <tr>
          <td className="left">Cloud</td>
          <td className="right">{data.current.cloud}%</td>
        </tr>
        <tr>
          <td className="left">Humidity</td>
          <td className="right">{data.current.humidity}%</td>
        </tr>
        <tr>
          <td className="left">Wind</td>
          <td className="right">{data.current.wind_kph}km/h</td>
        </tr>
        <tr>
          <td className="left">Rain</td>
          <td className="right">{data.current.precip_mm}mm</td>
        </tr>
      </tbody>
    </table>
  );
};
