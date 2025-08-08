function handleMobileNav() {
 
  if (window.innerWidth <= 700) {
    const links = document.querySelectorAll('.nav-link');
    const toggle = document.querySelectorAll('.nav-toggle');

    links.forEach(link => {
      link.addEventListener('click', function () {
        let menu = document.getElementById("menu");
        menu.style.marginTop = "-100vh";
      });
    });

    toggle.forEach(t => {
      t.addEventListener('click', function () {
        let menu = document.getElementById("menu");
        menu.style.marginTop = "0vh";
      });
    });
  }
}


handleMobileNav();


window.addEventListener('resize', () => {

  handleMobileNav();
});


// Welcome text typing
const welcomeText = "Welcome To My Protfolio";
const welcomeElement = document.getElementById("welcome-text");

let welcomeIndex = 0;
function typeWelcome() {
  if (welcomeIndex < welcomeText.length) {
    welcomeElement.textContent += welcomeText.charAt(welcomeIndex);
    welcomeIndex++;
    setTimeout(typeWelcome, 100);
  } else {
    setTimeout(startProfessionTyping, 500);
  }
}

// Profession text typing (loop)
const professions = ["Front-End Developer", "Web Designer", "UI/UX Enthusiast"];
const professionElement = document.getElementById("profession-text");
let professionIndex = 0;
let charIndex = 0;
let deleting = false;

function typeProfession() {
  let currentProfession = professions[professionIndex];

  if (!deleting) {
    professionElement.textContent = currentProfession.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentProfession.length) {
      deleting = true;
      setTimeout(typeProfession, 1000);
    } else {
      setTimeout(typeProfession, 100);
    }
  } else {
    professionElement.textContent = currentProfession.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      professionIndex = (professionIndex + 1) % professions.length;
    }
    setTimeout(typeProfession, 50);
  }
}

function startProfessionTyping() {
  typeProfession();
}

typeWelcome();
