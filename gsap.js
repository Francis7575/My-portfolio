const skillsSection = gsap.timeline({ repeat: -1, repeatDelay: 2 });
skillsSection
    .from('.skills_first_header', { duration: 1, x: '100vw', ease: 'power4.out' }, 1)
    .from('.html', { duration: 1, x: '-100vw', ease: 'bounce' }, 2)
    .from('.css', { duration: 1, x: '100vw', ease: 'bounce' }, 3)
    .from('.js', { duration: 1, x: '100vw', ease: 'bounce' }, 4)
    .from('.sass', { duration: 1, x: '-100vw', ease: 'power2.out' }, 5)
    .from('.git', { duration: 1, x: '100vw', ease: 'power2.out' }, 6)
    .from('.skills_second_header', { duration: 1, x: '-100vw', ease: 'power4.out' }, 7)
    .from('.react', { duration: 1, x: '-100vw', ease: 'power4.out' }, 8)
    .from('.bootstrap', { duration: 1, x: '100vw', ease: 'power4.out' }, 9)

const sections = [
    { selector: '.top_h1', start: 'top 100%', end: 'center center', direction: '-500vw' },
    { selector: '.top_p', start: 'top 100%', end: 'center center', direction: '100vw' },
    { selector: '.top_contact', start: 'top 100%', end: 'center center', direction: '-100vw' },
    { selector: '.projects__header', start: 'top 100%', end: 'center center', direction: '-100vw' },
    { selector: '.projects_contact', start: 'top 100%', end: 'center center', direction: '100vw' },
    { selector: '.first_project', start: 'top 100%', end: 'center center', direction: '-100vw' },
    { selector: '.second_project', start: 'top 100%', end: 'center center', direction: '100vw' },
    { selector: '.third_project', start: 'top 100%', end: 'center center', direction: '-100vw' },
    { selector: '.four_project', start: 'top 100%', end: 'center center', direction: '100vw' }
];

function createSectionAnimation(selector, start, end, direction) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: selector,
            start: start,
            end: end,
            scrub: true
        }
    });

    timeline.from(selector, {
        x: direction,
        ease: 'power2.out'
    });
}

sections.forEach(section => {
    createSectionAnimation(section.selector, section.start, section.end, section.direction);
});

function createAnimations() {
    const isTablet = window.matchMedia('(min-width: 48em)').matches;

    sections.forEach(section => {
        let start = section.start;
        let end = section.end;
        let direction = section.direction;

        if (isTablet && (section.selector === '.top_p' || section.selector === '.top_h1' || section.selector === '.top_contact')) {
            return;
        }

        createSectionAnimation(section.selector, start, end, direction);
    });
}

const playBtn = document.querySelector('.fa-play');
const pauseBtn = document.querySelector('.fa-pause');
const playPauseBtn = document.getElementById('playPauseBtn');
const audio = document.getElementById('skillsAudio');
pauseBtn.style.display = 'none';

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        playBtn.classList.remove('fa-play');
        pauseBtn.classList.add('fa-pause');
        pauseBtn.style.display = 'inline-block';
        playBtn.style.display = 'none';

    } else {
        audio.pause();
        pauseBtn.classList.remove('fa-pause');
        playBtn.classList.add('fa-play');
        pauseBtn.style.display = 'none';
        playBtn.style.display = 'inline-block';
    }
}

playPauseBtn.addEventListener('click', toggleAudio);
function playAudio() {
    audio.play();
    pauseBtn.classList.add('fa-pause');
    playBtn.classList.remove('fa-play');
    pauseBtn.style.display = 'inline-block';
    playBtn.style.display = 'none';
}

function pauseAudio() {
    audio.pause();
    pauseBtn.classList.remove('fa-pause');
    playBtn.classList.add('fa-play');
    playBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
}

ScrollTrigger.create({
    trigger: '#skills',
    start: 'top center',
    end: 'center center',
    onEnter: playAudio,
    onLeaveBack: pauseAudio
});

ScrollTrigger.create({
    trigger: '#skills',
    start: 'bottom center',
    end: 'bottom 100%',
    onEnterBack: playAudio,
    onLeave: pauseAudio
});
