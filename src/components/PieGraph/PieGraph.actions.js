import { GraphService } from "../../services/GraphService";

export const PieGraphActionTypes = {
  LOAD_PIE_GRAPH: "LOAD_PIE_GRAPH",
  CLEAR_PIE_GRAPH: "CLEAR_PIE_GRAPH",
};

export const loadPieGraph = () => async (dispatch) => {
  dispatch({ type: PieGraphActionTypes.CLEAR_PIE_GRAPH });
  const result = await GraphService.donut();
  dispatch({ type: PieGraphActionTypes.LOAD_PIE_GRAPH, payload: result });
};

export const clearPieGraph = () => (dispatch) => {
  dispatch({ type: PieGraphActionTypes.CLEAR_PIE_GRAPH });
};
