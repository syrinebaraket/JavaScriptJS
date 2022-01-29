var min=1; 
var max=1000;  
var random = Math.floor(Math.random() * (max - min) + min );

var Occurence   = 0;
var userValue  = document.getElementById('userValue');
 
document.getElementById('max').innerHTML = max;
userValue.value = '';
function Verification() {
  var user_value = userValue.value;

  if(Number(user_value)) {
    Occurence++;
    user_value = parseInt(user_value);
    if(user_value < random) {
      document.getElementById('result').innerHTML = "Try a higher number";
      userValue.value = '';
    } else if(user_value > random) {
      document.getElementById('result').innerHTML = "Try a lower number";
      userValue.value = '';
    } else {
      document.getElementById('result').innerHTML = "Bingo! "+Occurence+" Times";
    }
  } else {
    document.getElementById('result').innerHTML = "Verify your number";
  }
  return false;
}
 
