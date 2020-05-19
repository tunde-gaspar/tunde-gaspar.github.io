let list = ['Dustin', 'Bob', 'Peter', 'Tunde']

// for(i = 0; i < list.length; i++) {
//     let element = list[i];
//     if (element === 'Tunde') {
//         element = element.bold();
//     }
//     $('ul').append('<li>' + element + '</li>');
// }

list.forEach(element => {
    if (element === 'Tunde') {
        element = element.bold();
    }
    $('ul').append('<li>' + element + '</li>');
})


let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!",
  }

$('body').append('<div class="newBlock"></div');
$('.newBlock').append('<h1>' + additionalBlock.title + '</h1>');
$('.newBlock').append('<p>' + additionalBlock.text + '</p>');


// $('#button1').on('click', (event) => {
//     console.log('Yeah, you clicked me!');
// })

$('#button1').click(() => {
    console.log('Yeah, you clicked me!');
})

$('#button2').click((event) => {
    $('#button1').text('Like again');
})

$('#button3').click((event) => {
    $('button').css('background', '#762CB4');
    $('button').css('color', 'white');
    $('button').css('font-size', '16px');
    $('button').css('border', '0');
    $('button').css('border-radius', '5px')
})

// 1
$('#button4').click(getInputValueFunction);

function getInputValueFunction() {
    var newColor = document.getElementById('colorInput').value;
    $('button').css('background', newColor);
}

// 2
// $('#button4').click(() => {
//     var newColor = document.getElementById('colorInput').value;
//     $('button').css('background', newColor);
// })
