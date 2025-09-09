//Creiamo un Array di oggetti con svariate squadre di calcio
//In realtà ci sono squadre di manga, anime anche non di calcio
//Ma in questo esercizio saranno di calcio

const squadreCalcioArray = [
//Ogni {} è un Array
    {
        "nome": "Nankatsu",
        "punti_fatti": 0,
        "falli_subiti": 0
    },

    {
        "nome": "Shaolin Soccer",
        "punti_fatti": 0, 
        "falli_subiti": 0
    },

    {
        "nome": "Hikawa",
        "punti_fatti": 0,
        "falli_subiti": 0
    },

    {
        "nome": "Tasso Rosso",
        "punti_fatti": 0,
        "falli_subiti": 0
    },

    {
        "nome": "Grifondoro",
        "punti_fatti": 0,
        "falli_subiti": 0
    },

     {
        "nome": "Burū Rokku",
        punti_fatti:  0,
        "falli_subiti": 0
    }
];

//Mostriamo le varie squadre di calcio in console.
for (let key in squadreCalcioArray) {
    console.log(`Nome squadra ${key}: ${squadreCalcioArray[key].nome}`)
}

//Generariamo numeri random al posto degli 0 nelle proprietà 
// “punti” fatti e “falli subiti”.
for (let k in squadreCalcioArray) {
    squadreCalcioArray[k]["punti_fatti"] = Math.floor(Math.random() * 1000);
    squadreCalcioArray[k]["falli_subiti"] = Math.floor(Math.random()  * 500);
}

//Creiamo un nuovo array i cui elementi contengono 
// solo nomi e falli subiti e stampiamo tutto in console.
let arrayNomeFalli = [];

for (let i = 0; i < squadreCalcioArray.length; i++) {
    arrayNomeFalli.push({
        nome: squadreCalcioArray[i].nome,
        falli_subiti: squadreCalcioArray[i].falli_subiti
    });
}

console.log(arrayNomeFalli);

// squadreCalcioArray.forEach((squadra, i) => { 
//     squadra.punti_fatti = Math.floor(Math.random() * 1000);
//     squadra.falli_subiti = Math.floor(Math.random()  * 500);
//     console.log(squadreCalcioArray[i]);
// })

//Da ripetere e provare
// const arrayNomeFolli = squadreCalcioArray.map((squadra) => ({nome: squadreCalcioArray.nome,falli_subiti: squadreCalcioArray.falli_subiti}))

// const array = [1, 5, 4, 5, 4]
// const arrayMoltiplicato = array.map(numero => numero * 2);
// console.log(arrayMoltiplicato);

