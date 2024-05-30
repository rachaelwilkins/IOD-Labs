import { useState, useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function UpdatedBitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);

  const [rate, setRate] = useState("");

  useEffect(() => {
    if (url) {
      let ignore = false;
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          if (!ignore) {
            setData(json);
          }
        });

      return () => {
        ignore = true;
      };
    }
  }, [url]); // re-run effect if url changes

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));
  return (
    <div className="BitcoinRates componentBox">
      <h1>Exercise 6.2 - BitCoin Rates Custom Hook</h1>
      <label>
        Set currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <p>Rate: {rate}</p>
    </div>
  );
}

export default UpdatedBitcoinRates;
