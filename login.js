// let loginForm = document.querySelector(".login-section");
// let regForm = document.querySelector(".register-section");

// if (loginForm != null) {
//   loginForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     let user_details = {
//       username: document.querySelector("#username").value,
//       password: document.querySelector("#password").value,
//     };

//     console.log(user_details);
//     fetch("https://hot-wheels-final.herokuapp.com/auth", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(user_details),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);

//         if (data["access_token"]) {
//           console.log(data);
//           localStorage.setItem("jwt_token", data["access_token"]);

//           window.location.href = "landing.html";
//         }
//       });
//   });
// }

// if (regForm != null) {
//   regForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     let new_user = {
//       first_name: document.querySelector("#name").value,
//       last_name: document.querySelector("#surname").value,
//       username: document.querySelector("#username").value,
//       email_address: document.querySelector("#email").value,
//       // address: document.querySelector(".user5").value,
//       password: document.querySelector("#password").value,
//     };

//     console.log(new_user);

//     fetch("https://hot-wheels-final.herokuapp.com/user-registration/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(new_user),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         // window.location.href = "login.html";
//       });
//   });
// }

// REGISTER
function register() {
  // GETTING DATA FROM FORM
  let new_user = {
    first_name: document.querySelector("#name").value,
    last_name: document.querySelector("#surname").value,
    username: document.querySelector("#username").value,
    email_address: document.querySelector("#email").value,
    // address: document.querySelector(".user5").value,
    password: document.querySelector("#password").value,
  };
  console.log(new_user);

  //   SEND DATA TO API
  fetch("https://hot-wheels-final.herokuapp.com/user-registration/", {
    method: "POST",
    body: JSON.stringify(new_user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res.status_code == 201);
      {
        setTimeout(function () {
          window.location = "./login.html";
        }, 3000);
      }
    });
}

// LOGIN
fetch("https://ecommerce-final-eomp.herokuapp.com/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

function login() {
  // GETTING DATA FROM FORM
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  console.log(email, password);

  //   SEND DATA TO API
  fetch("https://ecommerce-final-eomp.herokuapp.com/users/", {
    method: "PATCH",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (!res.data) {
        console.log("Error");
      } else {
        localStorage.setItem("user", JSON.stringify(res.data));
        window.location = "./landing.html";
      }
    });
}
