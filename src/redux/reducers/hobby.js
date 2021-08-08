const initialState = {
  list: [],
  activeId: null,
};

function hobbyReducer(state = initialState, action) {
  const { type, payload } = action;

  // PayLoad la du lieu tho
  switch (type) {
    case "ADD_HOBBY":
      const newList = [...state.list];
      newList.push(payload);
      console.log(state.list.push(payload));
      return {
        ...state,
        // list: newList,
        list: newList,
      };

    case "SET_ACTIVE_HOBBY":
      return {
        ...state,
        activeId: payload,
      };

    default:
      return state;
  }
}

export default hobbyReducer;
