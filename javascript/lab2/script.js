// first task
arr = [5, 3, 8, 1, 2];

function SearchMinAndMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return `Minimum value: ${min}, Maximum value: ${max}`
}

console.log(SearchMinAndMax(arr));

let Student1 = {
    name: "Діма Коляденко",
    age: 20,
    grade: 70
};

let Student2 = {
    name: "Олег Винник",
    age: 25,
    grade: 70
}

function CompareStudents(obj1, obj2) {
    if (obj1.grade === obj2.grade) {
        return `Студент ${obj1.name} та студент ${obj2.name} мають однакову оцінку.`;
    }
}

console.log(CompareStudents(Student1, Student2));

// second task
function IsRange(el, num1, num2) {
    if (!(el >= num1) || !(el <= num2)) {
        return false;
    } else {
        return true;
    }
}

console.log(IsRange(5, 1, 10));

let isActive = true;
let isActive2 = false;

isActive = !isActive;
isActive2 = !isActive2;

console.log(`is Active ${isActive}`);
console.log(`is Active2 ${isActive2}`);

// third task
function StudentGrade(score) {
    if ((score === 100) || (score >= 90)){
        return 'Відмінно';
    } else if ((score >= 70) && (score < 90)) {
        return 'Добре';
    } else if ((score >= 50) && (score < 70)) {
        return 'Задовільно';
    } else {
        return 'Незадовільно';
    }
}

console.log(StudentGrade(95));

function SeasonWithTernary(month) {
    if (month <= 12 && month >= 1) {
        return 'Це' + (month >= 3 && month <= 5 ? ' весна' : month >= 6 && month <= 8 ? ' літо' : month >= 9 && month <= 11 ? ' осінь' : ' зима');
    }
    else {
        return 'Невірний місяць';
    }
}

console.log(SeasonWithTernary(12));

function SeasonWithIf(month) {
    if (month <= 12 && month >= 1) {
        if (month >= 3 && month <= 5) {
            return 'Це весна';
        } else if (month >= 6 && month <= 8) {
            return 'Це літо';
        } else if (month >= 9 && month <= 11) {
            return 'Це осінь';
        } else {
            return 'Це зима';
        }
    }
    else {
        return 'Невірний місяць';
    }
}

console.log(SeasonWithIf(6));
