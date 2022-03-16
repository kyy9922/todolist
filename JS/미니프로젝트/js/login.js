// const loginForm = document.getElementById("login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");
// const memoFormShow = document.querySelector("#memo-form");


$('#login-form').on('submit', function(event){
    event.preventDefault();     
    const username = $('#login-form input').prop('value');    
    $('#greeting').text(`반갑습니다. ${username}님`)

    $('#login-form').addClass('hidden');
    $('#memo-form').removeClass('hidden');

});

