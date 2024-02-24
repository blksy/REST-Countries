import React from "react";

const FilterCountry = ({ onSelect }) => {
  const handleSelect = (s) => {
    const regionName = s.target.value;
    onSelect(regionName);
  };

  return (
    <select onChange={handleSelect}>
      <option className="option">Filter by Region</option>
      <option className="option" value="Africa">
        Africa
      </option>
      <option className="option" value="America">
        America
      </option>
      <option className="option" value="Asia">
        Asia
      </option>
      <option className="option" value="Europe">
        Europe
      </option>
      <option className="option" value="Oceania">
        Oceania
      </option>
    </select>
  );
};

export default FilterCountry;
