import React, { useState, useContext } from "react";
import { FiChevronDown } from "react-icons/fi";
import CountryContext from "../../context/CountryContext/CountryContext";
import ThemeContext from "../../context/ThemeContext/ThemeContext";

import "./styles.css";

const DropDown = () => {
  const [toggleDMenu, setToggleDMenu] = useState(false);
  const [selection, setSelection] = useState("Filter By Region");

  const { fetchByRegion } = useContext(CountryContext);
  const { isLight, light, dark } = useContext(ThemeContext);
  const theme = isLight ? light : dark;

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const handleDropMenu = () => {
    setToggleDMenu(!toggleDMenu);
  };

  const handleSelection = (e) => {
    fetchByRegion(e.target.innerText);
    setToggleDMenu(false);
    setSelection(e.target.innerText);
  };

  return (
    <>
      <div
        className="ddownContainer"
        onClick={handleDropMenu}
        style={{ backgroundColor: theme.ui, color: theme.syntax }}
      >
        <p className="dText">{selection}</p>
        <FiChevronDown className="dIcon" style={{ color: theme.syntax }} />
      </div>
      {toggleDMenu && (
        <div
          className="dropMenu"
          style={{ backgroundColor: theme.ui, color: theme.syntax }}
        >
          {regions.map((region) => (
            <p key={region} onClick={handleSelection}>
              {region}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default DropDown;
