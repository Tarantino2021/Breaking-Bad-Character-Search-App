function reducer(state, action) {
  {
    console.log(action);
  }
  switch (action.type) {
    case "SET_LOADING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "SEARCH_CHAR":
      return {
        ...state,
        characters: action.payload,
        loading: false,
      };
    case "ADD_CHAR":
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false,
      };
    case "DELETE_CHAR":
      return {
        ...state,
        list: state.list.filter((item) => item.char_id != action.payload),
      };

    default:
      return {
        ...state,
      };
  }
}

export default reducer;
