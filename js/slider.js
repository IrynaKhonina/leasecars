
const tabsItems = document.querySelectorAll(".tabs__btn-items");
const tabsContent = document.querySelectorAll(".tabs__content-item");


tabsItems.forEach(function (element) {
  element.addEventListener("click", open);
})

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabsItems.forEach(function (item) {
    item.classList.remove("tabs__btn-items--active");
  })

  tabTarget.classList.add("tabs__btn-items--active");

  tabsContent.forEach(function (item) {
    item.classList.remove("tabs__content-items--active");
  });

  document.querySelector(`#${button}`).classList.add("tabs__content-items--active");
}





const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
});
