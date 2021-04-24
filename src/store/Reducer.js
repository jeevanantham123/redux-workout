const initialState = {
  message: "Hello World!",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case "Message_change":
      if (state.message === action.payLoad) {
        return { ...state, message: "Hello World!" };
      }
      return { ...state, message: action.payLoad };
  }
};

export default reducer;
