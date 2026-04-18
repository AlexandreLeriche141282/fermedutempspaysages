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



document.addEventListener('DOMContentLoaded', () => {

  const track = document.querySelector('.carousel-track');
  const items = Array.from(document.querySelectorAll('.carousel-item'));
  const nextBtn = document.querySelector('.carousel-arrow.right');
  const prevBtn = document.querySelector('.carousel-arrow.left');
  const dotsContainer = document.querySelector('.carousel-dots');

  let index = 1;
  let isTransitioning = false;

  // Clone first & last for infinite effect
  const firstClone = items[0].cloneNode(true);
  const lastClone = items[items.length - 1].cloneNode(true);

  track.appendChild(firstClone);
  track.insertBefore(lastClone, items[0]);

  const allItems = document.querySelectorAll('.carousel-item');

  // Set initial position
  track.style.transform = `translateX(-${index * 100}%)`;

  // =========================
  // 🔵 DOTS
  // =========================
  const dots = [];

  items.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');

    if (i === 0) dot.classList.add('active');

    dot.addEventListener('click', () => {
      moveToIndex(i + 1);
    });

    dotsContainer.appendChild(dot);
    dots.push(dot);
  });

  function updateDots() {
    dots.forEach(d => d.classList.remove('active'));

    let realIndex = index - 1;

    if (realIndex < 0) realIndex = dots.length - 1;
    if (realIndex >= dots.length) realIndex = 0;

    dots[realIndex].classList.add('active');
  }

  // =========================
  // MOVE
  // =========================
  function moveToIndex(i) {
    if (isTransitioning) return;
    isTransitioning = true;

    track.style.transition = 'transform 0.5s ease';
    track.style.transform = `translateX(-${i * 100}%)`;

    index = i;

    updateDots();
  }

  // Next / Prev
  nextBtn.addEventListener('click', () => moveToIndex(index + 1));
  prevBtn.addEventListener('click', () => moveToIndex(index - 1));

  // =========================
  // INFINITE LOOP RESET
  // =========================
  track.addEventListener('transitionend', () => {

    if (allItems[index].isEqualNode(firstClone)) {
      track.style.transition = 'none';
      index = 1;
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    if (allItems[index].isEqualNode(lastClone)) {
      track.style.transition = 'none';
      index = allItems.length - 2;
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    updateDots();
    isTransitioning = false;
  });

  // =========================
  // SWIPE MOBILE
  // =========================
  let startX = 0;
  let isDragging = false;

  track.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  track.addEventListener('touchmove', e => {
    if (!isDragging) return;

    const moveX = e.touches[0].clientX;
    const diff = startX - moveX;

    if (diff > 50) {
      moveToIndex(index + 1);
      isDragging = false;
    }

    if (diff < -50) {
      moveToIndex(index - 1);
      isDragging = false;
    }
  });

  track.addEventListener('touchend', () => {
    isDragging = false;
  });

});
// // --------------------
// // 🔍 ZOOM IMAGE (hover + touch)
// // --------------------
// document.querySelectorAll('.carousel-item img').forEach(img => {
//   img.addEventListener('mouseenter', () => {
//     img.style.transform = 'scale(1.08)';
//     img.style.transition = '0.3s ease';
//   });

//   img.addEventListener('mouseleave', () => {
//     img.style.transform = 'scale(1)';
//   });

//   img.addEventListener('touchstart', () => {
//     img.style.transform = 'scale(1.08)';
//   });

//   img.addEventListener('touchend', () => {
//     img.style.transform = 'scale(1)';
//   });
// });

// // init
// setPosition(false);

// Changement auto de la date (copyright)
document.getElementById("year").textContent = new Date().getFullYear();


