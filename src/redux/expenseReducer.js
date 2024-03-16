const initialState = {
    expenses: JSON.parse(localStorage.getItem("expenses")) || [],
    balance: JSON.parse(localStorage.getItem("balance")) || 0

}

const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            if(action.typepay === "income"){
                state.balance += +action.amount
            }else{
                state.balance -= +action.amount
            }
            localStorage.setItem("expenses", JSON.stringify([...state.expenses, { amount: action.amount, expensetype: action.expensetype, typepay: action.typepay, created: action.created }]))
            localStorage.setItem("balance", state.balance)
            return {
                expenses: [...state.expenses, { amount: action.amount, expensetype: action.expensetype, typepay: action.typepay, created: action.created}],
                balance: state.balance
            }
        default:
            return state
    }
}

export { expenseReducer }