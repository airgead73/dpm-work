(function () {
'use strict';

const initMenu = () => {
  const menuBtn = document.getElementById('nav__btn');
  const navList = document.getElementById('nav__list');
  
  menuBtn.addEventListener('click', function(e) {
    e.preventDefault();
    navList.classList.toggle('hide');
  });
  
};

const getAttrs = ($target) => {

  const attrs = new Object;

  const attrNames = $target.getAttributeNames();

  attrNames.forEach(name => {    
    attrs[name] = $target.getAttribute(name);    
  });

  console.log(attrs);  

};

const apiFetch = ($target) => {

 getAttrs($target);

};

const initForms = ($formsArr) => {

  $formsArr.forEach($form => {
    $form.addEventListener('submit', function(e) {
      e.preventDefault();
      apiFetch(e.target);
    });
  });
  
};

const forms = Array.from(document.querySelectorAll('form'));

initMenu();
if(forms.length) initForms(forms);

}());
//# sourceMappingURL=bundle.js.map
