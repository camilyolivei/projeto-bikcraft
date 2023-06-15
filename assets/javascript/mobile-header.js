const btn = document.querySelector("#btn");
const nav = document.querySelector(".nav__mobile");
btn.addEventListener("change", (e) => {
  nav.classList.toggle("active"),
    e.target.checked;
});
