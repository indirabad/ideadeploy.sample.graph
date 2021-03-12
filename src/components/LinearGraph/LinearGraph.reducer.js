import { LinearGraphActionTypes } from "./LinearGraph.actions";

const initialState = {
  data: null,
};

export const linearGraphReducer = (state = initialState, action) => {
  switch (action.type) {
    case LinearGraphActionTypes.LOAD_LINEAR_GRAPH: {
      return { ...state, data: action.payload };
    }
    case LinearGraphActionTypes.CLEAR_LINEAR_GRAPH: {
      return { ...state, data: null };
    }
    default:
      return { ...state };
  }
};
