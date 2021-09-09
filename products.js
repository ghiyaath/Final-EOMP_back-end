function getProduct() {
  let container = document.querySelector(".section.advert");

  fetch("https://hot-wheels-final.herokuapp.com//show-products/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let products = data.data;

      container.innerHTML = "";
      products.forEach((product) => {
        container.innerHTML += `
        <div class="product-card">
          <img class="product-image" src="${product[2]}"/>
          <h3 class="catergory">${product[5]}</h3>
          <h1 class="product-name">${product[1]}</h1>
          <h5 class="price">${product[4]}</h5>
        </div>
      `;
      });
    });
}

getProduct();
