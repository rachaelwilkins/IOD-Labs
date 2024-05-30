import { useState, useEffect } from "react";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {

    const [currency, setCurrency] = useState(currencies[0]);

    const [rate, setRate] = useState('');

    useEffect(() => {

        let ignore = false;

        console.log('Running effect');
        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=` +
            `${currency}`)
            .then(response => response.json())
            .then(json => {
                const currCurrency = Object.keys(json.bitcoin)[0];
                if (!ignore) setRate(json.bitcoin[currCurrency]);
            }),
            { mode: 'cors' }; 

            return () => {
                ignore = true; // ignore now invalid fetch results
                console.log('cleanup effect');
                }; 
               }, [currency]); 
    
    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);
    return (
        <div className="BitcoinRates componentBox">
            <h1>Exercise 6.1 - BitCoin Rates</h1>
            <label>Set currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
            <p>Rate: {rate}</p>
        </div>
    )
}

export default BitcoinRates