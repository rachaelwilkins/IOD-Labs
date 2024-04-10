
const data = [{ name: "bob", age: 23 },
  { name: "alice", age: 39 },];


  

  function addCard() {
        const template = document.getElementById("card-template").content.cloneNode(true);
        template.querySelector(".card-title").innerText = "Bob", "Alice";
        template.querySelector(".card-text").innerText = "23", "39";
        document.querySelector("#card-list").appendChild(template);
      }
      addCard();

