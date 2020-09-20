let submit = document.getElementById('submit');
let element = document.getElementsByClassName('theScore');
let clicked = false;

submit.addEventListener('click', addElement);

function addElement() {
  if (!clicked) {
    // make new div
    const newDiv = document.createElement('div');
    // create number
    let text = Math.floor(Math.random() * 100) + 1;
    // create text content
    const newContent = document.createTextNode(text);

    // append it to div
    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById('div1');


    // inserts content of 'newDiv' after 'currentDiv'
    document.body.insertBefore(newDiv, currentDiv);
    clicked = true;
  } else {
    clicked = true;
  }
}
