/**
 * Lorsqu'on clique sur un onglet,
 *    On retire la classe active de l'onglet actif
 *    On ajoute la classe active à l'onglet cliqué
 *    On retire la classe active du contenu actif
 * On ajoute la classe active au contenu correspondant à l'onglet cliqué
 * 
    var tabs = document.querySelectorAll('.tabs a');
    tabs.forEach(element => {

       var div = element.parentNode.parentNode.parentNode;
       var li = element.parentNode;

      element.addEventListener('click', function(e){
         if (li.classList.contains('active')) {
            return false;
         }
         div.querySelector('.tabs .active').classList.remove('active');
         li.className = 'active';
         //On retire la classe active du contenu actif
         div.querySelector('.tab-content.active').classList.remove('active');
         //On ajoute la classe active au contenu correspondant à l'onglet cliqué
         div.querySelector(this.getAttribute('href')).classList.add('active');
      });
    });
 
 */

var tabs = document.querySelectorAll('.tabs a');
 tabs.forEach((tab)=>{
    tab.addEventListener('click', function(e){
       var div = this.parentNode.parentNode.parentNode;
       var li = this.parentNode;
       if (li.classList.contains('active')) {
          return false;
       } 
      //On retire la classe active de l'onglet actif
      div.querySelector('.tabs .active').classList.remove('active');
      //On ajoute la classe active à l'onglet cliqué
      li.className = "active";
      //On retire la classe active du contenu actif
      div.querySelector('.tab-content.active').classList.remove('active');
      //On ajoute la classe active au contenu correspondant à l'onglet cliqué
      div.querySelector(this.getAttribute('href')).classList.add('active');

    });

 });

 