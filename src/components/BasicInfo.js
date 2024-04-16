import React from "react";

export const BasicInfo = ({ data }) => {
  return (
    <div id="basic-info">
      <h2>{data.current.temp_c}º</h2>
      <h4 id="cityLabel">
        {data.location.name}, {data.location.country}
      </h4>
      <h6 className="secondaryLabel">
        {data.current.condition.text}
      </h6>
    </div>
  );
};
