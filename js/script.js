var feedback = document.querySelector('.feedback');
var feedbackForm = feedback.querySelector('.feedback-form');
var feedbackUser = feedbackForm.querySelector('[name=feedback-name]');
var feedbackUserEmail = feedbackForm.querySelector('[name=feedback-email]');
var feedbackButton = document.querySelector('.map-contact-block__button');
var feedbackButtonClose = document.querySelector('.feedback-form__close');
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

feedbackButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    feedbackForm.classList.remove('modal-error');
    feedback.classList.add('display-show');
    
});

feedbackButtonClose.addEventListener('click', function(evt){
    evt.preventDefault();

    feedback.classList.remove('display-show');
});

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

feedbackForm.addEventListener('submit', function(evt) {
    if (!feedbackUser.value || !feedbackUserEmail.value) {
        evt.preventDefault();
        feedbackForm.classList.add('modal-error');
    }
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (feedback.classList.contains('display-show')) {
        feedback.classList.remove('display-show');
      }
    }
});