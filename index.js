// document.querySelector('h4').style.background = 'yellow';

const questionContainer = document.querySelector(".click-event");
console.log(questionContainer);

questionContainer.addEventListener('evenvement',fonction ())

questionContainer.addEventListener("click", () => {
// console.log("j'ai cliqué");
// questionContainer.style.borderRadius = "25px";
questionContainer.style.background = "red";
})


questionContainer.addEventListener("click", () => {
questionContainer.classList.add("question-clicked");
});