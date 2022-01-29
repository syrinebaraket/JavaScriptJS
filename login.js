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
        } else { event.preventDefault();
          check()}
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

  // stored data from the register-form
  var storedName = JSON.parse(localStorage.getItem('person'));
  // entered data from the login-form
  var email = document.getElementById('email');
  var userPw = document.getElementById('pwd');

  // check if stored data from register-form is equal to data from login form
  console.log(storedName)
  for (i=0;i<storedName.length;i++)
 {
  console.log(email.value +"   "+storedName[i].email  + "   "+storedName[i].password)

  if(email.value == storedName[i].email && userPw.value == storedName[i].password) {

      window.location = "Dashboard.html";
      alert('You are loged in.');
      
      break;
  } else if (i==storedName.length-1){alert('SORRY but uou are not registered!')}
}}