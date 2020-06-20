import { combineReducers, createStore } from "redux"; 
import { medicineReducer } from "./medicine/reducers";


const rootReducer = combineReducers({
  medicine: medicineReducer
});


export type ApptState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer);
