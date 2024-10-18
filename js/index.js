function changeCategory(event){
  target = event.target.id

  const selectedCat = document.querySelector(`#${target}`)
  const notSelectedCat = document.querySelector(`#${target == "mainMus" ? "myMus" : "mainMus"}`)
  const selectedClassList = "text-3xl font-bold active"
  const nonSelectedClassList = "text-xl opacity-40 cursor-pointer hover:opacity-100 hover:text-blue-300"

  if (notSelectedCat.classList.contains("active")){
    notSelectedCat.classList = nonSelectedClassList
    selectedCat.classList = selectedClassList
  }
}

var swiper = new Swiper(".multiple-slide-carousel", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".multiple-slide-carousel .swiper-button-nexti",
    prevEl: ".multiple-slide-carousel .swiper-button-previ",
  },
  breakpoints: {
   1920: {
       slidesPerView: 2,
       spaceBetween: 30
   },
   1028: {
       slidesPerView: 2,
       spaceBetween: 30
   },
   990: {
       slidesPerView: 1,
       spaceBetween: 0
   }
 }
});