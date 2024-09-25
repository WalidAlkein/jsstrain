 
// UJtiliser un prompt qui evolue avec un score *********************************************


const listeMots = ["Cachalot", "Pétunia", "Serviette"]
const listePhrases = ["Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson", "Jacques a dit"]

let score = 0

let choix = prompt("Veuillez choisir la liste : mots ou phrases")
while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Veuillez choisir la liste : mots ou phrases")
}
 
if (choix === "mots") {
    for (let i = 0; i < listeMots.length; i++) {
        let motUtilisateur = prompt("Entrez le mot : " + listeMots[i])
     if (motUtilisateur === listeMots[i]) {
        score++
    }
    }
    console.log("votre score est de " + score + " sur " + listeMots.length)
} else {
    for (let i = 0; i < listePhrases.length; i++) {
    let motUtilisateur = prompt("Entrez la phrase : " + listePhrases[i])
    if (motUtilisateur === listePhrases[i]) {
    score++
  }
}
console.log("votre score est de " + score + " sur " + listePhrases.length)
}



// ou
/*
let motUtilisateur = prompt("Entrez le mot : " + listeMots[0])
 if (motUtilisateur === listeMots[0]) {
    score++
 }
console.log(score)
motUtilisateur = prompt("Entrez le mot : " + listeMots[1])
if (motUtilisateur === listeMots[1]) {
    score++
}
console.log(score)
motUtilisateur = prompt("Entrez le mot : " + listeMots[2])
if (motUtilisateur === listeMots[2]) {
    score++
}
console.log(score)
*/




// Utiliser une variable True or False *******************************************************

/* 
let motTapeOk = true // Essayez de mettre false à la place de true

if (motTapeOk) {
    console.log("Bravo, vous avez correctement tapé le mot")
} else {
    console.log("Échec, le mot n'est pas correct")
}
    */

// Utilisez la condition switch/case pour gérer plusieurs réponses *****************************

/*
switch (motUtilisateur) {
    case motApplication:
        console.log("Bravo !")
        break
    case "Gredin":
        console.log("Restez correct !")
        break
    case "Mécréant":
        console.log("Restez correct !")
        break
    case "Vilain":
        console.log("Soyez gentil !")
        break
    default:
        console.log("Vous avez fait une erreur de frappe.")
}
        */



//Répétez du code grâce aux boucles***********************************************

/* on connait le nombre de tour
for (let compteur = 0; compteur < 3; compteur = compteur + 1) {
    console.log(compteur)
} */
// ou
/*
for (let i = 0; i < 3; i++) {
    console.log(i)
}
    */
    // i pour index

    // Pour rédiger cette boucle while, nous allons utiliser la
    // structure conditionnelle while (“tant que”, en français) ************
    /*
    let i = 0
    while (i < 3) {
        console.log(i)
        i++
    }
        */

