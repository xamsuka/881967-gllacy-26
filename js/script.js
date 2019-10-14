var feedback = document.querySelector('.feedback');
var feedbackButton = document.querySelector('.map-contact-block__button');
var feedbackButtonClose = document.querySelector('.feedback-form__close');
var login = document.querySelector('.button-login__link');
var loginInput = document.querySelector('.login-form__input');
var search = document.querySelector('.button-search__link');
var searchButton = document.querySelector('.search-form__input');

feedbackButton.addEventListener("click", function(evt) {
    evt.preventDefault();

    feedback.classList.add('display-show');
});

feedbackButtonClose.addEventListener("click", function(evt){
    evt.preventDefault();

    feedback.classList.toggle('display-show');
});

login.addEventListener("mouseover", function (){
    loginInput.focus();
});

search.addEventListener("mouseover", function() {
    searchButton.focus();
})