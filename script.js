// Initialize AOS
AOS.init({
    duration: 1200,
    once: false,
    easing: 'ease-in-out',
});

// Hamburger Menu
function toggleMenu() {
    const menu = document.getElementById('navLinks');
    menu.classList.toggle('active');
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Meme Video Play on Scroll into View
let hasPlayed = false;
window.addEventListener('scroll', () => {
    const memeSection = document.getElementById('meme-box');
    const memeVideo = document.getElementById('memeVideo');
    const replayBtn = document.querySelector('.replay-btn');
    const sectionTop = memeSection.getBoundingClientRect().top;
    const sectionBottom = memeSection.getBoundingClientRect().bottom;

    if (sectionTop < window.innerHeight && sectionBottom > 0 && !hasPlayed) {
        setTimeout(() => {
            memeVideo.play();
            hasPlayed = true;
        }, 3000);
    }

    memeVideo.addEventListener('ended', () => {
        replayBtn.style.display = 'block';
    });
});

// Replay Video Function
function replayVideo() {
    const memeVideo = document.getElementById('memeVideo');
    const replayBtn = document.querySelector('.replay-btn');
    memeVideo.currentTime = 0;
    memeVideo.play();
    replayBtn.style.display = 'none';
}