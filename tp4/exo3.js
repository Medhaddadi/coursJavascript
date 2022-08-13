let  l1=document.createElement('li');
l1.innerHTML='push';

let  l2=document.createElement('li');
l2.innerHTML='Autre';

let ol= document.getElementById('quiz-response');
let l3=ol.lastElementChild;
l3.before(l1);

ol.append(l2);