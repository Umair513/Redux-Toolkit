const redux = require("redux")
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators

const CAKE_ORDERED = "CAKE_ORDERED"
const CAKE_RESTORED = "CAKE_RESTORED"

function orderCake(qty = 1) {
    return {
        type: CAKE_ORDERED,
        payload: qty
    }
}
function restoreCake(qty = 1) {
    return {
        type: CAKE_RESTORED,
        payload: qty
    }
}

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload
            }
        case CAKE_RESTORED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
        default:
            return state
    }

}

const store = createStore(reducer)
console.log("Initial state = ", store.getState())

const unsubscribe = store.subscribe(() => console.log("updated state = ", store.getState()))
// store.dispatch(orderCake())
// store.dispatch(restoreCake())
// store.dispatch(restoreCake(9))
// store.dispatch(orderCake(4))

const actions = bindActionCreators({ orderCake, restoreCake }, store.dispatch)
actions.orderCake(5); 

unsubscribe()