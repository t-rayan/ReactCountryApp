import React, { useState, useContext } from "react";
import { FiSearch } from "react-icons/fi";
import CountryContext from "../../context/CountryContext/CountryContext";
import ThemeContext from "../../context/ThemeContext/ThemeContext";

import DropDown from "../DropDown/DropDown";
import "./styles.css";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const { searchCountry, fetchAllCountries } = useContext(CountryContext);
  const { isLight, dark, light } = useContext(ThemeContext);
  const theme = isLight ? light : dark;

  return (
    <div className="searchContainer">
      <div className="searchBox" style={{ backgroundColor: theme.ui }}>
        <FiSearch
          style={{
            marginRight: ".4rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
            color: theme.syntax,
          }}
        />
        <input
          style={{ backgroundColor: theme.ui, color: theme.syntax }}
          type="text"
          placeholder="Search for a country"
          className="searchInput"
          onChange={(e) => {
            setSearchText(e.target.value);
            if (searchText !== "") {
              searchCountry(searchText);
            } else {
              fetchAllCountries();
            }
          }}
        />
      </div>
      <div className="regionContainer">
        <DropDown />
      </div>
    </div>
  );
};

export default SearchBar;
