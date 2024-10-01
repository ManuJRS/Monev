import LocomotiveScroll from 'locomotive-scroll';

document.addEventListener('DOMContentLoaded', () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smoothMobile: true, // Si quieres soporte para móvil
    inertia: 0.75 // Controla la inercia del scroll
  });
});