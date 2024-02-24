import React, { useState, useEffect } from "react";

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
  return <></>;
};
export default Countries;
