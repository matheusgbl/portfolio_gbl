import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function projects() {
  gsap.from('.home-projects-text', {
    x: -500,
    duration: 2,
    opacity: 0,
    ease: 'back',
    scrollTrigger: {
      trigger: '.home-projects-text',
      start: 'top center',
      end: 'bottom 200px',
      scrub: 2,
    },
  });

  ScrollTrigger.create({
    trigger: '.card-1',
    start: 'top 100px',
    end: 2925,
    pin: '.card-1',
  });

  ScrollTrigger.create({
    trigger: '.card-2',
    start: 'top 100px',
    end: 'bottom',
    pin: '.card-2',
  });

  ScrollTrigger.create({
    trigger: '.card-3',
    start: 'top 100px',
    end: 'top',
    pin: '.card-3',
  });
}
