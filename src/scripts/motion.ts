import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion) {
  const lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
    anchors: {
      offset: 0,
      duration: 1.05,
    },
  });

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  gsap
    .timeline({ defaults: { ease: "power3.out" } })
    .from(".hero__eyebrow", { opacity: 0, y: 20, duration: 0.8 })
    .from(".hero__title-line", { opacity: 0, yPercent: 110, duration: 1.05, stagger: 0.12 }, "-=0.4")
    .from(".hero__lead, .hero__link", { opacity: 0, y: 24, duration: 0.8, stagger: 0.12 }, "-=0.55")
    .from(".hero__meta, .hero__scroll", { opacity: 0, duration: 0.7, stagger: 0.1 }, "-=0.4");

  gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: 54,
      duration: 0.95,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 86%",
        once: true,
      },
    });
  });

  gsap.to(".philosophy__word", {
    xPercent: -9,
    ease: "none",
    scrollTrigger: {
      trigger: ".philosophy",
      start: "top bottom",
      end: "bottom top",
      scrub: 1.1,
    },
  });
}
