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
    }
});
