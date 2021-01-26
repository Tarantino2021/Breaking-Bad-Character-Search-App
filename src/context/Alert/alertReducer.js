import React from "react";

function alertReducer(state, action) {
  switch (action.type) {
    case "SHOW_ALERT":
      return {
        ...state,
        alertVisible: true,
        alertMessage: action.message,
      };
    case "HIDE_ALERT":
      return { ...state, alertVisible: false };
    default:
      return state;
  }
}

export default alertReducer;
