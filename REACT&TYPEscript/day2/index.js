import { createStore } from "./redux";

function reducer(state, action) {
    if (action.type === 'abc'){
        return {
            ...state,
            abc: 'OK'
        }
        state.abc = 'OK';
    }
    return state;

}

const store = createStore(reducer);

store.dispatch({type: 'abc'})
// store.person = {};
console.log(store.getState())
