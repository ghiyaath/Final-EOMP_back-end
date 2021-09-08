function getProduct() {
  let container = document.querySelector(".advert-center.container");

  fetch("https://hot-wheels-final.herokuapp.com//show-products/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let products = data.data;

      container.innerHTML = "";
      products.forEach((product) => {
        container.innerHTML += createCards(product);
      });
    });
}

getProduct();

function createCards(card) {
  // let images = {
  //   "url": ""
  // }
  console.log(card);
  return `<div class="advert-box"><div class="advert-box">
  <div class="dotted">
    <div class="content">
      <h2>
        BBS <br />
        Rim set
      </h2>
      <h4>R8 250.00</h4>
    </div>
  </div>
  <img src="/images/bbs tyre .jpg" alt="" />
</div>
    <div class="dotted">
      <div class="content">
        <h2>
          BBS <br />
          Rim set
        </h2>
        <h4>R8 250.00</h4>
      </div>
    </div>
    <img src="/images/bbs tyre .jpg" alt="" />
  </div>`;
}

function get1Product(cardId) {
  console.log(cardId);
}
