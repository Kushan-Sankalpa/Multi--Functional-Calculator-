function updateAmountPlaceholder() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    document.getElementById('amountCurrencySymbol').innerText = fromCurrency;
}

function convertCurrency() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = document.getElementById('amount').value;

    if (amount === '' || isNaN(amount)) {
        alert('Please enter a valid amount');
        return;
    }

    const exchangeRates = {
        'LKR': { 'USD': 0.0031, 'EUR': 0.0026, 'GBP': 0.0022, 'LKR': 1 },
        'USD': { 'LKR': 299, 'EUR': 0.85, 'GBP': 0.75, 'USD': 1 },
        'EUR': { 'LKR': 377, 'USD': 1.18, 'GBP': 0.88, 'EUR': 1 },
        'GBP': { 'LKR': 394, 'USD': 1.33, 'EUR': 1.14, 'GBP': 1 }
    };

    const convertedAmount = (amount * exchangeRates[fromCurrency][toCurrency]).toFixed(2);

    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
}

function goBack() {
    window.history.back();
}

// Initialize the currency symbol in the amount field
updateAmountPlaceholder();
