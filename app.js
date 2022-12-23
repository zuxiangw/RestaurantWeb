const links = document.querySelector(".nav-links");
const navBtnDOM = document.querySelector(".nav-btn");

navBtnDOM.addEventListener("click", () => {
  links.classList.toggle("show-links");
  console.log("Hello World");
});
