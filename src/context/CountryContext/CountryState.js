import React, { useReducer } from "react";
import Axios from "axios";

import {
  LOAD_COUNTRY_FAIL,
  LOAD_COUNTRY_REQUEST,
  LOAD_COUNTRY_SUCCESS,
  LOAD_DETAILS_FAIL,
  LOAD_DETAILS_REQUEST,
  LOAD_DETAILS_SUCCESS,
  SEARCH_COUNTRY_REQUEST,
  SEARCH_COUNTRY_SUCCESS,
  SEARCH_COUNTRY_FAIL,
  CLEAR_COUNTRY_DETAILS,
  LOAD_BYREGION_REQUEST,
  LOAD_BYREGION_FAIL,
  LOAD_BYREGION_SUCCESS,
} from "../types";
import CountryContext from "./CountryContext";
import countryReducer from "./CountryReducers";

import { baseUrl } from "../../api/api";

function CountryState({ children }) {
  const initialState = {
    countries: [],
    country: "",
    loading: false,
    error: null,
    searchResults: [],
  };

  const [state, dispatch] = useReducer(countryReducer, initialState);

  // fetching all countries
  const fetchAllCountries = async () => {
    dispatch({
      type: LOAD_COUNTRY_REQUEST,
    });
    try {
      const res = await Axios.get(`${baseUrl}/all`);
      dispatch({
        type: LOAD_COUNTRY_SUCCESS,
        payload: res?.data,
      });
    } catch (error) {
      dispatch({
        type: LOAD_COUNTRY_FAIL,
        payload: error.response,
      });
    }
  };

  // fetching single country details
  const fetchSingleCountry = async (name) => {
    dispatch({
      type: LOAD_DETAILS_REQUEST,
    });
    try {
      const res = await Axios.get(`${baseUrl}/name/${name}`);
      dispatch({
        type: LOAD_DETAILS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: LOAD_DETAILS_FAIL,
        payload: error.response,
      });
    }
  };

  // search country with name
  const searchCountry = async (searchText) => {
    dispatch({
      type: SEARCH_COUNTRY_REQUEST,
    });

    try {
      const res = await Axios.get(`${baseUrl}/name/${searchText}`);
      dispatch({
        type: SEARCH_COUNTRY_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: SEARCH_COUNTRY_FAIL,
        payload: error.response,
      });
    }
  };

  // FETCH COUNTRIES BY REGION
  const fetchByRegion = async (regionName) => {
    dispatch({
      type: LOAD_BYREGION_REQUEST,
    });

    try {
      const res = await Axios.get(`${baseUrl}/region/${regionName}`);
      dispatch({
        type: LOAD_BYREGION_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: LOAD_BYREGION_FAIL,
        payload: error.response,
      });
    }
  };
  // clear country history
  const clearCountryHistory = () => {
    dispatch({
      type: CLEAR_COUNTRY_DETAILS,
    });
  };

  return (
    <div>
      <CountryContext.Provider
        value={{
          countries: state.countries,
          country: state.country,
          loading: state.loading,
          searchResults: state.searchResults,
          fetchAllCountries,
          fetchSingleCountry,
          searchCountry,
          clearCountryHistory,
          fetchByRegion,
        }}
      >
        {children}
      </CountryContext.Provider>
    </div>
  );
}

export default CountryState;
