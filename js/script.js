/*
1 step 
creare un alert con 5 numeri randomici   (for o while ?  & Math.floor(Math.random() * 100) +1 )
in questo caso creare un array con i numeri generati  []
*/

var max = 100
var min = 1

var numberRemind = []


function  Generatore(min,max){
var Result =  Math.floor(Math.random() *(max-min+1)) +min 
return Result;
}

var  ArrayAllert = []

while( ArrayAllert.length <5) {

    var randomNumbers = Generatore(min,max);
    //verifica che il numero  non sia già stato inserito 
    if (!ArrayAllert.includes(randomNumbers)){
    ArrayAllert.push(randomNumbers);
    }
}

alert("memorizza i seguenti numeri" +" "+ ArrayAllert )



/*
2 step 
far partire un timer di 30 secondi   setTimeout(nomeFunzione, tempoDaAspettare);
*/

/*
  3 step  
   dopo i 30 secondi creare 5 prompt  dove  inserire i numeri visti (for o while  ?)  
*/


setTimeout(timer,3000);
function timer (){
    
    var ArrayUtente = []
    var numberRemind = []
    var flag = false

    while(ArrayUtente.length < 5 ){
  
    var chooseNumb  = parseInt( prompt("scegli il numero")) ;
    ArrayUtente.push(chooseNumb)

    }

 for(var i = 0; i<5 ; i++ ){
     if(ArrayAllert.includes(ArrayUtente[i])){
         flag=true;
         if(flag){
             numberRemind.push(ArrayUtente[i])
         };
    
     }else{
         flag =false
     }
 }
 alert(" il tuo punteggio è : " + numberRemind.length + " " +"i numeri indovinati sono  " + numberRemind)
}







/*
4 step
  quindi creare una seconda array  di numeri scelti dal utente [ ] 
 verificare quanti numeri sono stati  indovinati (true  false ? )  quanti sbagliati  è il punteggio totale 

*/