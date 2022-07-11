
let groceryList = (function () {

    let textarea = $('#textarea')
    let addButton = $('#button');

    function newItem() {

        let inputValue = $('#input').val();
        list.append(li);
        li.append(inputValue);

        if (inputValue === ' ') {
            alert('you should enter something')
        } else {
            $('#list').append(li);
        }

        function crossOut() {
            li.toggleClass('strike');
        }

        li.on('dblclick', function crossOut() {
            li.toggleClass('strike');
        });


        function deleteListItem() {
            li.addClass('delete');
        }

        li.on('click', function deleteListItem() {
            li.toggleClass('delete');
        });

        let crossOutButton = $('<crossOutButton></crossOutButton>');
        crossOutButton.append(document.createTextNode('X'));
        li.append(crossOutButton);

        crossOutButton.on('click', deleteListItem);
        function deleteListItem() {
            li.addClass('delete')
        }


        $('list').sortable();
    }

    addButton.on('click', e => {
        inputValue.val('');
        inputValue.focus();
    })

    return{
        newItem: newItem
    }
})