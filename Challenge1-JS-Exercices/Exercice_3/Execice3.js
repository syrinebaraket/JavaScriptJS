function validation() {
    if(document.getElementById('myField').value == '') {
      document.getElementById('error_mesg').innerHTML = 'please fill the field';
      return false;
    } else {
      document.getElementById('error_mesg').innerHTML = '';
      alert('SENT!');
    }
  }