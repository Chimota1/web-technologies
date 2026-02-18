let message = document.getElementById("message");
let studentName = document.getElementById("student_name");

function showMessage(el) {
    el.innerText = "Hello, World!";
};

function showStudentName(){
    alert("Кіндрат Анатолій Володимирович");
}

showMessage(message);

studentName.addEventListener("mouseover", showStudentName);
