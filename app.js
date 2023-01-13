// nav-bar
const links = document.querySelector(".nav-links");
const navBtnDOM = document.querySelector(".nav-btn");

navBtnDOM.addEventListener("click", () => {
  links.classList.toggle("show-links");
  navBtnDOM.classList.toggle("rotate90");
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

const menuItems = [
  {
    id: 1,
    name: "Spicy Chicken Burger",
    category: "burger",
    price: 4.99,
    img: "./images/hot-item1.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, dolorum",
  },
  {
    id: 2,
    name: "Chicken Burger",
    category: "burger",
    price: 4.99,
    img: "./images/menu-item/chicken-burger.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, dolorum",
  },
  {
    id: 3,
    name: "Cheese Burger",
    category: "burger",
    price: 6.99,
    img: "./images/menu-item/cheeseburger.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, dolorum",
  },
  {
    id: 4,
    name: "Bacon Cheese Burger",
    category: "burger",
    price: 7.99,
    img: "./images/menu-item/bacon-cheeseburger.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, dolorum",
  },
  {
    id: 5,
    name: "Double Cheese Burger",
    category: "burger",
    price: 7.99,
    img: "./images/menu-item/double-cheeseburger.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, dolorum",
  },
  {
    id: 6,
    name: "Grilled Chicken Burger",
    category: "burger",
    price: 4.99,
    img: "./images/menu-item/grilled-burger.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, dolorum",
  },
  {
    id: 7,
    name: "2 Mixed Pieces",
    category: "chicken",
    price: 4.99,
    img: "./images/menu-item/2pieces.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, dolorum",
  },
  {
    id: 8,
    name: "4 Mixed Pieces",
    category: "chicken",
    price: 7.49,
    img: "images/menu-item/4pieces.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, dolorum",
  },
  {
    id: 9,
    name: "Fried Whole Chicken",
    category: "chicken",
    price: 19.99,
    img: "images/menu-item/FWC.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, dolorum",
  },
  {
    id: 10,
    name: "Grilled Whole Chicken",
    category: "chicken",
    price: 19.99,
    img: "./images/hot-item4.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, dolorum",
  },
  {
    id: 11,
    name: "French Fries",
    category: "sides",
    price: 2.99,
    img: "./images/menu-item/french-fries.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, dolorum",
  },
  {
    id: 12,
    name: "Fried Shrimp",
    category: "sides",
    price: 4.99,
    img: "./images/menu-item/fried-shrimp.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, dolorum",
  },
  {
    id: 13,
    name: "Grilled Wings(4pc)",
    category: "sides",
    price: 5.99,
    img: "./images/menu-item/grilled-wings.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, dolorum",
  },
  {
    id: 14,
    name: "Fried Wings(4pc)",
    category: "sides",
    price: 5.99,
    img: "./images/menu-item/fried-wings.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, dolorum",
  },
  {
    id: 15,
    name: "Onion Rings",
    category: "sides",
    price: 4.99,
    img: "./images/menu-item/onion-rings.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, dolorum",
  },
  {
    id: 16,
    name: "Popcorn Chicken",
    category: "sides",
    price: 4.99,
    img: "./images/menu-item/popcorn-chicken.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, dolorum",
  },
  {
    id: 17,
    name: "Coca-Cola",
    category: "drinks",
    price: 1.49,
    img: "./images/menu-item/drinks/coca-cola.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, dolorum",
  },
  {
    id: 18,
    name: "Pepsi",
    category: "drinks",
    price: 1.49,
    img: "./images/menu-item/drinks/pepsi.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, dolorum",
  },
  {
    id: 19,
    name: "Sprite",
    category: "drinks",
    price: 1.49,
    img: "./images/menu-item/drinks/sprite.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, dolorum",
  },
  {
    id: 20,
    name: "Fanta",
    category: "drinks",
    price: 1.49,
    img: "./images/menu-item/drinks/fanta.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, dolorum",
  },
  {
    id: 21,
    name: "8-Pieces F/S",
    category: "combo",
    price: 19.99,
    img: "./images/hot-item2.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, dolorum",
  },
  {
    id: 22,
    name: "Double Cheeseburger F/s",
    category: "combo",
    price: 10.99,
    img: "./images/hot-item3.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, dolorum",
  },
  {
    id: 23,
    name: "Chicken Burger F/s",
    category: "combo",
    price: 9.99,
    img: "./images/menu-item/chicken-burger-fries.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, dolorum",
  },
];

/* 
  <div class="menu-item">
    <img src="./images/hot-item2.jpg" alt="item" />
    <header>
      <h4 class="menu-item-name">Spicy Chicken Burger</h4>
            <h4 class="menu-item-price">$5.99</h4>
          </header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum non
            ex facere quae natus dignissimos illo hic quidem, harum ducimus?
          </p>
        </div>

*/

const menuContainer = document.querySelector(".menu-items");
const getAllItems = menuItems.map((item) => {
  return `<div class="menu-item">
    <img src="${item.img}" alt="${item.name}" class="menu-pic"/>
    <header>
      <h4 class="menu-item-name">${item.name}</h4>
            <h4 class="menu-item-price">$${item.price}</h4>
          </header>
          <p>
            ${item.desc}
          </p>
        </div>`;
});

window.addEventListener("DOMContentLoaded", () => {
  menuContainer.innerHTML = getAllItems.join("");
});

const optionBtns = document.querySelectorAll(".menu-btn");
optionBtns.forEach((btn) => {
  if (btn.id === "all") {
    btn.addEventListener("click", () => {
      menuContainer.innerHTML = getAllItems.join("");
      document.querySelector(".menu-header-txt").innerHTML = "Our Menu";
    });
    return;
  }
  const filteredItems = menuItems.filter((item) => {
    if (item.category === btn.id) {
      return item;
    }
  });
  const gatherFilteredItems = filteredItems.map((item) => {
    return `<div class="menu-item">
    <img src="${item.img}" alt="${item.name}" class="menu-pic"/>
    <header>
      <h4 class="menu-item-name">${item.name}</h4>
            <h4 class="menu-item-price">$${item.price}</h4>
          </header>
          <p>
            ${item.desc}
          </p>
        </div>`;
  });
  btn.addEventListener("click", () => {
    menuContainer.innerHTML = gatherFilteredItems.join("");
    document.querySelector(".menu-header-txt").innerHTML = btn.innerHTML;
  });
});
