import {
  CLEAR_COUNTRY_DETAILS,
  LOAD_BYREGION_FAIL,
  LOAD_BYREGION_REQUEST,
  LOAD_BYREGION_SUCCESS,
  LOAD_COUNTRY_FAIL,
  LOAD_COUNTRY_REQUEST,
  LOAD_COUNTRY_SUCCESS,
  LOAD_DETAILS_FAIL,
  LOAD_DETAILS_REQUEST,
  LOAD_DETAILS_SUCCESS,
  SEARCH_COUNTRY_FAIL,
  SEARCH_COUNTRY_REQUEST,
  SEARCH_COUNTRY_SUCCESS,
} from "../types";

const countryReducer = (state, { type, payload }) => {
  switch (type) {
    case LOAD_COUNTRY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOAD_COUNTRY_SUCCESS:
      return {
        ...state,
        countries: payload,
        loading: false,
      };
    case LOAD_COUNTRY_FAIL:
      return {
        ...state,
        error: payload,
      };

    case LOAD_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOAD_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        country: payload,
      };

    case LOAD_DETAILS_FAIL:
      return {
        ...state,
        error: payload,
      };

    case SEARCH_COUNTRY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SEARCH_COUNTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: payload,
      };
    case SEARCH_COUNTRY_FAIL:
      return {
        ...state,
        error: payload,
      };
    case CLEAR_COUNTRY_DETAILS:
      return {
        ...state,
        country: "",
      };

    case LOAD_BYREGION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOAD_BYREGION_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: payload,
      };
    case LOAD_BYREGION_FAIL:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
export default countryReducer;
