/* eslint-disable indent */

const collection = JSON.parse(localStorage.getItem('myBookList'));

function saveLocal() {
  const acceptableString = JSON.stringify(collection);
  localStorage.setItem('myBookList', acceptableString);
}

function addItem(book) {
  const mainList = document.getElementById('main-list');
  const itemContainer = document.createElement('div');
  mainList.appendChild(itemContainer);
  const listItem = document.createElement('p');
  const itemInfo = document.createTextNode(`Title: ${book.title} | Author: ${book.author}`);
  listItem.appendChild(itemInfo);
  itemContainer.appendChild(listItem);
  const listBtn = document.createElement('button');
  listBtn.innerText = 'Remove';
  listBtn.addEventListener('click', (event) => {
    const button = event.target;
    button.parentNode.parentNode.removeChild(button.parentNode);
    const itemIndex = collection.indexOf(book);
    collection.splice(itemIndex, 1);
    saveLocal();
  });
  itemContainer.appendChild(listBtn);
  saveLocal();
}

function adBook(events) {
    events.preventDefault();
        const book = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
    };
    collection.push(book);
    document.querySelector('form').reset();
    addItem(book);
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('sub').addEventListener('click', adBook);
    collection.forEach(addItem);
});
/* eslint-enable indent */
