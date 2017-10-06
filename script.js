let state = {balance: 0}

function updateBalance() {
    document.getElementById('balance').innerHTML = '$' + state.balance
}

function deposit(value) {
    state.balance += value
    updateBalance()
}

function withdraw(value) {
    if (state.balance >= value) {
        state.balance -= value
    }
    updateBalance()
}
