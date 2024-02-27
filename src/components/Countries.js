import React, { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import FilterCountry from "./FilterCountry";
import { Link } from "react-router-dom";
import api from "../utils/api";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await api.getAllCountries();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="all__country__wrapper">
      <div className="country__top">
        <div className="search">
          <SearchInput onSearch={api.getCountryByName} />
        </div>

        <div className="filter">
          <FilterCountry onSelect={api.getCountryByRegion} />
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
