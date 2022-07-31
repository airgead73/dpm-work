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
    default:
      console.log('No button type assigned.');

  }

};

const handleRemove = async ($btn) => {

  const text = $btn.getAttribute('data-confirm');
  const shouldRemove = confirm(text);

  if(shouldRemove) {
    const data = await removeItem($btn);
    handleResponse(data);
  } else {
    return;
  }

};

const removeItem = async ($btn) => {

  const url = $btn.getAttribute('data-remove');

  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });

  const data = response.json();

  return data;

};

const handleResponse = ($data) => {

  const { success, message } = $data;

  alert(message);
  location.reload();

};

initMenu();
initButtons();

}());
//# sourceMappingURL=bundle.js.map
