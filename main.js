var MENU_ITEM_SELECTOR = '.menu__item[data-has-submenu]';
var MENU_LINK_SELECTOR = '.menu__link';
var MENU_OPENER_SELECTOR = '[data-menu-opener]';
var MENU_OVERLAY_SELECTOR = '[data-menu-overlay]';
var MENU_SELECTOR = '[data-menu]';
var PHOTO_OPENER_SELECTOR = '[data-photo-opener]';
var PHOTO_OVERLAY_SELECTOR = '[data-photo-overlay]';
var PHOTO_CLOSER_SELECTOR = '[data-photo-closer]';
var PHOTO_VIEW_SELECTOR = '[data-photo-view]';

var MENU_ITEM_OPENED_CLASSNAME = 'menu__item_opened';
var MAIN_MENU_OPENED_CLASSNAME = 'main__menu_opened';
var PHOTO_VIEW_OPENED_CLASSNAME = 'photo-view_opened';

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
  var menuItems = document.querySelectorAll(MENU_ITEM_SELECTOR);

  var itemCounter = 0;
  var item;

  while (item = menuItems[itemCounter]) {
    item.querySelector(MENU_LINK_SELECTOR).addEventListener('click', function(event) {
      toggleClassName(event.target.parentNode, MENU_ITEM_OPENED_CLASSNAME);
    });

    itemCounter += 1;
  }

  var menuOpener = document.querySelector(MENU_OPENER_SELECTOR);
  var menuOverlay = document.querySelector(MENU_OVERLAY_SELECTOR);
  var menu = document.querySelector(MENU_SELECTOR);

  menuOpener.addEventListener('click', function() {
    toggleClassName(menu, MAIN_MENU_OPENED_CLASSNAME);
  });

  menuOverlay.addEventListener('click', function() {
    toggleClassName(menu, MAIN_MENU_OPENED_CLASSNAME);
  });
}

function initPhotos() {
  var photoOpeners = document.querySelectorAll(PHOTO_OPENER_SELECTOR);
  
  var openerCounter = 0;
  var opener;
  var photoOverlay;
  
  while (opener = photoOpeners[openerCounter]) {
    photoOverlay = opener.parentNode.querySelector(PHOTO_OVERLAY_SELECTOR);
    photoCloser = photoOverlay.querySelector(PHOTO_CLOSER_SELECTOR);
    
    opener.addEventListener('click', function(event) {
      var photoViewParent = event.target.nodeName === 'IMG'
        ? event.target.parentNode.parentNode
        : event.target.parentNode;

      var photoView = photoViewParent.querySelector(PHOTO_VIEW_SELECTOR)

      toggleClassName(photoView, PHOTO_VIEW_OPENED_CLASSNAME);
    });

    photoOverlay.addEventListener('click', function(event) {
      var photoView = event.target.parentNode;

      toggleClassName(photoView, PHOTO_VIEW_OPENED_CLASSNAME);
    });

    photoCloser.addEventListener('click', function(event) {
      var photoView = event.target.parentNode.parentNode;

      toggleClassName(photoView, PHOTO_VIEW_OPENED_CLASSNAME);
    });

    openerCounter += 1;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  initMenu();
  initPhotos();
});
