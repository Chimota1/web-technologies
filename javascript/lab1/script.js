let message = document.getElementById("message");
let studentName = document.getElementById("js-student-name");

function showMessage(el) {
    el.innerText = "Hello, World!";
};

function showStudentName(){
    alert("Кіндрат Анатолій Володимирович");
}

showMessage(message);

studentName.addEventListener("mouseover", showStudentName);
