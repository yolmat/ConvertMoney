const button = document.getElementById('convertButton');
const select = document.getElementById('currencySelect');
const header = document.getElementById('header')
const section = document.getElementById('section')

const dolar = 5.2;
const euro = 5.9;
const bitCoin = 202166.11
const ethereum = 14520.38

const convertValues = () => {
    const inputReais = document.getElementById('value-real').value;
    const realValueText = document.getElementById('realValueText');
    const currencyValueText = document.getElementById('currencyValueText');

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais);

    if (select.value === '€ Euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro);
    }
    else if (select.value === 'US$ Dolar Americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar);
    }
    else if (select.value === '₿ BitCoin') {
        currencyValueText.innerHTML = (inputReais / bitCoin).toFixed(7);
    } else if (select.value === "Ξ Ethereum") {
        currencyValueText.innerHTML = (inputReais / ethereum).toFixed(6);
    };
};

const changeCurrency = () => {
    const currencyName = document.getElementById('currencyName');
    const currencyImg = document.getElementById('currencyImg');

    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './img/Euro.svg'
        header.style.backgroundColor = '#343dff'
        section.style.borderColor = '#343dff'
        button.style.backgroundColor = '#343dff'

    }
    else if (select.value === 'US$ Dolar Americano') {
        currencyName.innerHTML = 'Dolar Americano';
        currencyImg.src = './img/Dolar.svg';
        header.style.backgroundColor = '#000000';
        section.style.borderColor = '#000000';
        button.style.backgroundColor = '#000000';
    }
    else if (select.value === "₿ BitCoin") {
        currencyName.innerHTML = 'BitCoin';
        currencyImg.src = './img/BitCoin.svg';
        header.style.backgroundColor = ' #F7931A';
        section.style.borderColor = ' #F7931A';
        button.style.backgroundColor = ' #F7931A';
    } else if (select.value === "Ξ Ethereum") {
        currencyName.innerHTML = 'Ehereum';
        currencyImg.src = './img/Ethereum.png';
        header.style.backgroundColor = ' #7b81a2';
        section.style.borderColor = ' #7b81a2';
        button.style.backgroundColor = ' #7b81a2';

    }
    convertValues();
};

button.addEventListener('click', convertValues);
select.addEventListener('change', changeCurrency);