import { Elastic, gsap, Power3 } from 'gsap';

export default function scrollLine() {
  gsap.from('.scrollLine', {
    duration: 1,
    y: 200,
  });
  gsap.fromTo(
    '.scroll-target .circle',
    {
      duration: 1,
      scale: 0,
      autoAlpha: 0,
    },
    {
      scale: 1,
      autoAlpha: 1,
      ease: Elastic.easeOut.config(1, 0.5),
    },
  );
  gsap.fromTo(
    '.scroll-target .circle',
    {
      duration: 2,
      backgroundColor: 'transparent',
    },
    {
      duration: 2,
      backgroundColor: '#cdca69',
    },
  );
  gsap.fromTo(
    '.scroll-target .pulse',
    {
      duration: 2,
      autoAlpha: 1,
      scale: 3,
    },
    {
      autoAlpha: 0,
      scale: 7,
      ease: Power3.easeOut,
    },
  );
}
