let collection = JSON.parse(localStorage.getItem('myBookList')) || [];

class saveLocal {
  static saveList() {
    const acceptableString = JSON.stringify(collection);
    localStorage.setItem('myBookList', acceptableString);
  }
}

class createBook {
  constructor(title, author) {
    this.title = title
    this.author = author
  }
  listInsert(value) {
    collection.push(value);
  }
}
class removeBtn {
  static deleteBtn(listBtn, value) {
    listBtn.addEventListener('click', (ev) => {
      const button = ev.target;
      button.parentNode.parentNode.removeChild(button.parentNode);
      this.outCollection(value);
    })
  }
  static outCollection(value) {
    const itemIndex = collection.indexOf(value);
    collection.splice(itemIndex, 1);
    saveLocal.saveList();
  }
}
class displayList {
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
    removeBtn.deleteBtn(listBtn, value);
  }
}

function addBook(ev){
  ev.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const book = new createBook(title, author);
  book.listInsert(book);
  displayList.create(book);
  document.querySelector('form').reset();
  saveLocal.saveList();
};

class preserve {
  static individualElems() {
    for(let i = 0; i < collection.length; i++) {
      displayList.create(collection[i]);
    }
  }
  static initialBook() {
    document.getElementById('sub').addEventListener('click', addBook);
  }
}

const pre = new preserve();
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('sub').addEventListener('click', addBook);
  preserve.initialBook();
  preserve.individualElems();
})
