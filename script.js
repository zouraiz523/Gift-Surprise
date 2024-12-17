document.addEventListener('DOMContentLoaded', function() {
    const giftImage = document.getElementById('giftImage');
    const videoModal = document.getElementById('videoModal');
    const closeButton = document.querySelector('.close-button');

    giftImage.addEventListener('click', function() {
        videoModal.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        videoModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === videoModal) {
            videoModal.style.display = 'none';
        }
    });
});