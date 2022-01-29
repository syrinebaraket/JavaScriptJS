(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else {registerstore()}
        form.classList.add('was-validated');
     //   if (form.checkValidity() === true) {registerstore();}
      }, false);
    });
  }, false);
})();

if (localStorage.key(0)!== 'person') {window.localStorage.setItem('person',JSON.stringify([]))};
console.log(window.localStorage.getItem('person'))
var tab =JSON.parse(window.localStorage.getItem('person'));

//var tab1=JSON.parse(tab)



function registerstore(){ //stores items in the localStorage
  var nom = document.getElementById('nom').value;
  var prenom = document.getElementById('prenom').value;
  var email = document.getElementById('email').value;  
   var pwd = document.getElementById('pwd').value;
  var key ="person"


  //var currentTracks = localStorage.getItem('tracks');
//localStorage.setItem('tracks', JSON.stringify(JSON.parse(currentTracks).concat(this.tracks)));

  const registration = {
      nom: nom,
      prenom: prenom,
      email:email,
      password:pwd
  };
 
  tab.push(registration);
console.log(tab);
 window.localStorage.setItem(key,JSON.stringify(tab));  
  //converting object to string
}