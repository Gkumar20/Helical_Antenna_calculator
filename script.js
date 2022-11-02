let screen = document.getElementById('screen');
let screen_sh1 = document.getElementById('screen_sh-1');
let screen_sh2 = document.getElementById('screen_sh-2');


let buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        screen.value += buttonText;
        console.log(buttonText);

        if (buttonText == 'C') {
            screenValue = '';
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
            screen_sh1.value = (300000000)*2 / eval(screenValue);
            screen_sh2.value = (140)*300000000 / eval(screenValue);

        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}