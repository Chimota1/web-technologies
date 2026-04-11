let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let timerHour = document.getElementById("timer-hour");
let timerMinute = document.getElementById("timer-minute");
let timerSecond = document.getElementById("timer-second");
let startTimerButton = document.getElementById("start-btn");
let monthInput = document.getElementById('month-input');
let dayCells = document.querySelectorAll('.day-cell');
let bdayInput = document.getElementById('bday-input');
let bdayResult = document.getElementById('bday-result');

function blinkSecond() {
    second.style.visibility = (second.style.visibility === 'hidden') ? 'visible' : 'hidden';
}

function updateTime() {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    hour.textContent = h.toString().padStart(2, '0') + ':';
    minute.textContent = m.toString().padStart(2, '0') + ':';
    second.textContent = s.toString().padStart(2, '0');
}

let tick = 0;

setInterval(() => {
    tick++;

    blinkSecond();

    if (tick % 2 === 0) {
        updateTime();
    }
}, 500);

function Timer() {
    startTimerButton.addEventListener('click', () => {
    let input = prompt("Enter timer in format HH:MM:SS", "00:00:00");
    let timer = input.split(':');
    let h = parseInt(timer[0]) || 0;
    let m = parseInt(timer[1]) || 0;
    let s = parseInt(timer[2]) || 0;

    timerHour.textContent = h.toString().padStart(2, '0') + ':';
    timerMinute.textContent = m.toString().padStart(2, '0') + ':';
    timerSecond.textContent = s.toString().padStart(2, '0');

    setInterval(() => {
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }

        timerHour.textContent = h.toString().padStart(2, '0') + ':';
        timerMinute.textContent = m.toString().padStart(2, '0') + ':';
        timerSecond.textContent = s.toString().padStart(2, '0');
    }, 1000);
});
}

Timer();

function Calendar() {
    let today = new Date();
    let currentYear = today.getFullYear();
    let currentMonth = (today.getMonth() + 1).toString().padStart(2, '0');
    monthInput.value = currentYear + '-' + currentMonth;

    function renderCalendar(year, month) {
        let firstDay = new Date(year, month, 1).getDay();
        let daysInMonth = new Date(year, month + 1, 0).getDate();
        let startIndex = (firstDay === 0) ? 6 : firstDay - 1;
        for (let i = 0; i < dayCells.length; i++) {
            if (i < startIndex || i >= startIndex + daysInMonth) {
                dayCells[i].textContent = '';
                dayCells[i].style.backgroundColor = 'transparent';
            } else {
                dayCells[i].textContent = i - startIndex + 1;
                dayCells[i].style.backgroundColor = '#f0f0f0';
            }
        }
    }

    renderCalendar(today.getFullYear(), today.getMonth());

    monthInput.addEventListener('change', () => {
        let inputVal = monthInput.value.split('-');
        let y = parseInt(inputVal[0]);
        let m = parseInt(inputVal[1]) - 1;

        renderCalendar(y, m);
    });
}

Calendar();

function Birthday() {
    setInterval(() => {
        if (!bdayInput.value) return;

        let now = new Date();
        let bday = new Date(bdayInput.value);

        bday.setFullYear(now.getFullYear());

        if (bday < now) {
            bday.setFullYear(now.getFullYear() + 1);
        }

        let mDiff = bday.getMonth() - now.getMonth();
        let dDiff = bday.getDate() - now.getDate();

        if (dDiff < 0) {
            mDiff--;
            let prevMonthDays = new Date(bday.getFullYear(), bday.getMonth(), 0).getDate();
            dDiff += prevMonthDays;
        }

        if (mDiff < 0) {
            mDiff += 12;
        }

        let hDiff = 23 - now.getHours();
        let minDiff = 59 - now.getMinutes();
        let secDiff = 59 - now.getSeconds();

        bdayResult.textContent =
            mDiff + " місяців, " +
            dDiff + " днів, " +
            hDiff.toString().padStart(2, '0') + " годин, " +
            minDiff.toString().padStart(2, '0') + " хвилин, " +
            secDiff.toString().padStart(2, '0') + " секунд";

    }, 1000);
}

Birthday();
