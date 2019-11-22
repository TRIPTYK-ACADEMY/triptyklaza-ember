import {
  helper
} from '@ember/component/helper';

export default helper(function mouseover() {
  [...document.querySelectorAll('.slider-container')].forEach(e => {
    let slides = document.querySelectorAll(".slider-item");
    let sliderFrame;
    if (e.parentElement.classList.contains("slider-frame")) {
      sliderFrame = e.parentElement;
    }
    const scaling = 2;
    slides.forEach(
      (slide, i) => {
        slide.addEventListener("mouseover", debounce(function () {
          //whe the mous is over the current item
          //and thi sitem is not the first one
          if (i > 0) {
            //we move the whole slider to the left
            sliderFrame.style.left = `-${slide.offsetWidth / 2}px`;
          }
          //and every slide starting to the one unde the mouse cursors id psuched to the right
          for (var j = i + 1; j < slides.length; j++) {
            slides[j].style.left = `${slide.offsetWidth}px`;
          }
          //then th eone hovered is scaled
          slide.style.transform = `scale(${scaling})`;
          //and moved to the left
          slide.style.left = `${slide.offsetWidth / 2}px`
        }, 250))
        slide.addEventListener("mouseout", debounce(function () {
          if (i > 0) {

            sliderFrame.style.left = 0;

          }
          for (var j = i + 1; j < slides.length; j++) {
            slides[j].style.left = 0;
          }
          slide.style.transform = "scale(1)";
          slide.style.left = 0;
        }, 250))
      }
    );

    function debounce(func, wait, immediate) {
      var timeout;
      return function () {
        var context = this,
          args = arguments;
        var later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };
  })

});
