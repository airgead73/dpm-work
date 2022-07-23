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

}

const handleRemove = async ($btn) => {

  console.log($btn);

}

const removeButton = async ($btn) => {

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

}

const handleResponse = ($data) => {

  console.log($data);

}

const testButton = ($btn) => {

  console.log('Button type is "test".')

}

export default initButtons;