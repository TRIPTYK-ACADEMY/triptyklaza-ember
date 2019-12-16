import {
  modifier
} from 'ember-modifier';

export default modifier(function sliderShow(element) {
  let slides = element.querySelectorAll(".slider-item");
  let sliderItems = document.querySelectorAll('.slider-item');
  let infoContainers = document.querySelectorAll('.info-container');
  slides.forEach(
    (slide) => {
      let info = slide.dataset.info;

      //whand the button (deploy) of the current element is clicked   
      slide.querySelector(".deploy").addEventListener("click", function () {
        //we remove the activ eclass of every element in every slider
        sliderItems.forEach(sl => {
          sl.classList.remove("active");
        });
        //and hide every infos
        unshown();
        //the we show the infos
        document.getElementById(info).classList.add("shown");
        //and its wrapper
        document.getElementById(info).closest(".infos-wrapper").classList.add("shown");
        //then we add the active class of the item clicked
        slide.classList.add('active');
        //event.preventDefault();
        element.closest(".slider").style.paddingTop += "100px";
        console.log(element);
      });
    }
  )

  function unshown() {
    infoContainers.forEach(sl => {
      if (sl.classList.contains("shown")) {
        sl.classList.remove("shown");
        sl.closest(".infos-wrapper").classList.remove("shown");
      }
    });
  }
});
