
const car = document.querySelector(".car");
const content = document.querySelector(".content");

car.addEventListener("animationend", () => {
    content.classList.add("show");
});
