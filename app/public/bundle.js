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

const assignButton = async ($btn) => {

  const buttonType = $btn.getAttribute('data-button');

  switch(buttonType) {

    case 'remove':
      handleRemove($btn);
      break;
    case 'test':
      testButton($btn);
      break;
    default:
      console.log('No button type assigned.');

  }

};

const handleRemove = async ($btn) => {

  console.log($btn);

};

const testButton = ($btn) => {

  console.log('Button type is "test".');

};

initMenu();
initButtons();

}());
//# sourceMappingURL=bundle.js.map
