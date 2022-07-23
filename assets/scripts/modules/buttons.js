const initButtons = () => {

  const buttons = Array.from(document.querySelectorAll('[data-button]'));

  if(buttons.length) {

    buttons.forEach(button => {

      button.addEventListener('click', function(e) {
        e.preventDefault(); 
        assignButton(e.target);
      })

    });

  } else {

    return;

  }

}

const assignButton = ($btn) => {

  console.log('button has been clicked')

}

export default initButtons;