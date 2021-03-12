import { GraphService } from "../../services/GraphService";

export const LinearGraphActionTypes = {
  LOAD_LINEAR_GRAPH: "LOAD_LINEAR_GRAPH",
  CLEAR_LINEAR_GRAPH: "CLEAR_LINEAR_GRAPH",
};

export const loadLinearGraph = () => async (dispatch) => {
  dispatch({ type: LinearGraphActionTypes.CLEAR_LINEAR_GRAPH });
  const result = await GraphService.linearGraph();
  dispatch({ type: LinearGraphActionTypes.LOAD_LINEAR_GRAPH, payload: result });
};

export const clearLinearGraph = () => (dispatch) => {
  dispatch({ type: LinearGraphActionTypes.CLEAR_LINEAR_GRAPH });
};
