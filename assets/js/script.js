// Starting area, displays a start button.
let h2El = document.createElement("h2");
let flCon = document.querySelector(".fluid-container");

// Creating the order list
let listEl = document.createElement("ol");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");

// Creating the start button
let btnEl = document.createElement("button");
btnEl.textContent = "Click to Start";
flCon.appendChild(btnEl);
btnEl.setAttribute("style", "width: 25vw; height: 10vh; border-radius: 15px; border: none; background-color: var(--third); color: var(--primary); font-size: 3vw;");

btnEl.addEventListener("click", function(){
    startQuiz();
    console.log("Button successfully clicked");
})

// Timer function to start when the start button is clicked.
let timeEL = document.querySelector("#time");
let timeLeft = 60;

function setTime() {
    let timerInterval = setInterval(function(){
        timeLeft--;
        timeEL.textContent = "Time: " + timeLeft +"s";
        timeEL.setAttribute("style", "color: var(--third); font-style: italic;");

        if(timeLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}
setTime();


function startQuiz() {
    console.log("Quiz is starting now");
}

