
 function writeV (){


//Read data fom Inputs

var Bonus=100;
var Ass=0.07;
var can=0.05;
var Alloc=150;
var Imp=0.18;
var checkBonus= document.getElementById("Bonus").checked,
checkAllocation= document.getElementById("Allocation").checked; 
var SalBrut = document.getElementById("SalaireBrut").value;
var select = document.getElementById("sexe");
var idx = select.selectedIndex;
Sexe=select.options[idx].value;
var PersoEnC = document.getElementById("PersonnesEnCharge").value;

var BA = 0;
if (checkBonus === true) {
  BA += Bonus;
}
if (checkAllocation === true) {
  BA += Alloc;
}

switch(PersoEnC){
  case '3': Imp-=0.01;break;
  case '4': Imp-=0.02;break;}

  if (Sexe=='Femme'){Imp-=0.02;}

  let Impot=SalBrut*Imp;
  let Assu=SalBrut*Ass;
  let CP=SalBrut*can;
  let SalNet=SalBrut-(Impot+Assu+CP)+BA;

document.getElementById("BonusAllocation").textContent=BA.toFixed(2);
document.getElementById("Impot").textContent=Impot.toFixed(2);
document.getElementById("Assurance").textContent=Assu.toFixed(2);
document.getElementById("CanadaPension").textContent=CP.toFixed(2);
document.getElementById("SalaireNet").textContent=SalNet.toFixed(2);

}

function resetAll(){document.getElementById("myForm").reset();
}