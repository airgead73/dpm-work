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

}

const assignButton = ($btn) => {

  const buttonType = $btn.getAttribute('data-button');

  switch(buttonType) {

    case 'remove':
      removeButton($btn);
      break;
    case 'test':
      testButton($btn);
      break;
    default:
      console.log('No button type assigned.');

  }

}

const removeButton = ($btn) => {

  const itemId = $btn.getAttribute('data-remove');

  console.log('item id', itemId);

}

const testButton = ($btn) => {

  console.log('Button type is "test".')

}

export default initButtons;