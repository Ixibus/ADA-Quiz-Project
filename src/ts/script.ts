interface innerType {
  question: string;
  Proposition_1: string;
  Proposition_2: string;
  Proposition_3?: string;
  Proposition_4?: string;
  réponse: string;
}

let questions_propositions: innerType[] = [
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
    question:
      "Quel pays d'Afrique a des frontières terrestres avec un pays européen?",
    Proposition_1: "Le Maroc",
    Proposition_2: "La Mauritanie",
    Proposition_3: "La Tunisie",
    Proposition_4: "L'Egypte",
    réponse: "Le Maroc",
  },
  {
    question:
      "Quel pays d'Afrique a des frontières terrestres avec un pays européen?",
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

let questionHolder = document.querySelector("#question") as HTMLElement;

let propositions = document.querySelectorAll<HTMLElement>(".propositions");
let proposition_1 = document.querySelector("#proposition_1") as HTMLElement;
let proposition_2 = document.querySelector("#proposition_2") as HTMLElement;
let proposition_3 = document.querySelector("#proposition_3") as HTMLElement;
let proposition_4 = document.querySelector("#proposition_4") as HTMLElement;
let valider = document.querySelector(".valider") as HTMLElement;
let commencer = document.querySelector(".commencer") as HTMLElement;

let scoreHolder = document.querySelector("#score") as HTMLElement;
// let rejouer = document.querySelector(".rejouer") as HTMLElement;

let isActiveForAnyPropositionSelected: boolean = false;

propositions.forEach((el) => {
  el.addEventListener("click", () => {
    console.log("Propositions cliquées!" + " | isActive est :" + isActiveForAnyPropositionSelected);
    isActiveForAnyPropositionSelected = true;
    console.log("isActive est : " + isActiveForAnyPropositionSelected);
  });
});

valider.addEventListener("click", () => {
  if(isActiveForAnyPropositionSelected) {
    questionAndPropositionsDisplayer(questions_propositions, i);
    isActiveForAnyPropositionSelected = false;
    console.log("isActive est : " + isActiveForAnyPropositionSelected);
    i++;
  };
});

function questionSelected(objet: Array<innerType>, index: number) {
  proposition_1.addEventListener("click", () => {
    if ((objet[index]!.Proposition_1! === objet[index]!.réponse!) && isActiveForAnyPropositionSelected) {
      console.log(objet[index]);
      console.log(objet[index]?.Proposition_1 + " " + objet[index]?.réponse);
      score++;
      scoreHolder.textContent = score.toString(10);
      console.log("Le score est à " + score);
      console.log("----- fin d'itération à " + index);
    }
  });
  proposition_2.addEventListener("click", () => {
    if ((objet[index]!.Proposition_2! === objet[index]!.réponse!) && isActiveForAnyPropositionSelected) {
      console.log(objet[index]);
      console.log(objet[index]?.Proposition_2 + " " + objet[index]?.réponse);
      score++;
      scoreHolder.textContent = score.toString(10);
      console.log("Le score est à " + score);
      console.log("----- fin d'itération à " + index);
    }
  });
  proposition_3.addEventListener("click", () => {
    if ((objet[index]!.Proposition_3! === objet[index]!.réponse!) && isActiveForAnyPropositionSelected) {
      console.log(objet[index]);
      console.log(objet[index]?.Proposition_3 + " " + objet[index]?.réponse);
      score++;
      scoreHolder.textContent = score.toString(10);
      console.log("Le score est à " + score);
      console.log("----- fin d'itération à " + index);
    }
  });
  proposition_4.addEventListener("click", () => {
    if ((objet[index]!.Proposition_4! === objet[index]!.réponse!) && isActiveForAnyPropositionSelected) {
      console.log(objet[index]);
      console.log(objet[index]?.Proposition_4 + " " + objet[index]?.réponse);
      score++;
      scoreHolder.textContent = score.toString(10);
      console.log("Le score est à " + score);
      console.log("----- fin d'itération à " + index);
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
  questionSelected(obj, index);
}

let i = 0;
let score = 0;
function gameLauncher(index: number): void {
  commencer.addEventListener("click", () =>
    questionAndPropositionsDisplayer(questions_propositions, index)
  );
}

gameLauncher(i);
