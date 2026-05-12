type Cleanup = () => void;
type GsapLike = {
  registerPlugin: (...plugins: unknown[]) => void;
  context: (fn: () => void) => { revert: () => void };
  timeline: (...args: unknown[]) => {
    from: (...args: unknown[]) => unknown;
    fromTo: (...args: unknown[]) => unknown;
  };
  from: (...args: unknown[]) => unknown;
  fromTo: (...args: unknown[]) => unknown;
  to: (...args: unknown[]) => unknown;
  utils: {
    toArray: <T = HTMLElement>(selector: string) => T[];
  };
};

type ScrollTriggerLike = unknown;

const ANIMATE_SELECTOR = "[data-animate]";

const setInstantAnimatedState = () => {
  const targets = Array.from(document.querySelectorAll<HTMLElement>(ANIMATE_SELECTOR));
  targets.forEach((target) => {
    target.style.opacity = "1";
    target.style.transform = "none";
    target.style.removeProperty("filter");
  });
};

const getScroller = (): HTMLElement | undefined => {
  if (typeof window === "undefined") return undefined;
  const isDesktopOnePage = window.matchMedia("(min-width: 64rem)").matches;
  const snapContainer = document.querySelector<HTMLElement>(".snap-container");
  if (!isDesktopOnePage || !snapContainer) return undefined;
  return snapContainer;
};

const withOptionalScroller = <T extends Record<string, unknown>>(
  config: T,
  scroller?: HTMLElement,
): T | (T & { scroller: HTMLElement }) => {
  if (!scroller) return config;
  return { ...config, scroller };
};

export const initAnimations = async (): Promise<Cleanup | void> => {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  const animatedNodes = Array.from(document.querySelectorAll<HTMLElement>(ANIMATE_SELECTOR));
  if (!animatedNodes.length) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    setInstantAnimatedState();
    return;
  }

  let gsap: GsapLike;
  let ScrollTrigger: ScrollTriggerLike;

  try {
    const [gsapModule, scrollTriggerModule] = await Promise.all([
      import("https://esm.sh/gsap@3.12.5"),
      import("https://esm.sh/gsap@3.12.5/ScrollTrigger"),
    ]);
    gsap = gsapModule.gsap ?? gsapModule.default;
    ScrollTrigger = scrollTriggerModule.ScrollTrigger;
  } catch {
    setInstantAnimatedState();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  const scroller = getScroller();
  const canUseParallax = window.matchMedia("(pointer: fine)").matches;

  const ctx = gsap.context(() => {
    const heroTitle = document.querySelector<HTMLElement>('[data-animate="hero-title"]');
    const heroSubtitle = document.querySelector<HTMLElement>('[data-animate="hero-subtitle"]');
    const heroCta = document.querySelector<HTMLElement>('[data-animate="hero-cta"]');
    const heroDecor = gsap.utils.toArray<HTMLElement>('[data-animate="hero-decor"]');

    if (heroTitle || heroSubtitle || heroCta || heroDecor.length) {
      const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (heroTitle) {
        heroTimeline.from(heroTitle, {
          opacity: 0,
          y: 38,
          duration: 0.9,
        });
      }

      if (heroSubtitle) {
        heroTimeline.from(
          heroSubtitle,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          "-=0.56",
        );
      }

      if (heroCta) {
        heroTimeline.from(
          heroCta,
          {
            opacity: 0,
            y: 24,
            duration: 0.75,
          },
          "-=0.5",
        );
      }

      if (heroDecor.length) {
        heroTimeline.from(
          heroDecor,
          {
            opacity: 0,
            scale: 0.97,
            duration: 0.8,
            stagger: 0.08,
          },
          0.12,
        );
      }
    }

    const projectCards = gsap.utils.toArray<HTMLElement>('[data-animate="project-card"]');
    if (projectCards.length) {
      gsap.set(projectCards, { opacity: 1, y: 0 });
      const projectTargets = gsap.utils.toArray<HTMLElement>(
        '[data-animate="project-content"], [data-animate="project-image"]',
      );
      if (projectTargets.length) {
        gsap.set(projectTargets, { opacity: 1, y: 0 });
      }
    }

    projectCards.forEach((card) => {
      const projectContent = card.querySelector<HTMLElement>('[data-animate="project-content"]');
      const projectImage = card.querySelector<HTMLElement>('[data-animate="project-image"]');

      const revealTimeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: withOptionalScroller(
          {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          scroller,
        ),
      });

      revealTimeline.fromTo(
        card,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          immediateRender: false,
        },
      );

      if (projectContent) {
        revealTimeline.fromTo(
          projectContent,
          {
            opacity: 0,
            y: 24,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            immediateRender: false,
          },
          0.08,
        );
      }

      if (projectImage) {
        revealTimeline.fromTo(
          projectImage,
          {
            opacity: 0,
            y: 24,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.78,
            immediateRender: false,
          },
          0.14,
        );

        if (canUseParallax) {
          gsap.to(projectImage, {
            yPercent: -5,
            ease: "none",
            scrollTrigger: withOptionalScroller(
              {
                trigger: card,
                start: "top 85%",
                end: "bottom top",
                scrub: 0.65,
              },
              scroller,
            ),
          });
        }
      }
    });

    const projectPreviewImage = document.querySelector<HTMLElement>(
      '#project-preview-image[data-animate="project-image"]',
    );
    const projectsSection = document.getElementById("projects");
    if (projectPreviewImage && projectsSection && canUseParallax) {
      gsap.to(projectPreviewImage, {
        yPercent: -4,
        ease: "none",
        scrollTrigger: withOptionalScroller(
          {
            trigger: projectsSection,
            start: "top 80%",
            end: "bottom top",
            scrub: 0.7,
          },
          scroller,
        ),
      });
    }

    const experienceCards = gsap.utils.toArray<HTMLElement>('[data-animate="experience-card"]');
    if (experienceCards.length) {
      const trigger = experienceCards[0].closest("section") ?? experienceCards[0];
      gsap.from(experienceCards, {
        opacity: 0,
        y: 34,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: withOptionalScroller(
          {
            trigger,
            start: "top 82%",
            toggleActions: "play none none none",
          },
          scroller,
        ),
      });
    }

    const contactTitle = document.querySelector<HTMLElement>('[data-animate="contact-title"]');
    if (contactTitle) {
      gsap.from(contactTitle, {
        opacity: 0,
        y: 32,
        duration: 0.82,
        ease: "power3.out",
        scrollTrigger: withOptionalScroller(
          {
            trigger: contactTitle,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          scroller,
        ),
      });
    }

    const contactLinks = gsap.utils.toArray<HTMLElement>('[data-animate="contact-link"]');
    if (contactLinks.length) {
      gsap.from(contactLinks, {
        opacity: 0,
        y: 22,
        duration: 0.72,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: withOptionalScroller(
          {
            trigger: contactTitle ?? contactLinks[0],
            start: "top 85%",
            toggleActions: "play none none none",
          },
          scroller,
        ),
      });
    }
  });

  return () => {
    ctx.revert();
  };
};
