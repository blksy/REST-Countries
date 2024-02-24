import React, { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import FilterCountry from "./FilterCountry";
import { Link } from "react-router-dom";

const url = "https://restcountries.com/v3.1/";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const response = await fetch(`${url}/all`);
        if (!response.ok) {
          throw new Error("Failed to fetch the countries data");
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error occured while fetching data", error);
      }
    };
    fetchCountriesData();
  }, []);

  const getCountryByName = async (countryName) => {
    try {
      const res = await fetch(`${url}/name/${countryName}`);

      if (!res.ok) throw new Error("No country found");

      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error("Error occured while fetching data", error);
    }
  };

  const getCountryByRegion = async (regionName) => {
    try {
      const res = await fetch(`${url}/region/${regionName}`);

      if (!res.ok) throw new Error("Request failed...");

      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error("Error occured while fetching data", error);
    }
  };
  return (
    <div className="all__country__wrapper">
      <div className="country__top">
        <div className="search">
          <SearchInput onSearch={getCountryByName} />
        </div>

        <div className="filter">
          <FilterCountry onSelect={getCountryByRegion} />
        </div>
      </div>

      <div className="country__bottom">
        {countries?.map((country) => (
          <Link to={`/country/${country.name.common}`}>
            <div className="country__card">
              <div className="country__img">
                <img src={country.flags.png} alt="flag" />
              </div>

              <div className="country__data">
                <h3>{country.name.common}</h3>
                <h6>Population: {country.population}</h6>
                <h6>Region: {country.region}</h6>
                <h6>Capital: {country.capital}</h6>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Countries;
