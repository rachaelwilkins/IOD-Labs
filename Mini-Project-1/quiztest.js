
const catBreeds = ["Abyssinian", "Aegean", "American Bobtail", "American Curl"];

let searchBreeds;

const textInput = document.getElementById("search");

let timeout = null;

textInput.onkeyup = function () {
  clearTimeout(timeout);

  timeout = setTimeout(function () {
    searchCountry = textInput.value;
    console.log("search breeds = ", searchBreeds);
    const result = catBreeds.includes(searchBreeds);
    if (result) {
      console.log("found");  //display cat details details
    } else {
      console.log("Sorry, we couldn't find that. Try again?"); //dispay sorry message
    }
  }, 500);
};

