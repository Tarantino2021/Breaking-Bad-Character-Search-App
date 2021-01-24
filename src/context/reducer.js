function reducer(state, action) {
  switch (action.type) {
    case "SEARCH_CHAR":
      return {
        ...state,
        poster: action.payload,
      };
    case "ADD_CHAR":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case "DELETE_CHAR":
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
      };

    default:
      return {
        ...state,
      };
  }
}

export default reducer;
