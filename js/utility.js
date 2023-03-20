function getRndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


  //  genero array bombe
 function randomListGen(volteCheDesidero, numRange){
  const myArray =  [];
  while (myArray.length <= volteCheDesidero){
     const rndNum = getRndNumber(1, numRange);
     // constrollo se le rndNume appena generate sono dentro array ...finalmete ho capito!
     // CONTROLLO SE LA rndNumA GENERATA RANDOMICAMENTE VENGA RICERCATA  E TROVATA DENTRO L'ARRAY DELLE rndNumE
     // controllando che la rndNuma (rndNum) venga ricercata dento array myArray che essendo vuota ritornerá -1 
     // 'PERCHÉ UN ARRAY VUOTO TORNA SEMPRE -1'
     // quindi se tornerá -1 allora aggiungerá il numero, quindi la "rndNuma",  all'array fino a 16 volte
     if (myArray.indexOf(rndNum) === -1  ){
         // aggiungo rndNum a ad array rndNume
         myArray.push(rndNum);
         // aggiungo classe dead

         

         }
        
       
  }
 
 return myArray 

  
}


/* creo funzione che genera un quadrato di grandezza proporzionale al numero dei quadrati con all'interno
il valore del quadrato  */


function boxGen(squareNumb, content){

  // calcolo quadratini per lato con radice quadrata di numero quadrati per difficoltá

  let squareRoot = Math.sqrt(squareNumb);

  // creo elemento div contentente il quadrato da generare con ciclo for sopra
  const square = document.createElement('div');
  square.classList.add('square');
  square.style.width = `calc(100% / ${squareRoot} )`;
  square.style.height = `calc(100% / ${squareRoot} )`;
  square.innerText = content;

  return square;


}
