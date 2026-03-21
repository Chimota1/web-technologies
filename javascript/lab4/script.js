//first task
function fruits() {
let fruits = ["яблуко", "банан", "вишня"];
fruits.pop();
console.log(fruits);
fruits.unshift("ананас");
fruits.sort().reverse();
console.log(fruits);
let appleIndex = fruits.findIndex(fruits => fruits === "яблуко");
console.log(appleIndex);
}
fruits();

//second tasks
function Colors() {
let colors = ["червоний", "зелений", "синій"];
let shortest = colors.reduce((a, b) => a.length <= b.length ? a : b);
let longest = colors.reduce((a, b) => a.length >= b.length ? a : b);
console.log("Найкоротший колір: " + shortest);
console.log("Найдовший колір: " + longest);
function deleteColor() {
    for (let i = 0; i < colors.length; i++) {
        if (colors[i] !== "синій") {
            colors.splice(i, 1);
            i--;
        }
    }
}
deleteColor();
console.log(colors);
colors = colors.join(", ");
console.log(colors);
}
Colors();

//third task
function Employees() {
let employees = [
    { name: "Іван", age: 30, position: "менеджер"},
    { name: "Петро", age: 25, position: "розробник"},
    { name: "Марія", age: 28, position: "дизайнер"}
];

employees.sort((a,b)=> a.name.localeCompare(b.name));
employees.find(employee => employee.position === "розробник");
const deltedEmployee = employees.filter(employee => employee.age <= 29);
console.log(deltedEmployee);
}
Employees();

//fourth task
function Students() {
let students = [
    { name: "Олексій", age: 20, course: 3 },
    { name: "Катерина", age: 22, course: 2 },
    { name: "Віктор", age: 21, course: 3 }
];
students = students.filter(student => student.name !== "Олексій");
console.log(students);
students.push({name: "Наталя", age: 18, course: 1});
console.log(students);
students.sort((a,b) => b.age - a.age);
console.log(students);
const course3Students = students.find(student => student.course === 3);
console.log(course3Students);
}
Students();

//fifth task
function Numbers() {
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(num => Math.pow(num, 2));
console.log(squares);
let numbersfiltered = numbers.filter(num => num % 2 === 0);
console.log(numbersfiltered);
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("сума: " + sum);
let numbers2 = [6, 7, 8, 9, 10];
let combined = numbers.concat(numbers2);
console.log(combined);
let deletedNumbers = numbers.splice(0, 3);
console.log(numbers);
}
Numbers();

//sixth task
function libaryManagement() {
    let library = [
        { title: "Книга 1", author: "Автор 1", genre: "Роман", pages: 300, isAvailable: true },
        { title: "Книга 2", author: "Автор 2", genre: "Пригоди", pages: 250, isAvailable: false },
        { title: "Книга 3", author: "Автор 3", genre: "Фантастика", pages: 400, isAvailable: true }
    ];
    function addBook(title, author, genre, pages) {
        let book = {
            title: title,
            author: author,
            genre: genre,
            pages: pages,
            isAvailable: true
        };
        library.push(book);
    }
    function removeBook(title) {
        library = library.filter(book => book.title !== title);
    }
    function findBooksByAuthor(author) {
        return library.filter(book => book.author === author);
    }
    function toggleBookAvailability(title,isBorrowed) {
        let book = library.find(book => book.title === title);
        if (book) {
            book.isAvailable = !isBorrowed;
        }
    }
    function sortBooksByPages() {
        library.sort((a, b) => a.pages - b.pages);
    }

    function getBookStatistics() {
        let totalBooks = library.length;
        let availableBooks = library.filter(book => book.isAvailable).length;
        let unavailableBooks = totalBooks - availableBooks;
        let avgPages = library.reduce((acc, book) => acc + book.pages, 0) / totalBooks;
        return {
            totalBooks,
            availableBooks,
            unavailableBooks,
            avgPages
        };
    }

    addBook("Книга 4", "Автор 4", "Детектив", 350);
    console.log(library);
    removeBook("Книга 2");
    console.log(library);
    console.log(findBooksByAuthor("Автор 1"));
    toggleBookAvailability("Книга 1", true);
    console.log(library);
    sortBooksByPages();
    console.log(library);
    console.log(getBookStatistics());
}
libaryManagement();

//seventh task
function Students2() {
    let students = [
        { name: "Олексій", age: 20, course: 3 },
        { name: "Катерина", age: 22, course: 2 },
        { name: "Віктор", age: 21, course: 3 }
    ];

    function addListOfSubjects(student, subjects) {
        student.subjects = subjects;
    }

    function deleteAge(student) {
        delete student.age;
    }

    addListOfSubjects(students[0], ["Математика", "Фізика"]);
    addListOfSubjects(students[1], ["Література", "Історія"]);
    addListOfSubjects(students[2], ["Біологія", "Хімія"]);
    deleteAge(students[0]);
    console.log(students[0]);

}
Students2();
