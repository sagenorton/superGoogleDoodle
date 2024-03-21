document.addEventListener('DOMContentLoaded', function() {
    var audioPlayer = document.getElementById('audioPlayer');
    var emojiButton = document.getElementById('emojiButton');

    function updateEmoji() {
        emojiButton.textContent = audioPlayer.paused ? '🔈' : '🔇';
    }

    emojiButton.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
        updateEmoji();
    });

    updateEmoji();
});


var tl = gsap.timeline({delay: 2});
tl.to("#Tanooki", {x: 120, duration: .75});
tl.to("#Tanooki", {y: -50, duration: .3});
tl.to("#_Box", {opacity: 0, duration: .25});
tl.to("#Tanooki", {y: 1, duration: .3});
tl.to("#Mushroom", {y: -55, duration: .25});
tl.to("#Mushroom", {x: -70, duration: .5});
tl.to("#Mushroom", {y: 140, duration: .5});
tl.to("#Mushroom", {x: 0, duration: .5});
tl.to("#Mushroom", {opacity: 0, duration: .5});
tl.to("#Tanooki", {scale: 1.3, duration: .3});
tl.to("#Tanooki", {y: -50, duration: .3});
tl.to("#Brick", {opacity: 0, duration: .25});
tl.to("#Tanooki", {y: -16, duration: .3});
tl.to("#Tanooki", {x: 195, duration: .3});
tl.to("#Tanooki", {y: -50, duration: .3});
tl.to("#Brick-2", {opacity: 0, duration: .25});
tl.to("#Tanooki", {y: -16, duration: .3});
tl.to("#Tanooki", {x: 275, duration: .3});
tl.to("#Tanooki", {y: -50, duration: .3});
tl.to("#Brick-3", {opacity: 0, duration: .25});
tl.to("#Tanooki", {y: -16, duration: .3});
tl.to("#Tanooki", {x: 360, duration: .3});
tl.to("#Tanooki", {y: -50, duration: .3});
tl.to("#Brick-4", {opacity: 0, duration: .25});
tl.to("#Tanooki", {y: -16, duration: .3});
tl.to("#Tanooki", {x: 440, duration: .3});
tl.to("#Tanooki", {y: -50, duration: .3});
tl.to("#Brick-5", {opacity: 0, duration: .25});
tl.to("#Tanooki", {y: -16, duration: .3});
tl.to("#Tanooki", {x: 520, duration: .3});
tl.to("#Tanooki", {y: -50, duration: .3});
tl.to("#Brick-6", {opacity: 0, duration: .25});
tl.to("#Tanooki", {y: 1, duration: .3});
tl.to("#Tanooki", {scale: 1, duration: .25});
tl.to("#Tanooki", {x: 625, duration: .3});
tl.to("#Tanooki", {scaleX: -1.3, duration: .2});
tl.to("#Tanooki", {scaleX: 1.3, duration: .2});
tl.to("#Tanooki", {scaleX: -1.3, duration: .2});
tl.to("#Tanooki", {x: 0, duration: .75});