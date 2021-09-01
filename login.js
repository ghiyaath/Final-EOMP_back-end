let loginForm = document.querySelector(".login-section");
let regForm = document.querySelector(".register-section");


if (loginForm != null) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let user_details = {
      username: document.querySelector("#username").value,
      password: document.querySelector("#password").value,
    };

    console.log(user_details);
    fetch("https://hot-wheels-final.herokuapp.com/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user_details),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data["access_token"]) {
          console.log(data);
          localStorage.setItem("jwt_token", data["access_token"]);

          window.location.href = "landing.html";
        }
      });
  });
}

if (regForm != null) {
  regForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let new_user = {
      first_name: document.querySelector("#name").value,
      last_name: document.querySelector("#surname").value,
      // username: document.querySelector(".user1").value,
      email_address: document.querySelector("#email").value,
      // address: document.querySelector(".user5").value,
      password: document.querySelector("#password").value,
    };

    console.log(new_user);

    fetch("https://hot-wheels-final.herokuapp.com/user-registration/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(new_user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        window.location.href = "login.html";
      });
  });
}
