let userKilometres = prompt ('Inserisci il numero di chilometri che vuoi percorrere:')
let userAge = prompt ('Inserisci la tua età')


const costKm = (userKilometres * 0.21) //prezzo in base ai chilometri 

if(userAge < 18){
    document.getElementById('costo').innerHTML =
    (costKm - (costKm * 20 / 100));
} else if (userAge >= 65){
    document.getElementById('costo').innerHTML =
    (costKm - (costKm * 40 / 100));
} else {
    document.getElementById('costo').innerHTML =
    (costKm);
}

