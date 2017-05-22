import {createStore,combineReducers,applyMiddleware} from "redux";
import fruits from "../reducers/fruits";

export default createStore(
	combineReducers({
		fruits
	})
);