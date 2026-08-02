let score = 0;

const display = document.querySelector("#val");
const msg = document.querySelector("#msg");

const addBtn = document.querySelector("#add_btn");
const subtractBtn = document.querySelector("#subtract_btn");
const resetBtn = document.querySelector("#reset_btn");

function checkConditions() {
    if (score >= 10) {
        msg.innerText = "Message: Outstanding performance!";
    }

    else if (score < 0) {
        msg.innerText = "Message: Below expectations!";
    }

    else {
        msg.innerText = 'Message: "Keep going to raise your score!"';
    }
}
addBtn.addEventListener("click", () => {
    score++;
    display.innerText = "Current Score: " + score;
    checkConditions();
});
subtractBtn.addEventListener("click", () => {
    score--;
    display.innerText = "Current Score: " + score;
    checkConditions();
});
resetBtn.addEventListener("click", () => {
    score = 0;
    display.innerText = "Current Score: " + score;
    msg.innerText = 'Message: "Keep going to raise your score!"';
});