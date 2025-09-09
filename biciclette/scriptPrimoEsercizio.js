//Creiamo l'array di oggetti
const biciArray = [
//Ogni {} è un oggetto
        {
        "nome": "Cannondale SuperSix Evo (Hi-Mod)",
        "peso": 7.7
        },

        {
        "nome": "Scott Addict RC Ultimate",
        "peso": 5.92
        },
 
        {
        "nome": "Specialized Tarmac SL8 Expert",
        "peso": 7.20
        } ,

        {
        "nome": "Cervélo R5",
        "peso": 5.97
        },

       {
        "nome": "Cannondale SuperSix Evo (105)",
         "peso": 8.30,
        },
    
        {
        "nome": "Trek Émonda SLR",
         "peso": 7.51
        }
];

//Stampiamo a console tutte le bici con il relativo nome e peso
for (let key in biciArray) {
    console.log(`Nome bici ${key}: ${biciArray[key].nome}, Peso: ${biciArray[key].peso} kg`);
}

/********************************************************************************************* */
//Creiamo una variabile che conterrà la nostra bici più leggera
// La bici più leggera partirà di default dal primo oggetto dell'array
let biciLeggera = biciArray[0];

//Calcoliamo quale bici ha il peso minore con un ciclo FOR IN
for (let i in biciArray) {
//Con un ciclo if mettiamo a paragone l'attuale bici + leggera con quella successiva
    if (biciArray[i].peso < biciLeggera.peso) {
        biciLeggera = biciArray[i];
    }
}
//Stampiamo la bici più leggera prendendo il nome e il peso come visto a lezione
console.log(`La bici più leggera è: ${biciLeggera.nome} con ${biciLeggera.peso} kg`);

//Da ripetere e provare
// biciArray.forEach((bicicletta) => {if (biciArray.peso < biciLeggera.peso) biciLeggera = biciArray;})