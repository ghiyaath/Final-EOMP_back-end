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
          <button class="add-to-btn" onclick="addToCart(${product[0]})">Add To Cart</button>
        </div>
      `;
      });
    });
}

function addToCart(id) {
  fetch("https://hot-wheels-final.herokuapp.com/show-products/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);
      let products = data.data;
      let product = products.filter((product) => product[0] == id);
      let cart_items = JSON.parse(localStorage.getItem(".product"));
      console.log(product);

      if (cart_items == null) {
        cart_items = [];
      }

      cart_items.push(product);
      localStorage.setItem(".product", JSON.stringify(cart_items));
    });
}
getProduct();
