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
  const hints = Array.from(
    document.querySelectorAll<HTMLElement>(".scroll-hint"),
  );
  if (!hints.length) return;

  const hide = () => {
    hints.forEach((hint) => {
      hint.classList.add("opacity-0");
      hint.classList.remove("opacity-100");
    });
  };

  if (window.scrollY > 40) {
    hide();
    return;
  }
  window.addEventListener("scroll", hide, { once: true, passive: true });
};

const initScrollSpy = () => {
  const links = Array.from(
    document.querySelectorAll<HTMLAnchorElement>(".nav-link"),
  );
  if (!links.length) return;
  const sections = links
    .map((link) => document.querySelector<HTMLElement>(link.hash))
    .filter((section): section is HTMLElement => section !== null);
  if (!sections.length) return;

  const setActive = (id: string) => {
    links.forEach((link) => {
      link.classList.toggle("is-active", link.hash === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      if (visible.length) setActive(visible[0].target.id);
    },
    { rootMargin: "-20% 0px -70% 0px" },
  );
  sections.forEach((section) => observer.observe(section));
};

const initTechFilter = () => {
  const chips = Array.from(
    document.querySelectorAll<HTMLButtonElement>("[data-tech]"),
  );
  const cards = Array.from(
    document.querySelectorAll<HTMLElement>("[data-card]"),
  );
  if (!chips.length || !cards.length) return;
  let active: string | null = null;

  const apply = () => {
    cards.forEach((card) => {
      const techs = (card.dataset.techs ?? "").split("|");
      const dim = active !== null && !techs.includes(active);
      card.classList.toggle("opacity-30", dim);
    });
    chips.forEach((chip) => {
      chip.setAttribute("aria-pressed", String(chip.dataset.tech === active));
    });
  };

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      active =
        chip.dataset.tech === active ? null : (chip.dataset.tech ?? null);
      apply();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && active !== null) {
      active = null;
      apply();
    }
  });
};

const initOnReady = () => {
  initScrollReveal();
  initScrollHint();
  initScrollSpy();
  initTechFilter();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initOnReady, {
    once: true,
  });
} else {
  initOnReady();
}
