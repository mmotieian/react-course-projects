import {createStore} from 'redux';

// state = {count: 0} , the state where the init state is {count:0}
const store = createStore((state = {count: 0}, action) => {

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
});

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