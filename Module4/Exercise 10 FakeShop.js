let numProducts = 20;
let products = [];

function getCards() {
    fetch(`https://fakestoreapi.com/products`)
        .then(res => res.json())
        .then(json => {
            products = json;
            let html = ``;
            for (let i = 0; i < numProducts && i < products.length; i++) {
                html += `
                    <div class="col">
                        <div class="card h-100">
                            <a href="./pages/details.html?id=${products[i].id}"><img src="${products[i].image}" class="card-img-top imgCards"></a>
                            <div class="card-body">
                                <h5 class="card-title">${products[i].title}</h5>
                                <p class="card-text">${products[i].description}</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary">R$${products[i].price}</small>
                            </div>
                        </div>
                    </div>
                `;
            }
            document.getElementById('cards').innerHTML = html;
        });
}
    getCards();
