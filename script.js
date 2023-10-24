/* Новые элементы должны добавляться в список по нажатию на Enter */
const itemsContainer = document.querySelector('.items');
const addPurchase = document.querySelector('#input');

addPurchase.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const purchase = addPurchase.value;

        const newItem = document.createElement('li');
        newItem.textContent = purchase;

        newItem.addEventListener('click', function() {
            newItem.classList.toggle('done');
        });

        if (purchase != '') {
            itemsContainer.append(newItem);
        }

        addPurchase.value = '';
    }
});





/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */