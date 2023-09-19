import { countries } from "./countries.js";
 
const inputField = document.querySelector("#inputField");
const fromCurrency = document.querySelector("#fromCurency");
const toCurrency = document.querySelector("#toCurency");
const swap = document.querySelector('#swap');
const btn = document.querySelector("#resultBtn");
const fromFlag = document.querySelector("#fromFlag");
const toFlag = document.querySelector("#toFlag");
const fromResult = document.querySelector("#fromResult");
const toResult = document.querySelector("#toResult");

countries.forEach((data) => {
  const option = document.createElement("option");
  option.innerHTML += `
    ${data.currencyCode} - ${data.countryName} - ${data.countryCode}
    `;
  fromCurrency.appendChild(option);
  const clonedOption = option.cloneNode(true);
  toCurrency.appendChild(clonedOption);
});

fromCurrency.value = "USD - United States - US";
toCurrency.value = "INR - India - IN";

const updateFlag = (currency, flag) => {
  const flagCode = currency.value.slice(-2);
  flag.src = `https://flagsapi.com/${flagCode}/flat/64.png`;
};

fromCurrency.addEventListener("change", () => updateFlag(fromCurrency, fromFlag));
toCurrency.addEventListener("change", () => updateFlag(toCurrency, toFlag));

swap.addEventListener('click', () => {
  [fromCurrency.value, toCurrency.value] = [toCurrency.value, fromCurrency.value];
  updateFlag(fromCurrency, fromFlag);
  updateFlag(toCurrency, toFlag);
});

const getExchangedValue = async () => {
  let enteredAmount = parseFloat(inputField.value);
  const from = fromCurrency.value.slice(0, 3);
  const to = toCurrency.value.slice(0, 3);

  const fetchedData = await fetch(
     `https://v6.exchangerate-api.com/v6/${Enter_your_own_api_key}/latest/${from}`
  );
  const recievedData = await fetchedData.json();

  const conversionValue = recievedData.conversion_rates[to];
  const finalConvertedValue = (enteredAmount * conversionValue).toFixed(2);

  fromResult.textContent = `${enteredAmount} - ${from}`;
  toResult.textContent = `${finalConvertedValue} - ${to}`;
};

btn.addEventListener("click", getExchangedValue);