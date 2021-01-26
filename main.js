function initMenu() {
  const menuItems = document.querySelectorAll('.menu__item[data-has-submenu]');
  
  menuItems.forEach((menuItem) => {
    menuItem.querySelector('.menu__link').addEventListener('click', function(event) {
      event.target.parentNode.classList.toggle('menu__item_opened');
    });
  });

  const menuOpener = document.querySelector('[data-menu-opener]');
  const menuOverlay = document.querySelector('[data-menu-overlay]');
  const menu = document.querySelector('[data-menu]');

  menuOpener.addEventListener('click', function() {
    menu.classList.toggle('menu_opened');
  });

  menuOverlay.addEventListener('click', function() {
    menu.classList.toggle('menu_opened');
  });
}

document.addEventListener('DOMContentLoaded', function() {
  initMenu();
});
