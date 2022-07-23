(function () {
'use strict';

const initMenu = () => {
  const menuBtn = document.getElementById('nav__btn');
  const navList = document.getElementById('nav__list');
  
  menuBtn.addEventListener('click', function(e) {
    e.preventDefault();
    navList.classList.toggle('show');
  });
  
};

const initButtons = () => {

  const buttons = Array.from(document.querySelectorAll('[data-button]'));

  if(buttons.length) {

    buttons.forEach(button => {

      button.addEventListener('click', function(e) {
        e.preventDefault(); 
        assignButton(e.target);
      });

    });

  } else {

    return;

  }

};

const assignButton = ($btn) => {

  console.log('button has been clicked');

};

initMenu();
initButtons();

}());
//# sourceMappingURL=bundle.js.map
