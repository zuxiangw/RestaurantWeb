// nav-bar
const links = document.querySelector(".nav-links");
const navBtnDOM = document.querySelector(".nav-btn");

navBtnDOM.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// faq
const btns = document.querySelectorAll(".question-btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const currElem = e.currentTarget;
    const children = currElem.children;
    children[0].classList.toggle("hide");
    children[1].classList.toggle("show-btn");
    currElem.parentElement.nextElementSibling.classList.toggle(
      "question-show-answer"
    );
  });
});

//menu

const menuItems = [{}, {}];
