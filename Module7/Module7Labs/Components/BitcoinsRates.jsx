const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];
function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);

  fetch('https://api.coingecko.com/api/v3/exchange_rates')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  const options = currencies.map((curr) => (<option value={curr} key={curr}>{curr}</option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
    </div>
  );
}

export default BitcoinRates