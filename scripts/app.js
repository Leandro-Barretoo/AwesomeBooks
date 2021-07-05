let collection = []

function adBook(events) {
    events.preventDefault();
    let book = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value
    }
    collection.push(book);
    document.querySelector('form').reset();
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sub').addEventListener('click', adBook)
})
