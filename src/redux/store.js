import { createStore } from "redux"
import { expenseReducer } from "./expenseReducer"

const store = createStore(expenseReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export { store }