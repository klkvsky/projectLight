import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    multiplier: .5,
    smooth: true,
    getDirection: true,
    repeat: true,
    getSpeed: true,
});

import { Fancybox } from "@fancyapps/ui";


document.querySelector('#feedbacktop').addEventListener('click', () => {
    document.querySelector('.popup').classList.add('open')
})

document.querySelector('#feedbacktop1').addEventListener('click', () => {
    document.querySelector('.popup').classList.add('open')
})

document.querySelector('#islugi__more').addEventListener('click', () => {
    document.querySelector('.popup').classList.add('open')
})

document.querySelector('#hoverbutton').addEventListener('click', () => {
    document.querySelector('.popup').classList.add('open')
})

document.querySelector('#popup__cancel').addEventListener('click', () => {
    document.querySelector('.popup').classList.remove('open')
})

let usligi = document.querySelectorAll('.usligi__row__item__button');

let feedbackButtons = document.querySelectorAll('.feedback__button');

let typescta = document.querySelectorAll('.types__cta');

for (let i = 0; i < usligi.length; i++) {
    usligi[i].addEventListener('click', () => {
        document.querySelector('.popup').classList.add('open')
    })
}

for (let i = 0; i < feedbackButtons.length; i++) {
    feedbackButtons[i].addEventListener('click', () => {
        document.querySelector('.popup').classList.add('open')
    })
}

for (let i = 0; i < typescta.length; i++) {
    typescta[i].addEventListener('click', () => {
        document.querySelector('.popup').classList.add('open')
    })
}

document.querySelector('.toAboutWhy').addEventListener('click', toAbout);
document.querySelector('.toAboutWhy1').addEventListener('click', toAbout);
document.querySelector('#JumboMore').addEventListener('click', toAbout);
document.querySelector('.jumbo__scroll').addEventListener('click', toAbout);
document.querySelector('.toWhyUsButton').addEventListener('click', toWhyUs);
document.querySelector('.toWhyUsButton1').addEventListener('click', toWhyUs);
document.querySelector('.toUslugi').addEventListener('click', toUsligi);
document.querySelector('.toUslugi1').addEventListener('click', toUsligi);
document.querySelector('.toPathButton').addEventListener('click', toPath);
document.querySelector('.toPathButton1').addEventListener('click', toPath);
document.querySelector('.toWorks').addEventListener('click', toWorks);
document.querySelector('.toWorks1').addEventListener('click', toWorks);
document.querySelector('.toFooter').addEventListener('click', toFooter);
document.querySelector('.toFooter1').addEventListener('click', toFooter);

function toAbout() {
    scroll.scrollTo('.about', {
        'offset': -100,
        'duration': 1200,
        'easing': [0.25, 0.00, 0.35, 1.00],
        'disableLerp': false,
    });
}

function toWhyUs() {
    scroll.scrollTo('.whyus', {
        'offset': -100,
        'duration': 1200,
        'easing': [0.25, 0.00, 0.35, 1.00],
        'disableLerp': false,
    });
}

function toUsligi() {
    scroll.scrollTo('.usligi', {
        'offset': -100,
        'duration': 1200,
        'easing': [0.25, 0.00, 0.35, 1.00],
        'disableLerp': false,
    });
}


function toPath() {
    scroll.scrollTo('.path', {
        'offset': -100,
        'duration': 1200,
        'easing': [0.25, 0.00, 0.35, 1.00],
        'disableLerp': false,
    });
}

function toWorks() {
    scroll.scrollTo('.works', {
        'offset': -100,
        'duration': 1200,
        'easing': [0.25, 0.00, 0.35, 1.00],
        'disableLerp': false,
    });
}

function toFooter() {
    scroll.scrollTo('.footer', {
        'offset': -100,
        'duration': 1200,
        'easing': [0.25, 0.00, 0.35, 1.00],
        'disableLerp': false,
    });
}

document.getElementById('phone').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = '+7' + (x[1] ? '(' + x[2] : '') + (x[3] ? ')' + x[3] : '') + (x[4] ? '-' + x[4] : '');
});


// extra changes

scroll.on('scroll', (instance) => {
    document.querySelector('nav').setAttribute('data-direction', instance.direction);
    navbarChange();
});

function navbarChange() {
    if (document.querySelector('.jumbo').hasAttribute('data-scroll-section-inview')) {
        document.querySelector('.nav').classList.add('toohigh')
    } else {
        document.querySelector('.nav').classList.remove('toohigh')
    }
}
