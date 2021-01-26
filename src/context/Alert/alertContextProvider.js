import React, { useContext, useReducer } from "react";
import MyAlertContext from "./alertContext";
import alertReducer from "./alertReducer";

//helper
export const useMyAlertContext = () => {
  return useContext(MyAlertContext);
};

function AlertContextProvider({ children }) {
  const initialState = {
    alertVisible: false,
    alertMessage: "",
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  //actions
  const showAlert = (message) => {
    dispatch({
      type: "SHOW_ALERT",
    });
  };

  const hideAlert = () => {
    dispatch({
      type: "HIDE_ALERT",
    });
  };

  return (
    <MyAlertContext.Provider
      value={{
        alertVisible: state.alertVisible,
        alertMessage: state.alertMessage,
        hideAlert,
        showAlert,
      }}
    >
      {children}
    </MyAlertContext.Provider>
  );
}

export default AlertContextProvider;
