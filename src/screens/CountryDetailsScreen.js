import React, { useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import CountryContext from "../context/CountryContext/CountryContext";
import ThemeContext from "../context/ThemeContext/ThemeContext";

import { FiArrowLeft } from "react-icons/fi";

const CountryDetailsScreen = () => {
  const history = useHistory();

  const { cname } = useParams();
  const { fetchSingleCountry, country, loading, clearCountryHistory } =
    useContext(CountryContext);

  const { isLight, dark, light } = useContext(ThemeContext);
  const theme = isLight ? light : dark;

  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    languages,
    currencies,
    borders,
    topLevelDomain,
  } = country && country[0];

  useEffect(() => {
    fetchSingleCountry(cname);
  }, []);

  return (
    <div style={{ backgroundColor: theme.bg, color: theme.syntax }}>
      <Layout loading={loading}>
        {country && (
          <>
            <button
              className="backBtn"
              style={{ backgroundColor: theme.ui, color: theme.syntax }}
              onClick={() => {
                history.push("/");
                clearCountryHistory();
              }}
            >
              <FiArrowLeft />
              <span>Back</span>
            </button>
            <div className="detailContainer">
              <div className="bigFlagContainer">
                <img src={flag} alt="flag" className="bigFlag" />
              </div>
              <div className="countryDetails">
                <p className="countryName">{name}</p>
                <div className="extraInfo">
                  <div className="left">
                    <p className="nativeName">
                      Native Name:{" "}
                      <span className="smallText">{nativeName}</span>{" "}
                    </p>
                    <p className="population">
                      Population:{" "}
                      <span className="smallText">{population}</span>{" "}
                    </p>
                    <p className="region">
                      Region: <span className="smallText"> {region}</span>{" "}
                    </p>
                    <p className="subRegion">
                      Sub Region: <span className="smallText">{subregion}</span>{" "}
                    </p>
                    <p className="capital">
                      Capital: <span className="smallText"> {capital}</span>{" "}
                    </p>
                  </div>
                  <div className="right">
                    {/* {topLevelDomain && <p className="domain">Top Level Domain: {topLevelDomain}</p> } */}
                    <p className="domain">
                      Top Level Domain:
                      {topLevelDomain?.map((d) => (
                        <span key={d} className="smallText">
                          {d}
                        </span>
                      ))}
                    </p>
                    <p className="currencies">
                      Currencies:{" "}
                      {currencies?.map((c) => (
                        <span key={c.name} className="smallText">
                          {c.name}
                        </span>
                      ))}
                    </p>
                    <p className="languages">
                      Languages:
                      {languages?.map((l) => (
                        <span className="smallText" key={l.name}>
                          {l.name},
                        </span>
                      ))}{" "}
                    </p>
                  </div>
                </div>
                <div className="borderCountries">
                  <p>Border Countries: </p>
                  <div className="borderList">
                    {borders?.map((b) => (
                      <span
                        className="borders"
                        key={b}
                        style={{
                          backgroundColor: theme.ui,
                          fontWeight: "bold",
                        }}
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Layout>
    </div>
  );
};

export default CountryDetailsScreen;
