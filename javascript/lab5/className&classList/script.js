let defaultBlubOn = document.querySelector('.default-on');
let defaultBlubOff = document.querySelector('.default-off');
let energySavingBlubOn = document.querySelector('.energy-saving-on');
let energySavingBlubOff = document.querySelector('.energy-saving-off');
let ledBlubOn = document.querySelector('.led-on');
let ledBlubOff = document.querySelector('.led-off');
let defaultButton = document.querySelector('.default-button');
let energySavingButton = document.querySelector('.energy-saving-button');
let ledButton = document.querySelector('.led-button');
let onButton = document.querySelector('.on-button');
let offButton = document.querySelector('.off-button');
let brightness = document.querySelector('.brightness');

function hideAllBulbs() {
    defaultBlubOn.classList.remove('active');
    defaultBlubOff.classList.remove('active');
    energySavingBlubOn.classList.remove('active');
    energySavingBlubOff.classList.remove('active');
    ledBlubOn.classList.remove('active');
    ledBlubOff.classList.remove('active');
}
defaultButton.addEventListener('click', () => {
    hideAllBulbs();
    defaultBlubOff.classList.add('active');
});


energySavingButton.addEventListener('click', () => {
    hideAllBulbs();
    energySavingBlubOff.classList.add('active');
});


ledButton.addEventListener('click', () => {
    hideAllBulbs();
    ledBlubOff.classList.add('active');
});

onButton.addEventListener('click', () => {
    if (defaultBlubOn.classList.contains('active') || defaultBlubOff.classList.contains('active')) {
        hideAllBulbs();
        defaultBlubOn.classList.add('active');
    }
    else if (energySavingBlubOn.classList.contains('active') || energySavingBlubOff.classList.contains('active')) {
        hideAllBulbs();
        energySavingBlubOn.classList.add('active');
    }
    else if (ledBlubOn.classList.contains('active') || ledBlubOff.classList.contains('active')) {
        hideAllBulbs();
        ledBlubOn.classList.add('active');
    }
});

offButton.addEventListener('click', () => {
    if (defaultBlubOn.classList.contains('active') || defaultBlubOff.classList.contains('active')) {
        hideAllBulbs();
        defaultBlubOff.classList.add('active');
    }
    else if (energySavingBlubOn.classList.contains('active') || energySavingBlubOff.classList.contains('active')) {
        hideAllBulbs();
        energySavingBlubOff.classList.add('active');
    }
    else if (ledBlubOn.classList.contains('active') || ledBlubOff.classList.contains('active')) {
        hideAllBulbs();
        ledBlubOff.classList.add('active');
    }
});

brightness.addEventListener('click', () => {
    let value = brightness.value;
    if (defaultBlubOn.classList.contains('active')) {
        value = prompt('Enter brightness value (0-100):');
        defaultBlubOn.style.filter = `brightness(${value}%)`;
    }
    else if (energySavingBlubOn.classList.contains('active')) {
        energySavingBlubOn.style.filter = `brightness(${value}%)`;
    }
    else if (ledBlubOn.classList.contains('active')) {
        value = prompt('Enter brightness value (0-100):');
        ledBlubOn.style.filter = `brightness(${value}%)`;
    }
});

setInterval(() => {
    if (defaultBlubOn.classList.contains('active')) {
        hideAllBulbs();
        defaultBlubOn.classList.remove('active');
        defaultBlubOff.classList.add('active');
    }
    else if (energySavingBlubOn.classList.contains('active')) {
        hideAllBulbs();
        energySavingBlubOn.classList.remove('active');
        energySavingBlubOff.classList.add('active');
    }
    else if (ledBlubOn.classList.contains('active')) {
        hideAllBulbs();
        ledBlubOn.classList.remove('active');
        ledBlubOff.classList.add('active');
    }
}, 10000);
