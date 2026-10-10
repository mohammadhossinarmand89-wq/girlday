// جابه‌جایی بین ۸ صفحه

let currentPage = 0;

const pages = document.querySelectorAll('.page');

function showPage() {
    pages.forEach((page, index) => {
        page.classList.toggle('active', index === currentPage);
    });

    document.getElementById('page-number').textContent =
        صفحه ${currentPage + 1} از ۸;

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage();
    }
}

function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage();
    }
}

function restart() {
    currentPage = 0;
    showPage();
}


// بازی جمع کردن قلب‌ها

let score = 0;

function collectHeart(button) {
    score++;

    document.getElementById('score').textContent = score;

    button.style.transform = 'scale(1.5) rotate(20deg)';
    button.textContent = '✨';

    setTimeout(() => {
        button.style.transform = '';
        button.textContent = ['💗', '💖', '💕', '💘'][
            Math.floor(Math.random() * 4)
        ];
    }, 300);
}


// جواب‌های کوییز

function answer(message) {
    document.getElementById('answer').textContent =
        'انتخابت ثبت شد: ' + message + ' 💗';
}


// بازی حافظه

let firstCard = null;
let locked = false;
let matchedPairs = 0;

function flip(button) {
    if (locked || button.dataset.done === 'true') {
        return;
    }

    if (button.dataset.open === 'true') {
        return;
    }

    button.dataset.open = 'true';

    if (firstCard === null) {
        firstCard = button;
        return;
    }

    if (firstCard === button) {
        return;
    }

    if (firstCard.textContent === button.textContent) {
        firstCard.dataset.done = 'true';
        button.dataset.done = 'true';

        firstCard.style.background = '#d9f8e2';
        button.style.background = '#d9f8e2';

        matchedPairs++;
        firstCard = null;

        if (matchedPairs === 3) {
            document.getElementById('memory-message').textContent =
                'آفرین دختر باهوش! همه‌ی جفت‌ها رو پیدا کردی! 🎉💗';
        }
    } else {
        locked = true;

        const oldCard = firstCard;
        firstCard = null;

        setTimeout(() => {
            oldCard.dataset.open = 'false';
            button.dataset.open = 'false';

            oldCard.textContent = '❔';
            button.textContent = '❔';

            locked = false;
        }, 800);
    }
}


// باز کردن هدیه

function openGift() {
    document.getElementById('gift').textContent = '💝';

    document.getElementById('gift-message').textContent =
        'سورپرایز! تو خودت قشنگ‌ترین هدیه‌ای! 💗';

    createHearts();
}


// باران قلب

function createHearts() {
    const container = document.getElementById('heart-rain');

    for (let i = 0; i < 35; i++) {
        const heart = document.createElement('span');

        heart.className = 'falling-heart';

        heart.textContent = ['💗', '💖', '💕', '💘', '🌸'][
            Math.floor(Math.random() * 5)
        ];

        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (18 + Math.random() * 25) + 'px';
        heart.style.animationDuration = (2 + Math.random() * 3) + 's';
        heart.style.animationDelay = Math.random() * 1.5 + 's';

        container.appendChild(heart);

        setTimeout(() => heart.remove(), 6500);
    }
}


// نمایش اولین صفحه

showPage();