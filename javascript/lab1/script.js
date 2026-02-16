let message = document.getElementById("message");
let button = document.getElementById("button");

function showMessage(message) {
    message.innerText = "Hello, World!";
};

function showStudentName(){
    alert("Кіндрат Анатолій Володимирович");
}

showMessage(message);

button.addEventListener("mouseover", showStudentName);
