import { createContext, useState } from "react";

export const TransactionsContext = createContext();

export function TransactionsProvider({ children }) {

    const [list, setList] = useState([
        {
            category: 'lazer',
            value: "12,00",
            date: '2025-10-01T01:20:00.000Z'
        },
        {
            category: 'alimentação',
            value: "1000,00",
            date: '2025-10-01T01:20:00.000Z'
        },
        {
            category: 'lazer',
            value: "12,00",
            date: '2025-10-01T01:20:00.000Z'
        },
        {
            category: 'saude',
            value: "12,00",
            date: '2025-10-01T01:20:00.000Z'
        },
        {
            category: 'alimentação',
            value: "12,00",
            date: '2025-10-01T01:20:00.000Z'
        },
        {
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
