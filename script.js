let questions_propositions= [
    {question:"Quelle est la superficie de la France?", Proposition_1: "550 000km2", Proposition_2:"280 000km2", Proposition_3:"1 030 000km2", Proposition_4: "25 000m3", réponse: "550 000km2"},
    {question:"D’après vous, l’Europe est-elle plus grande que l’Afrique ?", Proposition_1: "Vrai", Proposition_2: "faux", réponse: "faux"},
    {question: "A quel pays appartient ce drapeau?", Proposition_1: "Ce drapeau n'existe pas!", Proposition_2:"Iles Marshall", Proposition_3: "Le Groenland", Proposition_4: "îles Salomon", réponse: "Le Groenland"},
    {question: "Quel pays d'Afrique a des frontières terrestres avec un pays européen?", Proposition_1:"Le Maroc", Proposition_2: "La Mauritanie", Proposition_3:"La Tunisie", Proposition_4: "L'Egypte", réponse: "Le Maroc"},  
]
console.log(questions_propositions[0].réponse);
let question= document.querySelector("#question");
//question.textContent= questions_propositions[0].question;

let proposition_1= document.querySelector("#proposition_1");
let proposition_2= document.querySelector("#proposition_2");
let proposition_3= document.querySelector("#proposition_3");
let proposition_4= document.querySelector("#proposition_4");
let valider=document.querySelector(".valider");
let score=0;

let i=0;
valider.addEventListener("click", () => {
   console.log('itération '+i);                   
   question.textContent= questions_propositions[i].question; 
   proposition_1.textContent=questions_propositions[i].Proposition_1;
    proposition_2.textContent=questions_propositions[i].Proposition_2;
    proposition_3.textContent=questions_propositions[i].Proposition_3;
    proposition_4.textContent=questions_propositions[i].Proposition_4;
    
    i++;                  
});

proposition_1.addEventListener("click", () => console.log("ok1"));
proposition_2.addEventListener("click", () => console.log("ok2"));
proposition_3.addEventListener("click", () => console.log("ok3"));
proposition_4.addEventListener("click", () => console.log("ok4"));







let rejouer= document.querySelector(".Rejouer");






//let navquizz = document.querySelector("quizz_container");

//navquizz.addEventListener("click", () => console.log("hello"));

// retour en haut lors du click sur le bouton
//let retourEnHaut = document.querySelector("going_up_to_page_container");
//retourEnHaut.addEventListener("click", () => console.log("bienvenue") )