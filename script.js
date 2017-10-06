let balance = 0

function updateBalance() {
    document.getElementById('balance').innerHTML = '$' + balance
}

function deposit(value) {
    balance += value
    updateBalance()
}

function withdraw(value) {
    if (balance >= value) {
        balance -= value
    }
    updateBalance()
}
