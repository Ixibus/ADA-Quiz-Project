var questions_propositions = [
    {
        question: "Quelle est la superficie de la France?",
        Proposition_1: "550 000km2",
        Proposition_2: "280 000km2",
        Proposition_3: "1 030 000km2",
        Proposition_4: "25 000m3",
        réponse: "550 000km2",
    },
    {
        question: "D’après vous, l’Europe est-elle plus grande que l’Afrique ?",
        Proposition_1: "Vrai",
        Proposition_2: "faux",
        réponse: "faux",
    },
    {
        question: "A quel pays appartient ce drapeau?",
        Proposition_1: "Ce drapeau n'existe pas!",
        Proposition_2: "Iles Marshall",
        Proposition_3: "Le Groenland",
        Proposition_4: "îles Salomon",
        réponse: "Le Groenland",
    },
    {
        question: "Quel pays d'Afrique a des frontières terrestres avec un pays européen?",
        Proposition_1: "Le Maroc",
        Proposition_2: "La Mauritanie",
        Proposition_3: "La Tunisie",
        Proposition_4: "L'Egypte",
        réponse: "Le Maroc",
    },
    {
        question: "Quel pays d'Afrique a des frontières terrestres avec un pays européen?",
        Proposition_1: "La Mauritanie",
        Proposition_2: "Le Maroc",
        Proposition_3: "La Tunisie",
        Proposition_4: "L'Egypte",
        réponse: "Le Maroc",
    },
    {
        question: "la réponse D",
        Proposition_1: "A",
        Proposition_2: "B",
        Proposition_3: "C",
        Proposition_4: "D",
        réponse: "D",
    },
];
var questionHolder = document.querySelector("#question");
//question.textContent= questions_propositions[0].question;
var proposition_1 = document.querySelector("#proposition_1");
var proposition_2 = document.querySelector("#proposition_2");
var proposition_3 = document.querySelector("#proposition_3");
var proposition_4 = document.querySelector("#proposition_4");
var valider = document.querySelector(".valider");
var score = 0;
var scoreHolder = document.querySelector("#score");
var i = 0;
valider.addEventListener("click", function () {
    var _a, _b, _c, _d, _e;
    console.log("--------- itération " + i);
    questionHolder.textContent = (_a = questions_propositions[i]) === null || _a === void 0 ? void 0 : _a.question;
    proposition_1.textContent = (_b = questions_propositions[i]) === null || _b === void 0 ? void 0 : _b.Proposition_1;
    proposition_2.textContent = (_c = questions_propositions[i]) === null || _c === void 0 ? void 0 : _c.Proposition_2;
    proposition_3.textContent = (_d = questions_propositions[i]) === null || _d === void 0 ? void 0 : _d.Proposition_3;
    proposition_4.textContent = (_e = questions_propositions[i]) === null || _e === void 0 ? void 0 : _e.Proposition_4;
    questionSelected(questions_propositions);
});
function questionSelected(objet) {
    proposition_1.addEventListener("click", function () {
        var _a, _b;
        if (objet[i].Proposition_1 === objet[i].réponse) {
            console.log(objet[i]);
            console.log(((_a = objet[i]) === null || _a === void 0 ? void 0 : _a.Proposition_1) + " " + ((_b = objet[i]) === null || _b === void 0 ? void 0 : _b.réponse));
            score++;
            scoreHolder.textContent = score.toString(10);
            console.log("Le score est à " + score);
            console.log("----- fin d'itération à " + i);
            i++;
        }
    });
    proposition_2.addEventListener("click", function () {
        var _a, _b;
        if (objet[i].Proposition_2 === objet[i].réponse) {
            console.log(objet[i]);
            console.log(((_a = objet[i]) === null || _a === void 0 ? void 0 : _a.Proposition_2) + " " + ((_b = objet[i]) === null || _b === void 0 ? void 0 : _b.réponse));
            score++;
            scoreHolder.textContent = score.toString(10);
            console.log("Le score est à " + score);
            console.log("----- fin d'itération à " + i);
            i++;
        }
    });
    proposition_3.addEventListener("click", function () {
        var _a, _b;
        if (objet[i].Proposition_3 === objet[i].réponse) {
            console.log(objet[i]);
            console.log(((_a = objet[i]) === null || _a === void 0 ? void 0 : _a.Proposition_3) + " " + ((_b = objet[i]) === null || _b === void 0 ? void 0 : _b.réponse));
            score++;
            scoreHolder.textContent = score.toString(10);
            console.log("Le score est à " + score);
            console.log("----- fin d'itération à " + i);
            i++;
        }
    });
    proposition_4.addEventListener("click", function () {
        var _a, _b;
        if (objet[i].Proposition_4 === objet[i].réponse) {
            console.log(objet[i]);
            console.log(((_a = objet[i]) === null || _a === void 0 ? void 0 : _a.Proposition_4) + " " + ((_b = objet[i]) === null || _b === void 0 ? void 0 : _b.réponse));
            score++;
            scoreHolder.textContent = score.toString(10);
            console.log("Le score est à " + score);
            console.log("----- fin d'itération à " + i);
            i++;
        }
    });
}
