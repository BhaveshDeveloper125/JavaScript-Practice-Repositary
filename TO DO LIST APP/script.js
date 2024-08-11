function AddData(event) {
  event.preventDefault();
  let list = document.querySelector('#inpBar');

  let ulelement = document.querySelector('#todo');
  let newLIelement = document.createElement('li');
  let delbutton = document.createElement('button');
  delbutton.textContent = 'Delete';

  newLIelement.textContent = list.value;

  delbutton.addEventListener('click', () => {
    ulelement.removeChild(newLIelement);
  });

  ulelement.appendChild(newLIelement);
  newLIelement.appendChild(delbutton);
  list.value = '';
}
