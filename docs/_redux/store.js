import { createStore, combineReducers } from 'redux';
import { authReducer } from "./reducers"
import stateLoader from "./stateLoader"

const store = createStore(
    combineReducers({
        auth: authReducer
    }), stateLoader.loadState(), window.devToolsExtension ? window.devToolsExtension() : f => f
)
store.subscribe(() => {
    stateLoader.saveState(store.getState());
});
export default store;