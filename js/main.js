(() => {
    console.log('winter is coming');

    let lightBox = document.querySelector('.lightbox'),
        lbClose = lightBox.querySelector('span'),
        sigils = document.querySelectorAll('.sigilContainer');

    function showLightBox() {
        lightBox.classList.add('show-lightbox');
    }

    function hideLightBox() {
        lightBox.classList.remove('show-lightbox');
    }

    sigils.forEach(sigil => sigil.addEventListener('click', showLightBox));
    lbClose.addEventListener('click', hideLightBox);

})();