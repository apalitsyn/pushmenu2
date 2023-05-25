(() => {
  const elBody = document.getElementsByTagName('body')[0];
  const toggleButton = document.getElementById('js-toggle-menu');

  const elSubArrow = document.querySelectorAll('.js-sub-arrow');

  let classToggle = (e, c) => {
      e.classList.toggle(c);
  }

  toggleButton.addEventListener('click', () => {classToggle(elBody, 'menu-open')}, false);

  elSubArrow.forEach((e) => {
    e.addEventListener('click', () => {
      classToggle(e, 'pushmenu__link-trigger--open');
      classToggle(e.nextElementSibling, 'pushmenu__sublinks--open');
    });
  });

})();
