const skillsSection = gsap.timeline({ repeat: -1, repeatDelay: 2 });
skillsSection
    .from('.skills_first_header', { duration: 1, x: '100vw', ease: 'power4.out' }, 1)
    .from('.html', { duration: 1, x: '-100vw', ease: 'bounce' }, 2)
    .from('.css', { duration: 1, x: '-100vw', ease: 'bounce' }, 3)
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


function playAudio() {
    const skillsAudio = document.getElementById('skillsAudio');
    skillsAudio.play();
}

function pauseAudio() {
    const skillsAudio = document.getElementById('skillsAudio');
    skillsAudio.pause();
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
