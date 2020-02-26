/**
 * Lorsqu'on clique sur un onglet, 
 *     
 *     
 *      Enfin on ajoute la classe active au contenu correspondant à l'onglet cliqué
 *  
 */

 var tabs = document.querySelectorAll('.tabs a');
 tabs.forEach(element => {
    element.addEventListener('click', function(e){
       e.preventDefault();
       var div = this.parentNode.parentNode.parentNode;
       var li = this.parentNode;
       
       if(li.classList.contains('active')){
          return false;
       }
       // On retire la classe active de l'onglet actif
       div.querySelector('.tabs .active').classList.remove('active');
     
      //On ajoute la classe active à l'onglet cliqué
       li.className = "active";

      // On retire la classe active du contenu actif
      div.querySelector('.tab-content.active').classList.remove('active');
      div.querySelector(this.getAttribute('href')).classList.add('active');

       
    });
 });
 