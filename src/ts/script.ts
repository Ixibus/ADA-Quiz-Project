interface innerType {
  question: string;
  Proposition_1: string;
  Proposition_2: string;
  Proposition_3?: string;
  Proposition_4?: string;
  réponse: string;
  indice: string;
}

let questions_propositions: innerType[] = [
  {
    question: "Quelle est la superficie de la France?",
    Proposition_1: "550 000km2",
    Proposition_2: "280 000km2",
    Proposition_3: "1 030 000km2",
    Proposition_4: "25 000m3...",
    réponse: "550 000km2",
    indice: "La superficie de l'Espagne est de 506 000 km2",
  },
  {
    question: "D’après vous, l’Europe est-elle plus grande que l’Afrique ?",
    Proposition_1: "Vrai",
    Proposition_2: "faux",
    réponse: "faux",

    indice: "Donner un indice serait trop facile.",
  },
  {
    question: "A quel pays appartient ce drapeau?",
    Proposition_1: "Ce drapeau n'existe pas!",
    Proposition_2: "Iles Marshall",
    Proposition_3: "Le Groenland",
    Proposition_4: "îles Salomon",
    réponse: "Le Groenland",
    indice: "Ce drapeau existe bien.",
  },
  {
    question:
      "Quel pays d'Afrique a des frontières terrestres avec un pays européen?",
    Proposition_1: "Le Maroc",
    Proposition_2: "La Mauritanie",
    Proposition_3: "La Tunisie",
    Proposition_4: "L'Egypte",
    réponse: "Le Maroc",
    indice: "La réponse commence par une consonne.",
  },
  {
    question: "Quel pays touche le plus de royalties grâce au son « tld » (extension du site internet. Ex : fr) ?",
    Proposition_1: "Tuvalu",
    Proposition_2: "Colombie",
    Proposition_3: "Georgie",
    Proposition_4: "Etats-Unis",
    réponse: "Tuvalu",
    indice: "Small",
  },
  {
    question: "Quel pays a le plus de frontières avec d’autres pays ?",
    Proposition_1: "Brésil",
    Proposition_2: "Russie",
    Proposition_3: "Slovénie",
    Proposition_4: "Andorre",
    réponse: "Russie",
    indice: "Big",
  },
  {
    question: "Quel est le grand département de France en superficie, hors territoire ultra-marin ?",
    Proposition_1: "Gironde",
    Proposition_2: "Ain",
    Proposition_3: "Isère",
    Proposition_4: "Haute-Corse",
    réponse: "Gironde",
    indice: "A deux heures de Paris en TGV",
  },
  {
    question: "En superficie, Quel est le deuxième deux plus grand pays du monde ?",
    Proposition_1: "Russie",
    Proposition_2: "Etats-Unis",
    Proposition_3: "Chine",
    Proposition_4: "Canada",
    réponse: "Canada",
    indice: "Aurores boréales",
  },
  {
    question: "Parmi les listes suivantes, quels pays ne partagent pas les mêmes couleurs (drapeaux), sans compter les symboles visibles  ?",
    Proposition_1: "MALTE, POLOGNE, INDONESIE",
    Proposition_2: "MOLDAVIE, ANDORRE, ROUMANIE",
    Proposition_3: "SEYCHELLES, REPUBLIQUE CENTRAFRICAINE, AFRIQUE DU SUD",
    Proposition_4: "ISLANDE, CHILIE, CROATIE",
    réponse: "SEYCHELLES, REPUBLIQUE CENTRAFRICAINE, AFRIQUE DU SUD",
    indice: "Au moins un est un pays insulaire",
  },
  {
    question: "De quel pays est cette devise : Jean est son nom ?",
    Proposition_1: "Belgique",
    Proposition_2: "Suisse",
    Proposition_3: "Bélize",
    Proposition_4: "Porto-Rico",
    réponse: "Porto-Rico",
    indice: "Riche",
  },
];

let questionHolder = document.querySelector("#question") as HTMLElement;
let quizzContainer = document.querySelector("#quizz_container") as HTMLElement;
let proposition_1 = document.querySelector("#proposition_1") as HTMLElement;
let proposition_2 = document.querySelector("#proposition_2") as HTMLElement;
let proposition_3 = document.querySelector("#proposition_3") as HTMLElement;
let proposition_4 = document.querySelector("#proposition_4") as HTMLElement;
let valider = document.querySelector(".valider") as HTMLElement;
let commencer = document.querySelector(".commencer") as HTMLElement;
let rejouer = document.querySelector(".Rejouer") as HTMLElement;
let indice = document.querySelector(".indice") as HTMLElement;
let indiceplaceholder = document.querySelector(
  "#indice_placeholder"
) as HTMLElement;

let responseChecker: string;
<<<<<<< HEAD
let drapeau = document.querySelector("#drapeau") as HTMLImageElement;
let pageScore = document.querySelector("#Scores_container") as HTMLElement;
let scoreFinal = document.querySelector("#score_final") as HTMLElement;
let revenirAuMenu = document.querySelector("#menu") as HTMLElement;
let revenirSectionConsignes = document.querySelector("#consignes_container") as HTMLElement;

=======

let drapeau = document.querySelector("#drapeau") as HTMLImageElement;
let pageScore = document.querySelector("#Scores_container") as HTMLElement;
let scoreFinal = document.querySelector("#score_final") as HTMLElement;
>>>>>>> 1c82daa572f86421c7f090ac94a1024168525d33


// ------ boolean checker

let propositions = document.querySelectorAll<HTMLElement>(".propositions");
// let isActiveForAnyPropositionSelected: boolean = false;
// let isActiveP1: boolean = false;
// let isActiveP2: boolean = false;
// let isActiveP3: boolean = false;
// let isActiveP4: boolean = false;

// propositions.forEach((el) => {
//   el.addEventListener("click", () => {
//     isActiveForAnyPropositionSelected = true;
//     console.log(
//       "Propositions cliquées!" +
//         " | isActive est :" +
//         isActiveForAnyPropositionSelected
//     );
//   });
// });

function responseSelected(index: number): void {
  proposition_1.addEventListener("click", () => {
    responseChecker = questions_propositions[index]!.Proposition_1!;
    console.log(responseChecker);
  });
  proposition_2.addEventListener("click", () => {
    responseChecker = questions_propositions[index]!.Proposition_2!;
    console.log(responseChecker);
  });
  proposition_3.addEventListener("click", () => {
    responseChecker = questions_propositions[index]!.Proposition_3!;
    console.log(responseChecker);
  });
  proposition_4.addEventListener("click", () => {
    responseChecker = questions_propositions[index]!.Proposition_4!;
    console.log(responseChecker);
  });

  valider.addEventListener("click", () => {
    console.log(responseChecker + "<---- la réponse choisie");
    if (responseChecker === questions_propositions[index]!.réponse!) {
      score++;
      scoreFinal.textContent = score.toString(10);
      console.log("Le score est à " + score);
      console.log("----- fin d'itération à " + index);
      index++;
      indiceplaceholder.textContent = "";
      // isActiveForAnyPropositionSelected = false;
      questionAndPropositionsDisplayer(questions_propositions, index);
    } else {
      index++;
      indiceplaceholder.textContent = "";
      questionAndPropositionsDisplayer(questions_propositions, index);
    }
    if (index === questions_propositions.length) {
       pageScore.style.display = "block";
       scoreFinal.textContent= score.toString(10);
       pageScore?.scrollIntoView({ behavior: 'smooth',block: 'start' })
    }

  });
}

function questionAndPropositionsDisplayer(
  obj: Array<innerType>,
  index: number
) {
  console.log("--------- itération " + index);
  questionHolder.textContent = obj[index]?.question!;
  proposition_1.textContent = obj[index]?.Proposition_1!;
  proposition_2.textContent = obj[index]?.Proposition_2!;
  proposition_3.textContent = obj[index]?.Proposition_3!;
  proposition_4.textContent = obj[index]?.Proposition_4!;

   if (index === 2) {
    drapeau.style.display = "block";
  } else {
    drapeau.style.display = "none";
  }

<<<<<<< HEAD
=======


>>>>>>> 1c82daa572f86421c7f090ac94a1024168525d33
  indice.addEventListener("click", () => {
    indiceplaceholder.textContent = questions_propositions[index]?.indice!;
  });
}

let iterator = 0;
let score = 0;

revenirAuMenu.addEventListener("click", () => {
  revenirSectionConsignes?.scrollIntoView({ behavior: 'smooth',block: 'start' });
});

commencer.addEventListener("click", () => {
  emptyField();
  questionAndPropositionsDisplayer(questions_propositions, iterator);
  console.log("index gameLauncher " + iterator);
  responseSelected(iterator);
<<<<<<< HEAD
});
=======
  });
>>>>>>> 1c82daa572f86421c7f090ac94a1024168525d33

rejouer.addEventListener("click", () => {
  emptyField();
  questionHolder.textContent = "QUESTIONS";
  propositions.forEach((el, i) => (el.textContent = `Proposition_test ${i}`));
  
  questionAndPropositionsDisplayer(questions_propositions, iterator);
  console.log("index gameRebooter " + iterator);
  responseSelected(iterator);
  quizzContainer?.scrollIntoView({ behavior: 'smooth',block: 'start' });
  pageScore.style.display = "none";
});

function emptyField(): void {
  iterator = 0;
  score = 0;
  indiceplaceholder.textContent = "";
  responseChecker = "";
  scoreFinal.textContent = score.toString(10);
}
// fonction apparition page de scores à la fin des 10 questions
//quand 
