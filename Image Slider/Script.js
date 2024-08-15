// import a from akatsuki.jpg

// let newimg = document.createElement('img')
// newimg.src=a

// document.querySelector('.js').appendChild(newimg)

document.querySelector('.rotate').addEventListener('click', () => {
  let container = document.querySelector('#main_container');
  let first_image = container.firstElementChild;
  container.appendChild(first_image);
  const button = document.querySelector('.rotate');
  button.disabled = true;
  setTimeout(() => {
    button.disabled = false;
  }, 1000);
});

document.querySelector('.rotate1').addEventListener('click', () => {
  let container = document.querySelector('#main_container');
  let last_image = container.lastElementChild;
  container.prepend(last_image); // Fix the typo here
  const button = document.querySelector('.rotate1');
  button.disabled = true;
  setTimeout(() => {
    button.disabled = false;
  }, 1000);
});
