function createConfetti() {
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
        confetti.style.animationDuration = (Math.random() * 2 + 2) + "s";
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), Math.random() *  300000);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('surpriseBtn').addEventListener('click', function() {

        document.getElementById('photoContainer').classList.remove('hidden'); // Show photos with descriptions
        document.getElementById('bgMusic').muted = false;
        document.getElementById('bgMusic').play();
        createConfetti();
    });
});

 // Hide loader after content is loaded
 window.onload = function() {
    document.getElementById('loader').style.display = 'none';
};
