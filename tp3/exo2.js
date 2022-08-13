class cyclistes {
    #matricule;
    #nom;
    #score;
    constructor(mat,nom,score) {
        this.#matricule=mat;
        this.#nom=nom;
        this.#score=score;
    }
    get matricule() { return this.#matricule};
    get score() { return this.#score; }
    get nom() { return this.#nom; }
    set nom(value) { this.#nom = value}
    set score(value) { this.#score = value}
    set nom(value) { this.#nom = value}
    afficher(){
        console.log( (this.#nom)+'('+this.#matricule+') : '+this.#score);
    }
}
class Classement {
    #listCycliste;
    #nb;
    constructor(nb) {
        this.#listCycliste =[];
        this.#nb=nb;
        for (let i = 2; i < arguments.length ; i++) {
            let list=new cyclistes(arguments[i][0],arguments[i][1],arguments[i][2]);
            this.#listCycliste.push(list);
        }
    }
    ajouter(lCycliste){
        for (let i = 0; i < arguments.length ; i++) {
            let list=new cyclistes(arguments[i][0],arguments[i][1],arguments[i][2]);
            this.#listCycliste.push(list);
        }
    }
    classer(){
        this.#listCycliste.sort(function (a,b) {
            return a.score()-b.score();
        })
        return this.#listCycliste;
    }
    disqualified(Cycliste){

        for (let i = 0; i < this.#listCycliste.length; i++) {
            if(this.#listCycliste[i].matricule==Cycliste)
               delete this.#listCycliste[i];
        }
    }
    afficherClass(){

        for (let i = 0; i < this.#nb; i++) {

            if(this.#listCycliste[i]!=undefined)
                this.#listCycliste[i].afficher();
        }
    }
}
let list =new Classement(3,['DUPONT J.',' n° 126' , 10 ],['MATMAH F.','n°83',26]);
console.log("======================= Epreuve "+2+"====================");
list.afficherClass();
list.ajouter(['LAURENT J. ','n° 16',150 ],['LUCULUS O.','  n° 42 ', 64 ],['XIANG P. ', 'n° 7654 ', 59 ],[ 'LEPONT Q. ',' n°4682 ', 16 ]);
 console.log("======================= Epreuve "+2+"====================");
 list.afficherClass();
list.disqualified('n° 16');
 console.log("======================= Epreuve "+3+"====================");
 list.afficherClass();