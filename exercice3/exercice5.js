let  nbStr=String(" ");
let nbPair=0;
let nImpair =0;
for (let i = 0; i < 7; i++) {
    let nb=prompt("saisir le "+(i+1)+" nombre ");

    if(nbStr.indexOf(String(nb)) !== -1)

         i--;
    else
        if (Number(nb)%2===0)
           nbPair++;
         else nImpair++;
     nbStr+=" ";
     nbStr+=String(nb);

}
alert(" we have "+nbPair+" de nombre pair "+nImpair+" de nombre impair ")