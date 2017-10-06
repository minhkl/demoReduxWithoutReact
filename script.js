function updateBalance() {
    document.getElementById('balance').innerHTML = '$' + store.getState().balance
}

function deposit(value) {
    if (value == 10) {
        store.dispatch(actionDeposit10)
    } else if (value == 1) {
        store.dispatch(actionDeposit1)
    }
}

function withdraw(value) {
    if (value == 10) {
        store.dispatch(actionWithdraw10)
    } else if (value == 1) {
        store.dispatch(actionWithdraw1)
    }
}

// Actions
const actionDeposit1 = {
    type: 'DEPOSIT',
    amount: 1
}
const actionDeposit10 = {
    type: 'DEPOSIT',
    amount: 10
}
const actionWithdraw1 = {
    type: 'WITHDRAW',
    amount: 1
}
const actionWithdraw10 = {
    type: 'WITHDRAW',
    amount: 10
}

// Reducer
const initialState = {balance: 0}
function reducer(state = initialState, action) {
    switch(action.type) {
        case 'DEPOSIT': {
            const newBalance = state.balance + action.amount
            return {balance: newBalance}
        }
        case 'WITHDRAW': {
            if (state.balance >= action.amount) {
                const newBalance = state.balance - action.amount
                return {balance: newBalance}
            } else {
                return state
            }
        }
        default:
            return state
    }
}

// Store
const store = Redux.createStore(reducer)
// const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// Register listener
store.subscribe(updateBalance)
