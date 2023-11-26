const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My element');

const text = document.createTextNode('Hello World');
div.appendChild(text);

console.log(div);
function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = document.createElement('button');

  button.className = 'remove-tem btn-link text-red';
  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-xmark';
  button.appendChild(icon);
  li.appendChild(button);

  console.log(li.innerHTML);
}
createNewItem('sumedh ');
