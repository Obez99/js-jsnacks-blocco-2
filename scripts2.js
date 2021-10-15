//Secondo esercizio

/*
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi
 fino a quando ne avrà tanti quanti l’altro.
*/

//Creo due array
const arr1 = ["10", "15", "20"];
const arr2 = ["2"];

let difference = 0;
//Controllo qual'è l'array con meno elementi
if (arr1.length < arr2.length) {
  difference = arr2.length - arr1.length;
  maggiore = "arr2";
} else {
  difference = arr1.length - arr2.length;
  maggiore = "arr1";
}
//Calcolo la differenza e aggiungo gli elementi restanti
let index = 0;
while (index != difference) {
  if (maggiore === "arr2")
    arr1.push("Elemento");
  else
    arr2.push("Elemento")
  index++;
}

console.log(arr1);
console.log(arr2);
