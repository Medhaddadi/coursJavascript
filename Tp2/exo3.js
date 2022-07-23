
function generat_random(x) {
    let tab = [];
    for (let i = 0; i < x;) {
        let add= Math.round(Math.random()*9);
        if(tab.indexOf(add)===-1)
        {
            tab.push(add);
            i++;
        }
    }
    return tab;
}
function compareNbr(tab1, tab2) {
    let nbCcCp=0;
    let nbCcIp=0;
    for (let i = 0; i < Math.min(tab1.length, tab2.length); i++) {
        if(tab1[i]===tab2[i])
            nbCcCp++;
        else {
            if(tab1.indexOf(tab2[i])!==-1){
                nbCcIp++;
            }

        }
    }
    let tabr=[];
    tabr.push(nbCcCp,nbCcIp);
    return tabr;
}
function getScore(diff,tries) {
    let score = 0;
    if(diff=="facile"){
        score=(20-tries)*3;
    }
    if(diff=="moyen"){
        score=(15-tries)*10;
    }
    if(diff=="difficile"){
        score=(10-tries)*20;
    }else {
        console.log("ERROR DE SAISIR" );
    }
    return score;
}
function main() {
   let tab = generat_random(4);
   console.log(tab.toString())
    let joueur={
        nom:"",
        prenom:"",
        level:"",
        score:""
    }
    joueur.nom=prompt("SAISIR VOTRE NOM ")
    joueur.prenom=prompt("saisir votre prenom ")
    joueur.level=prompt("saisir level diffeculty ")
    let test=false;
    let tentative=0;
    while(test===false)
    {
        let nb=prompt(" saisir le nombre :");
        console.log("tableau saisir le nombre :"+nb);
        let myfonc= num=>Number(num);
        let nbr=Array.from(String(nb),myfonc);
        let tar=compareNbr(tab,nbr);
        if (tar[0]===4)
        {
            test=true;
           console.log("le nombre est trouver");
        }else {
            console.log("le nombre n'est pas trouver:");
            alert("chiffres correct et correctement placé :"+tar[0]+" et "+tar[1]+" chiffres correct et correctement placé :")
        }tentative++;
    }

    console.log("Bravo, vous avez devinez ne nombre après "+tentative+" tentatives")

}
