let capitalAndPays = [];
const NOMBRE_OF_QUESTIONS = 10;

let btnStartGame = document.querySelector('.btnStartGame');
let containerQuestions = document.querySelector('.containerQuestions');
let Tableau = [];
let index;
let i = 1;
let h3 = document.querySelector('h3');
let quizz = document.querySelector('.quizz');
let pays;
let capital;
let inputAnswer = document.querySelector('.inputAnswer');
inputAnswer.style.display = "none";
let validAnswer = document.querySelector('.validAnswer');
validAnswer.style.display = "none";
let resultat = 0;
let affichAnswer = document.querySelector('.affichAnswer');
let btnStartNewGame = document.querySelector('.btnStartNewGame');
btnStartNewGame.style.display = "none";
let img = document.querySelector('img');
let showAnswer = document.querySelector('.showAnswer');
let message = document.querySelector('.message');
let divShowMessage = document.querySelector('.divShowMessage');
let indiceIcon = document.querySelector('.indice-icon');
let tooltip = document.querySelector('.tooltip');
let indiceUsed = false;

// Chargement des données JSON
fetch('questions-capitales.json')
    .then(response => response.json())
    .then(data => {
        capitalAndPays = data.capitalAndPays;
        console.log(`${capitalAndPays.length} questions chargées avec succès !`);
        
        // Activer le bouton de démarrage une fois les données chargées
        btnStartGame.disabled = false;
        btnStartGame.textContent = "Commencer une nouvelle partie";
    })
    .catch(error => {
        console.error('Erreur lors du chargement:', error);
        // Fallback avec quelques questions de base
        capitalAndPays = [
            ["Quelle est la capitale de la France ?", "Paris"],
            ["Quelle est la capitale de l'Espagne ?", "Madrid"],
            ["Quelle est la capitale de l'Italie ?", "Rome"],
            ["Quelle est la capitale de l'Allemagne ?", "Berlin"],
            ["Quelle est la capitale du Royaume-Uni ?", "Londres"]
        ];
        btnStartGame.disabled = false;
        btnStartGame.textContent = "Commencer (mode limité)";
        console.log('Mode fallback activé avec questions limitées');
    });

// Fonction pour normaliser les réponses
function normalizeAnswer(answer) {
    return answer
        .toLowerCase()
        .trim()
        .replace(/[àáâãäå]/g, 'a')
        .replace(/[èéêë]/g, 'e')
        .replace(/[ìíîï]/g, 'i')
        .replace(/[òóôõö]/g, 'o')
        .replace(/[ùúûü]/g, 'u')
        .replace(/[ñ]/g, 'n')
        .replace(/[ç]/g, 'c')
        .replace(/[-\s]/g, '') // Enlève tirets et espaces
        .replace(/'/g, ''); // Enlève apostrophes
}

// Fonction pour réinitialiser l'indice
function resetIndice() {
    indiceIcon.disabled = false;
    indiceIcon.innerHTML = "💡";
    tooltip.textContent = "";
    tooltip.classList.remove('show');
    indiceUsed = false;
}

// Fonction pour cacher le tooltip
function hideTooltip() {
    tooltip.classList.remove('show');
}

// Désactiver le bouton au chargement
btnStartGame.disabled = true;
btnStartGame.textContent = "Chargement des questions...";

btnStartGame.addEventListener('click', function (e) {
    e.preventDefault();
    
    // Vérifier que les questions sont chargées
    if (capitalAndPays.length === 0) {
        alert("Les questions ne sont pas encore chargées. Veuillez patienter.");
        return;
    }
    
    // Réinitialiser les variables du jeu
    Tableau = [];
    i = 1;
    resultat = 0;
    
    inputAnswer.value = "";
    inputAnswer.style.display = "inherit";
    validAnswer.style.display = "inherit";
    
    index = Math.floor(Math.random() * capitalAndPays.length);
    Tableau.push(index);
    
    pays = capitalAndPays[index][0];
    capital = capitalAndPays[index][1];
    
    h3.innerHTML = "Question numéro 1 / " + NOMBRE_OF_QUESTIONS;
    quizz.innerHTML = pays;
    
    btnStartGame.style.display = "none";
    containerQuestions.style.display = "inherit";
    
    // Reset de l'indice
    resetIndice();
});

// Validation avec bouton
validAnswer.addEventListener('click', function (e) {
    processAnswer();
});

// Validation avec touche Entrée
inputAnswer.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        processAnswer();
    }
});

// Fonction principale de traitement de la réponse
function processAnswer() {
    // Vérifier la réponse
    if (normalizeAnswer(inputAnswer.value) === normalizeAnswer(capital)) {
        resultat += 1;
        divShowMessage.style.display = "inherit";
        showResult(1, '');
        setTimeout(hideDiv, 1500);
    } else {
        divShowMessage.style.display = "inherit";
        showResult(2, capital);
        setTimeout(hideDiv, 2500);
    }

    // Passer à la question suivante ou finir le jeu
    if (i < NOMBRE_OF_QUESTIONS) {
        inputAnswer.value = "";
        
        do {
            index = Math.floor(Math.random() * capitalAndPays.length);
        } while (Tableau.indexOf(index) != -1);
        
        Tableau.push(index);
        i++;
        
        pays = capitalAndPays[index][0];
        capital = capitalAndPays[index][1];
        
        h3.innerHTML = "Question numéro " + i + " / " + NOMBRE_OF_QUESTIONS;
        quizz.innerHTML = pays;
        
        // Reset de l'indice à chaque nouvelle question
        resetIndice();
    } else {
        // Fin du jeu
        containerQuestions.style.display = "none";
        btnStartNewGame.innerHTML = "Rejouer la partie";
        btnStartNewGame.style = "inherit";
        img.style.display = "inherit";
        showAnswer.style.display = "inherit";
        
        if (resultat < (NOMBRE_OF_QUESTIONS / 2)) {
            img.setAttribute('src', 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="red"/><text x="50" y="65" text-anchor="middle" font-size="30" fill="white">😔</text></svg>');
            affichAnswer.innerHTML = "Dommage ! Vous avez obenu une note de " + resultat + "/" + NOMBRE_OF_QUESTIONS;
            affichAnswer.style.color = "red";
        } else if (resultat >= (NOMBRE_OF_QUESTIONS / 2)) {
            img.setAttribute('src', 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="green"/><text x="50" y="65" text-anchor="middle" font-size="30" fill="white">😊</text></svg>');
            affichAnswer.innerHTML = "Félicitaion ! Vous avez obenu une note de " + resultat + "/" + NOMBRE_OF_QUESTIONS;
            affichAnswer.style.color = "green";
        }
        
        if (resultat == NOMBRE_OF_QUESTIONS) {
            img.setAttribute('src', 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="gold"/><text x="50" y="65" text-anchor="middle" font-size="30" fill="white">🎉</text></svg>');
            affichAnswer.innerHTML = "Wouaaaoooh!!! Vous avez obenu la note maximale qui est de " + resultat + "/" + NOMBRE_OF_QUESTIONS;
            affichAnswer.style.color = "green";
        }
    }
}

// Gestion de l'indice avec tooltip
indiceIcon.addEventListener('click', function() {
    if (!indiceUsed) {
        tooltip.textContent = `${capital.charAt(0).toUpperCase()}***`;
        tooltip.classList.add('show');
        indiceIcon.innerHTML = "💡";
        indiceIcon.disabled = true;
        indiceUsed = true;
        
        // Cacher le tooltip après 3 secondes
        setTimeout(hideTooltip, 3000);
    }
});

function hideDiv() {
    divShowMessage.style.display = "none";
}

function showResult(nbr, goodAnswer) {
    switch (nbr) {
        case 1:
            message.innerHTML = "Bonne réponse";
            divShowMessage.style.backgroundColor = "green";
            break;
        case 2:
            message.innerHTML = "Mauvaise réponse ! La bonne réponse était <strong style='font-weight: 800'>" + goodAnswer + "</strong>";
            divShowMessage.style.backgroundColor = "red";
            break;
        default:
            message = "";
    }
}