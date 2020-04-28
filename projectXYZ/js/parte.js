var button = document.getElementById("button");
var eight = document.getElementById("eight");
var answer = document.getElementById("answer");
var question = document.getElementById("question");

var MIN = 0;
var MAX = 20;
var responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
];

button.addEventListener("click", function() {
    if (question.value.length > 1) {
        eight.innerText = "";
        answer.innerText = pickResponse();
    } else {
        alert("Please enter a question");
    }
});

function pickResponse() {
    var num = randomize(MIN, MAX);
    return responses[num];
}

function randomize(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
