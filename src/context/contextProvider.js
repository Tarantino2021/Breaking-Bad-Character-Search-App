import React, { useContext, useReducer, useEffect } from "react";
import MyGlobalContext from "./context";
import axios from "axios";
import reducer from "./reducer";

//helper
export const useMyContext = () => {
  return useContext(MyGlobalContext);
};

function ContextProvider({ children }) {
  const initialState = {
    characters: localStorage.getItem("characters")
      ? JSON.parse(localStorage.getItem("characters"))
      : [],
    list: localStorage.getItem("list")
      ? JSON.parse(localStorage.getItem("list"))
      : [],
    loading: false,
  };

  //reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  const baseURL = "https://www.breakingbadapi.com/api/characters?name=";

  const baseURLID = "https://www.breakingbadapi.com/api/characters/";

  //ACTIONS
  //search
  const fetchMovies = async (input) => {
    const request = await axios.get(`${baseURL}${input}`);

    dispatch({
      type: "SEARCH_CHAR",
      payload: request.data,
    });
    return request;
  };

  //addtoList
  const addtoList = (char) => {
    dispatch({
      type: "ADD_CHAR",
      payload: char,
    });
  };

  //delete
  const deleteChar = (id) => {
    dispatch({
      type: "DELETE_CHAR",
      payload: id,
    });
  };

  //setting localStorage
  useEffect(() => {
    localStorage.setItem("characters", JSON.stringify(state.characters));
    localStorage.setItem("list", JSON.stringify(state.list));
  }, [state]);

  return (
    <MyGlobalContext.Provider
      value={{
        characters: state.characters,
        fetchMovies,
        list: state.list,
        addtoList,
        deleteChar,
        loading: state.loading,
      }}
    >
      {children}
    </MyGlobalContext.Provider>
  );
}

export default ContextProvider;
