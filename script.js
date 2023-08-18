// nav DD logic

const navDDBtn = document.querySelector(".services-menu-btn");
const navDD = document.querySelector(".services-menu");
const section1body = document.querySelector(".section-01-meeting");

section1body.addEventListener("click", () => {
  navDDBtn.classList.remove("services-menu-btn-active");
  navDD.classList.remove("services-menu-active");
});
navDDBtn.addEventListener("click", () => {
  navDDBtn.classList.toggle("services-menu-btn-active");
  navDD.classList.toggle("services-menu-active");
});
const cards = document.querySelector(
  ".section-03-tech-stack .cards__container .cards"
);

const fullStack = [
  { title: "MongoDB", logoName: "mongodb.svg" },
  { title: "ExpressJS", logoName: "ex-logo.png" },
  { title: "React JS", logoName: "react-logo.svg" },
  { title: "Node js", logoName: "node-logo.svg" },
];
const frontEnd = [
  { title: "JS", logoName: "1200px-Javascript_badge.svg.png" },
  { title: "React", logoName: "react-logo.svg" },
  { title: "HTML/CSS", logoName: "HTML5_logo_and_wordmark.svg.png" },
  { title: "Redux", logoName: "Redux-logo.svg" },
];
const backEnd = [
  { title: "NodeJS", logoName: "node-logo.svg" },
  { title: "Mongoose", logoName: "mongoose.png" },
  { title: "MongoDB", logoName: "mongodb.svg" },
  { title: "PrismaHD", logoName: "prismaHD.png" },
];

const contents = [fullStack, frontEnd, backEnd];

const serviceCard = (title, logoName) => {
  return `
  <div class="cards__card">
    <img
      class="cards__logo"
      src="img/${logoName}"
      alt="react logo"
    />
    <h3 class="cards__heading heading-3">${title}</h3>
    <p class="cards__paragraph paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco
    </p>
    <a href="#" class="btn-text"
      >Read more
      <img
        class="btn-text__arrow-icon"
        src="img/drop-down-btn.svg"
        alt=">"
    /></a>
  </div>
  `;
};

const handleCardsRender = (activeIndex) => {
  cards.innerHTML = contents[activeIndex]
    .map(({ title, logoName }) => {
      return serviceCard(title, logoName);
    })
    .join("");
};

handleCardsRender(0);

const servicesBtns = document.querySelectorAll(".services-bar-item");
const leftArrow = document.querySelector(".left-btn");
const rightArrow = document.querySelector(".right-btn");
const MAX_INDEX = servicesBtns.length - 1;

let activeMenuIndx = 0;

const handleActiveBtn = (btnIndex) => {
  servicesBtns.forEach(function (el) {
    el.classList.remove("services-bar-active");
  });
  servicesBtns[btnIndex].classList.add("services-bar-active");
  activeMenuIndx = btnIndex;
  handleCardsRender(activeMenuIndx);
};

const handleRightArrowClick = () => {
  let newIndex = activeMenuIndx;
  if (newIndex + 1 === MAX_INDEX + 1) {
    newIndex = 0;
  } else {
    newIndex++;
  }
  handleActiveBtn(newIndex);
};

const handleLefttArrowClick = () => {
  let newIndex = activeMenuIndx;
  if (newIndex - 1 === -1) {
    newIndex = MAX_INDEX;
  } else {
    newIndex--;
  }
  handleActiveBtn(newIndex);
};

servicesBtns.forEach((btn, btnIndex) => {
  btn.addEventListener("click", () => {
    handleActiveBtn(btnIndex);
  });
});

rightArrow.addEventListener("click", handleRightArrowClick);
leftArrow.addEventListener("click", handleLefttArrowClick);

// CLIENT REVIEWS BTNS LOGIC

const reviewBtns = document.querySelectorAll(".review-btns__btn");
const clientsImg = document.querySelectorAll(".client-img");
const clientsInfo = document.querySelectorAll(".client");
clientsInfo[0].style.display = "inline-block";
clientsImg[0].classList.add("client-active");
reviewBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    reviewBtns.forEach((btn) => {
      btn.classList.remove("review-btns__btn-active");
    });
    btn.classList.add("review-btns__btn-active");

    clientsImg.forEach((client) => {
      client.classList.remove("client-active");
    });
    clientsImg[index].classList.add("client-active");

    clientsInfo.forEach((client) => {
      client.style.display = "none";
    });
    clientsInfo[index].style.display = "inline-block";
  });
});

clientsImg.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    reviewBtns.forEach((btn) => {
      btn.classList.remove("review-btns__btn-active");
    });
    reviewBtns[index].classList.add("review-btns__btn-active");

    clientsImg.forEach((client) => {
      client.classList.remove("client-active");
    });
    clientsImg[index].classList.add("client-active");

    clientsInfo.forEach((client) => {
      client.style.display = "none";
    });
    clientsInfo[index].style.display = "inline-block";
  });
});
