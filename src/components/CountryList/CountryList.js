import React, { useContext } from "react";
import SearchBar from "../SearchBar/SearchBar";

import CountryContext from "../../context/CountryContext/CountryContext";
import Country from "../Country/Country";

import "./styles.css";

const CountryList = () => {
  const { countries, searchResults } = useContext(CountryContext);

  return (
    <div className="countryContainer">
      <div className="countryLists">
        {countries?.map((country) => (
          <Country key={country.name} country={country} />
        ))}
      </div>
    </div>
  );
};

export default CountryList;
