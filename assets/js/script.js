// Starting area, displays a start button.
let h2El = document.createElement("h2");
let pEl = document.createElement("p");
let flCon = document.querySelector(".fluid-container");
let btnEl = document.createElement("button");

// Creating the order list
let listEl = document.createElement("ol");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");

// Creating the start screen
flCon.appendChild(h2El);
h2El.textContent = "Simple Math Quiz";
h2El.setAttribute("style", "font-size: 6vw; color: var(--third); padding: 24px;");
flCon.appendChild(pEl);
pEl.textContent = "You have one minute to complete the math quiz.  If you answer a question wrong time will be subtracted from the clock on the top right.";
pEl.setAttribute("style","color: var(--fourth); font-size: 2vw; width: 80%; text-align: center; padding: 24px;")
btnEl.textContent = "Click to Start";
flCon.appendChild(btnEl);
btnEl.setAttribute("style", "width: 20vw; height: 5vh; border-radius: 15px; border: none; background-color: var(--third); color: var(--primary); font-size: 3vw;");
btnEl.addEventListener("click", function(){
    startQuiz();
});


// Quiz function and properties.
function startQuiz() {
    // Once quiz is started removes the h2, p and button from window.
    btnEl.remove();
    h2El.remove();
    pEl.remove();
   
    // Timer function to start when the start button is clicked.
    let timeEL = document.querySelector("#time");
    let timeLeft = 20;

    let timerInterval = setInterval(function(){
        timeLeft--;
        timeEL.textContent = "Time: " + timeLeft +"s";
        timeEL.setAttribute("style", "color: var(--third); font-style: italic;");

        if(timeLeft === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);

    //Starts the quiz

}

// What happens when the timer reaches 0 or all the questions are answered.
function endQuiz(){
    flCon.appendChild(h2El);
    h2El.textContent = "Game Over!"
    h2El.setAttribute("style", "font-size: 8vw; color: var(--third);")
}
