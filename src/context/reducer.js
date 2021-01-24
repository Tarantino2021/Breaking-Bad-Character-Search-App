function reducer(state, action) {
  {
    console.log(action);
  }
  switch (action.type) {
    case "SEARCH_CHAR":
      return {
        ...state,
        poster: action.payload,
      };
    case "ADD_CHAR":
      if (state.list.filter((item) => item.char_id === action.payload)) {
        state.list.push({
          ...action.payload,
        });
      }
      return {
        ...state,
        list: [...state.list],
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
