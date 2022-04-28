axios
  .get("https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=10")
  .then(function (response) {
    // handle ten random cards
  })
  .catch(function (error) {
    // handle what went wrong
  });