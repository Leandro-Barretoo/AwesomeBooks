/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */

const collection = JSON.parse(localStorage.getItem('myBookList')) || [];

class SaveLocal {
  static saveList() {
    const acceptableString = JSON.stringify(collection);
    localStorage.setItem('myBookList', acceptableString);
  }
}

class CreateBook {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  listInsert(value) {
    collection.push(value);
  }
}
class RemoveBtn {
  static deleteBtn(listBtn, value) {
    listBtn.addEventListener('click', (ev) => {
      const button = ev.target;
      button.parentNode.parentNode.removeChild(button.parentNode);
      this.outCollection(value);
    });
  }

  static outCollection(value) {
    const itemIndex = collection.indexOf(value);
    collection.splice(itemIndex, 1);
    SaveLocal.saveList();
  }
}
class DisplayList {
  static create(value) {
    const mainList = document.getElementById('main-list');
    const itemContainer = document.createElement('div');
    mainList.appendChild(itemContainer);
    const listItem = document.createElement('p');
    const itemInfo = document.createTextNode(`Title: ${value.title} | Author: ${value.author}`);
    listItem.appendChild(itemInfo);
    itemContainer.appendChild(listItem);
    const listBtn = document.createElement('button');
    listBtn.innerText = 'Remove';
    itemContainer.appendChild(listBtn);
    RemoveBtn.deleteBtn(listBtn, value);
  }
}

function addBook(ev) {
  ev.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const book = new CreateBook(title, author);
  book.listInsert(book);
  DisplayList.create(book);
  document.querySelector('form').reset();
  SaveLocal.saveList();
}

class Preserve {
  static individualElems() {
    for (let i = 0; i < collection.length; i += 1) {
      DisplayList.create(collection[i]);
    }
  }

  static initialBook() {
    document.getElementById('sub').addEventListener('click', addBook);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('sub').addEventListener('click', addBook);
  Preserve.initialBook();
  Preserve.individualElems();
});

/* eslint-enable class-methods-use-this */
/* eslint-enable max-classes-per-file */
