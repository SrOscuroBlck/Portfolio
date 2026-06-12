import contextCursor from "../libs/context-cursor/index";

contextCursor({
  radius: 25, //will change the radius/size of the cursor
});

const initScrollReveal = () => {
  const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!elements.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    // Reveal as soon as an element's edge enters the viewport — content must
    // never feel missing to someone who only scrolls a little
    { threshold: 0, rootMargin: "0px 0px -40px 0px" },
  );
  elements.forEach((element) => observer.observe(element));
};

const initScrollHint = () => {
  const hint = document.querySelector<HTMLElement>(".scroll-hint");
  if (!hint) return;

  const hide = () => {
    hint.classList.add("opacity-0");
    hint.classList.remove("opacity-100");
  };

  if (window.scrollY > 40) {
    hide();
    return;
  }
  window.addEventListener("scroll", hide, { once: true, passive: true });
};

const initOnReady = () => {
  initScrollReveal();
  initScrollHint();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initOnReady, {
    once: true,
  });
} else {
  initOnReady();
}
