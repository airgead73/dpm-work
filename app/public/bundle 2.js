(function () {
'use strict';

const menuBtn = document.getElementById('nav__btn');
const navList = document.getElementById('nav__list');

menuBtn.addEventListener('click', function(e) {
  e.preventDefault();
  navList.classList.toggle('hide');
});

}());
//# sourceMappingURL=bundle.js.map
