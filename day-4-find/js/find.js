window.addEventListener('load', function() {
    const searchBtn = document.querySelector('.search-btn');
    const inputField = document.querySelector('#search-input');

    let isOpen = false;
    let inputValue = '';

    searchBtn.addEventListener('click', function() {
        if (isOpen) {
            close()
            isOpen = false;
        } else {
            open()
            isOpen = true;
        }
    })

    inputField.addEventListener('keypress', function(event) {
        if (event.charCode == 13) {
            window.location='http://www.google.com/search?q='+escape(inputValue);
        }
        inputValue = event.target.value;
    })

    const open = () => {
        inputField.classList.add('go-left')
        searchBtn.classList.add('go-right')
    }

    const close = () => {
        inputField.classList.remove('go-left')
        searchBtn.classList.remove('go-right')
    }
})