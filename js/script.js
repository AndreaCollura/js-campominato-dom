/* Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba. */




// inizio prendendo il submit del bottone

const difForm = document.querySelector('form');

// assesgno avento al bottone

difForm.addEventListener('submit', play);


/* creo funzione da attacare all'evento */



function play(e){


    e.preventDefault();
    let yourScore = 0;
    const playGround = document.getElementById('playground');
    playGround.innerHTML = '';
    const userSelec = document.getElementById('level').value;
    console.log(userSelec);
    let squareNumb ;
    const bombNumb = 16;
    const scoreTxt = document.querySelector('h2');
    scoreTxt.innerHTML = `
        <h2 class="mt-4 fs-5 text-capitalize">your score is: ${yourScore} </h2>

    `;


    let gameOver = false;
    

    


  





    switch (userSelec){
        case 'easy':
            squareNumb = 100;
            break;
        case 'medium':
            squareNumb = 81;
            break;
        case 'hard':
            squareNumb = 49;
            break;
    }
   

    let bombList = randomListGen(bombNumb, squareNumb)


    // creo variabile sottraendo il num max di bombe al numero dei quadrati generati ottenendo il punteggio max da raggiungere

    let winCond = squareNumb - bombNumb;

    

    for (let i = 1; i <= squareNumb; i++ ){
        const square = boxGen(squareNumb, i);


   /*  devo aggiungere al quadrato l'evento click assegnando una classe se é una bomba o é salvo */
   /* inoltre, devo fare in modo che al click di una bomba appaiano tutte le rimanenti bombe e terminare la partirta.  */

        square.addEventListener('click', function(){

            // aggiungo ulteriore if con un flag per interrompere l'evento click se ho trovato una bomba, e aggiungo ulteriore controllo specificando che se trovo la classe safe interrompe l'evento.
        if(!gameOver  && !this.classList.contains('safe')){


                if (bombList.includes(i)){

                    
                    this.classList.add('dead');
                    scoreTxt.innerHTML = `you loose! score: ${yourScore}`;
                    //devo aggiungere la classe dead al resto delle bombe generate e non cliccate appena trovo la prima classe dead.
                   
                    
                    gameOver = true;
                    
                } else {

                    this.classList.add('safe')
                    yourScore++;
                    // aggiungo ulteriore if per controllare che, quando il mio punteggio é uguale alla variabile creata sopra (numero max bombe - numero di quadrati max) allora riporterá la scritta you win
                    
                    if(winCond !== yourScore){
                    scoreTxt.innerHTML = `
                        <h2 class="mt-4 fs-5 text-capitalize">your score is: ${yourScore} </h2>
                    `;
                    } else {

                        scoreTxt.innerHTML = `
                        <h2 class="mt-4 fs-5 text-capitalize">you win!! : with a score of ${yourScore} </h2>
                    `;

                    }
                };

            } 

       } )
        playGround.appendChild(square);
        console.log(bombList);
        console.log(winCond);
    }
    
}










