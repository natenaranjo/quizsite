// Starting area, displays a start button.
let h2El = document.createElement("h2");
let h3El = document.createElement("h3");
let pEl = document.createElement("p");
let flCon = document.querySelector(".fluid-container");
let btnEl = document.createElement("button");
let pIni = document.createElement("p");
let inputEl = document.createElement("input");
let submitEl = document.createElement("button");
let restartEl = document.createElement("button");


// Creating the order list
let listEl = document.createElement("ol");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");

// Attributes for each Element.
h2El.setAttribute("style", "font-size: 6vw; color: var(--third); padding: 24px;");
h3El.setAttribute("style", "color: var(--third); font-size: 4vw; text-align: center;");
pEl.setAttribute("style","color: var(--fourth); font-size: 2vw; width: 80%; text-align: center; padding: 24px;")
pIni.setAttribute("style","color: var(--fourth); font-size: 2vw; width: 80%; text-align: center; padding: 24px;")
btnEl.setAttribute("style", "width: 20vw; height: 5vh; border-radius: 15px; border: none; background-color: var(--third); color: var(--primary); font-size: 3vw;");
listEl.setAttribute("style", "Padding: 25px; list-style: none; display: flex; flex-direction: column; justify-content: center; align-items: center;")
li1.setAttribute("style", "width: 30vw; height: 5vh; border-radius: 15px; border: none; background-color: var(--third); color: var(--primary); font-size: 3vw; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 10px; margin: 10px;");
li2.setAttribute("style", "width: 30vw; height: 5vh; border-radius: 15px; border: none; background-color: var(--third); color: var(--primary); font-size: 3vw; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 10px; margin: 10px;");
li3.setAttribute("style", "width: 30vw; height: 5vh; border-radius: 15px; border: none; background-color: var(--third); color: var(--primary); font-size: 3vw; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 10px; margin: 10px;");
li4.setAttribute("style", "width: 30vw; height: 5vh; border-radius: 15px; border: none; background-color: var(--third); color: var(--primary); font-size: 3vw; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 10px; margin: 10px;");
inputEl.setAttribute("style", "width: 20vw; height: 3vh; background-color: var(--fourth); color: var(--primary); border: none; border-radius: 20px; margin: 10px; font-size: 2vw; text-align: center; text-transform: uppercase;");
submitEl.setAttribute("style", "width: 20vw; height: 5vh; border-radius: 15px; border: none; background-color: var(--third); color: var(--primary); font-size: 3vw; margin: 10px;");
restartEl.setAttribute("style", "width: 20vw; height: 5vh; border-radius: 15px; border: none; background-color: var(--third); color: var(--primary); font-size: 3vw; margin: 10px;");


li1.setAttribute("type", "button");
li2.setAttribute("type", "button");
li3.setAttribute("type", "button");
li4.setAttribute("type", "button");

// Creating the start screen
flCon.appendChild(h2El);
h2El.textContent = "Star Wars Quiz";

flCon.appendChild(pEl);
pEl.textContent = "You have one minute to complete the quiz.  If you answer a question wrong time will be subtracted from the clock on the top right.";
btnEl.textContent = "Click to Start";
flCon.appendChild(btnEl);
btnEl.addEventListener("click", function(){
    btnEl.remove();
    h2El.remove();
    pEl.remove();
    startQuiz();
    // Once quiz is started removes the h2, p and button from window.
});

// Quiz function and properties.
function startQuiz() {

    let score = 0;

    const questions = [{
            id: 0,
            q: "Who said: These are not the droids you're looking for?",
            a: [{ text: "Yoda", isAnswer: false},
                { text: "Luke Skywalker", isAnswer: false},
                { text: "Obi-Wan Kenobi", isAnswer: true},
                { text: "Darth Vader", isAnswer: false}
            ]
        },
        {
            id: 1,
            q: "Who shot first in the cantina?",
            a: [{ text: "Greedo", isAnswer: false},
                { text: "Han Solo", isAnswer: true},
                { text: "Darth Vader", isAnswer: false},
                { text: "Kylo Ren", isAnswer: false}
            ]
        },
        {
            id: 2,
            q: "Who was, or were, in the trash compactor?",
            a: [{ text: "Han, Luke, and Leia", isAnswer: true},
                { text: "Yoda", isAnswer: false},
                { text: "Jar Jar Binks", isAnswer: false},
                { text: "Captain Phasma", isAnswer: false}
            ]
        },
        {
            id: 3,
            q: "In which planet does Luke Skywalker meet Yoda for the first time?",
            a: [{ text: "Coruscant", isAnswer: false},
                { text: "Tatoonie", isAnswer: false},
                { text: "Dagobah", isAnswer: true},
                { text: "Naboo", isAnswer: false}
            ]
        },
        {
            id: 4,
            q: "Which is the frozen planet in Star Wars?",
            a: [{ text: "Felucia", isAnswer: false},
                { text: "Tatoonie", isAnswer: false},
                { text: "Hoth", isAnswer: true},
                { text: "Serenno", isAnswer: false}
            ]
        }
    ];

    function quizRot(id) {

        // Pulls the questions and multiple choices from the array.
        h3El.textContent = questions[id].q;
        li1.textContent = questions[id].a[0].text;
        li2.textContent = questions[id].a[1].text;
        li3.textContent = questions[id].a[2].text;
        li4.textContent = questions[id].a[3].text;

        // Provdies whether each answer is either true or false.
        li1.value = questions[id].a[0].isAnswer;
        li2.value = questions[id].a[1].isAnswer;
        li3.value = questions[id].a[2].isAnswer;
        li4.value = questions[id].a[3].isAnswer;

        

        // Appends the elements to the screen
        flCon.appendChild(h3El);
        flCon.appendChild(listEl);
        listEl.appendChild(li1);
        listEl.appendChild(li2);
        listEl.appendChild(li3);
        listEl.appendChild(li4);

    }    
        let id = 0;
        // Create the listen event for each multiple choice.
        li1.selected = li1.addEventListener("click", () => {
            if(li1.value != true){
                timeLeft -= 30;
                nextQuest();
            } else {
                score++;
                nextQuest();
            }
        })
        li2.selected = li2.addEventListener("click", () => {
            if(li2.value != true){
                timeLeft -= 30;
                nextQuest();
            } else {
                score++;
                nextQuest();
            }
        })
        li3.selected = li3.addEventListener("click", () => {
            if(li3.value != true){
                timeLeft -= 30;
                nextQuest();
            } else {
                score++;
                nextQuest();
            }
        })
        li4.selected = li4.addEventListener("click", () => {
            if(li4.value != true){
                timeLeft -= 30;
                nextQuest();
            } else {
                score++;
                nextQuest();
            }
        })

        function nextQuest(){
            if(id < 4){
                id++;
                quizRot(id);
            } else if (id == 4) {
                endQuest();
            }
        }

        // What happens when the timer reaches 0 or all the questions are answered.
        function endQuest(){
            h3El.remove();
            listEl.remove();

            h2El.textContent = "Quiz Over!";
            pEl.textContent = "Score: " + score;
            pIni.textContent = "Please insert your initals in box";
            submitEl.textContent = "Submit Score";
            restartEl.textContent = "Restart Quiz";
            flCon.appendChild(h2El);
            flCon.appendChild(pEl);
            flCon.appendChild(pIni);
            inputEl.setAttribute("maxlength", 3);
            flCon.appendChild(inputEl);
            flCon.appendChild(submitEl);
            flCon.appendChild(restartEl);
        }

    
        // Timer function to start when the start button is clicked.
        let timeEL = document.querySelector("#time");
        let timeLeft = 120;

        let timerInterval = setInterval(function(){
            timeLeft--;
            timeEL.textContent = "Time: " + timeLeft +"s";
            timeEL.setAttribute("style", "color: var(--third); font-style: italic;");

            if(timeLeft <= 0) {
                clearInterval(timerInterval);
                timeLeft = 0;
                timeEL.textContent = "Time: " + timeLeft;
                endQuest();
            }
        }, 1000);
    

    // If page is refreshed will reset score to 0.
    if(sessionStorage.setItem("is_reloaded", true)){
        score = 0;
    }

    quizRot("0");
    
    
}
