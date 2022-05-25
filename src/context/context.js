import React, {useReducer, createContext} from 'react';

import contextReducer from './contextReducer';

const initialState=JSON.parse(localStorage.getItem('transactions')) || [{"amount":180,"category":"Food","type":"Expense","date":"2022-05-25","id":"39f97bc8-07c0-4b65-9905-a636d46190e5"},{"amount":200,"category":"Travel","type":"Expense","date":"2022-05-25","id":"9dc9898f-d684-45d7-9a7f-97ae4f047f3e"},{"amount":3000,"category":"Salary","type":"Income","date":"2022-05-25","id":"fbec44d5-4197-4ef8-9cb6-7f0ca2caf62f"},{"amount":200,"category":"Investments","type":"Income","date":"2022-05-25","id":"69689d34-ce6f-48eb-8977-a9b89d615cdd"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children}) => {
    const[transactions,dispatch] = useReducer(contextReducer , initialState);

    // Action Creators 
    const deleteTransaction = (id) =>{
        dispatch({type:'DELETE_TRANSACTION', payload:id});

    }

    const addTransaction =(transaction) =>{
        dispatch({type:'ADD_TRANSACTION', payload:transaction});
    }


    const balance = transactions.reduce((acc, currVal) => {
        return (currVal.type === 'Expense' ? acc-currVal.amount : acc + currVal.amount)

    },0);

    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction, addTransaction, 
            transactions, balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    );
}