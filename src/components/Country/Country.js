import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from '../../context/ThemeContext/ThemeContext'
import "./styles.css";

const Country = ({ country }) => {
  const {isLight, light, dark} = useContext(ThemeContext)
  const theme = isLight ? light : dark
  return (
    <Link to={`${country?.name}`}>
      <div className="countryCard" style={{backgroundColor: theme.ui, color: theme.syntax}}>
        <div className="countryFlag">
          <img src={country?.flag} alt="flag" />
        </div>
        <div className="countryInfo">
          {country && <p className="name">{country.name}</p>}
          {country && (
            <p className="population">Population: {country.population}</p>
          )}
          {country && <p className="region">Region: {country.region}</p>}
          {country && <p className="capital">Capital: {country.capital}</p>}
        </div>
      </div>
    </Link>
  );
};

export default Country;
