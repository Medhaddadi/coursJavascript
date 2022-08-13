nomEtudiant = ["Dupont", "Durand", "Petit", "Martin",
    "Legrand", "Lacroix"];
notes = [[10, 12, 18, 5, 9, 13],[13, 11, 14, 7, 14, 16],[0, 14, 14, 12, 8, 20]];


let constructeur=function (nom,notes,moy) {
    this.nom=nom;
    this.note=notes;
    this.moyenne=moy;
}
function afficherEtudiant(obj) {
    return 'Les notes de <<'+obj.nom+'>> sont : ['+obj.note+'] et sa moyennes = '+obj.moyenne;
}
function  creerEtudiant(tabNom, tabNotes){
    let tabObj=[];
    for (let i = 0; i < tabNom.length; i++) {
        let nom=tabNom[i];
        let note=[];
        let moyenne=0;
        for (let j = 0; j < tabNotes.length; j++) {
            note.push(tabNotes[j][i]);
            moyenne+=tabNotes[j][i];
        }
        moyenne/=tabNotes.length;
        let obj=new constructeur(nom,note,  Math.round ( moyenne* 100) / 100);
        tabObj.push(obj);
    }
    return tabObj;
}
function calculMinMax(tabObj) {
    let max=0;
    let min=0;
    for (let i = 0; i < tabObj.length; i++) {
        if(tabObj[i].moyenne>max)
            max=i;
        if(tabObj[i].moyenne<min)
            min=i;
    }
    return 'La note minimal est '+tabObj[min].moyenne+' est c’est << '+tabObj[min].nom+'>> qui la eu \nLa note maximal est '+tabObj[max].moyenne+' est c’est << '+tabObj[max].nom+'>> qui la eu';
}
function alertData(tabNom, tabNotes) {
    let tabobj=creerEtudiant(tabNom, tabNotes) ;
    let str='';
    for (let i = 0; i < tabobj.length; i++) {
        str+=afficherEtudiant(tabobj[i])+'\n';
    }
    str+=calculMinMax(tabobj);
    alert(str);
}
alertData(nomEtudiant,notes);