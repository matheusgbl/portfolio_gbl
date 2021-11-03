import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function heroIntro() {
  gsap
    .timeline()
    .from('.hero_container', { duration: 1, opacity: 0 })
    .from('.hero_text', { opacity: 0, scale: 0, ease: 'power2.inOut' })
    .from('.praise_the_sun h3', {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'back',
    })
    .from('.praise_scroll', { y: 100, opacity: 0, duration: 0.8, ease: 'back' });

  gsap.to('.hero', {
    opacity: 0,
    scrollTrigger: {
      trigger: '.praise_the_sun',
      start: 'top center',
      end: 'bottom 150px',
      scrub: true,
      id: 'scroll',
    },
  });
}
