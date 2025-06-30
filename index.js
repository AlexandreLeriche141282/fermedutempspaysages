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

// ---------- Apparition credit-impot --------------------- //
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

//   -------------------------------------------------------

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

   // Animation au scroll - Version basée sur les keyframes CSS
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