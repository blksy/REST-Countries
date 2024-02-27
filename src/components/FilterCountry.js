import React from "react";

const FilterCountry = ({ onSelect }) => {
  const regions = [
    { name: "Africa", value: "Africa" },
    { name: "America", value: "America" },
    { name: "Asia", value: "Asia" },
    { name: "Europe", value: "Europe" },
    { name: "Oceania", value: "Oceania" },
  ];

  const handleSelect = (event) => {
    const regionName = event.target.value;
    onSelect(regionName);
  };

  return (
    <select onChange={handleSelect}>
      <option className="option">Filter by Region</option>
      {regions.map((region, index) => (
        <option key={index} className="option" value={region.value}>
          {region.name}
        </option>
      ))}
    </select>
  );
};

export default FilterCountry;
