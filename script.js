function getUser() {
  let container = document.querySelector(".container");
  container.innerHTML = "<p>Loading...</p>";

  fetch("https://randomuser.me/api/?results=3")
    .then((res) => res.json())
    .then((data) => {
      setTimeout(() => {
        container.innerHTML = "";

        data.results.forEach((user) => {
          let box = document.createElement("div");
          box.className = "box";

          let profileImg = document.createElement("div");
          profileImg.className = "profile-img";

          let img = document.createElement("img");
          img.src = user.picture.large;

          let info = document.createElement("div");
          info.className = "info";

          let h3 = document.createElement("h3");
          h3.textContent = user.name.first + " " + user.name.last;

          let p = document.createElement("p");
          p.textContent = user.email;

          let badge = document.createElement("span");
          let status = Math.random() < 0.5 ? "Active" : "Inactive";
          badge.className = "badge " + (status === "Active" ? "badge-active" : "badge-inactive");
          badge.textContent = status;

          info.appendChild(h3);
          info.appendChild(p);
          info.appendChild(badge);

          profileImg.appendChild(img);

          box.appendChild(profileImg);
          box.appendChild(info);

          container.appendChild(box);
        });
      }, 800);

    })
    .catch((error) => {
      container.innerHTML = "<p>Failed to load users</p>";
      console.log("error occure", error);
    });
}

document.querySelector(".refresh-btn").addEventListener("click", function () {
  getUser();
});

getUser();
