const spaExperience = () => {
  const navLinks = document.querySelectorAll('.links');
  const HAMBURGER = document.querySelector('.hamburger');
  const MOBILE_MENU = document.querySelector('.mobile-menu');
  // const X_BUTTON = document.querySelector('.close-x');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const dataLink = link.getAttribute('data-page');
      const homeSection = document.querySelector('.home-section');
      const mealsSection = document.querySelector('.meals-section');
      const aboutSection = document.querySelector('.about-section');

      switch (dataLink) {
        case 'home':
          homeSection.setAttribute('data-visible', true);
          mealsSection.setAttribute('data-visible', false);
          aboutSection.setAttribute('data-visible', false);
          MOBILE_MENU.classList.toggle('active');
          HAMBURGER.classList.toggle('disabled');
          break;
        case 'meals':
          mealsSection.setAttribute('data-visible', true);
          homeSection.setAttribute('data-visible', false);
          aboutSection.setAttribute('data-visible', false);
          MOBILE_MENU.classList.toggle('active');
          HAMBURGER.classList.toggle('disabled');
          break;
        case 'about':
          aboutSection.setAttribute('data-visible', true);
          mealsSection.setAttribute('data-visible', false);
          homeSection.setAttribute('data-visible', false);
          MOBILE_MENU.classList.toggle('active');
          HAMBURGER.classList.toggle('disabled');
          break;
        default:
          break;
      }
    });
  });
};

export default spaExperience;
