function updateBalance() {
    document.getElementById('balance').innerHTML = '$' + store.getState().balance
}

function deposit(value) {
    store.dispatch(actionDeposit(value))
}

function withdraw(value) {
    store.dispatch(actionWithdraw(value))
}

// Action creators
function actionDeposit(amount) {
    return {
        type: 'DEPOSIT',
        amount: amount
    }
}

function actionWithdraw(amount) {
    return {
        type: 'WITHDRAW',
        amount: amount
    }
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
