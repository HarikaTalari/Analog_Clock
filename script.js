const hourHand = document.getElementById('hr');
const minuteHand = document.getElementById('min');
const secondHand = document.getElementById('sec');

function setClock() {
    const date = new Date();
    var hour = date.getHours() % 12;
    var min = date.getMinutes();
    var sec = date.getSeconds();

    var hh = hour*30;
    var mm = min * 6;
    var ss = sec * 6;

    hourHand.style.transform = 'rotate(' + hh + 'deg)';
    minuteHand.style.transform = 'rotate(' + mm + 'deg)';
    secondHand.style.transform = 'rotate(' + ss + 'deg)';

    setTimeout(setClock, 1000);
};

setClock();
