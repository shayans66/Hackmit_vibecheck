let submit = document.getElementById('submit');
let element = document.getElementsByClassName('theScore');
let clicked = false;

submit.addEventListener('click', addElement);

function addElement() {
  if (!clicked) {
    const newDiv = document.createElement('div');
    let text = Math.floor(Math.random() * 100) + 1;
    const newContent = document.createTextNode(text);

    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById('div1');
    document.body.insertBefore(newDiv, currentDiv);
    clicked = true;
  } else {
    clicked = true;
  }
}
