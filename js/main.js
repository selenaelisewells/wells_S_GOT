(() => {
    console.log('winter is coming');

    let lightBox = document.querySelector('.lightbox'),
        lbClose = lightBox.querySelector('span'),
        lbVideo = lightBox.querySelector('video'),
        sigils = document.querySelectorAll('.sigilContainer');

    function showHideLightBox() {
        lightBox.classList.toggle('show-lightbox');

        if (lbVideo.paused) {
            lbVideo.play();
        } else {
            lbVideo.currentTime = 0;
            lbVideo.pause();
        }
        //rewind the video and make it pause at current time of 0

    }

    sigils.forEach(sigil => sigil.addEventListener('click', showHideLightBox));
    lbClose.addEventListener('click', showHideLightBox);

    lbVideo.addEventListener('ended', showHideLightBox)

})();