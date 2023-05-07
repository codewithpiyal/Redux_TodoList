import { createStore } from "redux";
import rootReducers from "./ReduxComponents/Reducer/Reducer";


const store= createStore(rootReducers)


export default store