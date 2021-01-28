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

function initPhotos() {
  var photoOpeners = document.querySelectorAll('[data-photo-opener]');
  
  var openerCounter = 0;
  var opener;
  var photoOverlay;
  
  while (opener = photoOpeners[openerCounter]) {
    photoOverlay = opener.parentNode.querySelector('[data-photo-overlay]');
    
    opener.addEventListener('click', function(event) {
      var photoViewParent = event.target.nodeName === 'IMG'
        ? event.target.parentNode.parentNode
        : event.target.parentNode;

      var photoView = photoViewParent.querySelector('[data-photo-view]')

      toggleClassName(photoView, 'photo-view_opened');
    });

    photoOverlay.addEventListener('click', function(event) {
      var photoView = event.target.parentNode;

      toggleClassName(photoView, 'photo-view_opened');
    });

    openerCounter += 1;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  initMenu();
  initPhotos();
});
