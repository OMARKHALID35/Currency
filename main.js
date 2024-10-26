function convertCurrency() {
  const amount = document.querySelector(".amount").value;
  const from = document.querySelector(".from").value;
  const to = document.querySelector(".to").value;
  const resultDiv = document.querySelector(".result");

  if (amount && from && to) {
    fetch(
      `https://v6.exchangerate-api.com/v6/029d126730f1a62de995b87b/latest/${from}`
    )
      .then((response) => response.json())
      .then((data) => {
        const rate = data.conversion_rates[to];
        const result = (rate * amount).toFixed(2);
        resultDiv.innerHTML = `${result} ${to}`;
      });
  } else {
    resultDiv.innerHTML = "Please Fill All Fields";
  }
}
