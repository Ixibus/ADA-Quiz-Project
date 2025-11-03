let array = [{question: "Comment je m'appelle?", proposition1: "Franck", proposition2: "Anna", proposition3: "Lisa", proposition4: "Pierre", réponse: this?.proposition1}];

console.log(array[0]?.réponse);

let question = document.querySelector(".question_container") as HTMLElement;

console.log(question);

question.addEventListener("click", () => console.log("yes"));