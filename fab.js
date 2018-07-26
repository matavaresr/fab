function Fab(json){
  var __element = document.querySelector(json.selector);
  var positions = ["top-left","top-right","bottom-left","bottom-right"], countposition = 0, status = false;
  if (!json.selector || !__element) {
    console.error("There is no selector or you have not written one, write one in the option 'selector' in the json");
    return false;
  }
  positions.forEach(function(e, i){
    if(positions[i] != json.position){
      countposition++;
    }
    if (countposition == 4) {
      __element.classList.add("default");
    }
  });
  __element.classList.add("fab_contenedor");
  __element.classList.add(json.position);
  __element.classList.add(json.direction);

  __element.insertAdjacentHTML('beforeend',
    `<button class='fab primary ${json.button.style}'>
      ${json.button.html}
      <i class='${json.icon.style}'>${json.icon.html}</i>
  	</button>`);

  __element.insertAdjacentHTML('afterbegin',`<dl></dl>`);

  json.buttons.forEach(function(e, i){
    __element.querySelector('dl').insertAdjacentHTML('afterbegin',
    `<dt>
      <button class="fab ${e.button.style} btn${i}">
        ${e.button.html}
    	  <i class="${e.icon.style}">${e.icon.html}</i>
    	</button>
     </dt>`);
    __element.querySelector("dl .fab.btn"+i).addEventListener("click", function(){
      e.onClick();
    });
  });
  var button = __element.querySelectorAll('dl dt button');

  $(json.selector+" .fab.primary").hover(function() {
    __element.querySelector('dl').classList.add("visible");
    button.forEach(function(e, i) {
      button[i].classList.add("transform");
    });
    $(json.selector).hover(function() {}, function() {
      __element.querySelector('dl').classList.remove("visible");
      button.forEach(function(e, i) {
        button[i].classList.remove("transform");
      });
    })
  });
}
