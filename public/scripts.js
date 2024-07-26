const sequence = [];
let userSequence = [];
var GameHeader = document.getElementById('startGameHeader');


function playAudio(track) {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = 'audio/' + track;
    audioPlayer.play();
}

document.addEventListener('keydown', function (event) {
    switch (event.code) {
        case 'Numpad1':
            playAudio('sound1.wav');
            break;
        case 'Numpad2':
            playAudio('sound2.wav');
            break;
        case 'Numpad3':
            playAudio('sound3.wav');
            break;
        case 'Numpad4':
            playAudio('sound4.wav');
            break;
        case 'Numpad5':
            playAudio('sound5.wav');
            break;
        case 'Numpad6':
            playAudio('sound6.wav');
            break;
        case 'Numpad7':
            playAudio('sound7.wav');
            break;
        case 'Numpad8':
            playAudio('sound8.wav');
            break;
        case ' ':
            startGame();
            break;
    }
});


function startGame() {
    GameHeader.style.display = 'none';
}
