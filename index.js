// Selection de tous les éléments ayant la classe spoiler
var elements = document.querySelectorAll(".spoiler");
var createButtonSpoiler = function(element){
    var button = document.createElement('button');
    var span = document.createElement('span');
        button.innerHTML = "Afficher le contenu";
        span.innerHTML = element.innerHTML;
        span.className = "spoiler-content";
        element.innerHTML = '';

    
    element.appendChild(button);
    element.appendChild(span);

    button.addEventListener('click', function(){
          this.parentNode.removeChild(this);
          span.classList.add('visible');
    });
}

elements.forEach(element=>{
   createButtonSpoiler(element);
});
