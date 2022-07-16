import { initMenu, initForms } from './modules/index';

const forms = Array.from(document.querySelectorAll('form'));

initMenu();
if(forms.length) initForms(forms);
