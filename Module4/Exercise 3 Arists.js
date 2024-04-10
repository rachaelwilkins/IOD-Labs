const artist = {
  name: "Van Gogh",
  portfolio: [
    {
      title: "portrait",
      url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image",
    },
    {
      title: "sky",
      url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg",
    },
  ],
};

function addCard() {
  const template = document.getElementById("card-template").content.cloneNode(true);
  template.querySelector(".card-title").innerText = "Van Gogh";
  template.querySelector(".card-text").innerText = "portrait", "sky";
  document.querySelector("#card-list").appendChild(template);
}
addCard();

