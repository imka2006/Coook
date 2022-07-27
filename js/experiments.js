const likeFirst = document.querySelectorAll(".catalog__icon--like-first");
const likeSecond = document.querySelectorAll(".catalog__icon--like-second");
const catalogHat = document.querySelector(".catalog__hat");
const catalogBlock = document.querySelectorAll(".catalog__block");
const titleWrapper = document.querySelector(".catalog__list--title-wrapper");

const foodListSort = [
    "все",
    "Любимое",
    "Закуски",
    "Салаты",
    "Лапша",
    "Суши и роллы",
    "Супы",
    "Детское",
    "Десерты",
    "Напитки",
];

for (let i = 0; i < foodListSort.length; i++) {
    catalogHat.innerHTML += `
        <li class="catalog__hat--item">${foodListSort[i]}</li>
    `;
}

const sortFilter = catalogHat.querySelectorAll(".catalog__hat--item");
sortFilter.forEach((item) => {
    item.addEventListener("click", () => {
        sortFilter.forEach((itemTwo) => {
            itemTwo.classList.remove("active");
        });
        item.classList.add("active");
    });
});

const catalogWrapper = document.querySelector(".catalog__list--wrapper");
const getData = async () => {
    const result = await fetch("http://localhost:3000/menu__food?category=Закуски");
    const data = await result.json();
    catalogWrapper.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        catalogWrapper.innerHTML += `
      <div class="catalog__block">
      <div class="catalog__block--top center">
          <img
              class="catalog__icon--like catalog__icon--like-first"
              src="./ascents/img/global/like.svg"
              alt="like"
          />
          <img
              class="catalog__icon--close"
              src="./ascents/img/global/close.svg"
              alt="close"
          />
          <img
              class="catalog__icon--like catalog__icon--like-second"
              src="https://www.svgrepo.com/show/292078/heart.svg"
              alt="like"
          />

          <img
              class="catalog__food--image"
              src="${data[i].img}"
              alt="food photo"
          />
      </div>
      <div class="catalog__block--bottom">
          <div
              class="catalog__block--spicy center"
          >
              <img
                  src="./ascents/img/global/spisy-chili.svg"
                  alt="spisy-chili"
                  class="catalog__spisy--icon"
              />
          </div>
          <div class="catalog__active--none">
              <h3 class="catalog__food--subtitle">
                 ${data[i].name}
              </h3>
              <div class="catalog__food--data">
                  <span
                      class="catalog__food--gram"
                      >${data[i].gram} г</span
                  >
                  <div class="dot"></div>
                  <span
                      class="catalog__food--calory"
                      >${data[i].calories} ккал</span
                  >
                  <div class="dot"></div>
                  <span
                      class="catalog__food--price"
                      ><b>${data[i].price} ₽</b></span
                  >
              </div>
              <p class="catalog__food--descr">
                  ${data[i].descr}
              </p>
          </div>
          <div class="catalog__add">
              <div class="catalog__btns row">
                  <span
                      class="catalog__btn--minus"
                  ></span>
                  <b
                      class="catalog__food--quantity"
                      >0</b
                  >
                  <span
                      class="catalog__btn--plus"
                  ></span>
              </div>
              <button class="catalog__food--add">
                  Добавить
              </button>
          </div>
      </div>
  </div>
      `;
    }
    const spicyChili = document.querySelectorAll(".catalog__block--spicy");
    spicyChili.forEach((item, i) => {
        if (data[i].spicy === false) {
            item.style.display = "none";
        } 
    });
};
getData();

const catalogSwiper = new Swiper(".catalog__swiper", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    mousewheel: true,
});
