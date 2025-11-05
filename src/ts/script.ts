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
    question:
      "Quel pays d'Afrique a des frontières terrestres avec un pays européen?",
    Proposition_1: "La Mauritanie",
    Proposition_2: "Le Maroc",
    Proposition_3: "La Tunisie",
    Proposition_4: "L'Egypte",
    réponse: "Le Maroc",
    indice: "La réponse commence toujours par une consonne.",
  },
  {
    question: "la réponse D",
    Proposition_1: "A",
    Proposition_2: "B",
    Proposition_3: "C",
    Proposition_4: "D",
    réponse: "D",
    indice: "Tout est dans la question.",
  },
];

let questionHolder = document.querySelector("#question") as HTMLElement;
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

let scoreHolder = document.querySelector("#score") as HTMLElement;
let responseChecker: string;

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
      scoreHolder.textContent = score.toString(10);
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
  });
}


// let i = 0;
// valider.addEventListener("click", () => {
//   console.log("--------- itération " + i);
//   questionHolder.textContent = questions_propositions[i]?.question!;
//   proposition_1.textContent = questions_propositions[i]?.Proposition_1!;
//   proposition_2.textContent = questions_propositions[i]?.Proposition_2!;
//   proposition_3.textContent = questions_propositions[i]?.Proposition_3!;
//   proposition_4.textContent = questions_propositions[i]?.Proposition_4!;
//   questionSelected(questions_propositions);
// });

// function questionSelected(objet: Array<innerType>) {
//   proposition_1.addEventListener("click", () => {
//     if (objet[i]!.Proposition_1! === objet[i]!.réponse!) {
//       console.log(objet[i]);
//       console.log(objet[i]?.Proposition_1 + " " + objet[i]?.réponse);
//       score++;
//       scoreHolder.textContent = score.toString(10);
//       console.log("Le score est à " + score);
//       console.log("----- fin d'itération à " + i);
//       i++;
//     }
//   });
//   proposition_2.addEventListener("click", () => {
//     if (objet[i]!.Proposition_2! === objet[i]!.réponse!) {
//       console.log(objet[i]);
//       console.log(objet[i]?.Proposition_2 + " " + objet[i]?.réponse);
//       score++;
//       scoreHolder.textContent = score.toString(10);
//       console.log("Le score est à " + score);
//       console.log("----- fin d'itération à " + i);
//       i++;
//     }
//   });
//   proposition_3.addEventListener("click", () => {
//     if (objet[i]!.Proposition_3! === objet[i]!.réponse!) {
//       console.log(objet[i]);
//       console.log(objet[i]?.Proposition_3 + " " + objet[i]?.réponse);
//       score++;
//       scoreHolder.textContent = score.toString(10);
//       console.log("Le score est à " + score);
//       console.log("----- fin d'itération à " + i);
//       i++;
//     }
//   });
//   proposition_4.addEventListener("click", () => {
//     if (objet[i]!.Proposition_4! === objet[i]!.réponse!) {
//       console.log(objet[i]);
//       console.log(objet[i]?.Proposition_4 + " " + objet[i]?.réponse);
//       score++;
//       scoreHolder.textContent = score.toString(10);
//       console.log("Le score est à " + score);
//       console.log("----- fin d'itération à " + i);
//       i++;
//     }
//   });
// }

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

  indice.addEventListener("click", () => {
    indiceplaceholder.textContent = questions_propositions[index]?.indice!;
  });
}

let iterator = 0;
let score = 0;

commencer.addEventListener("click", () => {
  emptyField();
  questionAndPropositionsDisplayer(questions_propositions, iterator);
  console.log("index gameLauncher " + iterator);
  responseSelected(iterator);
  });

rejouer.addEventListener("click", () => {
  emptyField();
  questionHolder.textContent = "QUESTIONS";
  propositions.forEach((el, i) => (el.textContent = `Proposition_test ${i}`));

  questionAndPropositionsDisplayer(questions_propositions, iterator);
  console.log("index gameRebooter " + iterator);
  responseSelected(iterator);
});

function emptyField(): void {
  iterator = 0;
  score = 0;
  indiceplaceholder.textContent = "";
  responseChecker = "";
  scoreHolder.textContent = score.toString(10);
}
