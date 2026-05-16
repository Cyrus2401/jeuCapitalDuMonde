// Données intégrées pour compatibilité totale (évite les erreurs CORS file://)
const capitalAndPays = [
    ["Quelle est la capitale du Bénin 🇧🇯 ?", "Porto-Novo"],
    ["Quelle est la capitale du Togo 🇹🇬 ?", "Lomé"],
    ["Quelle est la capitale du Ghana 🇬🇭 ?", "Accra"],
    ["Quelle est la capitale de la Côte d'Ivoire 🇨🇮 ?", "Yamoussoukro"],
    ["Quelle est la capitale du Sénégal 🇸🇳 ?", "Dakar"],
    ["Quelle est la capitale de Djibouti 🇩🇯 ?", "Djibouti"],
    ["Quelle est la capitale d' Haïti 🇭🇹 ?", "Port-au-Prince"],
    ["Quelle est la capitale de la France 🇫🇷 ?", "Paris"],
    ["Quelle est la capitale de l' Espagne 🇪🇸 ?", "Madrid"],
    ["Quelle est la capitale de l' Italie 🇮🇹 ?", "Rome"],
    ["Quelle est la capitale du Japon 🇯🇵 ?", "Tokyo"],
    ["Quelle est la capitale du Pérou 🇵🇪 ?", "Lima"],
    ["Quelle est la capitale de l' Algérie 🇩🇿 ?", "Alger"],
    ["Quelle est la capitale de la Tunisie 🇹🇳 ?", "Tunis"],
    ["Quelle est la capitale de l' Afrique du Sud 🇿🇦 ?", "Pretoria"],
    ["Quelle est la capitale de l' Allemagne 🇩🇪 ?", "Berlin"],
    ["Quelle est la capitale de l' Angola 🇦🇴 ?", "Luanda"],
    ["Quelle est la capitale de l' Argentine 🇦🇷 ?", "Buenos Aires"],
    ["Quelle est la capitale de l' Arménie 🇦🇲 ?", "Erevan"],
    ["Quelle est la capitale de l' Arabie Saoudite 🇸🇦 ?", "Riyad"],
    ["Quelle est la capitale de la Belgique 🇧🇪 ?", "Bruxelles"],
    ["Quelle est la capitale du Burkina Faso 🇧🇫 ?", "Ouagadougou"],
    ["Quelle est la capitale du Cameroun 🇨🇲 ?", "Yaoundé"],
    ["Quelle est la capitale du Canada 🇨🇦 ?", "Ottawa"],
    ["Quelle est la capitale du Cap-Vert 🇨🇻 ?", "Praia"],
    ["Quelle est la capitale de la Chine 🇨🇳 ?", "Pékin"],
    ["Quelle est la capitale de la Colombie 🇨🇴 ?", "Bogotá"],
    ["Quelle est la capitale de la Croatie 🇭🇷 ?", "Zagreb"],
    ["Quelle est la capitale du Congo 🇨🇬 ?", "Brazzaville"],
    ["Quelle est la capitale de l' Égypte 🇪🇬 ?", "Le Caire"],
    ["Quelle est la capitale des Émirats Arabes Unis 🇦🇪 ?", "Abou Dabi"],
    ["Quelle est la capitale des États-Unis 🇺🇸 ?", "Washington"],
    ["Quelle est la capitale du Gabon 🇬🇦 ?", "Libreville"],
    ["Quelle est la capitale de la Grèce 🇬🇷 ?", "Athènes"],
    ["Quelle est la capitale de l' Inde 🇮🇳 ?", "New Delhi"],
    ["Quelle est la capitale de l' Irak 🇮🇶 ?", "Bagdad"],
    ["Quelle est la capitale d' Israël 🇮🇱 ?", "Jérusalem"],
    ["Quelle est la capitale de la Jamaïque 🇯🇲 ?", "Kingston"],
    ["Quelle est la capitale du Kenya 🇰🇪 ?", "Nairobi"],
    ["Quelle est la capitale du Libéria 🇱🇷 ?", "Monrovia"],
    ["Quelle est la capitale de la Libye 🇱🇾 ?", "Tripoli"],
    ["Quelle est la capitale du Vatican 🇻🇦 ?", "Vatican"],
    ["Quelle est la capitale de l' Ukraine 🇺🇦 ?", "Kiev"],
    ["Quelle est la capitale de l' Afghanistan 🇦🇫 ?", "Kaboul"],
    ["Quelle est la capitale de l' Albanie 🇦🇱 ?", "Tirana"],
    ["Quelle est la capitale de l' Australie 🇦🇺 ?", "Canberra"],
    ["Quelle est la capitale de l' Autriche 🇦🇹 ?", "Vienne"],
    ["Quelle est la capitale du Bangladesh 🇧🇩 ?", "Dacca"],
    ["Quelle est la capitale de la Biélorussie 🇧🇾 ?", "Minsk"],
    ["Quelle est la capitale de la Bolivie 🇧🇴 ?", "Sucre"],
    ["Quelle est la capitale de la Bosnie-Herzégovine 🇧🇦 ?", "Sarajevo"],
    ["Quelle est la capitale de la Bulgarie 🇧🇬 ?", "Sofia"],
    ["Quelle est la capitale du Danemark 🇩🇰 ?", "Copenhague"],
    ["Quelle est la capitale de l' Équateur 🇪🇨 ?", "Quito"],
    ["Quelle est la capitale de l' Éthiopie 🇪🇹 ?", "Addis-Abeba"],
    ["Quelle est la capitale de la Finlande 🇫🇮 ?", "Helsinki"],
    ["Quelle est la capitale de la Gambie 🇬🇲 ?", "Banjul"],
    ["Quelle est la capitale du Guatemala 🇬🇹 ?", "Guatemala"],
    ["Quelle est la capitale de la Guinée 🇬🇳 ?", "Conakry"],
    ["Quelle est la capitale de la Guinée équatoriale 🇬🇶 ?", "Malabo"],
    ["Quelle est la capitale de la Guinée-Bissau 🇬🇼 ?", "Bissau"],
    ["Quelle est la capitale de la Hongrie 🇭🇺 ?", "Budapest"],
    ["Quelle est la capitale de l' Iran 🇮🇷 ?", "Téhéran"],
    ["Quelle est la capitale de l' Irlande 🇮🇪 ?", "Dublin"],
    ["Quelle est la capitale du Kazakhstan 🇰🇿 ?", "Astana"],
    ["Quelle est la capitale de la Lettonie 🇱🇻 ?", "Riga"],
    ["Quelle est la capitale du Lesotho 🇱🇸 ?", "Maseru"],
    ["Quelle est la capitale de Madagascar 🇲🇬 ?", "Antananarivo"],
    ["Quelle est la capitale de la Malaisie 🇲🇾 ?", "Kuala Lumpur"],
    ["Quelle est la capitale du Mali 🇲🇱 ?", "Bamako"],
    ["Quelle est la capitale du Maroc 🇲🇦 ?", "Rabat"],
    ["Quelle est la capitale de la Mauritanie 🇲🇷 ?", "Nouakchott"],
    ["Quelle est la capitale du Mexique 🇲🇽 ?", "Mexico"],
    ["Quelle est la capitale du Mozambique 🇲🇿 ?", "Maputo"],
    ["Quelle est la capitale de la Namibie 🇳🇦 ?", "Windhoek"],
    ["Quelle est la capitale du Népal 🇳🇵 ?", "Katmandou"],
    ["Quelle est la capitale du Niger 🇳🇪 ?", "Niamey"],
    ["Quelle est la capitale du Nigeria 🇳🇬 ?", "Abuja"],
    ["Quelle est la capitale de la Norvège 🇳🇴 ?", "Oslo"],
    ["Quelle est la capitale de la Nouvelle-Zélande 🇳🇿 ?", "Wellington"],
    ["Quelle est la capitale de l' Ouganda 🇺🇬 ?", "Kampala"],
    ["Quelle est la capitale de la Palestine 🇵🇸 ?", "Ramallah"],
    ["Quelle est la capitale du Panama 🇵🇦 ?", "Panama"],
    ["Quelle est la capitale des Pays-Bas 🇳🇱 ?", "Amsterdam"],
    ["Quelle est la capitale des Philippines 🇵🇭 ?", "Manille"],
    ["Quelle est la capitale du Qatar 🇶🇦 ?", "Doha"],
    ["Quelle est la capitale de la République Centrafricaine 🇨🇫 ?", "Bangui"],
    ["Quelle est la capitale de la République Démocratique du Congo 🇨🇩 ?", "Kinshasa"],
    ["Quelle est la capitale de la Roumanie 🇷🇴 ?", "Bucarest"],
    ["Quelle est la capitale du Royaume-Uni 🇬🇧 ?", "Londres"],
    ["Quelle est la capitale de la Russie 🇷🇺 ?", "Moscou"],
    ["Quelle est la capitale de Saint-Marin 🇸🇲 ?", "Saint-Marin"],
    ["Quelle est la capitale de la Serbie 🇷🇸 ?", "Belgrade"],
    ["Quelle est la capitale de la Sierra Leone 🇸🇱 ?", "Freetown"],
    ["Quelle est la capitale de Singapour 🇸🇬 ?", "Singapour"],
    ["Quelle est la capitale de la Somalie 🇸🇴 ?", "Mogadiscio"],
    ["Quelle est la capitale du Soudan 🇸🇩 ?", "Khartoum"],
    ["Quelle est la capitale du Soudan du Sud 🇸🇸 ?", "Djouba"],
    ["Quelle est la capitale de la Suède 🇸🇪 ?", "Stockholm"],
    ["Quelle est la capitale de la Suisse 🇨🇭 ?", "Berne"],
    ["Quelle est la capitale de la Syrie 🇸🇾 ?", "Damas"],
    ["Quelle est la capitale de la Tanzanie 🇹🇿 ?", "Dodoma"],
    ["Quelle est la capitale du Tchad 🇹🇩 ?", "N'Djamena"],
    ["Quelle est la capitale de la Thaïlande 🇹🇭 ?", "Bangkok"],
    ["Quelle est la capitale de la Turquie 🇹🇷 ?", "Ankara"],
    ["Quelle est la capitale de l' Uruguay 🇺🇾 ?", "Montevideo"],
    ["Quelle est la capitale de la Zambie 🇿🇲 ?", "Lusaka"],
    ["Quelle est la capitale du Yémen 🇾🇪 ?", "Sanaa"],
    ["Quelle est la capitale du Viêt Nam 🇻🇳 ?", "Hanoï"],
    ["Quelle est la capitale du Zimbabwe 🇿🇼 ?", "Harare"],
    ["Quelle est la capitale du Brésil 🇧🇷 ?", "Brasília"],
    ["Quelle est la capitale du Chili 🇨🇱 ?", "Santiago"],
    ["Quelle est la capitale de la Corée du Sud 🇰🇷 ?", "Séoul"],
    ["Quelle est la capitale de la Corée du Nord 🇰🇵 ?", "Pyongyang"],
    ["Quelle est la capitale du Costa Rica 🇨🇷 ?", "San José"],
    ["Quelle est la capitale de Cuba 🇨🇺 ?", "La Havane"],
    ["Quelle est la capitale de l' Estonie 🇪🇪 ?", "Tallinn"],
    ["Quelle est la capitale de l' Islande 🇮🇸 ?", "Reykjavik"],
    ["Quelle est la capitale de la Lituanie 🇱🇹 ?", "Vilnius"],
    ["Quelle est la capitale du Luxembourg 🇱🇺 ?", "Luxembourg"],
    ["Quelle est la capitale de Malte 🇲🇹 ?", "La Valette"],
    ["Quelle est la capitale de Monaco 🇲🇨 ?", "Monaco"],
    ["Quelle est la capitale de la Mongolie 🇲🇳 ?", "Oulan-Bator"],
    ["Quelle est la capitale du Monténégro 🇲🇪 ?", "Podgorica"],
    ["Quelle est la capitale du Paraguay 🇵🇾 ?", "Asunción"],
    ["Quelle est la capitale de la Pologne 🇵🇱 ?", "Varsovie"],
    ["Quelle est la capitale du Portugal 🇵🇹 ?", "Lisbonne"],
    ["Quelle est la capitale de la République Tchèque 🇨🇿 ?", "Prague"],
    ["Quelle est la capitale de la Slovaquie 🇸🇰 ?", "Bratislava"],
    ["Quelle est la capitale de la Slovénie 🇸🇮 ?", "Ljubljana"],
    ["Quelle est la capitale du Sri Lanka 🇱🇰 ?", "Colombo"],
    ["Quelle est la capitale de Taïwan 🇹🇼 ?", "Taipei"],
    ["Quelle est la capitale du Venezuela 🇻🇪 ?", "Caracas"],
    ["Quelle est la capitale du Laos 🇱🇦 ?", "Vientiane"],
    ["Quelle est la capitale du Cambodge 🇰🇭 ?", "Phnom Penh"],
    ["Quelle est la capitale de la Jordanie 🇯🇴 ?", "Amman"],
    ["Quelle est la capitale du Liban 🇱🇧 ?", "Beyrouth"],
    ["Quelle est la capitale du Rwanda 🇷🇼 ?", "Kigali"],
    ["Quelle est la capitale de l' Ouzbékistan 🇺🇿 ?", "Tachkent"],
    ["Quelle est la capitale du Turkménistan 🇹🇲 ?", "Achgabat"],
    ["Quelle est la capitale du Kirghizistan 🇰🇬 ?", "Bichkek"],
    ["Quelle est la capitale du Tadjikistan 🇹🇯 ?", "Douchanbé"],
    ["Quelle est la capitale de l' Indonésie 🇮🇩 ?", "Jakarta"],
    ["Quelle est la capitale de la Papouasie-Nouvelle-Guinée 🇵🇬 ?", "Port Moresby"],
    ["Quelle est la capitale des Îles Salomon 🇸🇧 ?", "Honiara"],
    ["Quelle est la capitale du Vanuatu 🇻🇺 ?", "Port-Vila"],
    ["Quelle est la capitale des Fidji 🇫🇯 ?", "Suva"],
    ["Quelle est la capitale des Tonga 🇹🇴 ?", "Nuku'alofa"],
    ["Quelle est la capitale des Samoa 🇼🇸 ?", "Apia"],
    ["Quelle est la capitale des Palaos 🇵🇼 ?", "Ngerulmud"],
    ["Quelle est la capitale des États fédérés de Micronésie 🇫🇲 ?", "Palikir"],
    ["Quelle est la capitale des Îles Marshall 🇲🇭 ?", "Majuro"],
    ["Quelle est la capitale de Kiribati 🇰🇮 ?", "Tarawa-Sud"],
    ["Quelle est la capitale de Nauru 🇳🇷 ?", "Yaren"],
    ["Quelle est la capitale de Tuvalu 🇹🇻 ?", "Funafuti"],
    ["Quelle est la capitale d' Andorre 🇦🇩 ?", "Andorre-la-Vieille"],
    ["Quelle est la capitale du Liechtenstein 🇱🇮 ?", "Vaduz"],
    ["Quelle est la capitale de la Moldavie 🇲🇩 ?", "Chisinau"],
    ["Quelle est la capitale de la Macédoine du Nord 🇲🇰 ?", "Skopje"],
    ["Quelle est la capitale du Botswana 🇧🇼 ?", "Gaborone"],
    ["Quelle est la capitale du Malawi 🇲🇼 ?", "Lilongwe"],
    ["Quelle est la capitale de l'île Maurice 🇲🇺 ?", "Port-Louis"],
    ["Quelle est la capitale des Seychelles 🇸🇨 ?", "Victoria"],
    ["Quelle est la capitale des Comores 🇰🇲 ?", "Moroni"],
    ["Quelle est la capitale du Burundi 🇧🇮 ?", "Gitega"],
    ["Quelle est la capitale de l' Érythrée 🇪🇷 ?", "Asmara"],
    ["Quelle est la capitale du Pakistan 🇵🇰 ?", "Islamabad"],
    ["Quelle est la capitale de la Birmanie 🇲🇲 ?", "Naypyidaw"],
    ["Quelle est la capitale du Koweït 🇰🇼 ?", "Koweït"],
    ["Quelle est la capitale d' Oman 🇴🇲 ?", "Mascate"],
    ["Quelle est la capitale de la Géorgie 🇬🇪 ?", "Tbilissi"],
    ["Quelle est la capitale de l' Azerbaïdjan 🇦🇿 ?", "Bakou"],
    ["Quelle est la capitale du Belize 🇧🇿 ?", "Belmopan"],
    ["Quelle est la capitale du Honduras 🇭🇳 ?", "Tegucigalpa"],
    ["Quelle est la capitale du El Salvador 🇸🇻 ?", "San Salvador"],
    ["Quelle est la capitale du Nicaragua 🇳🇮 ?", "Managua"],
    ["Quelle est la capitale des Bahamas 🇧🇸 ?", "Nassau"],
    ["Quelle est la capitale de la Barbade 🇧🇧 ?", "Bridgetown"],
    ["Quelle est la capitale de Sainte-Lucie 🇱🇨 ?", "Castries"],
    ["Quelle est la capitale de Saint-Vincent-et-les-Grenadines 🇻🇨 ?", "Kingstown"],
    ["Quelle est la capitale de la Grenade 🇬🇩 ?", "Saint-Georges"],
    ["Quelle est la capitale d' Antigua-et-Barbuda 🇦🇩 ?", "Saint John's"],
    ["Quelle est la capitale de Saint-Christophe-et-Niévès 🇰🇳 ?", "Basseterre"],
    ["Quelle est la capitale de la Dominique 🇩🇲 ?", "Roseau"],
    ["Quelle est la capitale de Trinité-et-Tobago 🇹🇹 ?", "Port-d'Espagne"],
    ["Quelle est la capitale du Guyana 🇬🇾 ?", "Georgetown"],
    ["Quelle est la capitale du Suriname 🇸🇷 ?", "Paramaribo"]
];

const DEFAULT_QUESTIONS_LIMIT = 10;
let currentQuestionsLimit = Math.min(DEFAULT_QUESTIONS_LIMIT, capitalAndPays.length);

const el = {
    btnStartGame: document.querySelector('.btnStartGame'),
    containerQuestions: document.querySelector('.containerQuestions'),
    h3: document.querySelector('h3'),
    quizz: document.querySelector('.quizz'),
    inputAnswer: document.querySelector('.inputAnswer'),
    validAnswer: document.querySelector('.validAnswer'),
    affichAnswer: document.querySelector('.affichAnswer'),
    btnStartNewGame: document.querySelector('.btnStartNewGame'),
    img: document.querySelector('img'),
    showAnswer: document.querySelector('.showAnswer'),
    message: document.querySelector('.message'),
    divShowMessage: document.querySelector('.divShowMessage'),
    indiceIcon: document.querySelector('.indice-icon'),
    tooltip: document.querySelector('.tooltip'),
    yearSpan: document.getElementById('current-year')
};

let Tableau = [];
let index;
let i = 1;
let pays;
let capital;
let resultat = 0;

el.inputAnswer.style.display = "none";
el.validAnswer.style.display = "none";
el.btnStartNewGame.style.display = "none";
el.btnStartGame.disabled = false;
el.btnStartGame.textContent = "Commencer la partie";

function normalizeAnswer(answer) {
    if (!answer) return "";
    return answer.toLowerCase().trim()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[-\s']/g, "");
}

function resetIndice() {
    el.indiceIcon.disabled = false;
    el.indiceIcon.innerHTML = "💡";
    el.tooltip.textContent = "";
    el.tooltip.classList.remove('show');
}

function hideTooltip() {
    el.tooltip.classList.remove('show');
}

el.btnStartGame.addEventListener('click', function (e) {
    e.preventDefault();
    if (capitalAndPays.length === 0) return;

    Tableau = [];
    i = 1;
    resultat = 0;
    
    el.inputAnswer.value = "";
    el.inputAnswer.style.display = "inherit";
    el.validAnswer.style.display = "inherit";
    
    nextQuestion();
    
    el.btnStartGame.style.display = "none";
    el.containerQuestions.style.display = "inherit";
    el.containerQuestions.classList.add('fade-in');
    
    resetIndice();
});

function nextQuestion() {
    if (Tableau.length >= capitalAndPays.length) {
        finishGame();
        return;
    }

    do {
        index = Math.floor(Math.random() * capitalAndPays.length);
    } while (Tableau.indexOf(index) != -1);
    
    Tableau.push(index);
    pays = capitalAndPays[index][0];
    capital = capitalAndPays[index][1];
    
    el.h3.innerHTML = `Question numéro ${i} / ${currentQuestionsLimit}`;
    el.quizz.innerHTML = pays;
    el.inputAnswer.focus();
}

function processAnswer() {
    const isCorrect = normalizeAnswer(el.inputAnswer.value) === normalizeAnswer(capital);
    
    el.divShowMessage.style.display = "inherit";
    
    if (isCorrect) {
        resultat++;
        showResult(1);
        setTimeout(hideDiv, 1200);
    } else {
        showResult(2, capital);
        setTimeout(hideDiv, 2000);
    }

    if (i < currentQuestionsLimit) {
        i++;
        setTimeout(() => {
            el.inputAnswer.value = "";
            nextQuestion();
            resetIndice();
        }, isCorrect ? 1200 : 2000);
    } else {
        setTimeout(finishGame, isCorrect ? 1200 : 2000);
    }
}

el.validAnswer.addEventListener('click', processAnswer);
el.inputAnswer.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') processAnswer();
});

function finishGame() {
    el.containerQuestions.style.display = "none";
    el.btnStartNewGame.innerHTML = "Rejouer la partie";
    el.btnStartNewGame.style.display = "inherit";
    el.img.style.display = "inherit";
    el.showAnswer.style.display = "inherit";
    
    let icon, color, text;
    const ratio = resultat / currentQuestionsLimit;

    if (ratio === 1) {
        icon = "🎉"; color = "#2ecc71"; text = `Wouaaaoooh!!! Note maximale : ${resultat}/${currentQuestionsLimit}`;
    } else if (ratio >= 0.5) {
        icon = "😊"; color = "#2ecc71"; text = `Félicitations ! Votre note : ${resultat}/${currentQuestionsLimit}`;
    } else {
        icon = "😔"; color = "#e74c3c"; text = `Dommage ! Votre note : ${resultat}/${currentQuestionsLimit}`;
    }

    const svgData = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="${color}"/><text x="50" y="65" text-anchor="middle" font-size="30" fill="white">${icon}</text></svg>`;
    el.img.setAttribute('src', `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgData)}`);
    el.affichAnswer.innerHTML = text;
    el.affichAnswer.style.color = color;
}

el.indiceIcon.addEventListener('click', function() {
    el.tooltip.textContent = `Commence par ${capital.charAt(0).toUpperCase()}`;
    el.tooltip.classList.add('show');
    setTimeout(hideTooltip, 2500);
});

function hideDiv() {
    el.divShowMessage.style.display = "none";
}

function showResult(type, goodAnswer) {
    if (type === 1) {
        el.message.innerHTML = "Bonne réponse !";
        el.divShowMessage.style.backgroundColor = "rgba(46, 204, 113, 0.9)";
    } else {
        el.message.innerHTML = `Mauvaise réponse ! La bonne était <strong style='font-weight: 800'>${goodAnswer}</strong>`;
        el.divShowMessage.style.backgroundColor = "rgba(231, 76, 60, 0.9)";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (el.yearSpan) el.yearSpan.textContent = new Date().getFullYear();
});
