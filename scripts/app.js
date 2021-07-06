let collection = JSON.parse(localStorage.getItem('myBookList')) || [];

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
