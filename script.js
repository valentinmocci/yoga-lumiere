/* Yoga Lumière — interactions minimales (vanilla JS, sans dépendance) */
(function () {
  "use strict";

  /* 1. Menu burger : toggle .nav.is-open + aria-expanded */
  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".nav");

  function setMenu(open) {
    if (!nav || !burger) return;
    nav.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    document.body.classList.toggle("menu-open", open);
  }

  if (burger && nav) {
    burger.addEventListener("click", function () {
      setMenu(!nav.classList.contains("is-open"));
    });

    /* 2. Fermeture du menu au clic sur un lien */
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });

    /* Fermeture à la touche Échap */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenu(false);
    });
  }

  /* 3. Smooth scroll : géré en CSS via scroll-behavior: smooth; */

  /* 4. Soumission factice du formulaire de contact */
  var form = document.querySelector("[data-demo-form]");
  if (form) {
    var feedback = form.querySelector(".form-feedback");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (feedback) {
        feedback.hidden = false;
        feedback.focus();
        feedback.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      form.reset();
    });
  }
})();
