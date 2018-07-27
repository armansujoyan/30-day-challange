document.addEventListener("DOMContentLoaded", function (){
    const input = document.querySelector('#email');
    const submit = document.querySelector("#submit");
    const mailButton = document.querySelector('#mail-btn');
    const container = document.querySelector('.container');
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let answer = Boolean;

    input.addEventListener("input", function(event) {
        answer = regex.test(String(event.target.value).toLowerCase());
        if (event.target.value.length >= 1) {
            mailButton.classList.add('mail-ico-active');
        } else [
            mailButton.classList.remove('mail-ico-active')
        ]
        if (answer) {
            submit.classList.add('mail-ico-active')
        } else {
            submit.classList.remove('mail-ico-active')
        }
    })

    submit.addEventListener("click", function() {
        if (answer) {
            container.classList.add('animate')
            setTimeout(() => {
                container.classList.remove('animate');
            },1000)
        }
    })
})