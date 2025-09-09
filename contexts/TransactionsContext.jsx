import { createContext, useState } from "react";

export const TransactionsContext = createContext();

export function TransactionsProvider({ children }) {

    const [list, setList] = useState([])

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
