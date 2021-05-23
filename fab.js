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
  __element.classList.add("fab_element_contenedor");
  __element.classList.add(json.position);
  __element.classList.add(json.direction);

  __element.insertAdjacentHTML('beforeend',
    `<button class='fab_element primary ${json.button.class}'  type='button'>
      ${json.button.html}
      <i class='${json.icon.class}'>${json.icon.html}</i>
  	</button>`);

  __element.insertAdjacentHTML('afterbegin',`<dl></dl>`);

  json.buttons.forEach(function(e, i){
    __element.querySelector('dl').insertAdjacentHTML('afterbegin',
    `<dt>
      <button class="fab_element ${e.button.class} btn${i}"  title="${e.button.title}">
        ${e.button.html}
    	  <i class="${e.icon.class}">${e.icon.html}</i>
    	</button>
     </dt>`);
    __element.querySelector("dl .fab_element.btn"+i).addEventListener("click", function(){
      e.onClick();
    });
  });

  var __btn_primary = __element.querySelector(".fab_element.primary"),
      __btn_primary_i = __btn_primary.querySelector("i"),
      __btns_dl = __element.querySelectorAll('dl dt button');

  if (json.on == "click") {
    __btn_primary.addEventListener('click',function() {
      if (__element.querySelector('dl').className != "visible") {
        json.onOpen();
        __element.querySelector('dl').classList.add("visible");
        __btn_primary.classList.add("selected");
        __btn_primary_i.classbefore = document.querySelector(".fab_element.primary i").classList.value;
        __btn_primary_i.style.opacity = "0";
        __btns_dl.forEach(function(e, i) {
          __btns_dl[i].classList.add("transform");
        });
        setTimeout(function(){
          __btn_primary_i.className = "close icon";
          __btn_primary_i.style.opacity = "1";
        },300);
      }else{
        json.onClose();
        __element.querySelector('dl').classList.remove("visible");
        __btn_primary.classList.remove("selected");
        __btn_primary_i.style.opacity = "0";
        setTimeout(function(){
          __btn_primary_i.className = document.querySelector(".fab_element.primary i").classbefore;
          __btn_primary_i.style.opacity = "1";
        },300);
        __btns_dl.forEach(function(e, i) {
          __btns_dl[i].classList.remove("transform");
        });
      }
    });
  }else{
    $(__btn_primary).hover(function() {
      json.onOpen();
      __element.querySelector('dl').classList.add("visible");
      __btns_dl.forEach(function(e, i) {
        __btns_dl[i].classList.add("transform");
      });
      $(json.selector).hover(function() {}, function() {
        json.onClose();
        __element.querySelector('dl').classList.remove("visible");
        __btns_dl.forEach(function(e, i) {
          __btns_dl[i].classList.remove("transform");
        });
      })
    });
  }
// var container = document.querySelector(json.selector),
//            btnPrimario = document.querySelector(json.selector+" .fab_element.primary"),
//            isOpen = false;
//
//            btnPrimario.addEventListener("activefab_element",function(){
//                if(isOpen){
//                    console.log("los botones estan abiertos")
//                    return;
//                }
//                isOpen = true;
//                __element.querySelector('dl').classList.add("visible");
//                button.forEach(function(e, i) {
//                  button[i].classList.add("transform");
//                });
//                console.log("se abren los botones")
//            })
//            container.addEventListener("mouseover",function(evt){
//                var target = evt.target;
//                if(target == btnPrimario || target.parentElement == btnPrimario){
//                    console.log("está entrando al boton");
//                    btnPrimario.dispatchEvent(new Event("activefab_element"))
//                }
//                if (true) {
//
//                }
//            })
//
//           container.addEventListener("mouseout",function(evt){
//                if(this == evt.target && !evt.relatedTarget.classList.contains("fab_element")){
//                    isOpen = false
//                    __element.querySelector('dl').classList.remove("visible");
//                    button.forEach(function(e, i) {
//                      button[i].classList.remove("transform");
//                    });
//                    console.log("ahora si esta saliendo de verdad UwU");
//                    return
//                }
//                console.log("los botones se quedan abiertos aquí");
//            });
}
