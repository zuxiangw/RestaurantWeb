const links = document.querySelector(".nav-link");
const navBtnDOM = document.querySelector(".nav-btn");

navBtnDOM.addEventListener("click", () => {
  links.classList.toggle("show-links");
  console.log("Hello World");
});
