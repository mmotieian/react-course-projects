import {createStore} from 'redux';


// REDUCER - DOES SOMETHING WHEN ACTION HAPPENS
// 1. Reducers are pure functions
// 2. Never change state or action 
const counterReducer = (state = {count: 0}, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
};

// state = {count: 0} , the state where the init state is {count:0}
const store = createStore(counterReducer);

// STORE: LINKS REDUCER AND ACTION TOGETHER.
store.subscribe(() => {
    console.log('store.getState()', store.getState());
});

const incrementCount = (incrementBy = 1) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = (decrementBy = 1) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = (count = 0) => ({
    type: 'SET',
    count
});

// Actions - nothing more than an object that gets sent to the store
store.dispatch(incrementCount(5));
store.dispatch(decrementCount(10));
store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(setCount(101));