import { PieGraphActionTypes } from "./PieGraph.actions";

const initialState = {
  data: null,
};

export const pieGraphReducer = (state = initialState, action) => {
  switch (action.type) {
    case PieGraphActionTypes.LOAD_PIE_GRAPH: {
      return { ...state, data: action.payload };
    }
    case PieGraphActionTypes.CLEAR_PIE_GRAPH: {
      return { ...state, data: null };
    }
    default:
      return { ...state };
  }
};
