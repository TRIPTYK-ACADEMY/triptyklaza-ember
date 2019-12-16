import { modifier } from 'ember-modifier';
import { debounce } from '@ember/runloop';

export default modifier(function sliderOver(element) {
  let slides = element.querySelectorAll(".slider-item");
  let sliderFrame;
  if (element.parentElement.classList.contains("slider-frame")) {
    sliderFrame = element.parentElement;
  }
  const scaling = 2;  

  slides.forEach(
    (slide, i) => {
      slide.addEventListener("mouseover", slideOverEventDebounce)
      slide.addEventListener("mouseout", slideOutEventDebounce)

      function slideOverEventDebounce(){
        debounce(slideOverEvent, 250)
      }
      
      function slideOverEvent(){
        if (i > 0) {
          sliderFrame.style.left = `-${slide.offsetWidth / 2}px`;
        }
        for (var j = i + 1; j < slides.length; j++) {
          slides[j].style.left = `${slide.offsetWidth}px`;
        }
        slide.style.transform = `scale(${scaling})`;
        slide.style.left = `${slide.offsetWidth / 2}px`
      }

      function slideOutEventDebounce(){
        debounce(slideOutEvent, 250)
      }

      function slideOutEvent(){
        if (i > 0) {
          sliderFrame.style.left = 0;
        }
        for (var j = i + 1; j < slides.length; j++) {
          slides[j].style.left = 0;
        }
        slide.style.transform = "scale(1)";
        slide.style.left = 0;
      }
    }
  );
});
