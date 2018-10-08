function result() {
  var age = document.getElementById('age').value ;
  if(isNaN(age)==false && age > 0){
    if (age <18){
      alert('Vous êtes mineur !');
    }else if (age >= 18){
      alert('Vous êtes majeur !');
    }
  }else {
    alert('Erreur, ceci n\'est pas un nombre');
  }
}
