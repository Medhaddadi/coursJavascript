let tab=["tennis", "basket", "foot"];
while (confirm("votre table contient les sport suivants:\n" + tab+ "\n veuiller  ajouter / supremer un autre ")===true)
{


    let add=prompt("votre table contient les sport suivants:\n" + tab+ "\n veuiller saisir le sport ajouter / supremer ");
    let i=tab.indexOf(add);
    if( i !== -1)
        tab.splice(i,1);
    else
        tab.push(add);
    alert(tab);
}