let persone= [];
let i=0;
function ajouterPersonne(){
  const add =prompt("saisir le nom de persone a ajouter :");
  if (persone.indexOf(add)===-1)
    persone.push(add);
  alert(persone);
}

function tirerPersonne() {
  i=Math.floor(Math.random()*persone.length)
  alert(persone[i])
  return persone[i];
}
