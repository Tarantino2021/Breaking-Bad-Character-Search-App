import React, { useContext, useReducer } from "react";
import MyAlertContext from "./alertContext";
import alertReducer from "./alertReducer";

//helper
export const useMyAlertContext = () => {
  return useContext(MyAlertContext);
};

function AlertContextProvider({ children }) {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  //actions
  const showAlert = (text) => {
    dispatch({
      type: "SHOW_ALERT",
      payload: {
        text,
      },
    });
    setTimeout(() => dispatch({ type: "HIDE_ALERT" }), 3000);
  };

  return (
    <MyAlertContext.Provider
      value={{
        alert: state,
        showAlert,
      }}
    >
      {children}
    </MyAlertContext.Provider>
  );
}

export default AlertContextProvider;
