import { useState } from "react";
import PropTypes from "prop-types";

export const AddCity = ({ setCities }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCities((cities) => [inputValue, ...cities.slice(0, 2)]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search City"
        required
        minLength={2}
        maxLength={20}
      />
    </form>
  );
};

AddCity.propTypes = {
  setCities: PropTypes.func.isRequired,
};
