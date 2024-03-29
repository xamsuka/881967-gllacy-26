var loginButtonLink = document.querySelector('.button-login__link');
var loginInput = document.querySelector('[name=modal-login]');
var passwordInput = document.querySelector('[name=modal-password]');
var searchButtonLink = document.querySelector('.button-search__link');
var searchButton = document.querySelector('.search-form__input');
var loginForm = document.querySelector('.login-form');

var isSupportedStorage = true;
var storage = '';

try {
    storage = localStorage.getItem('login');
} catch (err) {
    isSupportedStorage = false;
}

loginButtonLink.addEventListener('mouseover', function() {
    loginForm.classList.remove('modal-error');
    if (!storage) {
        loginInput.focus();
    } else {
        loginInput.value = storage;
        passwordInput.focus();
    }
    
});

searchButtonLink.addEventListener('mouseover', function() {
    searchButton.focus();
});

loginForm.addEventListener('submit', function(evt) {
    if (!loginInput.value || !passwordInput.value) {
        evt.preventDefault();
        loginForm.classList.add('modal-error');
    } else {
        if (isSupportedStorage) {
          localStorage.setItem('login', loginInput.value);
        }
    }
});

