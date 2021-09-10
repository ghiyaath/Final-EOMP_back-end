function addToCart(id) {
  fetch("https://hot-wheels-final.herokuapp.com/view-product/")
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
function addToCart(id) {
  fetch("https://hot-wheels-final.herokuapp.com/view-product/")
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
