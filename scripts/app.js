let collection = [];

function adBook(events) {
    events.preventDefault();
    let book = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value
    };
    collection.push(book);
    document.querySelector('form').reset();

    let mainList = document.getElementById('main-list');
    let itemContainer = document.createElement('div');
    mainList.appendChild(itemContainer);
    let listItem = document.createElement('p');
    let itemInfo = document.createTextNode('Title: ' + book['title'] + ' | ' + 'Author: ' + book['author']);
    listItem.appendChild(itemInfo);
    itemContainer.appendChild(listItem);
    let listBtn = document.createElement('button');
    listBtn.innerText = 'Remove';
    listBtn.addEventListener('click', function(event){
      let button = event.target;
      button.parentNode.parentNode.removeChild(button.parentNode);
      let itemIndex = collection.indexOf(book);
      collection.splice(itemIndex, 1);
      saveLocal();
    });
    itemContainer.appendChild(listBtn);
    saveLocal();
};
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sub').addEventListener('click', adBook);
});

function saveLocal() {
  let acceptableString = JSON.stringify(collection);
  localStorage.setItem('myBookList', acceptableString);
};
