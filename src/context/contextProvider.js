import React, { useContext, useReducer } from "react";
import MyGlobalContext from "./context";
import axios from "axios";
import reducer from "./reducer";

//helper
export const useMyContext = () => {
  return useContext(MyGlobalContext);
};

function ContextProvider({ children }) {
  const initialState = {
    poster: [],
    list: [],
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

  console.log(state.list);

  return (
    <MyGlobalContext.Provider
      value={{
        poster: state.poster,
        fetchMovies,
        list: state.list,
        addtoList,
        deleteChar,
      }}
    >
      {children}
    </MyGlobalContext.Provider>
  );
}

export default ContextProvider;
