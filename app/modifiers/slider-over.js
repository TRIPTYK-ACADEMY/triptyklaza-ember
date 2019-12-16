import { modifier } from 'ember-modifier';
import { debounce } from '@ember/runloop';

let myContext = { name: 'debounce' };
export default modifier(function sliderOver(element, params/*, params, hash*/) {
  let context = params[0];
  let slides = element.querySelectorAll(".slider-item");
  let sliderFrame;
  if (element.parentElement.classList.contains("slider-frame")) {
    sliderFrame = element.parentElement;
  }
  const scaling = 2;
  
  console.log(this);

  slides.forEach(
    (slide, i) => {
      slideOverEvent(slide, i);
      slide.addEventListener("mouseover", slideOverEvent(slide, i))
      slide.addEventListener("mouseout", slideOutEvent(slide, i))
      // slide.addEventListener("mouseout", debounce(context, function () {
      //   if (i > 0) {
      //     sliderFrame.style.left = 0;
      //   }
      //   for (var j = i + 1; j < slides.length; j++) {
      //     slides[j].style.left = 0;
      //   }
      //   slide.style.transform = "scale(1)";
      //   slide.style.left = 0;
      // }, 250))
    }
  );

  function slideOverEvent(slide, i){
    debounce(myContext, function() {
      if (i > 0) {
        sliderFrame.style.left = `-${slide.offsetWidth / 2}px`;
      }
      for (var j = i + 1; j < slides.length; j++) {
        slides[j].style.left = `${slide.offsetWidth}px`;
      }
      slide.style.transform = `scale(${scaling})`;
      slide.style.left = `${slide.offsetWidth / 2}px`
    }, 1000)
  };

  function slideOutEvent(slide, i){
    debounce(myContext, function() {
      if (i > 0) {
        sliderFrame.style.left = 0;
      }
      for (var j = i + 1; j < slides.length; j++) {
        slides[j].style.left = 0;
      }
      slide.style.transform = "scale(1)";
      slide.style.left = 0;
    }, 1000)
  };
  // function debounce(func, wait, immediate) {
  //   var timeout;
  //   return function () {
  //     var context = this,
  //       args = arguments;
  //     var later = function () {
  //       timeout = null;
  //       if (!immediate) func.apply(context, args);
  //     };
  //     var callNow = immediate && !timeout;
  //     clearTimeout(timeout);
  //     timeout = setTimeout(later, wait);
  //     if (callNow) func.apply(context, args);
  //   };
  // };
});
