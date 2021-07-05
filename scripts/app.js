let collection = []

function adBook(events) {
    events.preventDefault();
    let book = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value
    }
    collection.push(book);
    document.querySelector('form').reset();

    let listItem = document.createElement('p');
    let itemInfo = document.createTextNode(book['title'] + "\n" + book['author']);
    listItem.appendChild(itemInfo);
    let container = document.getElementById('list');
    container.appendChild(listItem);
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sub').addEventListener('click', adBook)
})

