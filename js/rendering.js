const likeFirst = document.querySelectorAll(".catalog__icon--like-first");
const likeSecond = document.querySelectorAll(".catalog__icon--like-second");
const catalogHat = document.querySelector(".catalog__hat");
const catalogBlock = document.querySelectorAll(".catalog__block");

const foodLstSort = [
    "все",
    "Любимое",
    "Закуски",
    "Салаты",
    "Горячее",
    "Суши и роллы",
    "Супы",
    "Детское",
    "Десерты",
    "Напитки",
];

for (let i = 0; i < foodLstSort.length; i++) {
    catalogHat.innerHTML += `
        <li class="catalog__hat--item">${foodLstSort[i]}</li>
    `;
}

likeFirst.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("catalog__icon--liked");
        item.classList.toggle("catalog__icon--liked");
        if (item.classList.contains("catalog__icon--liked")) {
            likeSecond.style.display = "block";
        } else {
            likeSecond.style.display = "none";
        }
    });
});

// likeFirst.forEach((item) => {
//     item.addEventListener("click", () => {
//         item.classList.toggle("catalog__icon--liked");
//         if (item.classList.contains("catalog__icon--liked")) {
//             likeSecond.style.display = "block";
//         } else {
//             likeSecond.style.display = "none";
//         }
//     });
// })

// likeSecond.addEventListener("click", () => {
//     likeFirst.classList.remove("catalog__icon--liked");
//     if (likeFirst.classList.contains("catalog__icon--liked")) {
//         likeSecond.style.display = "block";
//     } else {
//         likeSecond.style.display = "none";
//     }
// });
catalogBlock.forEach((item) => {
    const catalogAdd = item.querySelectorAll(".catalog__food--add");
    const catalogClose = item.querySelectorAll(".catalog__icon--close");
    catalogClose.forEach((itemClose) => {
        catalogAdd.forEach((itemTwo) => {
            itemTwo.addEventListener("click", () => {
                item.classList.add("active");
                itemClose.style.display = "block";
            });
        });
        itemClose.addEventListener("click", () => {
            item.classList.remove("active");
            itemClose.style.display = "none";
        });
    });
});
