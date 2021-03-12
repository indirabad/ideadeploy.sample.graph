import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./components/Authorization/Authorization.reducer";
import { linearGraphReducer } from "./components/LinearGraph/LinearGraph.reducer";
import { pieGraphReducer } from "./components/PieGraph/PieGraph.reducer";

let rootReducer = combineReducers({
  authState: authReducer,
  linearGraphState: linearGraphReducer,
  pieGraphState: pieGraphReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk));
window.store = store;

export default store;
