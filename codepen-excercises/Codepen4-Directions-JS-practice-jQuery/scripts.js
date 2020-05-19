let color = 'purple';
let number = 100;
let word = 'cool';

if (color === 'purple') {
    $('.red').css('background', 'purple');
}

if (number > 100) {
    $('.yellow').text("Whoah, that's a big number.");
} else {
    $('.yellow').text('Just a regular number, please.');
}

if (word === 'cool') {
    $('.green').text('Power of DOM');
} else {
    $('.blue').text('Power of DOM');
}
