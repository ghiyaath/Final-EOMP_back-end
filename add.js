function addProduct() {
  const img_url = document.querySelector(".img_url").value;
  const name = document.querySelector(".name").value;
  const description = document.querySelector(".description").value;
  const price = document.querySelector(".price").value;
  const category = document.querySelector(".category").value;
  const review = document.querySelector(".review").value;

  fetch("https://hot-wheels-final.herokuapp.com/add-product/", {
    method: "POST",
    body: JSON.stringify({
      img: img_url,
      name: name,
      description: description,
      price: price,
      category: category,
      review: review,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => console.log(res.json()))
    .then((res) => {
      console.log(res);

      // if (res.status_code == 201) {
      //   window.location.reload();
      // }
      window.location.href = "products.html";
    });
}

let addForm = document.querySelector(".add-product");
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
