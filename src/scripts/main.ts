import contextCursor from "../libs/context-cursor/index";

// Only mount the custom cursor for devices with a real pointer —
// on touch screens the bubble just floats uselessly where the last tap was
if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  contextCursor({
    radius: 25, //will change the radius/size of the cursor
  });
}

const initScrollReveal = () => {
  const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!elements.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      visible.forEach((entry, index) => {
        const element = entry.target as HTMLElement;
        // Stagger elements that enter together (hero keeps its own delays)
        if (!element.style.getPropertyValue("--reveal-delay")) {
          element.style.setProperty(
            "--reveal-delay",
            `${Math.min(index, 3) * 90}ms`,
          );
        }
        element.classList.add("is-visible");
        observer.unobserve(element);
      });
    },
    // Reveal as the element visibly enters — far enough up from the bottom
    // edge that the rise is actually seen, never so late content feels missing
    { threshold: 0, rootMargin: "0px 0px -15% 0px" },
  );
  elements.forEach((element) => {
    // Sticky-header elements never move relative to the viewport on desktop,
    // so a scroll-gated reveal would leave them invisible forever — reveal
    // them on load (their inline --reveal-delay still staggers the entrance)
    if (element.closest("header")) {
      element.classList.add("is-visible");
    } else {
      observer.observe(element);
    }
  });
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

const initTypewriter = () => {
  const el = document.querySelector<HTMLElement>(".typewriter-text");
  if (!el) return;
  const fullText = el.textContent ?? "";
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  el.textContent = "";
  let length = 0;
  const type = () => {
    length++;
    el.textContent = fullText.slice(0, length);
    if (length < fullText.length) {
      window.setTimeout(type, 40 + Math.random() * 45);
    }
  };
  window.setTimeout(type, 400);
};

const initOnReady = () => {
  initScrollReveal();
  initScrollHint();
  initScrollSpy();
  initTechFilter();
  initTypewriter();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initOnReady, {
    once: true,
  });
} else {
  initOnReady();
}
