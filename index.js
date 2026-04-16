// ----------- Menu Burger ---------------------- //

const toggleMenu = (action) => {
  document.querySelector('nav ul').classList[action]('active');
  document.querySelector('.menu-burger').classList[action]('active');
  // document.querySelector('.menu-background').classList[action]('active');
};

document.querySelector('.menu-burger').addEventListener('click', () => toggleMenu('toggle'));
document.querySelector('.closeMenu').addEventListener('click', () => toggleMenu('remove'));
// document.querySelector('.menu-background').addEventListener('click', () => toggleMenu('remove'));
document.querySelectorAll('.link1, .link2, .link3, .link4, .link5, .link6, .link7').forEach(link => {
    link.addEventListener('click', () => toggleMenu('remove'));
});


// ----------- Apparition et disparition nav --------- //

const nav = document.querySelector("nav");
let lastScroll = 0;

window.addEventListener("scroll", () => {
    if (window.scrollY < lastScroll) {
        nav.style.top ="0px";
    } else {
        nav.style.top = "-140px"
    }
    lastScroll = window.scrollY;

});
// ---------------------------------------------------------

// // ---------- Apparition credit-impot --------------------- //
document.addEventListener("DOMContentLoaded", () => {
    const fadeUps = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    fadeUps.forEach(el => observer.observe(el));
  });

// //   -------------------------------------------------------

// ------------------ Gestion Cookies ----------------------
document.addEventListener("DOMContentLoaded", function () {
    const settingsButton = document.querySelector(".cookie-settings");
    const modal = document.getElementById("cookieModal");
    const closeModalBtn = document.getElementById("closeModal");
    const saveBtn = document.getElementById("savePreferences");

    // Ouvre le panneau
    settingsButton.addEventListener("click", () => {
      modal.classList.add("visible");
    });

    // Ferme le panneau
    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("visible");
    });

    // Sauvegarde des préférences (exemple simple)
    saveBtn.addEventListener("click", () => {
      const analytics = document.getElementById("analytics-cookies").checked;
      const ads = document.getElementById("ads-cookies").checked;

      // Exemple de stockage en localStorage
      localStorage.setItem("cookiePreferences", JSON.stringify({ analytics, ads }));

      alert("Préférences sauvegardées !");
      modal.classList.remove("visible");
    });
  });
  //  -----------------------------------------------------------

  //  // Animation au scroll - Version basée sur les keyframes CSS
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        // Observer tous les éléments avec animations
        document.addEventListener('DOMContentLoaded', function() {
            // Pause les animations au début
            document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => {
                el.style.animationPlayState = 'paused';
                observer.observe(el);
            });

            // Animation séquentielle pour la liste des prestations
            const prestationsList = document.querySelectorAll('.prestations ul li');
            prestationsList.forEach((item, index) => {
                setTimeout(() => {
                    if (isElementInViewport(item)) {
                        item.classList.add('visible');
                    }
                }, index * 100);
            });

            // Vérifier la visibilité des éléments de liste au scroll
            window.addEventListener('scroll', () => {
                prestationsList.forEach((item, index) => {
                    if (isElementInViewport(item) && !item.classList.contains('visible')) {
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, index * 100);
                    }
                });
            });
        });

        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top < window.innerHeight && rect.bottom > 0
            );
        }

        // ----------- massif section ----------------------
        // Optionnel : agrandir l'image au clic (lightbox basique)
document.querySelectorAll('.massif-photo, .renovation-photo, .haie-photo, .entretien-photo').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.style = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:center;z-index:1000;';
    const bigImg = document.createElement('img');
    bigImg.src = img.src;
    bigImg.style = 'max-width:90vw;max-height:90vh;border-radius:16px;box-shadow:0 8px 32px rgba(46,125,50,0.25);';
    overlay.appendChild(bigImg);
    overlay.addEventListener('click', () => document.body.removeChild(overlay));
    document.body.appendChild(overlay);
  });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const submitBtn = document.querySelector('.submit-btn');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    // UI loading
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';

    // Validation simple
    const prenom = document.getElementById('prenom').value.trim();
    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!prenom || !nom || !email || !message) {
        errorMessage.style.display = 'block';
        errorMessage.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Veuillez remplir tous les champs obligatoires.';
        successMessage.style.display = 'none';
        resetButton();
        return;
    }


    // Envoi EmailJS ---------------------------------------------------------------------------------------------------------
    emailjs.sendForm("service_ve618if", "template_zulnr8d", this)
    .then(() => {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        this.reset();
        resetButton();
    })
    .catch((error) => {
        console.error(error);
        errorMessage.style.display = 'block';
        errorMessage.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Une erreur s\'est produite. Veuillez réessayer.';
        successMessage.style.display = 'none';
        resetButton();
    });

    function resetButton() {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer ma demande';
    }
});
        
        // // Animation au scroll
        // const observerOptions = {
        //     threshold: 0.1,
        //     rootMargin: '0px 0px -50px 0px'
        // };
        
        // const observer = new IntersectionObserver((entries) => {
        //     entries.forEach(entry => {
        //         if (entry.isIntersecting) {
        //             entry.target.classList.add('fade-in-up');
        //         }
        //     });
        // }, observerOptions);
        
        // document.querySelectorAll('.fade-in-up').forEach(el => {
        //     observer.observe(el);
        // });



const carousel = document.querySelector('.carousel');
const images = document.querySelector('.carousel-images');
const items = document.querySelectorAll('.carousel-item');
const dotsBox = document.querySelector('.carousel-dots');
const leftArrow = document.querySelector('.carousel-arrow.left');
const rightArrow = document.querySelector('.carousel-arrow.right');

let currentIndex = 1;
let slideWidth = carousel.offsetWidth;

// 🔁 clones (infini)
const firstClone = items[0].cloneNode(true);
const lastClone = items[items.length - 1].cloneNode(true);

images.appendChild(firstClone);
images.insertBefore(lastClone, items[0]);

let slides = document.querySelectorAll('.carousel-item');

// init position
images.style.transform = `translateX(${-slideWidth * currentIndex}px)`;

// resize
window.addEventListener('resize', () => {
  slideWidth = carousel.offsetWidth;
  setPosition(false);
});

// --------------------
// 🎯 MOVE SLIDE
// --------------------
function setPosition(animate = true) {
  images.style.transition = animate ? 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)' : 'none';
  images.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
  updateDots();
}

// --------------------
// 🔁 DOTS
// --------------------
function updateDots() {
  dotsBox.innerHTML = '';

  for (let i = 1; i < slides.length - 1; i++) {
    const dot = document.createElement('span');
    dot.className = 'dot' + (i === currentIndex ? ' active' : '');

    dot.onclick = () => {
      currentIndex = i;
      setPosition();
    };

    dotsBox.appendChild(dot);
  }
}

// --------------------
// ➡️ ARROWS
// --------------------
rightArrow.onclick = () => {
  currentIndex++;
  setPosition();
};

leftArrow.onclick = () => {
  currentIndex--;
  setPosition();
};

// --------------------
// 🔁 LOOP FIX
// --------------------
images.addEventListener('transitionend', () => {
  slides = document.querySelectorAll('.carousel-item');

  if (slides[currentIndex] === firstClone) {
    currentIndex = 1;
    setPosition(false);
  }

  if (slides[currentIndex] === lastClone) {
    currentIndex = slides.length - 2;
    setPosition(false);
  }
});

// --------------------
// 👆 SWIPE / DRAG (mobile + souris)
// --------------------
let isDown = false;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;

images.addEventListener('pointerdown', (e) => {
  isDown = true;
  startX = e.clientX;
  images.style.transition = 'none';
});

images.addEventListener('pointermove', (e) => {
  if (!isDown) return;

  const moveX = e.clientX - startX;
  currentTranslate = -slideWidth * currentIndex + moveX;

  images.style.transform = `translateX(${currentTranslate}px)`;
});

images.addEventListener('pointerup', (e) => {
  isDown = false;

  const movedBy = e.clientX - startX;

  if (movedBy < -80) currentIndex++;
  if (movedBy > 80) currentIndex--;

  setPosition();
});

images.addEventListener('pointerleave', () => {
  if (isDown) {
    isDown = false;
    setPosition();
  }
});

// --------------------
// 🔍 ZOOM IMAGE (hover + touch)
// --------------------
document.querySelectorAll('.carousel-item img').forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.08)';
    img.style.transition = '0.3s ease';
  });

  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });

  img.addEventListener('touchstart', () => {
    img.style.transform = 'scale(1.08)';
  });

  img.addEventListener('touchend', () => {
    img.style.transform = 'scale(1)';
  });
});

// init
setPosition(false);

// Changement auto de la date (copyright)
document.getElementById("year").textContent = new Date().getFullYear();


