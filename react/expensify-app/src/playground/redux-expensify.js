import { createStore, combineReducers } from 'redux';

const demoState = {
    expenses: [{
        id: 'skladja',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amout',  //date or amout
        startDate: undefined,
        endDate: undefined
    }
};