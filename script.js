[10/10/2026 10:46 PM] .: // 🎀 جابه‌جایی بین ۸ صفحه
function go(page) {
  const sections = document.querySelectorAll('section');
  const buttons = document.querySelectorAll('nav button');

  if (page < 0 || page >= sections.length) return;

  sections.forEach((section, index) => {
    section.classList.toggle('active', index === page);
  });

  buttons.forEach((button, index) => {
    button.classList.toggle('active', index === page);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  const progress = document.getElementById('progress');

  if (progress) {
    progress.style.width = ((page + 1) / sections.length * 100) + '%';
  }
}

// 💗 بارون قلب و ایموجی
function floatEmoji(emoji) {
  const element = document.createElement('div');

  element.textContent = emoji;
  element.style.position = 'fixed';
  element.style.left = Math.random() * 95 + 'vw';
  element.style.bottom = '-40px';
  element.style.fontSize = (20 + Math.random() * 25) + 'px';
  element.style.pointerEvents = 'none';
  element.style.zIndex = '9999';
  element.style.transition = 'transform 4s linear, opacity 4s linear';

  document.body.appendChild(element);

  requestAnimationFrame(() => {
    element.style.transform = 'translateY(-110vh) rotate(360deg)';
    element.style.opacity = '0';
  });

  setTimeout(() => element.remove(), 4100);
}

function sprinkle() {
  const emojis = ['💗', '💕', '💖', '🎀', '🌸', '🧸', '✨'];

  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      floatEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
    }, i * 80);
  }
}

// 💌 باز کردن نامه
function openLetter() {
  const letter = document.getElementById('letter');

  if (letter) {
    letter.style.display = 'block';
    sprinkle();
  }
}

// 💗 بازی پیدا کردن قلب‌ها
let hiddenHearts = [];
let foundHearts = 0;

function resetGame() {
  const grid = document.getElementById('heartGrid');
  const message = document.getElementById('gameMessage');

  if (!grid) return;

  grid.innerHTML = '';
  hiddenHearts = [];
  foundHearts = 0;

  while (hiddenHearts.length < 5) {
    const number = Math.floor(Math.random() * 16);

    if (!hiddenHearts.includes(number)) {
      hiddenHearts.push(number);
    }
  }

  if (message) message.textContent = '۵ قلب مخفی رو پیدا کن! 💕';

  for (let i = 0; i < 16; i++) {
    const button = document.createElement('button');

    button.className = 'heart-cell';
    button.textContent = '🎀';

    button.onclick = function () {
      if (button.disabled) return;

      button.disabled = true;

      if (hiddenHearts.includes(i)) {
        button.textContent = '💗';
        button.classList.add('found');
        foundHearts++;

        message.textContent = foundHearts === 5
          ? 'آفریننن! همهٔ قلب‌ها رو پیدا کردی! 💖'
          : 'یه قلب پیدا کردی! 💗 ' + foundHearts + ' از ۵';

        floatEmoji('💖');
      } else {
        button.textContent = '🌸';
        message.textContent = 'این یکی گل بود! دوباره امتحان کن 🌷';
      }
    };

    grid.appendChild(button);
  }
}

// 🌸 بزرگ کردن گل‌ها
function growFlower(element) {
  element.classList.toggle('grow');

  const message = document.getElementById('flowerMessage');

  if (message) {
    message.textContent = 'یه شکوفه برای قشنگ‌ترین دختر دنیا! 🌸💗';
  }

  floatEmoji('🌸');
}

// 🌷 بارون گل
function gardenRain() {
  const flowers = ['🌸', '🌷', '🌹', '🌼', '💗'];

  for (let i = 0; i < 25; i++) {
    setTimeout(() => {
      floatEmoji(flowers[Math.floor(Math.random() * flowers.length)]);
    }, i * 90);
  }
}

// 🎁 جعبه‌های سورپرایز
const gifts = [
  '🎀 هدیهٔ اول: یه بغل مجازی خیلی بزرگ برای تو!',
  '💌 هدیهٔ دوم: یه عالمه بوس و دوست داشتن!',
  '🧸 هدیهٔ سوم: تو قشنگ‌ترین هدیهٔ دنیای منی!'
];

function openGift(index) {
  const message = document.getElementById('giftMessage');

  if (message && gifts[index]) {
    message.textContent = gifts[index];
    sprinkle();
  }
}

// 💞 قلبی که بزرگ می‌شه
let heartSize = 100;
let heartClicks = 0;

function heartClick() {
  const heart = document.getElementById('myHeart');
  const message = document.getElementById('heartMessage');
[10/10/2026 10:46 PM] .: if (!heart || !message) return;

  heartClicks++;
  heartSize = Math.min(heartSize + 18, 260);

  heart.style.fontSize = heartSize + 'px';

  const messages = [
    'یه ذره بیشتر دوستت دارم! 💗',
    'بازم بیشتررر! 💖',
    'قلبم داره بزرگ می‌شه! 🥹',
    'همهٔ این قلب‌ها مال توئه! 💕',
    'دیگه جا برای این همه عشق ندارم! 😭💗'
  ];

  message.textContent = messages[
    Math.min(heartClicks - 1, messages.length - 1)
  ];

  floatEmoji('💗');
}

function resetHeart() {
  heartSize = 100;
  heartClicks = 0;

  const heart = document.getElementById('myHeart');
  const message = document.getElementById('heartMessage');

  if (heart) heart.style.fontSize = '100px';

  if (message) {
    message.textContent = 'یه بار روی قلبم بزن! 🥹';
  }
}

// 💗 جواب سؤال
function answer(yes) {
  const message = document.getElementById('answerMessage');

  if (message) {
    message.textContent = yes
      ? 'ولی من بازم باید هر روز بهت یادآوری کنم! 💗'
      : 'اون‌قدر که هیچ عددی نمی‌تونه اندازه‌ش رو بگه! 💖';
  }

  sprinkle();
}

// 🎀 سورپرایز نهایی
function finalSurprise() {
  const message = document.getElementById('finalMessage');

  if (message) {
    message.innerHTML =
      '🎀💗 هستی، تو یه دونه‌ای! 💗🎀<br>' +
      'امیدوارم همیشه دلت شاد باشه و بخندی! 🌸🧸';
  }

  sprinkle();
}

// ✨ نوار پیشرفت
window.addEventListener('scroll', function () {
  const progress = document.getElementById('progress');

  if (!progress) return;

  const height = document.documentElement.scrollHeight - window.innerHeight;

  progress.style.width =
    (height > 0 ? window.scrollY / height * 100 : 0) + '%';
});

// 💗 آماده‌سازی بازی هنگام باز شدن صفحه
document.addEventListener('DOMContentLoaded', function () {
  resetGame();
});
