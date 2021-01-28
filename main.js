function toggleClassName(el, className) {
  var oldClassList = el.className;
  var newClassList;

  if (oldClassList.indexOf(className) + 1) {
    newClassList = oldClassList.replace(className, '');
  } else {
    newClassList = oldClassList + ' ' + className;
  }

  el.className = newClassList;
}

function initMenu() {
  var menuItems = document.querySelectorAll('.menu__item[data-has-submenu]');

  var itemCounter = 0;
  var item;

  while (item = menuItems[itemCounter]) {
    item.querySelector('.menu__link').addEventListener('click', function(event) {
      toggleClassName(event.target.parentNode, 'menu__item_opened');
    });

    itemCounter += 1;
  }

  var menuOpener = document.querySelector('[data-menu-opener]');
  var menuOverlay = document.querySelector('[data-menu-overlay]');
  var menu = document.querySelector('[data-menu]');

  menuOpener.addEventListener('click', function() {
    toggleClassName(menu, 'main__menu_opened');
  });

  menuOverlay.addEventListener('click', function() {
    toggleClassName(menu, 'main__menu_opened');
  });
}

document.addEventListener('DOMContentLoaded', function() {
  initMenu();
});
