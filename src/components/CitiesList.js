import React from "react";

export const CitiesList = ( { cities } ) => {

  return (
    <div>
      {/* <h5 className="subtitle">Recients Cities</h5> */}
      <ul>
        {cities.map((city) => {
          return <li key={city}> {city} </li>;
        })}
      </ul>
    </div>
  );
};
