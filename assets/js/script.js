window.onload = function() {
    // Esercizio 1 eseguito sull'html usando Bootstrap (collapse)

    // Esercizio 2: contare il numero di viaggi presenti sulla pagina
    const contaViaggi = document.querySelectorAll(".card")
    alert("Sono presenti " + contaViaggi.length + " viaggi su questa pagina")
    contaViaggi() //ritorna il numero di viaggi in console

    //Esercizio 3-4 eseguito sull'html usando Bootstrap (Modal)    
}

//Esercizio 5  funzione che rimuove tutte le card della pagina
const removeCard = function(){
    const carte = document.querySelectorAll(".card")
    for (let i = 0; i < carte.length; i++) {
        const card = carte[i]
        card.remove();
    }
};