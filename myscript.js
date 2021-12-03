let userKilometres = prompt ('Inserisci il numero di chilometri che vuoi percorrere:')
let userAge = prompt ('Inserisci la tua età')


const costKm = (userKilometres * 0.21) //prezzo in base ai chilometri 

console.log (costKm)

if(userAge < 18){
    document.getElementById('costo').innerHTML =
    (costKm - ((costKm / 100) * 20)).toFixed(2);
} else if (userAge >= 65){
    document.getElementById('costo').innerHTML =
    (costKm - ((costKm / 100) * 40)).toFixed(2);
} else {
    document.getElementById('costo').innerHTML =
    (costKm);
}

