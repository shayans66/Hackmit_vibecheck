let submit = document.getElementById('submit');
let element = document.getElementsByClassName('theScore');
let clicked = false;

submit.addEventListener('click', addElement);

function addElement() {
  if (!clicked) {
    // make new div
    const newDiv = document.createElement('h1');
    // create number
    let text = Math.floor(Math.random() * 100) + 1;
    // create text content
    let f = "";
    for(let i=0; i<40;i++){
      f += '   \xa0    ';
    }
    const newContent = document.createTextNode(f + '      ' + text);

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
