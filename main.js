const toggle = document.querySelector('.toggleMenu');
const navlinks = document.querySelector('.navlinks');
let menuOpen = false;

toggle.addEventListener('click', () => {
  if (!menuOpen) {
    toggle.classList.add('open');
    menuOpen = true;
  } else {
    toggle.classList.remove('open');
    menuOpen = false;
  }

  navlinks.classList.toggle('open');
});

const typed = new Typed('.auto-input', {
  strings: [
    'Frameworks like Angular and React',
    'UI Libraries like Material UI',
    'HTML, CSS and Javascript Best Practices',
  ],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

const countDownDate = new Date('apr 26, 2023 15:37:25').getTime();
const x = setInterval(() => {
  const now = new Date().getTime();
  const dueDate = countDownDate - now;
  const days = Math.floor(dueDate / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (dueDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((dueDate % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((dueDate % (1000 * 60)) / 1000);
  document.getElementById(
    'countdown',
  ).innerText = `${days}Days ${hours}Hours ${minutes}Mins ${seconds}Sec `;
  if (dueDate < 0) {
    clearInterval(x);
    document.getElementById('time').innerHTML = 'EXPIRED';
  }
}, 1000);

const speakersData = [
  {
    class: ['spkr sp1', 'img', 'txt'],
    image: './assets/speaker0.png',
    name: 'Alex Green',
    title: 'Front-end Development instructor',
    description: 'Alex is a passionate front-end developer with over a decade of experience in designing and building engaging and responsive web interfaces. He loves teaching and sharing his knowledge with others, and he specializes in HTML, CSS, JavaScript, and jQuery.',
  },
  {
    class: ['spkr sp2', 'img', 'txt'],
    image: './assets/speaker6.jpg',
    name: 'Ava Smith',
    title: 'Back-end Development instructor',
    description: "Ava is an experienced back-end developer who has worked on numerous large-scale web projects over the years. She's an expert in database management, server-side programming, and security, and he enjoys sharing her expertise with others.",
  },
  {
    class: ['spkr sp3', 'img', 'txt'],
    image: 'assets/speaker1.jpg',
    name: 'Sarah Lee',
    title: 'Full-Stack Development Instructor',
    description: 'Sarah is a versatile full-stack developer with a passion for problem-solving and innovation. She has a wealth of experience in working with various programming languages, frameworks, and tools, and she loves teaching others how to build complex web applications from scratch.',
  },
  {
    class: ['spkr sp4', 'img', 'txt'],
    image: 'assets/speaker2.jpg',
    name: 'Alex Smith',
    title: 'UI/UX Design Instructor',
    description: 'Smith is a talented UI/UX designer who specializes in creating intuitive and user-friendly interfaces for web and mobile applications. He has a keen eye for detail and a passion for creating visually stunning designs that are both functional and aesthetically pleasing.',
  },
  {
    class: ['spkr sp5', 'img', 'txt'],
    image: 'assets/speaker5.jpg',
    name: 'Leo Garcia',
    title: 'Javascript instructor',
    description: "Leo is a skilled JavaScript developer who loves working with this powerful and versatile programming language. He has a deep understanding of JavaScript's core concepts and advanced techniques, and he enjoys teaching others how to build interactive and dynamic web applications using this language.",
  },
  {
    class: ['spkr sp6', 'img', 'txt'],
    image: 'assets/speaker4.jpg',
    name: 'Sam Lee',
    title: 'Project Management instructor',
    description: "Sarah is a seasoned project manager with extensive experience in leading and coordinating web development teams. He's an expert in agile methodologies, team communication, and project planning, and he enjoys sharing her knowledge and best practices with others.",
  },
];

const buttons = [
  {
    class: ['btn more'],
    text: 'More',
    icon: 'fa-solid fa-chevron-down',
  },
  {
    class: ['btn less'],
    text: 'Less',
    icon: 'fa-solid fa-chevron-up',
  },
];

function createImg(src) {
  const img = document.createElement('img');
  img.src = src;
  return img;
}

function createDiv(cls) {
  const div = document.createElement('div');
  div.className = cls;
  return div;
}

function createH4(txt) {
  const h4 = document.createElement('h4');
  h4.innerText = txt;
  return h4;
}

function createPara(txt) {
  const p = document.createElement('p');
  p.innerText = txt;
  return p;
}

function createBtn(txt) {
  const btn = document.createElement('button');
  btn.innerText = txt;
  return btn;
}

function createSpeaker(arr) {
  const speaker = arr.map((item) => {
    const div = createDiv(item.class[0]);
    const imgDiv = createDiv(item.class[1]);
    const txtDiv = createDiv(item.class[2]);

    const img = createImg(item.image);
    const name = createH4(item.name);
    const title = createH4(item.title);
    title.className = 'profession';
    const description = createPara(item.description);

    imgDiv.appendChild(img);
    txtDiv.appendChild(name);
    txtDiv.appendChild(title);
    txtDiv.appendChild(description);

    div.appendChild(imgDiv);
    div.appendChild(txtDiv);
    return div;
  });
  return speaker;
}

function createBtns(arr) {
  const btns = arr.map((item) => {
    const btn = createBtn(item.text);
    btn.className = item.class;
    const icon = document.createElement('i');
    const span = document.createElement('span');
    icon.className = item.icon;
    span.appendChild(icon);
    btn.appendChild(span);

    return btn;
  });
  return btns;
}

const btns = createBtns(buttons);

const speakers = document.querySelector('#speakers');

const cards = createSpeaker(speakersData);

const showDiv = createDiv('show');

cards.forEach((card) => {
  if (
    card.className === 'spkr sp3' || card.className === 'spkr sp4' || card.className === 'spkr sp5' || card.className === 'spkr sp6'
  ) {
    showDiv.appendChild(card);
  } else if (card.className === 'spkr sp1' || card.className === 'spkr sp2') {
    speakers.appendChild(card);
  }

  speakers.appendChild(showDiv);
});

btns.map((btn) => speakers.appendChild(btn));

const hidden = document.querySelector('.show');
const hide = document.querySelector('.less');
const show = document.querySelector('.more');

show.addEventListener('click', () => {
  hidden.classList.add('open');
  show.classList.add('clicked');
  hide.classList.add('clicked');
});

hide.addEventListener('click', () => {
  hidden.classList.remove('open');
  show.classList.remove('clicked');
  hide.classList.remove('clicked');
});
