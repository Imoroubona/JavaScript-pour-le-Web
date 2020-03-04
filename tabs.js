

 var tabs = document.querySelectorAll('.tabs a');

   var afficherOnglet = function(a){
         var li = a.parentNode;
         var div = a.parentNode.parentNode.parentNode;
         var activeTab = div.querySelector('.tab-content.active');
         var aAfficher = div.querySelector(a.getAttribute('href'));
      //si l'onglet cliqué contient la classe active, on arrête l'execution du reste script
      if (li.classList.contains('active')) {
         return false;
      }
      //On supprime la classe active de l'onglet actuellement actif
      div.querySelector('.tabs .active').classList.remove('active');
      //On ajoute la classe active à l'onglet actif
      li.className = "active";
      // On supprime la classe active du contenu actuellement actif
      //div.querySelector('.tab-content.active').classList.remove('active');
      //On ajoute la classe active au contenu correspondant à l'onglet cliqué
      //  div.querySelector(a.getAttribute('href')).classList.add('active');


      //On ajoute la classe fade au contenu actif
       var activeTab = div.querySelector('.tab-content.active');
           activeTab.classList.add('fade');
           activeTab.classList.remove('in');
           activeTab.addEventListener('transitionend', function(){
                this.classList.remove('fade');
                this.classList.remove('active');
                aAfficher.classList.add('active');
                aAfficher.classList.add('fade');
                aAfficher.offsetWidth;
                aAfficher.classList.add('in');


        });

   }


   tabs.forEach(element => {
      element.addEventListener('click', function(e){
         afficherOnglet(element);
      });
   });



   var hash = window.location.hash;
   var a = document.querySelector('a[href = "' + hash +'"]');
   if ( a!= null && !a.parentNode.classList.contains('active') ) {
      afficherOnglet(a);
   }
