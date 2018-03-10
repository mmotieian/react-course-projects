import {createStore, combineReducers} from 'redux';

const demoState = {
    expenses: [{
        id: 'asdflkjsda',
        description: 'January Rent',
        note: 'This is a final payment',
        amount: 300,
        createdAt: 0
    }],
    filters:{
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};