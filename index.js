// DEfinition du tableau à 2 dimensions contenant les pays et leur capital
let capitalAndPays =
    [
        ["Quelle est la capitale du Benin ?", "Porto-Novo"],

        ["Quelle est la capitale du Togo ?", "Lomé"],

        ["Quelle est la capitale du Ghana ?", "Accra"],

        ["Quelle est la capitale de la Cote-d'Ivoire ?", "Yamoussoukro"],

        ["Quelle est la capitale du Sénégal ?", "Dakar"],

        ["Quelle est la capitale de la Djibouti ?", "Djibouti"],

        ["Quelle est la capitale de l'Haiti ?", "Port au Prince"],

        ["Quelle est la capitale de la France ?", "Paris"],

        ["Quelle est la capitale de l'Espagne ?", "Madrid"],

        ["Quelle est la capitale de l'Italie ?", "Rome"],

        ["Quelle est la capitale du Japon ?", "Tokyo"],

        ["Quelle est la capitale du Pérou ?", "Lima"],

        ["Quelle est la capitale de l'Algérie ?", "Alger"],

        ["Quelle est la capitale de la Tunisie ?", "Tunis"],
        
 	["Quelle est la capitale de l'Afrique du Sud ?", "Pretoria"], 
 	
 	["Quelle est la capitale de l'Allemagne ?", "Berlin"], 
 	
 	["Quelle est la capitale de l'Angola ?", "Luanda"], 
 	
 	["Quelle est la capitale de l'Argentine ?", "Buenos-Aires"], 
 	
 	["Quelle est la capitale de l'Arménie ?", "Erevan"], 
 	
 	["Quelle est la capitale de l'Arabie Saoudite ?", "Riyad"], 
 	
 	["Quelle est la capitale de la Belgique ?", "Bruxelles"],
 	
 	["Quelle est la capitale du Burkina-Faso ?", "Ouagadougou"],
 	
 	["Quelle est la capitale du Cameroun ?", "Yaoundé"],
 	
 	["Quelle est la capitale du Canada ?", "Ottawa"],
 	
 	["Quelle est la capitale du Cap-Vert ?", "Praia"],
 	
 	["Quelle est la capitale de la Chine ?", "Pékin"],
 	
 	["Quelle est la capitale de la Colombie ?", "Bogota"],
 	
 	["Quelle est la capitale de la Croatie ?", "Zagreb"],
 	
 	["Quelle est la capitale du Congo ?", "Brazaville"],

        ["Quelle est la capitale de l'Egypte ?", "Le Caire"],

        ["Quelle est la capitale des Émirats Arabes Unis ?", "Abu Dhabi"],

        ["Quelle est la capitale des États-Unis ?", "Washington"], 

        ["Quelle est la capitale du Gabon ?", "Libreville"], 

        ["Quelle est la capitale de la Grèce?", "Athènes"], 

        ["Quelle est la capitale de l'Inde ?", "New Delhi"],
        
        ["Quelle est la capitale de l'Irak ?", "Bagdad"],

        ["Quelle est la capitale de l'Israel ?", "Jérusalem"],

        ["Quelle est la capitale de la Jamaique ?", "Kingston"],

        ["Quelle est la capitale du Kenya ?", "Nairobi"],

        ["Quelle est la capitale du Libéria ?", "Monrovia"],

        ["Quelle est la capitale de la Lybie ?", "Tripoli"],

        ["Quelle est la capitale du Vatican ?", "Vatican"],

        ["Quelle est la capitale de l'Ukraine ?", "Kiev"]

 	
    ]

const NOMBRE_OF_QUESTIONS = 10;

let btnStartGame = document.querySelector('.btnStartGame');

let containerQuestions = document.querySelector('.containerQuestions');

let Tableau = [];
let index;
let i = 1;

let h3 = document.querySelector('h3')
let quizz = document.querySelector('.quizz')

let pays
let capital

let inputAnswer = document.querySelector('.inputAnswer')
inputAnswer.style.display = "none"

let validAnswer = document.querySelector('.validAnswer')
validAnswer.style.display = "none"

let resultat = 0
let affichAnswer = document.querySelector('.affichAnswer')

let btnStartNewGame = document.querySelector('.btnStartNewGame')
btnStartNewGame.style.display = "none"

let img = document.querySelector('img')

let showAnswer = document.querySelector('.showAnswer')

let passQuestion = document.querySelector('.passQuestion')

let message = document.querySelector('.message')

let divShowMessage = document.querySelector('.divShowMessage')

btnStartGame.addEventListener('click', function (e) {
    e.preventDefault()

    inputAnswer.value = ""

    inputAnswer.style.display = "inherit"
    validAnswer.style.display = "inherit"

    index = Math.floor(Math.random() * capitalAndPays.length); //generer aléatoirement un pays et sa capital 

    Tableau.push(index);

    pays = capitalAndPays[index][0];
    capital = capitalAndPays[index][1];

    h3.innerHTML = "Question numéro 1 / " + NOMBRE_OF_QUESTIONS;
    quizz.innerHTML = pays

    btnStartGame.style.display = "none"
    containerQuestions.style.display = "inherit"

})
validAnswer.addEventListener('click', function (e) {

    if (inputAnswer.value.toUpperCase().trim() == capital.toUpperCase()) {
        resultat += 1
        divShowMessage.style.display = "inherit"
        showResult(1)
        setTimeout(hideDiv, 1500)
    }
    else {
        resultat
        divShowMessage.style.display = "inherit"
        showResult(2)
        setTimeout(hideDiv, 1500)
    }

    if (inputAnswer.value.trim() != "") {

        if (i < NOMBRE_OF_QUESTIONS) {
            inputAnswer.value = ""

            do {
                //generer aléatoirement un pays et sa capital 
                index = Math.floor(Math.random() * capitalAndPays.length);
            } while (Tableau.indexOf(index) != -1);

            Tableau.push(index);

            i++

            pays = capitalAndPays[index][0];
            capital = capitalAndPays[index][1];

            h3.innerHTML = "Question numéro " + i + " / " + NOMBRE_OF_QUESTIONS;
            quizz.innerHTML = pays

        }
        else {
            containerQuestions.style.display = "none"
            btnStartNewGame.innerHTML = "Rejouer la partie"
            btnStartNewGame.style = "inherit"
            img.style.display = "inherit"

            showAnswer.style.display = "inherit"

            if (resultat < (NOMBRE_OF_QUESTIONS / 2)) {
                img.setAttribute('src', 'mauvaisResulat.jpg')
                affichAnswer.innerHTML = "Vous avez obenu une note de " + resultat + "/" + NOMBRE_OF_QUESTIONS + "<br><span>Vous n'avez pas atteint la moyenne</span>"
                affichAnswer.style.color = "red"
            }
            else if (resultat >= (NOMBRE_OF_QUESTIONS / 2)) {
                img.setAttribute('src', 'bonResultat.jpg')
                affichAnswer.innerHTML = "Vous avez obenu une note de " + resultat + "/" + NOMBRE_OF_QUESTIONS + "<br><span>Félicitatiion! vous avez atteint au moins la moyenne</span>"
                affichAnswer.style.color = "green"
            }

            if (resultat == NOMBRE_OF_QUESTIONS) {
                img.setAttribute('src', 'tresBonResultat.jpg')
                affichAnswer.innerHTML = "Vous avez obenu une note de " + resultat + "/" + NOMBRE_OF_QUESTIONS + "<br><span>Félicitatiion! vous avez atteint la note maximale</span>"
                affichAnswer.style.color = "green"
            }
        }
    }
    else {
        divShowMessage.style.display = "inherit"
        showMistake(1)
        setTimeout(hideDiv, 1500)
    }
})

passQuestion.addEventListener('click', () => {

    if (inputAnswer.value.toUpperCase().trim() == capital.toUpperCase()) {
        resultat += 1
    }
    else {
        resultat
    }

    if (inputAnswer.value.trim() == '') {

        if (i < NOMBRE_OF_QUESTIONS) {
            inputAnswer.value = ""

            do {
                //generer aléatoirement un pays et sa capital 
                index = Math.floor(Math.random() * capitalAndPays.length);
            } while (Tableau.indexOf(index) != -1);

            Tableau.push(index);

            i++

            pays = capitalAndPays[index][0];
            capital = capitalAndPays[index][1];

            h3.innerHTML = "Question numéro " + i + " / " + NOMBRE_OF_QUESTIONS;
            quizz.innerHTML = pays

        }
        else {
            containerQuestions.style.display = "none"
            btnStartNewGame.innerHTML = "Rejouer la partie"
            btnStartNewGame.style = "inherit"
            img.style.display = "inherit"

            showAnswer.style.display = "inherit"

            if (resultat < (NOMBRE_OF_QUESTIONS / 2)) {
                img.setAttribute('src', 'mauvaisResulat.jpg')
                affichAnswer.innerHTML = "Vous avez obenu une note de " + resultat + "/" + NOMBRE_OF_QUESTIONS + "<br><span>Vous n'avez pas atteint la moyenne</span>"
                affichAnswer.style.color = "red"
            }
            else if (resultat >= (NOMBRE_OF_QUESTIONS / 2)) {
                img.setAttribute('src', 'bonResultat.jpg')
                affichAnswer.innerHTML = "Vous avez obenu une note de " + resultat + "/" + NOMBRE_OF_QUESTIONS + "<br><span>Félicitatiion! vous avez atteint au moins la moyenne</span>"
                affichAnswer.style.color = "green"
            }

            if (resultat == NOMBRE_OF_QUESTIONS) {
                img.setAttribute('src', 'tresBonResultat.jpg')
                affichAnswer.innerHTML = "Vous avez obenu une note de " + resultat + "/" + NOMBRE_OF_QUESTIONS + "<br><span>Félicitatiion! vous avez atteint la note maximale</span>"
                affichAnswer.style.color = "green"
            }
        }
    }
    else {
        divShowMessage.style.display = "inherit"
        showMistake(2)
        setTimeout(hideDiv, 1500)
    }
})

function hideDiv() {
    divShowMessage.style.display = "none"
}

function showMistake(nbr) {

    switch (nbr) {
        case 1:
            message.innerHTML = "Veuiller entrer une réponse pour valider"
            divShowMessage.style.backgroundColor = "red"
            break

        case 2:
            message.innerHTML = "Veuiller laisser le champs vide pour passer"
            divShowMessage.style.backgroundColor = "red"
            break

        default:
            message = ""
    }
}

function showResult(nbr) {

    switch (nbr) {
        case 1:
            message.innerHTML = "Bonne réponse"
            divShowMessage.style.backgroundColor = "green"
            break

        case 2:
            message.innerHTML = "Mauvaise réponse"
            divShowMessage.style.backgroundColor = "red"
            break

        default:
            message = ""
    }
}
