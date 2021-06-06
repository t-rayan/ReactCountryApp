import React, { useEffect, useContext } from "react";
import CountryList from "../components/CountryList/CountryList";
import Layout from "../components/Layout/Layout";
import SearchBar from "../components/SearchBar/SearchBar";
import CountryContext from "../context/CountryContext/CountryContext";
import ThemeContext from "../context/ThemeContext/ThemeContext";

const HomeScreen = () => {
  const { fetchAllCountries, loading } = useContext(CountryContext);
  const { isLight, dark, light } = useContext(ThemeContext);
  const theme = isLight ? light : dark;

  useEffect(() => {
    fetchAllCountries();
  }, []);

  return (
    <div style={{ backgroundColor: theme.bg }}>
      <SearchBar />
      <Layout loading={loading}>
        <CountryList />
      </Layout>
    </div>
  );
};

export default HomeScreen;
