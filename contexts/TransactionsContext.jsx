import { createContext, useState } from "react";

export const TransactionsContext = createContext();

export function TransactionsProvider({ children }) {

    const [list, setList] = useState([
        {
            id: '1',
            category: 'lazer',
            value: "12,00",
            date: '2025-10-01T01:20:00.000Z'
        },
        {
            id: '2',
            category: 'alimentação',
            value: "1000,00",
            date: '2025-11-01T01:20:00.000Z'
        },
        {
            id: '3',
            category: 'lazer',
            value: "12,00",
            date: '2025-11-01T01:20:00.000Z'
        },
        {
            id: '4',
            category: 'saude',
            value: "12,00",
            date: '2025-10-01T01:20:00.000Z'
        },
        {
            id: '5',
            category: 'alimentação',
            value: "12,00",
            date: '2025-10-01T01:20:00.000Z'
        },
        {
            id: '6',
            category: 'transporte',
            value: "12,00",
            date: '2025-10-01T01:20:00.000Z'
        }
    ])

    const addTransaction = (obj) => {
        setList(prevState => ([
            ...prevState, obj
        ]))
    }

    return <TransactionsContext.Provider
        value={{
            addTransaction,
            list
        }}>
        {children}
    </TransactionsContext.Provider>
}
