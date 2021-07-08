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
    itemContainer.setAttribute('class', 'book-item');
    mainList.appendChild(itemContainer);
    const listItem = document.createElement('p');
    const itemInfo = document.createTextNode(`Title: ${value.title} by Author: ${value.author}`);
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

function changeToList() {
  document.getElementById('main-list').style.display = 'block';
  document.getElementById('second-title').style.display = 'none';
  document.getElementById('form-field').style.display = 'none';
  document.getElementById('contact-details').style.display = 'none';
}

function changeToCreate() {
  document.getElementById('main-list').style.display = 'none';
  document.getElementById('second-title').style.display = 'block';
  document.getElementById('form-field').style.display = 'inline-block';
  document.getElementById('contact-details').style.display = 'none';
}

function changeToContact() {
  document.getElementById('main-list').style.display = 'none';
  document.getElementById('second-title').style.display = 'none';
  document.getElementById('form-field').style.display = 'none';
  document.getElementById('contact-details').style.display = 'block';
}

function setTimeDate() {
  let DateTime = luxon.DateTime;
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
  document.getElementById('date-string').innerHTML = now;
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeDate();
  Preserve.initialBook();
  Preserve.individualElems();
  document.getElementById('list-btn').addEventListener('click', changeToList);
  document.getElementById('add-new-btn').addEventListener('click', changeToCreate);
  document.getElementById('contact-btn').addEventListener('click', changeToContact);
});

/* eslint-enable class-methods-use-this */
/* eslint-enable max-classes-per-file */
