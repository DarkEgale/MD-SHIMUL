// set responsive nav
function ResponsiveNav() {

  if (window.matchMedia("(max-width: 600px)").matches) {
    setupMobileNav();
  }
}

function setupMobileNav() {
  const menu = document.getElementById("menu");
  const togglesOpen = document.querySelectorAll('.nav-toggle-open');
  const togglesClose = document.querySelectorAll('.nav-toggle-close');
  const links = document.querySelectorAll('.nav-link');

  togglesClose.forEach(togClose => togClose.style.display = 'none');
  menu.style.marginTop = "-100vh";

  togglesOpen.forEach(togOpen => {
    togOpen.addEventListener('click', () => {
      menu.style.marginTop = "0";
      togglesOpen.forEach(t => t.style.display = 'none');
      togglesClose.forEach(t => t.style.display = 'block');
    });
  });

  togglesClose.forEach(togClose => {
    togClose.addEventListener('click', () => {
      menu.style.marginTop = "-100vh";
      togglesOpen.forEach(t => t.style.display = 'block');
      togglesClose.forEach(t => t.style.display = 'none');
    });
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.style.marginTop = "-100vh";
      togglesOpen.forEach(t => t.style.display = 'block');
      togglesClose.forEach(t => t.style.display = 'none');
    });
  });
}


ResponsiveNav();


window.addEventListener("resize", ResponsiveNav);



//Typing text effect

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


//Scroll Effect


const navlink=document.querySelectorAll('nav ul li a');
window.addEventListener('scroll',()=>{
  let scrollPos=window.scrollY || window.pageYOffset
  navlink.forEach(link=>{
    const sectionId=link.getAttribute('href').substring(1);
    const section=document.getElementById(sectionId)
    if(!section){
      return;
    }
    const top=section.offsetTop-60;
    const bottom=top+section.offsetHeight;
    if(scrollPos>top && scrollPos<bottom){
      navlink.forEach(l=>{
        l.classList.remove('active')
      })
      link.classList.add('active')
    }
  })
})

//mouse folow interection
    document.addEventListener('mousemove', function(event) {
      const motion = document.getElementById("motion");
      const offsetX = motion.offsetWidth / 2;
      const offsetY = motion.offsetHeight / 2;
      motion.style.left = (event.pageX - offsetX) + "px";
      motion.style.top = (event.pageY - offsetY) + "px";
    });
