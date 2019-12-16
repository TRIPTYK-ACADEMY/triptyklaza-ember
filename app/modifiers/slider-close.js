import { modifier } from 'ember-modifier';

export default modifier(function sliderClose(element) {
  let infoContainers = document.querySelectorAll('.info-container');
  element.addEventListener('click', function(){
    unshown();
  })
  function unshown() {
    infoContainers.forEach(sl => {
      if (sl.classList.contains("shown")) {
        sl.classList.remove("shown");
        sl.closest(".infos-wrapper").classList.remove("shown");
      }
    });
  }
});
