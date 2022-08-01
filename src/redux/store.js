import {createStore,combineReducers} from "redux"
import {authreducer} from "./reducer"
const store=createStore(
    combineReducers({
        auth:authreducer
    })
)
export default store